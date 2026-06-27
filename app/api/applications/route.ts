import { isDatabaseUnavailable } from "@/lib/database-errors";
import { prisma } from "@/lib/prisma";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

const fieldLimits = {
  fullName: 120,
  phone: 40,
  whatsapp: 40,
  email: 160,
  city: 120,
  address: 240,
  studyLevel: 120,
  fieldOfStudy: 160,
  objective: 80,
  message: 2200,
} as const;

function getStringField(
  body: Record<string, unknown>,
  key: keyof typeof fieldLimits
) {
  const value = body[key];

  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

function isTooLong(body: Record<string, unknown>) {
  return Object.entries(fieldLimits).some(([key, limit]) => {
    const value = body[key];
    return typeof value === "string" && value.trim().length > limit;
  });
}

export async function POST(req: Request) {
  try {
    const contentLength = Number(req.headers.get("content-length") || 0);

    if (contentLength > 24_000) {
      return Response.json({ errorCode: "payload_too_large" }, { status: 413 });
    }

    const rateLimit = checkRateLimit(`application:${getClientIp(req)}`, {
      max: 8,
      windowMs: 10 * 60 * 1000,
    });

    if (rateLimit.limited) {
      return Response.json(
        { errorCode: "rate_limited" },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateLimit.retryAfterSeconds),
          },
        }
      );
    }

    const parsedBody = await req.json().catch(() => null);
    const body =
      parsedBody && typeof parsedBody === "object" && !Array.isArray(parsedBody)
        ? (parsedBody as Record<string, unknown>)
        : null;

    if (!body) {
      return Response.json({ errorCode: "invalid_request" }, { status: 400 });
    }

    if (body?.website && String(body.website).trim() !== "") {
      return Response.json({ ok: true }, { status: 202 });
    }

    if (isTooLong(body)) {
      return Response.json({ errorCode: "invalid_field" }, { status: 400 });
    }

    const required = ["fullName", "phone", "city", "studyLevel", "objective"];
    for (const key of required) {
      if (!body[key] || String(body[key]).trim() === "") {
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
        fullName: getStringField(body, "fullName"),
        phone: getStringField(body, "phone"),
        whatsapp: getStringField(body, "whatsapp") || null,
        email: getStringField(body, "email") || null,
        city: getStringField(body, "city"),
        address: getStringField(body, "address") || null,
        studyLevel: getStringField(body, "studyLevel"),
        fieldOfStudy: getStringField(body, "fieldOfStudy") || null,
        objective: getStringField(body, "objective"),
        message: getStringField(body, "message") || null,
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
