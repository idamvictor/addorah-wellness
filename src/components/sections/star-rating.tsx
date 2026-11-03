import Image from "next/image";

import { cn } from "@/lib/utils";

export function StarRating({
  count,
  className,
  starClassName,
  label = "5 out of 5 stars",
}: {
  count?: number;
  className?: string;
  starClassName?: string;
  label?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span role="img" aria-label={label} className="flex gap-[3px]">
        {Array.from({ length: 5 }, (_, i) => (
          <Image
            key={i}
            src="/images/home/star.svg"
            alt=""
            width={16.69}
            height={16}
            className={cn("h-4 w-auto", starClassName)}
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
