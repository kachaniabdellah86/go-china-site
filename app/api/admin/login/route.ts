import { cookies } from "next/headers";
import {
  createAdminSessionToken,
  verifyAdminPassword,
} from "@/lib/admin-auth";
import { checkRateLimit, clearRateLimit, getClientIp } from "@/lib/rate-limit";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const password = body?.password;
    const clientKey = `admin-login:${getClientIp(req)}`;
    const rateLimit = checkRateLimit(clientKey, {
      max: 8,
      windowMs: 10 * 60 * 1000,
    });

    if (rateLimit.limited) {
      return Response.json(
        { error: "Trop d'essais. Réessayez dans quelques minutes." },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateLimit.retryAfterSeconds),
          },
        }
      );
    }

    const hasPassword = !!process.env.ADMIN_PASSWORD;
    const hasCookie = !!process.env.ADMIN_COOKIE;

    if (!hasPassword || !hasCookie) {
      return Response.json(
        { error: "Connexion administrateur indisponible." },
        { status: 500 }
      );
    }

    if (typeof password !== "string") {
      return Response.json({ error: "Password missing" }, { status: 400 });
    }

    if (!(await verifyAdminPassword(password))) {
      return Response.json({ error: "Wrong password" }, { status: 401 });
    }

    const cookieStore = await cookies();
    const sessionToken = await createAdminSessionToken();

    if (!sessionToken) {
      return Response.json(
        { error: "Connexion administrateur indisponible." },
        { status: 500 }
      );
    }

    cookieStore.set(process.env.ADMIN_COOKIE!, sessionToken, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      secure: new URL(req.url).protocol === "https:" || process.env.VERCEL === "1",
      maxAge: 60 * 60 * 24 * 7,
    });
    clearRateLimit(clientKey);

    return Response.json({ ok: true });
  } catch (error: unknown) {
    console.error("Admin login failed", error);

    return Response.json(
      { error: "Connexion administrateur indisponible." },
      { status: 500 }
    );
  }
}
