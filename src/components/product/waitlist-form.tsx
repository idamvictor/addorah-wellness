"use client";

import { useState } from "react";

/**
 * Waitlist sign-up. There is no backend yet, so submitting only shows the
 * confirmation state; wire `onSubmit` to an email provider when one exists.
 */
export function WaitlistForm({ productName, id }: { productName: string; id: string }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p role="status" className="w-full max-w-[450px] rounded-lg bg-mist px-5 py-4 text-center text-base text-ink">
        You&apos;re on the {productName} waitlist. We&apos;ll email you when ordering opens.
      </p>
    );
  }

  return (
    <form
      id={id}
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className="flex w-full max-w-[450px] gap-2.5 scroll-mt-32"
    >
      <label htmlFor={`${id}-email`} className="sr-only">
        Email
      </label>
      <input
        id={`${id}-email`}
        type="email"
        required
        autoComplete="email"
        placeholder="firstname@email.com"
        className="h-[54px] min-w-0 flex-1 rounded-lg border-[0.8px] border-[#949596] bg-white/5 px-4 text-base text-ink outline-none placeholder:text-[#b4b4b4] focus-visible:border-ink"
      />
      <button
        type="submit"
        className="h-[54px] shrink-0 rounded-lg bg-mist px-2.5 text-base leading-4 text-ink transition-colors hover:bg-[#e3eaee]"
      >
        Join the Waitlist
      </button>
    </form>
  );
}
