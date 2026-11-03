"use client";

import { type ReactNode, createContext, useContext } from "react";

import type { Product } from "@/data/products";

const CatalogContext = createContext<Product[] | undefined>(undefined);

/** Hands the live catalog (read on the server from data/catalog.json) to client components. */
export function CatalogProvider({ products, children }: { products: Product[]; children: ReactNode }) {
  return <CatalogContext.Provider value={products}>{children}</CatalogContext.Provider>;
}

export function useCatalog(): Product[] {
  const products = useContext(CatalogContext);
  if (!products) throw new Error("useCatalog must be used within CatalogProvider");
  return products;
}

export function useProduct(slug: string | undefined): Product | undefined {
  const products = useCatalog();
  return slug ? products.find((product) => product.slug === slug) : undefined;
}
