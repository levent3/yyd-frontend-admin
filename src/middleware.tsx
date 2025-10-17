import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token");

  // Login sayfası dışındaki sayfalara token olmadan erişimi engelle
  if (
    path.split("/")[1] !== "authentication" &&
    !token
  ) {
    return NextResponse.redirect(new URL("/authentication/login", request.url));
  }

  // Token varken login sayfasına erişimi engelle, dashboard'a yönlendir
  if (path.split("/")[1] === "authentication" && token) {
    return NextResponse.redirect(new URL(`/dashboard`, request.url));
  }
}

export const config = {
  matcher: [
    "/",
    "/dashboard/:path*",
    "/admin/:path*",
    "/widgets/:path*",
    "/app/:path*",
    "/forms/:path*",
    "/table/:path*",
    "/ui-kits/:path*",
    "/bonus-ui/:path*",
    "/icons/:path*",
    "/buttons/:path*",
    "/charts/:path*",
    "/editor/:path*",
    "/pages/sample-page",
    "/authentication/:path*",
  ],
};
