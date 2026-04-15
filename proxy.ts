import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function getLocale(pathname: string) {
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return "en";
  }

  if (pathname === "/ar" || pathname.startsWith("/ar/")) {
    return "ar";
  }

  return "fr";
}

export function proxy(req: NextRequest) {
  const adminCookie = process.env.ADMIN_COOKIE || "gochina_admin";
  const isLoggedIn = req.cookies.get(adminCookie)?.value === "1";
  const pathname = req.nextUrl.pathname;
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-yalla-locale", getLocale(pathname));

  if (pathname === "/admin/login" || pathname.startsWith("/api/admin/login")) {
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  if (pathname.startsWith("/admin") && !isLoggedIn) {
    const url = req.nextUrl.clone();
    url.pathname = "/admin/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest).*)",
    "/api/admin/:path*",
  ],
};
