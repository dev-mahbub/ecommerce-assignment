// middleware.ts (root)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // read cookie (middleware has req.cookies)
  const authCookie = req.cookies.get("auth")?.value;
  const pathname = req.nextUrl.pathname;

  // Protect /dashboard and anything under it
  if (!authCookie && pathname.startsWith("/dashboard")) {
    // adjust to your actual signin path:
    const loginUrl = new URL("/auth/signin-basic", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // If logged in, prevent visiting signin page again
  if (authCookie && (pathname.startsWith("/auth/signin") || pathname.startsWith("/auth/signin-basic") || pathname.startsWith("/auth/signup-basic"))) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",  // protect dashboard and subroutes
    "/auth/:path*",       // handle auth page redirection when already logged in
  ],
};
