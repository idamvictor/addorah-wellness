import { type NextRequest, NextResponse } from "next/server";

/**
 * Optimistic check only: bounce visitors without a session cookie away from /admin.
 * The signature is verified by `requireAdmin()` in every admin page and action.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // Login page and the admin app icon (iOS fetches it before sign-in) are public.
  if (pathname === "/admin/login" || pathname.startsWith("/admin/apple-icon")) return NextResponse.next();
  if (!request.cookies.has("admin_session")) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
