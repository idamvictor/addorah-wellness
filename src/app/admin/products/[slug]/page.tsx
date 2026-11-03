import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { updateProduct } from "@/app/admin/actions";
import { AdminHeader } from "@/components/admin/admin-header";
import { ProductForm } from "@/components/admin/product-form";
import { requireAdmin } from "@/lib/admin-session";
import { getProduct } from "@/lib/catalog";
import { hasDesignedPage, priceEditorFor } from "@/lib/price-editor";

export const metadata: Metadata = { title: "Edit product" };

export default async function EditProductPage({ params }: PageProps<"/admin/products/[slug]">) {
  await requireAdmin();
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  const designed = hasDesignedPage(slug);

  return (
    <>
      <AdminHeader />
      <main className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6">
        <Link href="/admin" className="text-sm text-stone hover:text-ink">
          ← Products
        </Link>
        <div className="flex flex-wrap items-baseline justify-between gap-2 pt-2 pb-6">
          <h1 className="font-heading text-3xl text-ink">{product.name}</h1>
          {product.hasDetailPage && (
            <Link href={`/products/${slug}`} target="_blank" className="text-sm text-ink underline-offset-4 hover:underline">
              View on store ↗
            </Link>
          )}
        </div>
        <ProductForm
          action={updateProduct.bind(null, slug)}
          product={product}
          editor={priceEditorFor(product)}
          designed={designed}
        />
      </main>
    </>
  );
}
