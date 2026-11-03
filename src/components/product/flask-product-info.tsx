import Image from "next/image";
import { Fragment } from "react";

import { FlaskBuyBox } from "@/components/product/flask-buy-box";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  flaskDetailsCopy,
  flaskHighlights,
  flaskLabResults,
  flaskShippingCopy,
  flaskSpecGroups,
  flaskWarrantyCopy,
} from "@/data/product-pages/echo-flask";
import type { Product } from "@/data/products";
import { formatNGN } from "@/lib/format";

function RichParagraph({ text }: { text: string }) {
  return (
    <p>
      {text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
        part.startsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : <Fragment key={i}>{part}</Fragment>,
      )}
    </p>
  );
}

const sections = [
  {
    title: "Features & Specs",
    body: (
      <div className="flex flex-col gap-4">
        {flaskSpecGroups.map((group) => (
          <div key={group.heading}>
            <p>{group.heading}</p>
            <ul className="list-disc pt-1 pl-5">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Product Details",
    body: (
      <div className="flex flex-col gap-6">
        {flaskDetailsCopy.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    ),
  },
  {
    title: "Lab Results",
    body: (
      <div className="flex flex-col gap-1.5">
        {flaskLabResults.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    ),
  },
  {
    title: "Shipping & Returns",
    body: (
      <div className="flex flex-col gap-1.5">
        {flaskShippingCopy.map((text) => (
          <RichParagraph key={text} text={text} />
        ))}
      </div>
    ),
  },
  {
    title: "5-Year Warranty",
    body: (
      <div className="flex flex-col gap-1.5">
        {flaskWarrantyCopy.map((text) => (
          <RichParagraph key={text} text={text} />
        ))}
      </div>
    ),
  },
];

export function FlaskProductInfo({ product }: { product: Product }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 pb-2">
        <Image
          src="/images/products/echo-flask/review-stars.png"
          alt="Rated 4.6 out of 5 stars"
          width={106}
          height={18}
        />
        <span className="text-xs leading-3 text-ink/70">{product.reviewCount} Reviews</span>
      </div>

      <h1 className="pb-4 font-heading text-[30px] leading-none font-normal text-ink sm:text-[36px]">
        {product.name}
      </h1>

      <div className="flex flex-wrap items-center gap-2 pb-8">
        {product.compareAtPrice && (
          <span className="text-2xl leading-9 text-ink line-through">{formatNGN(product.compareAtPrice)}</span>
        )}
        {product.price !== undefined && (
          <span className="text-2xl leading-9 font-medium text-ink">{formatNGN(product.price)}</span>
        )}
        <span className="rounded-[4px] bg-[linear-gradient(13deg,#c4a6b5_0%,#7c6992_33%,#395382_67%,#00a7b5_100%)] p-0.5">
          <span className="block rounded-[2px] bg-white px-2 py-1.5 text-xs leading-3 font-medium tracking-[0.6px] text-[#7c6992] uppercase">
            Free Shipping*
          </span>
        </span>
      </div>

      <p className="pb-4 text-base leading-[22.4px] text-ink">
        Turns ordinary water into something extraordinary, infused with molecular hydrogen, the
        smallest and most powerful molecule in the universe. It helps your cells fight oxidative
        stress, recover faster, and keep your system running clean, like a daily tune-up at the
        cellular level.
      </p>

      <ul className="flex flex-col gap-3 pb-8">
        {flaskHighlights.map((item) => (
          <li key={item.label} className="flex items-center gap-2 text-base leading-4 font-medium text-ink">
            <span className="flex size-5 items-center justify-center">
              <Image src={item.icon} alt="" width={19} height={19} />
            </span>
            {item.label}
          </li>
        ))}
      </ul>

      <FlaskBuyBox product={product} />

      <Accordion className="mt-4 border-t-[0.8px] border-[#deddde]">
        {sections.map((section) => (
          <AccordionItem
            key={section.title}
            value={section.title}
            className="border-b-[0.8px] border-[#deddde] not-last:border-b-[0.8px]"
          >
            <AccordionTrigger className="items-center rounded-none py-3 text-base leading-6 font-medium text-ink hover:no-underline [&>[data-slot=accordion-trigger-icon]]:hidden">
              {section.title}
              <Image
                src="/images/products/echo-flask/icon-chevron.svg"
                alt=""
                width={24}
                height={24}
                className="transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180"
              />
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-base leading-6 text-stone">{section.body}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
