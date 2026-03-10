import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const password = body?.password;

    const hasPassword = !!process.env.ADMIN_PASSWORD;
    const hasCookie = !!process.env.ADMIN_COOKIE;

    if (!hasPassword || !hasCookie) {
      return Response.json(
        {
          error: "Missing ADMIN env vars",
          debug: { hasPassword, hasCookie },
        },
        { status: 500 }
      );
    }

    if (typeof password !== "string") {
      return Response.json({ error: "Password missing" }, { status: 400 });
    }

    if (password !== process.env.ADMIN_PASSWORD) {
      return Response.json({ error: "Wrong password" }, { status: 401 });
    }

    // ✅ FIX for Next 16
    const cookieStore = await cookies();
    cookieStore.set(process.env.ADMIN_COOKIE!, "1", {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
    });

    return Response.json({ ok: true });
  } catch (e: any) {
    return Response.json(
      { error: "Login API crashed", details: e?.message ?? String(e) },
      { status: 500 }
    );
  }
}