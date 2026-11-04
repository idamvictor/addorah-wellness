"use client";

import { useEffect } from "react";

import { useAppStore } from "@/providers/app-store-provider";

/** Empties the cart once the order confirmation is shown (after the saved cart is restored). */
export function ClearCart() {
  const hydrated = useAppStore((state) => state.hydrated);
  const clearCart = useAppStore((state) => state.clearCart);
  useEffect(() => {
    if (hydrated) clearCart();
  }, [hydrated, clearCart]);
  return null;
}
