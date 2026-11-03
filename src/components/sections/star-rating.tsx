import Image from "next/image";

import { cn } from "@/lib/utils";

export function StarRating({
  count,
  rating = 5,
  className,
  starClassName,
  label,
}: {
  count?: number;
  /** Whole stars filled; the rest render faded. */
  rating?: number;
  className?: string;
  starClassName?: string;
  label?: string;
}) {
  const filled = Math.round(rating);

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span role="img" aria-label={label ?? `${rating} out of 5 stars`} className="flex gap-[3px]">
        {Array.from({ length: 5 }, (_, i) => (
          <Image
            key={i}
            src="/images/home/star.svg"
            alt=""
            width={16.69}
            height={16}
            className={cn("h-4 w-auto", i >= filled && "opacity-20", starClassName)}
          />
        ))}
      </span>
      {count !== undefined && (
        <span className="text-xs leading-[19.2px] text-ink">
          {count} {count === 1 ? "Review" : "Reviews"}
        </span>
      )}
    </div>
  );
}
