"use client";

import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { StarRating } from "@/components/sections/star-rating";
import { InertLink } from "@/components/ui/inert-link";

const distribution = [
  { stars: 5, count: 414 },
  { stars: 4, count: 92 },
  { stars: 3, count: 14 },
  { stars: 2, count: 8 },
  { stars: 1, count: 15 },
];
const total = distribution.reduce((sum, row) => sum + row.count, 0);

const reviews = [
  { name: "Isabel", when: "3 days ago", verified: false, title: "5 Stars", body: "love love my hydra flask!", helpful: 0 },
  { name: "Jerome", when: "2 weeks ago", verified: true, title: "Excellent", body: "awesome device, I love it!", helpful: 0 },
  {
    name: "Kimberly",
    when: "2 weeks ago",
    verified: true,
    title: "Amazing! So much more energy!",
    body: "I have been suffering from low energy and brain fog. I noticed that I’m sharper mentally. Can absorb more information without fatigue and the need for an afternoon nap. I’m delighted at the changes. I think that I’m sleeping better at night as well.",
    helpful: 1,
  },
  {
    name: "Stephen",
    when: "2 weeks ago",
    verified: true,
    title: "Flask",
    body: "By far, the best hydrogen water bottle of its size of any I have used.",
    helpful: 0,
  },
  { name: "Nuno", when: "2 weeks ago", verified: true, title: "5 stars", body: "5 stars", helpful: 0 },
];

const INITIAL = 3;

function Helpful({ name, initial }: { name: string; initial: number }) {
  const [vote, setVote] = useState<"yes" | "no" | null>(null);
  const yes = initial + (vote === "yes" ? 1 : 0);
  const no = vote === "no" ? 1 : 0;

  return (
    <div className="flex items-center gap-3 text-xs leading-3 text-stone">
      Was this helpful?
      <button
        type="button"
        aria-pressed={vote === "yes"}
        aria-label={`Yes, this review from ${name} was helpful`}
        onClick={() => setVote(vote === "yes" ? null : "yes")}
        className="flex items-center gap-1 rounded px-1 py-1.5 aria-pressed:text-ink"
      >
        <ThumbsUpIcon aria-hidden className="size-3 opacity-50" /> {yes}
      </button>
      <button
        type="button"
        aria-pressed={vote === "no"}
        aria-label={`No, this review from ${name} was not helpful`}
        onClick={() => setVote(vote === "no" ? null : "no")}
        className="flex items-center gap-1 rounded px-1 py-1.5 aria-pressed:text-ink"
      >
        <ThumbsDownIcon aria-hidden className="size-3 opacity-50" /> {no}
      </button>
    </div>
  );
}

export function FlaskReviews() {
  const [shown, setShown] = useState(INITIAL);

  return (
    <section aria-labelledby="reviews-heading" className="px-5 py-[88px]">
      <div className="mx-auto max-w-[1200px]">
        <h2 id="reviews-heading" className="sr-only">
          Customer reviews
        </h2>
        <div className="grid gap-8 pb-6 md:grid-cols-2">
          <div>
            <div className="flex flex-wrap items-center gap-4 pb-6">
              <span className="flex items-center gap-2 text-xl leading-8 font-semibold text-ink">
                4.6
                <StarRating starClassName="h-[18px]" label="4.6 out of 5 stars" />
              </span>
              <span className="text-xs leading-[19.2px] text-stone">Based on {total} reviews</span>
            </div>
            <ul className="flex max-w-[350px] flex-col gap-2">
              {distribution.map((row) => (
                <li key={row.stars} className="flex items-center gap-3 text-xs leading-3">
                  <span className="flex w-6 items-center gap-0.5 text-ink">
                    {row.stars}
                    <Image src="/images/home/star.svg" alt="" width={12} height={12} className="size-3" />
                  </span>
                  <span className="h-1.5 flex-1 rounded-[3px] bg-[#f5f5f5]">
                    <span
                      className="block h-full min-w-1.5 rounded-[3px] bg-[#b0b0b0]"
                      style={{ width: `${(row.count / total) * 100}%` }}
                    />
                  </span>
                  <span className="w-8 text-right text-stone">{row.count}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm leading-[22.4px] text-stone">
              <span className="pr-2 text-xl leading-8 font-bold text-ink">93%</span>
              would recommend this product
            </p>
            <p className="pt-2 text-xs leading-5 text-stone">Reviews collected by ECHO Water from ECHO Flask customers.</p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 px-0 sm:px-4">
          <InertLink className="flex h-10 items-center rounded-lg bg-ink px-6 text-sm leading-[14px] font-bold text-white">
            Filters
          </InertLink>
          <InertLink className="flex h-[38px] items-center rounded-lg bg-ink px-6 text-sm leading-[14px] font-bold text-white">
            Write a Review
          </InertLink>
        </div>

        <div className="flex items-end justify-between px-0 pt-10 pb-2 text-sm leading-[22.4px] sm:px-4">
          <span className="text-stone">{total} reviews</span>
          <span>
            <span className="font-semibold text-ink">Sort</span>
            <span className="pl-3 text-ink">Most Recent</span>
          </span>
        </div>

        <ul className="border-t-[0.8px] border-[#b3b3b3] sm:mx-4">
          {reviews.slice(0, shown).map((review) => (
            <li key={review.name} className="border-b-[0.8px] border-[#b3b3b3] py-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="flex size-12 items-center justify-center rounded-full bg-[#e5e5eb] text-xs font-bold text-ink">
                    {review.name[0]}
                  </span>
                  <div className="text-xs leading-[19.2px]">
                    <p className="font-bold text-ink">{review.name}</p>
                    {review.verified && <p className="font-semibold text-[#596f77]">Verified Buyer</p>}
                  </div>
                </div>
                <span className="pt-1 text-xs leading-[19.2px] text-stone">{review.when}</span>
              </div>
              <div className="pt-6">
                <StarRating starClassName="h-[18px]" />
                <p className="pt-2 text-sm leading-[22.4px] font-semibold text-ink">{review.title}</p>
                <p className="pt-2 text-sm leading-[25.2px] text-ink">{review.body}</p>
              </div>
              <div className="flex justify-end pt-4">
                <Helpful name={review.name} initial={review.helpful} />
              </div>
            </li>
          ))}
        </ul>

        {shown < reviews.length && (
          <div className="flex justify-center pt-4">
            <button
              type="button"
              onClick={() => setShown(reviews.length)}
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
