import { cookies } from "next/headers";

export async function POST(req: Request) {
  const cookieName = process.env.ADMIN_COOKIE || "gochina_admin";
  const cookieStore = await cookies();

  cookieStore.set(cookieName, "", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: new URL(req.url).protocol === "https:" || process.env.VERCEL === "1",
    maxAge: 0,
  });

  return Response.redirect(new URL("/admin/login", req.url), 303);
}
