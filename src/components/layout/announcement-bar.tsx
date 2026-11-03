"use client";

import { useEffect, useState } from "react";

import { announcements } from "@/data/site";

const ROTATE_MS = 4000;

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setIndex((current) => (current + 1) % announcements.length),
      ROTATE_MS,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative h-[38px] overflow-hidden bg-ink text-white">
      {announcements.map((message, i) => (
        <p
          key={message}
          aria-hidden={i !== index}
          className="absolute inset-0 flex items-center justify-center px-2 text-center text-sm leading-[14px] transition-all duration-500 ease-out data-[state=after]:translate-y-full data-[state=after]:opacity-0 data-[state=before]:-translate-y-full data-[state=before]:opacity-0"
          data-state={i === index ? "current" : i < index ? "before" : "after"}
        >
          {message}
        </p>
      ))}
    </div>
  );
}
