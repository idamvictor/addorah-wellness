import Image from "next/image";
import Link from "next/link";

import { SimpleBuyButton } from "@/components/product/simple-buy-button";
import { StarRating } from "@/components/sections/star-rating";
import type { Product } from "@/data/products";
import { formatNGN } from "@/lib/format";

/** Generic detail page for products added from /admin (no designed page). */
export function SimplePdp({ product }: { product: Product }) {
  const paragraphs = (product.description ?? "").split(/\n\s*\n/).filter((text) => text.trim());

  return (
    <>
      <nav aria-label="Breadcrumb" className="px-5 pt-[26px] text-xs leading-3 font-medium tracking-[0.025em] text-stone">
        <ol className="flex flex-wrap gap-1">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/shop" className="hover:underline">
              Shop All Products
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li aria-current="page" className="text-ink">
            {product.name}
          </li>
        </ol>
      </nav>

      <section className="grid gap-10 px-5 pt-6 pb-20 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-haze">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-4">
          {!!product.reviewCount && (
            <p className="flex items-center gap-2">
              <StarRating rating={5} starClassName="h-[18px]" />
              <span className="text-sm leading-[22.4px] text-ink">
                {product.reviewCount} {product.reviewCount === 1 ? "Review" : "Reviews"}
              </span>
            </p>
          )}
          <h1 className="font-heading text-[30px] leading-none text-ink sm:text-[36px]">{product.name}</h1>
          {product.tagline && <p className="text-lg leading-[27px] text-pretty text-ink">{product.tagline}</p>}

          {product.price !== undefined && (
            <p className="flex flex-wrap items-baseline gap-x-3 pt-2">
              <span className="text-[28px] leading-[42px] font-semibold text-ink">{formatNGN(product.price)}</span>
              {product.compareAtPrice ? (
                <span className="text-lg text-[#807c85] line-through">{formatNGN(product.compareAtPrice)}</span>
              ) : null}
            </p>
          )}

          <SimpleBuyButton product={product} />

          {paragraphs.length > 0 && (
            <div className="flex flex-col gap-3 pt-4 text-base leading-[25.6px] text-pretty text-ink">
              {paragraphs.map((text, i) => (
                <p key={i} className="whitespace-pre-line">
                  {text}
                </p>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
