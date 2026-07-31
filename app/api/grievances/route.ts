const SEED_GRIEVANCES = [
    {
        id: "g-103",
        name: "Roshan",
        email: "ilovejuice131@example.com",
        phone: "9804126359",
        subject: "AC Maintenance (ICT Building)",
        category: "Maintenance",
        message: "The AC in ICT 4th Sem requires maintenance.",
        status: "Resolved",
        createdAt: "2026-02-18T09:00:00.000Z",
        isAnonymous: false,
        response: "Maintenance team replaced the filter unit on Feb 20."
    }
];

let inMemoryGrievances = [...SEED_GRIEVANCES];

async function handleRequest(req: any) {
    const method = req.method || 'GET';

    if (method === 'GET') {
        return new Response(JSON.stringify(inMemoryGrievances), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    if (method === 'POST') {
        try {
            const body = await req.json();
            const { name, email, phone, subject, category, message, isAnonymous } = body || {};

            if (!subject || !message) {
                return new Response(JSON.stringify({ error: 'Subject and message are required.' }), {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' }
                });
            }

            const newGrievance = {
                id: 'g-' + Date.now().toString(),
                name: isAnonymous ? 'Anonymous Student' : (name || 'Anonymous'),
                email: isAnonymous ? null : (email || null),
                phone: isAnonymous ? null : (phone || null),
                subject,
                category: category || 'General',
                message,
                status: 'Pending',
                createdAt: new Date().toISOString(),
                isAnonymous: Boolean(isAnonymous),
                response: null
            };

            inMemoryGrievances.unshift(newGrievance);
            return new Response(JSON.stringify(newGrievance), {
                status: 201,
                headers: { 'Content-Type': 'application/json' }
            });
        } catch (e: any) {
            return new Response(JSON.stringify({ error: 'Failed: ' + e.message }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }
    }

    if (method === 'DELETE') {
        try {
            const url = new URL(req.url);
            const id = url.searchParams.get('id');
            if (!id) {
                return new Response(JSON.stringify({ error: 'ID is required.' }), {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' }
                });
            }

            const index = inMemoryGrievances.findIndex(g => g.id === id);
            if (index !== -1) {
                const deleted = inMemoryGrievances.splice(index, 1);
                return new Response(JSON.stringify({ success: true, deleted: deleted[0] }), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' }
                });
            }
            return new Response(JSON.stringify({ error: 'Grievance not found.' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' }
            });
        } catch (e: any) {
            return new Response(JSON.stringify({ error: 'Failed: ' + e.message }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }
    }

    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
}

export const GET = handleRequest;
export const POST = handleRequest;
export const DELETE = handleRequest;
