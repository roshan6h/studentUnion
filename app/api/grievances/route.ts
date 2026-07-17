import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const GRIEVANCES_FILE = path.join(process.cwd(), "grievances.json");

// Helper to get grievances safely
function getGrievances() {
    try {
        if (!fs.existsSync(GRIEVANCES_FILE)) {
            fs.writeFileSync(GRIEVANCES_FILE, JSON.stringify([], null, 2));
        }
        const data = fs.readFileSync(GRIEVANCES_FILE, "utf-8");
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
}

// Helper to save grievances safely
function saveGrievances(data: any) {
    try {
        fs.writeFileSync(GRIEVANCES_FILE, JSON.stringify(data, null, 2));
    } catch (e) {
        console.error("Error saving grievances:", e);
    }
}

export async function GET() {
    const grievances = getGrievances();
    return NextResponse.json(grievances);
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, subject, category, message, isAnonymous } = body;

        if (!subject || !message) {
            return NextResponse.json(
                { error: "Subject and message are required." },
                { status: 400 }
            );
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

        return NextResponse.json(newGrievance, { status: 201 });
    } catch (error: any) {
        return NextResponse.json(
            { error: "Failed to process grievance request: " + error.message },
            { status: 500 }
        );
    }
}
