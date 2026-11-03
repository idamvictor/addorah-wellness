import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: { default: "Admin", template: "%s | Admin · Addorah Wellness" },
  robots: { index: false, follow: false },
  // Installing from an admin page installs "Addorah Admin" (start /admin) instead of the store app.
  manifest: "/admin-manifest.webmanifest",
  appleWebApp: { capable: true, title: "Addorah Admin", statusBarStyle: "default" },
};

/** Admin pages read the session cookie, so they render at request time behind this boundary. */
export default function AdminLayout({ children }: LayoutProps<"/admin">) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-[#f6f6f7]">
      <Suspense fallback={<p className="p-10 text-sm text-stone">Loading…</p>}>{children}</Suspense>
    </div>
  );
}
