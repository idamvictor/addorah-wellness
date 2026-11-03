import Link from "next/link";

import { FlaskGallery } from "@/components/product/flask-gallery";
import { MachineBuyBox } from "@/components/product/machine/machine-buy-box";
import {
  CertsRow,
  Checklist,
  FeatureSplit,
  InstallOptions,
  IntroCards,
  MachineFaq,
  QuoteBand,
  Science,
  Specialist,
  SpecTable,
  Stages,
  Upsell,
  VideoIntro,
} from "@/components/product/machine/machine-sections";
import { productSpecificSections } from "@/components/product/machine/product-specific";
import { ProductReviews } from "@/components/sections/product-reviews";
import type { MachinePageContent, MachineSection } from "@/data/product-pages/machine";
import type { Product } from "@/data/products";

function renderSection(section: MachineSection, index: number, product: Product, content: MachinePageContent) {
  switch (section.kind) {
    case "certs":
      return <CertsRow key={index} {...section} />;
    case "intro":
      return <IntroCards key={index} {...section} />;
    case "split":
      return <FeatureSplit key={index} {...section} />;
    case "options":
      return <InstallOptions key={index} {...section} />;
    case "checklist":
      return <Checklist key={index} {...section} />;
    case "upsell":
      return <Upsell key={index} {...section} />;
    case "stages":
      return <Stages key={index} {...section} />;
    case "science":
      return <Science key={index} {...section} />;
    case "quote":
      return <QuoteBand key={index} {...section} />;
    case "specs":
      return <SpecTable key={index} {...section} />;
    case "video":
      return <VideoIntro key={index} {...section} />;
    case "faq":
      return <MachineFaq key={index} {...section} />;
    case "specialist":
      return <Specialist key={index} {...section} product={product} variants={content.buyBox.variants} />;
    case "reviews":
      return (
        <ProductReviews
          key={index}
          data={section.data}
          productName={product.shortName}
          heading={{ kicker: "Reviews", title: "What owners report." }}
          className="px-6 py-20 lg:py-[104px]"
        />
      );
    case "custom": {
      const Custom = productSpecificSections[section.id];
      return <Custom key={index} />;
    }
  }
}

export function MachinePdp({ product, content }: { product: Product; content: MachinePageContent }) {
  const reviews = content.sections.find((section) => section.kind === "reviews");
  const rating = reviews?.kind === "reviews" ? reviews.data.rating : 5;

  return (
    <>
      <nav aria-label="Breadcrumb" className="px-6 pt-6 text-xs leading-3 text-stone">
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

      <section className="grid gap-10 px-6 pt-14 pb-16 lg:grid-cols-2 lg:gap-[60px]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <FlaskGallery images={content.gallery} />
        </div>
        <MachineBuyBox product={product} data={content.buyBox} rating={rating} />
      </section>

      {content.sections.map((section, i) => renderSection(section, i, product, content))}
    </>
  );
}
