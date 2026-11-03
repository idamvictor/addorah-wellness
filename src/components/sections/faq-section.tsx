"use client";

import Image from "next/image";
import { Fragment, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InertLink } from "@/components/ui/inert-link";
import type { Faq, FaqGroup } from "@/data/faqs";
import { cn } from "@/lib/utils";

/** Renders `**bold**` runs and blank-line paragraphs from plain-string answers. */
function Answer({ answer }: { answer: Faq["answer"] }) {
  if (typeof answer !== "string") return <>{answer}</>;
  return (
    <>
      {answer.split("\n\n").map((paragraph) => (
        <p key={paragraph}>
          {paragraph.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
            part.startsWith("**") ? (
              <strong key={i}>{part.slice(2, -2)}</strong>
            ) : (
              <Fragment key={i}>{part}</Fragment>
            ),
          )}
        </p>
      ))}
    </>
  );
}

export function FaqList({
  items,
  variant = "lined",
}: {
  items: Faq[];
  /** "lined" is the home page list, "cards" the bordered product page style. */
  variant?: "lined" | "cards";
}) {
  if (variant === "cards") {
    return (
      <Accordion className="gap-4">
        {items.map((faq) => (
          <AccordionItem
            key={faq.question}
            value={faq.question}
            className="rounded-lg border-[0.8px] border-[#e5e5e5] not-last:border-b-[0.8px]"
          >
            <AccordionTrigger className="items-center gap-6 rounded-lg px-6 py-[22px] text-base leading-6 font-medium text-ink hover:no-underline [&>[data-slot=accordion-trigger-icon]]:hidden">
              {faq.question}
              <span aria-hidden className="relative size-[22px] shrink-0">
                <span className="absolute top-2.5 left-px h-0.5 w-5 rounded-[2px] bg-ink" />
                <span className="absolute top-px left-2.5 h-5 w-0.5 rounded-[2px] bg-ink transition-transform duration-200 group-aria-expanded/accordion-trigger:scale-y-0" />
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 text-[15px] leading-6 text-stone [&_p:not(:last-child)]:mb-0">
              <Answer answer={faq.answer} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }

  return (
    <Accordion className="border-t-[0.8px] border-[#deddde]">
      {items.map((faq) => (
        <AccordionItem
          key={faq.question}
          value={faq.question}
          className="border-b-[0.8px] border-[#deddde] not-last:border-b-[0.8px]"
        >
          <AccordionTrigger className="items-center gap-6 rounded-none py-5 text-base leading-[20.8px] font-medium text-ink hover:no-underline [&>[data-slot=accordion-trigger-icon]]:hidden">
            {faq.question}
            <Image
              src="/images/home/icon-plus.svg"
              alt=""
              width={20}
              height={12}
              className="shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45"
            />
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-base leading-6 text-ink">
            <Answer answer={faq.answer} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function FaqSection({
  groups,
  showMoreLink = false,
  className,
}: {
  groups: FaqGroup[];
  showMoreLink?: boolean;
  className?: string;
}) {
  const [active, setActive] = useState(0);
  const current = groups[active];

  return (
    <section className={cn("px-5 pt-3.5 pb-16", className)}>
      <div className="mx-auto max-w-[660px]">
        <h2 className="font-heading text-[40px] leading-none font-normal text-ink sm:text-[45px]">FAQs</h2>

        {groups.length > 1 && (
          <div role="tablist" aria-label="FAQ topics" className="flex flex-wrap gap-2 pt-10">
            {groups.map((group, i) => (
              <button
                key={group.label}
                type="button"
                role="tab"
                aria-selected={i === active}
                disabled={group.items.length === 0}
                onClick={() => setActive(i)}
                className="rounded-lg border-[0.8px] border-ink p-3 text-sm leading-[14px] font-medium text-ink transition-colors aria-selected:bg-ink aria-selected:text-white disabled:cursor-default"
              >
                {group.label}
              </button>
            ))}
          </div>
        )}

        <div role={groups.length > 1 ? "tabpanel" : undefined} className="pt-12">
          <FaqList items={current.items} />
        </div>

        {showMoreLink && (
          <div className="pt-12">
            <InertLink className="inline-flex h-[51px] items-center rounded-lg border-[1.6px] border-ink bg-white px-6 text-base leading-4 font-medium tracking-[0.32px] text-ink">
              See More FAQs
            </InertLink>
          </div>
        )}
      </div>
    </section>
  );
}
