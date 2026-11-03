import type { AccessoryBlock } from "@/data/product-pages/accessory";
import { cn } from "@/lib/utils";

/** Renders the simple rich-text blocks used on accessory pages. */
export function AccessoryBlocks({ blocks, bold = false, className }: { blocks: AccessoryBlock[]; bold?: boolean; className?: string }) {
  return (
    <div className={cn("flex flex-col gap-5 text-base leading-6 text-ink", bold && "font-bold", className)}>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <p key={i} className="font-bold">
                {block.text}
              </p>
            );
          case "lead":
            return (
              <p key={i}>
                <strong className="font-bold">{block.label}</strong> <span className="font-normal">{block.text}</span>
              </p>
            );
          case "list":
            return block.style === "plain" ? (
              <ul key={i} className="flex flex-col gap-2.5">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <ul key={i} className="flex list-disc flex-col gap-2.5 pl-5">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          default:
            return (
              <p
                key={i}
                className={cn(block.tone === "bold" && "font-bold", block.tone === "alert" && "text-[#d62200]")}
              >
                {block.text}
              </p>
            );
        }
      })}
    </div>
  );
}
