import { isDatabaseUnavailable } from "@/lib/database-errors";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (body?.website && String(body.website).trim() !== "") {
      return Response.json({ ok: true }, { status: 202 });
    }

    const required = ["fullName", "phone", "city", "studyLevel", "objective"];
    for (const key of required) {
      if (!body?.[key] || String(body[key]).trim() === "") {
        return Response.json(
          { errorCode: "missing_field", field: key },
          { status: 400 }
        );
      }
    }

    if (body?.consent !== "accepted") {
      return Response.json(
        { errorCode: "missing_field", field: "consent" },
        { status: 400 }
      );
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
  } catch (error) {
    if (isDatabaseUnavailable(error)) {
      return Response.json({ errorCode: "db_unavailable" }, { status: 503 });
    }

    return Response.json({ errorCode: "unknown_error" }, { status: 500 });
  }
}
