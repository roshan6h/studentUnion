import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK lazily to prevent server crashes if the API key is not yet set.
let aiInstance: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
    if (!aiInstance) {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim() === "") {
            throw new Error("GEMINI_API_KEY environment variable is required and must be configured in AI Studio secrets.");
        }
        aiInstance = new GoogleGenAI({
            apiKey: apiKey,
            httpOptions: {
                headers: {
                    'User-Agent': 'aistudio-build',
                }
            }
        });
    }
    return aiInstance;
}

const GRIEVANCES_FILE = path.join(process.cwd(), 'grievances.json');

// Ensure grievances file exists
if (!fs.existsSync(GRIEVANCES_FILE)) {
    fs.writeFileSync(GRIEVANCES_FILE, JSON.stringify([], null, 2));
}

// Read grievances
function getGrievances() {
    try {
        const data = fs.readFileSync(GRIEVANCES_FILE, 'utf8');
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
}

// Save grievances
function saveGrievances(data: any) {
    try {
        fs.writeFileSync(GRIEVANCES_FILE, JSON.stringify(data, null, 2));
    } catch (e) {
        console.error("Error saving grievances:", e);
    }
}

// API Routes
app.get("/api/health", (req: Request, res: Response) => {
    res.json({ status: "ok" });
});

// Submit a grievance
app.post("/api/grievances", (req: Request, res: Response) => {
    const { name, email, phone, subject, category, message, isAnonymous } = req.body;
    if (!subject || !message) {
        return res.status(400).json({ error: "Subject and message are required." });
    }

    const grievances = getGrievances();
    const newGrievance = {
        id: Date.now().toString(),
        name: isAnonymous ? "Anonymous Student" : (name || "Anonymous"),
        email: isAnonymous ? null : (email || null),
        phone: isAnonymous ? null : (phone || null),
        subject,
        category: category || "General",
        message,
        status: "Pending",
        createdAt: new Date().toISOString(),
        response: null
    };

    grievances.push(newGrievance);
    saveGrievances(grievances);

    res.status(201).json(newGrievance);
});

// Get all grievances
app.get("/api/grievances", (req: Request, res: Response) => {
    res.json(getGrievances());
});

// Chatbot endpoint
app.post("/api/chat", async (req: Request, res: Response) => {
    const { message, history } = req.body;
    if (!message) {
        return res.status(400).json({ error: "Message is required." });
    }

    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === "MY_GEMINI_API_KEY" || process.env.GEMINI_API_KEY.trim() === "") {
        return res.status(500).json({
            error: "GEMINI_API_KEY is missing from your local environment. To run the chatbot locally: 1. Create a '.env' file in the root directory. 2. Add: GEMINI_API_KEY=your_actual_gemini_api_key (you can get a free key from Google AI Studio)."
        });
    }

    try {
        const systemInstruction = `
You are the official AI Assistant of the Free Students' Union (FSU) of Aadikavi Bhanubhakta Campus, Tanahun, Nepal.
Your goal is to assist students with their questions about FSU activities, committee members, student rights, academic schedules, events, and college announcements.

Here is the essential information about FSU Aadikavi Bhanubhakta Campus:
- **Location**: Vyas-1, Vigyanchaur, Tanahun, Nepal (व्याास-१, विज्ञानचौर, तनहुँ, नेपाल).
- **Established**: Campus founded in 1987 AD (2044 BS). The FSU committee is very active on campus.
- **FSU Committee Members**:
  * **President (अध्यक्ष)**: Anup Ale Magar (अनुप आले मगर) - Phone: 9804141256 (९८०४१४१२५६)
  * **Vice President (उपाध्यक्ष)**: Suman Khadka (सुमन खड्का) - Phone: 9826101579 (९८२६१०१५७९)
  * **Secretary (सचिव)**: Sagar Pandey (सागर पाण्डे) - Phone: 9804153425 (९८०४१५३४२५)
  * **Joint Secretary (सह-सचिव)**: Ankit Tiwari (अंकित तिवारी) - Phone: 9827133759 (९८२७१३३७५९)
  * **Treasurer (कोषाध्यक्ष)**: Roshan Ojha (रोशन ओझा) - Phone: 9806722586 (९८०६७२२५८६)
  * **Members (सदस्यहरु)**:
    - Asim Bhandari (असीम भण्डारी) - 9766602575
    - Shishir Sunar (शिशिर सुनार) - 9824112635
    - Iman Malla Thakuri (इमान मल्ल ठकुरी) - 9806559252
    - Roshni Kunwar (रोशनी कुँवर) - 9828185669
    - Pramish Neupane (प्रमिश न्यौपाने) - 9767279339
    - Anisha Pariyar (अनिशा परियार) - 9817140789
    - Sadiksha Adhikari (सदिक्षा अधिकारी) - 9815105797
    - Pramila Shrestha (प्रमिला श्रेष्ठ) - 9825496647
    - Amrut Baniya (अमृत बानिया) - 9745456596
    - Krishna Rana (कृष्ण राना) - 9707528635
    - Sarita Sarki (सरिता सार्की) - 9826651749
    - Sugam Shrestha (सुगम श्रेष्ठ) - 9826164208
    - Edina Ruchal (एडिना रुचाल) - 9804192736
    - Omkala Shrestha (ओमकला श्रेष्ठ) - 9815182475
    - Bibash Ranabhat (विवश रानाभाट) - 9821517591
    - Bishna Ale (विष्णा आले) - 9828367332
    - Bipin Adhikari (विपिन अधिकारी) - 9762861361

- **Core Issues / Manifestos (चुनावी मुद्दा)**:
  1. Quality Education (गुणस्तरीय शिक्षा र व्यावहारिक नीति)
  2. Tech & Innovation (सूचना र प्रविधिको विकास)
  3. Startup Culture & Innovation (स्टार्टअप र उद्यमशीलता)
  4. Career Counseling & Opportunities (करियर र रोजगारीका अवसर)
  5. Student Unity, Rights & Advocacy (विद्यार्थी एकता र अधिकारको रक्षा)

- **Recent Important Events & Campaigns**:
  1. **Solidarity with INISHA BK**: A powerful movement seeking justice for student Inisha BK ("JUSTICE DELAYED, JUSTICE DENIED"), organized by FSU, holding solidarity vigils and peaceful rallies at Aadikavi Bhanubhakta Campus.
  2. **Sports & Infrastructure**: FSU organized sports activities such as a soccer tournament with FSU soccer team in red uniforms ("Aadikavi Vyas-1, Tanahun"), jerseys and kit distributions.
  3. **Classroom and Academic Dialogues**: FSU members regularly visit classrooms, conducting surveys, student interactions, and presenting issues directly to the campus administration.
  4. **Document Submissions**: Direct lobbying and official letters submitted to local government and college administrators regarding educational reforms, startup culture support, and campus development.

- **Tone & Style**:
  * You should be friendly, supportive, and highly institutional. You can answer in English, Nepali, or a mix of both (Romanized Nepali or Devnagari) as preferred by the student.
  * Never invent non-existent phone numbers, but represent the exact numbers listed in the committee above.
  * Maintain academic integrity, and support the progressive student union voice (ANNFSU/FSU).
  * Keep answers clear, professional, and empathetic to student needs. Respond concisely and guide students on how they can submit grievances or get in touch with FSU members.
`;

        let contents: any[] = [];
        if (history && Array.isArray(history)) {
            contents = history.map((h: any) => ({
                role: h.role === "user" ? "user" : "model",
                parts: [{ text: h.text }]
            }));
        }
        contents.push({ role: "user", parts: [{ text: message }] });

        const client = getGeminiClient();
        const response = await client.models.generateContent({
            model: "gemini-3.5-flash",
            contents: contents,
            config: {
                systemInstruction,
                temperature: 0.7,
            }
        });

        res.json({ text: response.text });
    } catch (error: any) {
        console.error("Gemini API Error:", error);
        res.status(500).json({ error: "Failed to communicate with Gemini AI: " + error.message });
    }
});

// Serve frontend assets
async function start() {
    if (process.env.NODE_ENV !== "production") {
        const vite = await createViteServer({
            server: { middlewareMode: true },
            appType: "spa",
        });
        app.use(vite.middlewares);
    } else {
        const distPath = path.join(process.cwd(), 'dist');
        app.use(express.static(distPath));
        app.get('*', (req: Request, res: Response) => {
            res.sendFile(path.join(distPath, 'index.html'));
        });
    }

    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Server running on port ${PORT}`);
    });
}

start();
