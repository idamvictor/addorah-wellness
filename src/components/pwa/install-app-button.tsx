"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type InstallPromptEvent = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: "accepted" | "dismissed" }> };

type Mode = "hidden" | "prompt" | "ios";

/**
 * "Install app" for the PWA. Chrome/Edge/Android get the browser's install prompt;
 * iPhone/iPad Safari (no prompt API) get Add to Home Screen instructions.
 * Hidden when already installed or when the browser can't install.
 */
export function InstallAppButton({ label = "Install app", className }: { label?: string; className?: string }) {
  const [mode, setMode] = useState<Mode>("hidden");
  const [showHint, setShowHint] = useState(false);
  const deferred = useRef<InstallPromptEvent | null>(null);

  useEffect(() => {
    const installed =
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as Navigator & { standalone?: boolean }).standalone === true;
    if (installed) return;

    const ua = navigator.userAgent;
    const ios = /iPad|iPhone|iPod/.test(ua) || (ua.includes("Macintosh") && navigator.maxTouchPoints > 1);
    const timer = ios ? window.setTimeout(() => setMode("ios"), 0) : undefined;

    const onPrompt = (event: Event) => {
      event.preventDefault();
      deferred.current = event as InstallPromptEvent;
      setMode("prompt");
    };
    const onInstalled = () => {
      deferred.current = null;
      setMode("hidden");
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  if (mode === "hidden") return null;

  const onClick = async () => {
    if (mode === "ios") {
      setShowHint((open) => !open);
      return;
    }
    const event = deferred.current;
    if (!event) return;
    await event.prompt();
    const { outcome } = await event.userChoice;
    deferred.current = null;
    if (outcome === "accepted") setMode("hidden");
  };

  return (
    <div className="relative inline-flex flex-col items-start">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={mode === "ios" ? showHint : undefined}
        className={cn("inline-flex items-center gap-2", className)}
      >
        <svg aria-hidden viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
        </svg>
        {label}
      </button>
      {mode === "ios" && showHint && (
        <p role="status" className="mt-2 max-w-64 rounded-lg bg-ink px-3 py-2 text-xs leading-5 text-white">
          Tap the Share button <span aria-hidden>(□↑)</span> in Safari, then choose <strong>Add to Home Screen</strong>.
        </p>
      )}
    </div>
  );
}
