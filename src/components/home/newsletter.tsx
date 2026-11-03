"use client";

import Image from "next/image";
import { useState } from "react";

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="px-5">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <div className="flex flex-col justify-center gap-5 rounded-[20px] bg-night p-8 sm:p-16 md:col-span-2">
          <p className="max-w-[460px] font-heading text-[22px] leading-[33px] text-white">
            Quench Your Inbox
          </p>
          <h2 className="max-w-[460px] font-heading text-[40px] leading-none font-normal text-white sm:text-[54px]">
            Become Hydroelite
          </h2>
          <p className="max-w-[460px] text-lg leading-[27px] text-white">
            Subscribe to our newsletter to get exclusive access to bundle deals, upcoming events,
            and more.
          </p>
          {submitted ? (
            <p role="status" className="max-w-[460px] rounded-[20px] bg-white/10 p-5 text-base text-white">
              Thanks for subscribing — you&apos;re on the list.
            </p>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
              className="flex w-full max-w-[460px] items-center gap-2 rounded-[20px] bg-white p-2.5"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="E-mail"
                autoComplete="email"
                className="h-[52px] min-w-0 flex-1 rounded-[10px] border-[0.8px] border-[#e5e7eb] px-4 text-base text-ink outline-none placeholder:text-[#9ca3af] focus-visible:border-ink"
              />
              <button
                type="submit"
                className="h-[52px] shrink-0 rounded-lg border-[1.6px] border-ink bg-ink px-6 text-base leading-4 font-medium tracking-[0.32px] text-white transition-opacity hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
        <div className="relative hidden aspect-[349/618] overflow-hidden rounded-[20px] md:block">
          <Image
            src="/images/home/newsletter-waves.png"
            alt=""
            fill
            sizes="(min-width: 1280px) 349px, 50vw"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[349/618] overflow-hidden rounded-[20px] bg-[#f5f5f5]">
          <Image
            src="/images/home/certifications.png"
            alt="Certifications: BPA free, ISO 14001, ISO 9001, GMP, hydrogen certified to IHSA standards, FDA approved plastics"
            fill
            sizes="(min-width: 1280px) 349px, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
