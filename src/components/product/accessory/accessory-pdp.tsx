import Image from "next/image";
import Link from "next/link";

import { AccessoryBlocks } from "@/components/product/accessory/accessory-blocks";
import { AccessoryBuyBox } from "@/components/product/accessory/accessory-buy-box";
import { FlaskGallery } from "@/components/product/flask-gallery";
import { ProductCard } from "@/components/sections/product-card";
import { StarRating } from "@/components/sections/star-rating";
import type { AccessoryPageContent } from "@/data/product-pages/accessory";
import { getProduct, type Product } from "@/data/products";

/** Simple product page used for filters, faucets and other accessories. */
export function AccessoryPdp({ product, content }: { product: Product; content: AccessoryPageContent }) {
  const related = content.related.map((slug) => getProduct(slug)).filter((item): item is Product => Boolean(item));

  return (
    <>
      <nav aria-label="Breadcrumb" className="px-5 pt-[26px] text-xs leading-3 font-medium tracking-[0.025em] text-stone">
        <ol className="flex flex-wrap gap-1">
          <li>
            <Link href="/shop" className="hover:underline">
              Shop all
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/shop" className="hover:underline">
              Shop All Echo Products
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li aria-current="page" className="text-ink">
            {product.name}
          </li>
        </ol>
      </nav>

      <section className="grid gap-10 px-5 pt-6 lg:grid-cols-2">
        <div className="lg:sticky lg:top-28 lg:self-start">
          {content.gallery.length > 1 ? (
            <FlaskGallery images={content.gallery} />
          ) : (
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-haze">
              <Image
                src={content.gallery[0].src}
                alt={content.gallery[0].alt}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          )}
        </div>
        <AccessoryBuyBox product={product} content={content} />
      </section>

      {content.imageBand && (
        <section className="grid items-center gap-10 px-5 pt-[100px] lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-[20px] bg-haze">
            <Image
              src={content.imageBand.image.src}
              alt={content.imageBand.image.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-5 text-base leading-[19.2px] text-ink">
            {content.imageBand.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </section>
      )}

      {content.textBand && <p className="px-5 pt-[120px] text-base leading-[19.2px] text-ink">{content.textBand}</p>}

      {content.longForm && (
        <section className="px-5 pt-[100px]">
          <AccessoryBlocks blocks={content.longForm} className="gap-5 leading-[19.2px]" />
        </section>
      )}

      {content.reviews && content.reviews.length > 0 && (
        <section id="accessory-reviews" className="mx-auto w-full max-w-[1200px] scroll-mt-28 px-5 pt-12">
          <ul className="flex snap-x gap-4 overflow-x-auto pb-2">
            {content.reviews.map((review) => (
              <li
                key={review.name}
                className="flex w-[300px] shrink-0 snap-start flex-col border-[0.8px] border-[#e5e5eb] p-4 sm:w-[352px]"
              >
                <div className="flex items-center justify-between">
                  <StarRating rating={review.rating} starClassName="h-4" />
                  <span className="text-xs leading-[19.2px] text-[#676986]">{review.when}</span>
                </div>
                <h3 className="pt-2 text-sm leading-[22.4px] font-semibold text-[#2c3e50]">{review.title}</h3>
                <p className="flex-1 pt-2 text-sm leading-[25.2px] whitespace-pre-line text-[#2c3e50]">{review.body}</p>
                <div className="mt-4 flex items-center gap-4 border-t-[0.8px] border-[#e5e5eb] pt-4">
                  <span className="flex size-12 items-center justify-center rounded-full bg-[#e5e5eb] text-xs font-bold text-[#2c3e50]">
                    {review.initials ?? review.name[0]}
                  </span>
                  <span className="text-xs leading-[19.2px]">
                    <span className="block font-bold text-[#2c3e50]">{review.name}</span>
                    {review.verified && <span className="block font-semibold text-[#0e7a82]">Verified Buyer</span>}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <p className="pt-3 text-xs text-stone">Reviews collected by ECHO Water from {product.shortName} customers.</p>
        </section>
      )}

      {related.length > 0 && (
        <section className="px-5 pt-16 pb-24">
          <h2 className="text-center font-heading text-[30px] leading-[45px] text-ink">You May Also Like</h2>
          <ul className="grid gap-6 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <li key={item.slug}>
                <ProductCard product={item} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
