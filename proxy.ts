import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_TOKEN_KEY, getToken } from "./lib/auth";

// Define protected and public routes
const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/login", "/verify-otp"];

export function proxy(request: NextRequest) {
  const { nextUrl } = request;
  const token = request.cookies.get(AUTH_TOKEN_KEY)?.value;
  const isAuthenticated = token != null;

  const isProtectedRoute = protectedRoutes.some((route) =>
    nextUrl.pathname.startsWith(route),
  );
  const isPublicRoute = publicRoutes.some((route) =>
    nextUrl.pathname.startsWith(route),
  );

  // 1. Redirect to login if accessing a protected route without a token
  if (isProtectedRoute && !isAuthenticated) {
    const loginUrl = new URL("/login", request.url);
    // Optional: store the original URL to redirect back after login
    // loginUrl.searchParams.set("from", nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  // 2. Redirect to dashboard if accessing login/public routes while authenticated
  if (isPublicRoute && isAuthenticated) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
