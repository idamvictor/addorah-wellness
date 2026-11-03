import type { MetadataRoute } from "next";

/** Installable store app ("Addorah Wellness"). The admin app has its own manifest. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Addorah Wellness",
    short_name: "Addorah",
    description: "Hydrogen water bottles, machines and filtration systems from Addorah Wellness.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#231f20",
    categories: ["shopping", "health"],
    icons: [
      { src: "/app-icons/store-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/app-icons/store-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/app-icons/store-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
