import { type NextRequest, NextResponse } from "next/server";

/**
 * Optimistic check only: bounce visitors without a session cookie away from /admin.
 * The signature is verified by `requireAdmin()` in every admin page and action.
 */
export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/admin/login") return NextResponse.next();
  if (!request.cookies.has("admin_session")) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
