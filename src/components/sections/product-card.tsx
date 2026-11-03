import Image from "next/image";

import { InertLink } from "@/components/ui/inert-link";
import { type Product, type ProductBadge, productHref } from "@/data/products";
import { formatNGN } from "@/lib/format";
import { cn } from "@/lib/utils";

const badgeLabel: Record<ProductBadge, string> = {
  "best-seller": "Best Seller",
  "fsa-hsa": "FSA/HSA Eligible",
  "join-waitlist": "Join waitlist",
  waitlist: "Waitlist",
  "sold-out": "Sold out",
};

/**
 * Badge colours follow the design: white chips on the best seller card,
 * ink for status chips and deep teal for the rest.
 */
function badgeClass(badge: ProductBadge, product: Product) {
  if (product.badges.includes("best-seller")) return "bg-white text-teal-deep";
  if (badge === "join-waitlist" || badge === "sold-out") return "bg-ink text-white";
  return "bg-teal-deep text-white";
}

export function ProductPrice({ product, className }: { product: Product; className?: string }) {
  if (product.status === "waitlist" || product.price === undefined) {
    return <p className={cn("text-base leading-[20.8px] tracking-[0.48px] text-stone", className)}>Join waitlist</p>;
  }

  return (
    <p className={cn("text-base leading-[20.8px] tracking-[0.48px] text-stone", className)}>
      {product.priceFrom && "From "}
      {product.compareAtPrice && (
        <>
          <span className="line-through">{formatNGN(product.compareAtPrice)}</span>{" "}
        </>
      )}
      <span>{formatNGN(product.price)}</span>
    </p>
  );
}

export function ProductCard({
  product,
  size = "lg",
  sizes = "(min-width: 1280px) 453px, (min-width: 640px) 50vw, 100vw",
}: {
  product: Product;
  size?: "lg" | "sm";
  sizes?: string;
}) {
  const href = productHref(product);

  return (
    <InertLink
      href={href}
      className={cn("group relative flex flex-col", href && "cursor-pointer")}
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-haze">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes={sizes}
          className={cn(
            "object-cover transition-transform duration-500 ease-out",
            href && "group-hover:scale-[1.03]",
          )}
        />
        {product.badges.length > 0 && (
          <div
            className={cn(
              "absolute flex flex-wrap gap-2",
              size === "lg" ? "top-4 left-4 sm:top-7 sm:left-7" : "top-3 left-3",
            )}
          >
            {product.badges.map((badge) => (
              <span
                key={badge}
                className={cn(
                  "flex h-7 items-center rounded-[4px] p-2 text-xs leading-3 font-semibold tracking-[0.6px] uppercase",
                  size === "sm" && "h-6 px-1.5 text-[10px]",
                  badgeClass(badge, product),
                )}
              >
                {badgeLabel[badge]}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className={cn("flex flex-col", size === "lg" ? "pt-6 sm:pt-8" : "pt-4")}>
        <h3
          className={cn(
            "font-heading font-bold text-ink",
            size === "lg"
              ? "text-[22px] leading-[1.1] tracking-[-0.02em] sm:text-[28px] sm:leading-[27.44px]"
              : "text-lg leading-tight tracking-[-0.01em]",
          )}
        >
          {product.name}
        </h3>
        <ProductPrice product={product} className="pt-2" />
      </div>
    </InertLink>
  );
}
