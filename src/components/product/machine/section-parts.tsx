import { cn } from "@/lib/utils";

/** Small uppercase label above section headings. */
export function Kicker({
  children,
  tone = "line",
  className,
}: {
  children: React.ReactNode;
  tone?: "line" | "teal" | "mist";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-heading text-sm leading-[21px] tracking-[1.96px] uppercase",
        tone === "line" && "text-stone",
        tone === "teal" && "text-teal",
        tone === "mist" && "text-[#7fa0ac]",
        className,
      )}
    >
      {tone === "line" && <span aria-hidden className="h-px w-8 bg-stone" />}
      {children}
    </p>
  );
}

export const sectionHeading =
  "font-heading font-medium tracking-[-0.02em] text-balance";
