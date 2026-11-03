import type { Metadata } from "next";
import { Suspense } from "react";

import { ShopGrid } from "@/components/shop/shop-grid";

export const metadata: Metadata = {
  title: "Shop All Products",
};

export default function ShopPage() {
  return (
    <div className="px-5 pt-6 pb-4">
      <h1 className="font-heading text-[34px] leading-[1.1] font-normal tracking-[-0.02em] text-ink sm:text-[45px] sm:leading-[44.1px]">
        Shop All Products
      </h1>
      <Suspense>
        <ShopGrid />
      </Suspense>
    </div>
  );
}
