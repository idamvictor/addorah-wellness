"use client";

import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { StarRating } from "@/components/sections/star-rating";
import { InertLink } from "@/components/ui/inert-link";
import type { Review, ReviewSummary } from "@/data/reviews";

const INITIAL = 3;

function Helpful({ review }: { review: Review }) {
  const [vote, setVote] = useState<"yes" | "no" | null>(null);
  const yes = review.helpfulYes + (vote === "yes" ? 1 : 0);
  const no = (review.helpfulNo ?? 0) + (vote === "no" ? 1 : 0);

  return (
    <div className="flex items-center gap-3 text-xs leading-3 text-stone">
      Was this helpful?
      <button
        type="button"
        aria-pressed={vote === "yes"}
        aria-label={`Yes, this review from ${review.name} was helpful`}
        onClick={() => setVote(vote === "yes" ? null : "yes")}
        className="flex items-center gap-1 rounded px-1 py-1.5 aria-pressed:text-ink"
      >
        <ThumbsUpIcon aria-hidden className="size-3 opacity-50" /> {yes}
      </button>
      <button
        type="button"
        aria-pressed={vote === "no"}
        aria-label={`No, this review from ${review.name} was not helpful`}
        onClick={() => setVote(vote === "no" ? null : "no")}
        className="flex items-center gap-1 rounded px-1 py-1.5 aria-pressed:text-ink"
      >
        <ThumbsDownIcon aria-hidden className="size-3 opacity-50" /> {no}
      </button>
    </div>
  );
}

/**
 * Review summary and list. Reviews come from the manufacturer's store, so the
 * summary carries an attribution line.
 */
export function ProductReviews({
  data,
  productName,
  heading,
  className,
}: {
  data: ReviewSummary;
  productName: string;
  /** Optional kicker + title shown above the widget (machine pages). */
  heading?: { kicker: string; title: string };
  className?: string;
}) {
  const [shown, setShown] = useState(INITIAL);
  const total = data.distribution.reduce((sum, count) => sum + count, 0);

  return (
    <section aria-labelledby="reviews-heading" className={className ?? "px-5 py-[88px]"}>
      {heading ? (
        <div className="pb-9">
          <p className="flex items-center gap-3 font-heading text-sm leading-[21px] tracking-[1.96px] text-stone uppercase">
            <span aria-hidden className="h-px w-8 bg-stone" />
            {heading.kicker}
          </p>
          <h2 id="reviews-heading" className="pt-[18px] font-heading text-[40px] leading-none font-medium tracking-[-0.02em] text-ink sm:text-[52px]">
            {heading.title}
          </h2>
        </div>
      ) : (
        <h2 id="reviews-heading" className="sr-only">
          Customer reviews
        </h2>
      )}
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-8 pb-6 md:grid-cols-2">
          <div>
            <div className="flex flex-wrap items-center gap-4 pb-6">
              <span className="flex items-center gap-2 text-xl leading-8 font-semibold text-ink">
                {data.rating}
                <StarRating rating={data.rating} starClassName="h-[18px]" label={`${data.rating} out of 5 stars`} />
              </span>
              <span className="text-xs leading-[19.2px] text-stone">Based on {total} reviews</span>
            </div>
            <ul className="flex max-w-[350px] flex-col gap-2">
              {data.distribution.map((count, i) => (
                <li key={i} className="flex items-center gap-3 text-xs leading-3">
                  <span className="flex w-6 items-center gap-0.5 text-ink">
                    {5 - i}
                    <Image src="/images/home/star.svg" alt="" width={12} height={12} className="size-3" />
                  </span>
                  <span className="h-1.5 flex-1 rounded-[3px] bg-[#f5f5f5]">
                    {count > 0 && (
                      <span
                        className="block h-full min-w-1.5 rounded-[3px] bg-[#b0b0b0]"
                        style={{ width: `${(count / total) * 100}%` }}
                      />
                    )}
                  </span>
                  <span className="w-8 text-right text-stone">{count}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm leading-[22.4px] text-stone">
              <span className="pr-2 text-xl leading-8 font-bold text-ink">{data.recommendPct}%</span>
              would recommend this product
            </p>
            <p className="pt-2 text-xs leading-5 text-stone">
              Reviews collected by ECHO Water from {productName} customers.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 sm:px-4">
          <InertLink className="flex h-10 items-center rounded-lg bg-ink px-6 text-sm leading-[14px] font-bold text-white">
            Filters
          </InertLink>
          <InertLink className="flex h-[38px] items-center rounded-lg bg-ink px-6 text-sm leading-[14px] font-bold text-white">
            Write a Review
          </InertLink>
        </div>

        <div className="flex items-end justify-between pt-10 pb-2 text-sm leading-[22.4px] sm:px-4">
          <span className="text-stone">{total} reviews</span>
          <span>
            <span className="font-semibold text-ink">Sort</span>
            <span className="pl-3 text-ink">Most Recent</span>
          </span>
        </div>

        <ul className="border-t-[0.8px] border-[#b3b3b3] sm:mx-4">
          {data.reviews.slice(0, shown).map((review) => (
            <li key={`${review.name}-${review.when}`} className="border-b-[0.8px] border-[#b3b3b3] py-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="flex size-12 items-center justify-center rounded-full bg-[#e5e5eb] text-xs font-bold text-ink">
                    {review.initials ?? review.name[0]}
                  </span>
                  <div className="text-xs leading-[19.2px]">
                    <p className="font-bold text-ink">{review.name}</p>
                    {review.verified && <p className="font-semibold text-[#596f77]">Verified Buyer</p>}
                  </div>
                </div>
                <span className="pt-1 text-xs leading-[19.2px] text-stone">{review.when}</span>
              </div>
              <div className="pt-6">
                <StarRating rating={review.rating} starClassName="h-[18px]" />
                <p className="pt-2 text-sm leading-[22.4px] font-semibold text-ink">{review.title}</p>
                <p className="pt-2 text-sm leading-[25.2px] text-ink">{review.body}</p>
              </div>
              <div className="flex justify-end pt-4">
                <Helpful review={review} />
              </div>
            </li>
          ))}
        </ul>

        {shown < data.reviews.length && (
          <div className="flex justify-center pt-4">
            <button
              type="button"
              onClick={() => setShown(data.reviews.length)}
              className="h-[38px] rounded-lg bg-ink px-6 text-sm leading-[14px] font-bold text-white"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
