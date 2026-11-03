import { cn } from "@/lib/utils";

/** Text wordmark until an Addorah Wellness logo file is supplied. */
export function BrandWordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline gap-2 font-sans text-lg leading-none font-medium tracking-[0.45em] uppercase",
        className,
      )}
    >
      Addorah
      <span className="text-[0.6em] font-normal tracking-[0.3em] opacity-70">
        Wellness
      </span>
    </span>
  );
}
