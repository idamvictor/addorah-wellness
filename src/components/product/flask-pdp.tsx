import Link from "next/link";

import { AppIntegrations, FlaskCertifications } from "@/components/product/flask-certifications";
import { TechSpecs, WellnessStats, WhyEcho } from "@/components/product/flask-dark-sections";
import { ExpertSlider } from "@/components/product/expert-slider";
import { FeelBetterSlider } from "@/components/product/feel-better-slider";
import { FlaskGallery } from "@/components/product/flask-gallery";
import { FlaskProductInfo } from "@/components/product/flask-product-info";
import { FlaskReviews } from "@/components/product/flask-reviews";
import { TechDiagram } from "@/components/product/tech-diagram";
import { Benefits } from "@/components/sections/benefits";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { FaqSection } from "@/components/sections/faq-section";
import { PressLogos } from "@/components/sections/press-logos";
import { homeFaqGroups } from "@/data/faqs";
import { flaskGallery } from "@/data/product-pages/echo-flask";
import type { Product } from "@/data/products";

export function FlaskPdp({ product }: { product: Product }) {
  return (
    <>
      <section className="px-5 pt-8 pb-6">
        <nav aria-label="Breadcrumb" className="text-xs leading-4 text-stone">
          <ol className="flex gap-1.5">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/shop" className="hover:underline">
                Shop
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-ink">
              {product.shortName}
            </li>
          </ol>
        </nav>
        <div className="grid gap-10 pt-6 lg:grid-cols-[minmax(0,853px)_minmax(0,562px)] lg:justify-between">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <FlaskGallery images={flaskGallery} />
          </div>
          <FlaskProductInfo product={product} />
        </div>
      </section>

      <PressLogos />
      <Benefits />
      <ExpertSlider />
      <ComparisonTable />
      <FeelBetterSlider />
      <TechDiagram />
      <WellnessStats />
      <WhyEcho />
      <TechSpecs />
      <FlaskCertifications />
      <AppIntegrations />
      <FaqSection groups={homeFaqGroups} showMoreLink className="pt-16" />
      <FlaskReviews />
    </>
  );
}
