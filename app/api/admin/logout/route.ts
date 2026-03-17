import { cookies } from "next/headers";

export async function POST(req: Request) {
  const cookieName = process.env.ADMIN_COOKIE || "gochina_admin";
  const cookieStore = await cookies();

  cookieStore.set(cookieName, "", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
  });

  return Response.redirect(new URL("/admin/login", req.url), 303);
}
