"use client";

import { MinusIcon, PlusIcon, Trash2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { productHref } from "@/data/products";
import { formatNGN } from "@/lib/format";
import { useAppStore } from "@/providers/app-store-provider";
import { useCatalog } from "@/providers/catalog-provider";
import { selectCartSubtotal } from "@/stores/app-store";

export function CartDrawer() {
  const open = useAppStore((state) => state.cartOpen);
  const setOpen = useAppStore((state) => state.setCartOpen);
  const items = useAppStore((state) => state.items);
  const catalog = useCatalog();
  const subtotal = useAppStore(selectCartSubtotal);
  const setQty = useAppStore((state) => state.setQty);
  const removeItem = useAppStore((state) => state.removeItem);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="w-full gap-0 bg-white p-0 text-ink sm:max-w-[420px]">
        <SheetHeader className="h-12 justify-center px-10 py-0">
          <SheetTitle className="text-xl font-semibold text-ink">Cart</SheetTitle>
          <SheetDescription className="sr-only">Items in your cart</SheetDescription>
        </SheetHeader>
        <Separator className="mx-5 w-auto!" />

        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <ul className="flex flex-1 flex-col gap-6 overflow-y-auto px-5 py-6">
              {items.map((line) => {
                const product = catalog.find((item) => item.slug === line.slug);
                if (!product) return null;
                const href = productHref(product);
                return (
                  <li key={`${line.slug}-${line.variant ?? ""}`} className="flex gap-4">
                    <Image
                      src={product.image}
                      alt={product.shortName}
                      width={88}
                      height={88}
                      className="size-22 shrink-0 rounded-lg object-cover"
                    />
                    <div className="flex flex-1 flex-col gap-1">
                      {href ? (
                        <Link
                          href={href}
                          onClick={() => setOpen(false)}
                          className="text-sm leading-snug font-semibold"
                        >
                          {product.name}
                        </Link>
                      ) : (
                        <span className="text-sm leading-snug font-semibold">{product.name}</span>
                      )}
                      {line.variant && (
                        <span className="text-xs text-stone">{line.variant}</span>
                      )}
                      <span className="text-sm text-stone">{formatNGN(line.price)}</span>
                      <div className="mt-auto flex items-center justify-between pt-2">
                        <div className="flex items-center rounded-md border border-ink/15">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() => setQty(line.slug, line.variant, line.qty - 1)}
                            className="flex size-8 items-center justify-center"
                          >
                            <MinusIcon className="size-3.5" />
                          </button>
                          <span className="w-8 text-center text-sm tabular-nums">{line.qty}</span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() => setQty(line.slug, line.variant, line.qty + 1)}
                            className="flex size-8 items-center justify-center"
                          >
                            <PlusIcon className="size-3.5" />
                          </button>
                        </div>
                        <button
                          type="button"
                          aria-label={`Remove ${product.shortName}`}
                          onClick={() => removeItem(line.slug, line.variant)}
                          className="flex size-8 items-center justify-center text-stone hover:text-ink"
                        >
                          <Trash2Icon className="size-4" />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <SheetFooter className="gap-4 border-t border-ink/10 px-5 py-6">
              <div className="flex items-center justify-between text-base font-semibold">
                <span>Subtotal</span>
                <span className="tabular-nums">{formatNGN(subtotal)}</span>
              </div>
              <p className="text-xs text-stone">
                Shipping and taxes calculated at checkout.
              </p>
              <Button
                size="lg"
                disabled
                className="h-11 w-full rounded-lg bg-ink text-sm font-semibold text-white"
              >
                Checkout coming soon
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}

function EmptyCart() {
  return (
    <div className="flex flex-1 flex-col">
      <p className="py-4 text-center text-sm text-stone">Your cart is empty.</p>
      <Separator className="mx-5 w-auto!" />
      <div className="flex flex-col items-center px-[42px] pt-10 text-center">
        <p className="text-xs font-semibold tracking-[0.1em] text-stone uppercase">
          Need some help?
        </p>
        <p className="mt-3 text-lg leading-snug text-ink">
          Take our quiz and get a personalized product recommendation.
        </p>
        <span
          aria-disabled="true"
          className="mt-[18px] flex h-11 w-full items-center justify-center rounded-lg bg-ink text-sm font-semibold text-white"
        >
          Get Started
        </span>
      </div>
    </div>
  );
}
