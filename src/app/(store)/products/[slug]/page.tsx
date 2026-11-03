import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { AccessoryPdp } from "@/components/product/accessory/accessory-pdp";
import { FlaskPdp } from "@/components/product/flask-pdp";
import { MachinePdp } from "@/components/product/machine/machine-pdp";
import { PrebioticPdp } from "@/components/product/prebiotic/prebiotic-pdp";
import { SimplePdp } from "@/components/product/simple-pdp";
import { WaitlistPdp } from "@/components/product/waitlist-pdp";
import { accessoryPages } from "@/data/product-pages/accessories";
import { machinePages } from "@/data/product-pages/machines";
import { waitlistPages } from "@/data/product-pages/waitlist";
import { getProduct, listProducts } from "@/lib/catalog";

export async function generateStaticParams() {
  const products = await listProducts();
  return products.filter((product) => product.hasDetailPage).map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product?.hasDetailPage) return {};
  return { title: product.name, description: product.tagline };
}

/** Params are awaited inside Suspense so pages can regenerate after admin edits (and for new slugs). */
export default function ProductPage({ params }: PageProps<"/products/[slug]">) {
  return (
    <Suspense fallback={<div aria-busy className="min-h-[80vh]" />}>
      <ProductContent params={params} />
    </Suspense>
  );
}

async function ProductContent({ params }: Pick<PageProps<"/products/[slug]">, "params">) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product?.hasDetailPage) notFound();

  if (slug === "echo-forty" || slug === "echo-one") {
    return <WaitlistPdp content={waitlistPages[slug]} product={product} />;
  }

  const machine = machinePages[slug];
  if (machine) return <MachinePdp product={product} content={machine} />;

  const accessory = accessoryPages[slug];
  if (accessory) return <AccessoryPdp product={product} content={accessory} />;

  if (slug === "hydrogen-prebiotic") return <PrebioticPdp product={product} />;

  if (slug === "echo-flask") return <FlaskPdp product={product} />;

  // Products added from /admin have no designed page.
  return <SimplePdp product={product} />;
}
