import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const required = ["fullName", "phone", "city", "studyLevel", "objective"];
    for (const k of required) {
      if (!body?.[k] || String(body[k]).trim() === "") {
        return Response.json({ error: `Missing field: ${k}` }, { status: 400 });
      }
    }

    const created = await prisma.application.create({
      data: {
        fullName: body.fullName.trim(),
        phone: body.phone.trim(),
        whatsapp: body.whatsapp?.trim() || null,
        email: body.email?.trim() || null,
        city: body.city.trim(),
        address: body.address?.trim() || null,
        studyLevel: body.studyLevel.trim(),
        fieldOfStudy: body.fieldOfStudy?.trim() || null,
        objective: body.objective.trim(),
        message: body.message?.trim() || null,
      },
    });

    return Response.json({ ok: true, id: created.id }, { status: 201 });
  } catch (e) {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}