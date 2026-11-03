import Image from "next/image";
import Link from "next/link";

import { AdminHeader } from "@/components/admin/admin-header";
import { DeleteProductButton } from "@/components/admin/delete-product-button";
import { buttonVariants } from "@/components/ui/button";
import { productStatuses } from "@/data/products";
import { requireAdmin } from "@/lib/admin-session";
import { listProducts } from "@/lib/catalog";
import { formatNGN } from "@/lib/format";
import { hasDesignedPage } from "@/lib/price-editor";
import { cn } from "@/lib/utils";

const statusTone = {
  available: "bg-emerald-50 text-emerald-800",
  waitlist: "bg-amber-50 text-amber-800",
  "sold-out": "bg-zinc-100 text-zinc-700",
} as const;

export default async function AdminProductsPage({ searchParams }: PageProps<"/admin">) {
  await requireAdmin();
  const products = await listProducts();
  const { saved, deleted } = await searchParams;
  const savedName = typeof saved === "string" ? products.find((product) => product.slug === saved)?.name : undefined;

  return (
    <>
      <AdminHeader />
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-heading text-3xl text-ink">Products</h1>
            <p className="pt-1 text-sm text-stone">{products.length} products · changes go live on the store immediately.</p>
          </div>
          <Link href="/admin/products/new" className={cn(buttonVariants(), "h-10 px-4")}>
            New product
          </Link>
        </div>

        {(savedName || typeof deleted === "string") && (
          <p role="status" className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
            {savedName ? `Saved “${savedName}”.` : `Deleted “${deleted}”.`}
          </p>
        )}

        <div className="mt-6 overflow-x-auto rounded-2xl border border-black/10 bg-white">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="border-b border-black/10 text-xs tracking-wide text-stone uppercase">
              <tr>
                <th scope="col" className="px-4 py-3 font-medium">
                  Product
                </th>
                <th scope="col" className="px-4 py-3 font-medium">
                  Shop price
                </th>
                <th scope="col" className="px-4 py-3 font-medium">
                  Status
                </th>
                <th scope="col" className="px-4 py-3 font-medium">
                  Page
                </th>
                <th scope="col" className="px-4 py-3 text-right font-medium">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {products.map((product) => {
                const designed = hasDesignedPage(product.slug);
                return (
                  <tr key={product.slug}>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <Image
                          src={product.image}
                          alt=""
                          width={48}
                          height={48}
                          className="size-12 shrink-0 rounded-lg bg-haze object-cover"
                        />
                        <div className="min-w-0">
                          <Link href={`/admin/products/${product.slug}`} className="font-medium text-ink hover:underline">
                            {product.name}
                          </Link>
                          <p className="truncate font-mono text-xs text-stone">{product.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap tabular-nums">
                      {product.price !== undefined ? (
                        <>
                          {product.priceFrom && <span className="text-stone">From </span>}
                          {formatNGN(product.price)}
                          {product.compareAtPrice ? (
                            <span className="block text-xs text-stone line-through">{formatNGN(product.compareAtPrice)}</span>
                          ) : null}
                        </>
                      ) : (
                        <span className="text-stone">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <span className={cn("rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap", statusTone[product.status])}>
                        {productStatuses.find((status) => status.value === product.status)?.label}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-stone">{!product.hasDetailPage ? "Hidden" : designed ? "Designed" : "Generic"}</td>
                    <td className="px-4 py-3">
                      <div className="flex justify-end gap-1">
                        <Link href={`/admin/products/${product.slug}`} className="rounded-md px-2.5 py-1.5 text-ink hover:bg-black/5">
                          Edit
                        </Link>
                        {product.hasDetailPage && (
                          <Link
                            href={`/products/${product.slug}`}
                            target="_blank"
                            className="rounded-md px-2.5 py-1.5 text-ink hover:bg-black/5"
                          >
                            View ↗
                          </Link>
                        )}
                        <DeleteProductButton slug={product.slug} name={product.name} designed={designed} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
