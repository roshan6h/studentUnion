import { GoogleGenAI } from '@google/genai';

async function handleChat(req: any) {
    try {
        let message = '';
        let history: any[] = [];

        if (typeof req.json === 'function') {
            const body = await req.json();
            message = body.message;
            history = body.history;
        } else if (req.body) {
            message = req.body.message;
            history = req.body.history;
        }

        if (!message) {
            return new Response(JSON.stringify({ error: 'Message is required.' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey || apiKey === 'MY_GEMINI_API_KEY' || apiKey.trim() === '') {
            return new Response(
                JSON.stringify({
                    error:
                        'GEMINI_API_KEY is missing. Please add GEMINI_API_KEY in your Vercel Project Settings > Environment Variables.'
                }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const ai = new GoogleGenAI({
            apiKey: apiKey,
            httpOptions: {
                headers: {
                    'User-Agent': 'aistudio-build'
                }
            }
        });

        const systemInstruction = `
You are the official AI Assistant of the Free Students' Union (FSU) of Aadikavi Bhanubhakta Campus, Tanahun, Nepal.
Your goal is to assist students with their questions about FSU activities, committee members, student rights, academic schedules, events, and college announcements.

Here is the essential information about FSU Aadikavi Bhanubhakta Campus:
- **Location**: Vyas-1, Vigyanchaur, Tanahun, Nepal.
- **Established**: Campus founded in 1987 AD (2044 BS).
- **FSU Committee Members**:
  * President: Anup Ale Magar - Phone: 9804141256
  * Vice President: Suman Khadka - Phone: 9826101579
  * Secretary: Sagar Pandey - Phone: 9804153425
  * Joint Secretary: Ankit Tiwari - Phone: 9827133759
  * Treasurer: Roshan Ojha - Phone: 9806722586

- **Tone & Style**: Friendly, supportive, institutional. Respond in English, Nepali, or Romanized Nepali as requested.
`;

        let contents: any[] = [];
        if (history && Array.isArray(history)) {
            contents = history.map((h: any) => ({
                role: h.role === 'user' ? 'user' : 'model',
                parts: [{ text: h.text }]
            }));
        }
        contents.push({ role: 'user', parts: [{ text: message }] });

        const response = await ai.models.generateContent({
            model: 'gemini-3.5-flash',
            contents: contents,
            config: {
                systemInstruction,
                temperature: 0.7
            }
        });

        return new Response(JSON.stringify({ text: response.text }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error: any) {
        console.error('Gemini API Error:', error);
        return new Response(
            JSON.stringify({ error: 'Failed to communicate with Gemini AI: ' + error.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}

export const POST = handleChat;
