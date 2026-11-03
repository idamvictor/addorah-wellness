import type { MetadataRoute } from "next";

/** Installable admin app ("Addorah Admin"), linked from the /admin layout. */
const manifest: MetadataRoute.Manifest = {
  id: "/admin",
  name: "Addorah Admin",
  short_name: "Admin",
  description: "Manage Addorah Wellness products.",
  start_url: "/admin",
  scope: "/admin",
  display: "standalone",
  background_color: "#f6f6f7",
  theme_color: "#231f20",
  icons: [
    { src: "/app-icons/admin-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
    { src: "/app-icons/admin-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    { src: "/app-icons/admin-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
  ],
};

export function GET() {
  return Response.json(manifest, { headers: { "Content-Type": "application/manifest+json" } });
}
