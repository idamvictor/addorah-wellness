import type { Metadata } from "next";

import { BrandWordmark } from "@/components/layout/brand-wordmark";
import { RetryButton } from "@/components/pwa/retry-button";

export const metadata: Metadata = { title: "Offline", robots: { index: false } };

/** Shown by the service worker when a page isn't cached and there's no connection. */
export default function OfflinePage() {
  return (
    <main className="flex min-h-svh flex-1 flex-col items-center justify-center gap-6 bg-night px-6 text-center text-white">
      <BrandWordmark className="text-base text-white" />
      <h1 className="max-w-md font-heading text-4xl leading-tight text-balance sm:text-5xl">You’re offline.</h1>
      <p className="max-w-sm text-base leading-7 text-pretty text-white/70">
        Check your connection and try again. Pages you’ve already opened still work while you’re offline.
      </p>
      <RetryButton />
    </main>
  );
}
