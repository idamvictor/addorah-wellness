import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FlaskPdp } from "@/components/product/flask-pdp";
import { WaitlistPdp } from "@/components/product/waitlist-pdp";
import { waitlistPages } from "@/data/product-pages/waitlist";
import { getProduct, products } from "@/data/products";

export function generateStaticParams() {
  return products.filter((product) => product.hasDetailPage).map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product?.hasDetailPage) return {};
  return { title: product.name, description: product.tagline };
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product?.hasDetailPage) notFound();

  if (slug === "echo-forty" || slug === "echo-one") {
    return <WaitlistPdp content={waitlistPages[slug]} product={product} />;
  }

  return <FlaskPdp product={product} />;
}
