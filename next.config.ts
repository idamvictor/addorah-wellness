import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    // Admin image uploads (max 5 MB) go through a server action.
    serverActions: { bodySizeLimit: "6mb" },
  },
  async rewrites() {
    // Older browsers still ask for /favicon.ico; the real favicon is app/icon.svg.
    return [{ source: "/favicon.ico", destination: "/app-icons/store-192.png" }];
  },
  async headers() {
    return [
      {
        // Service worker: always revalidated so updates reach installed apps quickly.
        source: "/sw.js",
        headers: [
          { key: "Content-Type", value: "application/javascript; charset=utf-8" },
          { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
          { key: "Content-Security-Policy", value: "default-src 'self'; script-src 'self'" },
        ],
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
