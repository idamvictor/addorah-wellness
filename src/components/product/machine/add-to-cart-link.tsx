"use client";

import { getProduct } from "@/data/products";
import { useAppStore } from "@/providers/app-store-provider";

/** A button styled by the caller that adds another product to the cart. */
export function AddToCartLink({
  slug,
  className,
  children,
}: {
  slug: string;
  className?: string;
  children: React.ReactNode;
}) {
  const addItem = useAppStore((state) => state.addItem);
  const product = getProduct(slug);

  return (
    <button
      type="button"
      disabled={product?.price === undefined}
      onClick={() => product?.price !== undefined && addItem({ slug, price: product.price })}
      className={className}
    >
      {children}
    </button>
  );
}
