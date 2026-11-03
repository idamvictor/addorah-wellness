"use client";

import { useState } from "react";

const field =
  "h-12 w-full rounded-lg border-[0.8px] border-white/20 bg-white/5 px-4 text-base text-white outline-none placeholder:text-white/40 focus-visible:border-white";

/**
 * "Email a specialist" button that opens a short enquiry form. No backend yet:
 * submitting shows the thank-you state only. Connect `onSubmit` to email/CRM when available.
 */
export function SpecialistForm() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p role="status" className="mt-[34px] max-w-[520px] rounded-lg bg-white/10 p-6 text-base leading-6">
        Thanks — a specialist will be in touch shortly.
      </p>
    );
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-[34px] rounded-lg bg-white px-[34px] py-[17px] text-base leading-6 font-semibold text-ink transition-opacity hover:opacity-90"
      >
        Email a specialist
      </button>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
      className="mt-[34px] grid max-w-[520px] gap-3 sm:grid-cols-2"
    >
      <label className="sr-only" htmlFor="specialist-name">
        Name
      </label>
      <input id="specialist-name" required autoComplete="name" placeholder="Name" className={field} />
      <label className="sr-only" htmlFor="specialist-email">
        Email
      </label>
      <input id="specialist-email" type="email" required autoComplete="email" placeholder="Email" className={field} />
      <label className="sr-only" htmlFor="specialist-message">
        Message
      </label>
      <textarea
        id="specialist-message"
        rows={4}
        required
        placeholder="How can we help?"
        className={`${field} h-auto py-3 sm:col-span-2`}
      />
      <button
        type="submit"
        className="h-12 rounded-lg bg-white text-base font-semibold text-ink transition-opacity hover:opacity-90 sm:col-span-2"
      >
        Send
      </button>
    </form>
  );
}
