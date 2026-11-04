import type { Metadata } from "next";
import Link from "next/link";

import { createProduct } from "@/app/admin/actions";
import { AdminHeader } from "@/components/admin/admin-header";
import { ProductForm } from "@/components/admin/product-form";
import { requireAdmin } from "@/lib/admin-session";

export const metadata: Metadata = { title: "New product" };

export default async function NewProductPage() {
  await requireAdmin();

  return (
    <>
      <AdminHeader active="products" />
      <main className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6">
        <Link href="/admin" className="text-sm text-stone hover:text-ink">
          ← Products
        </Link>
        <h1 className="pt-2 pb-1 font-heading text-3xl text-ink">New product</h1>
        <p className="pb-6 text-sm text-stone">New products use a simple product page with the image, price and description.</p>
        <ProductForm action={createProduct} editor={{}} designed={false} />
      </main>
    </>
  );
}
