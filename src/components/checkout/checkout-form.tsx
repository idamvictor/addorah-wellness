"use client";

import Image from "next/image";
import Link from "next/link";
import { type ReactNode, startTransition, useActionState } from "react";

import { type CheckoutState, placeOrder } from "@/app/(store)/checkout/actions";
import { nigerianStates, paymentMethods } from "@/data/orders";
import { formatNGN } from "@/lib/format";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/providers/app-store-provider";
import { useCatalog } from "@/providers/catalog-provider";
import { selectCartSubtotal } from "@/stores/app-store";

const inputClass =
  "h-12 w-full rounded-lg border border-[#d1d5db] bg-white px-3.5 text-base text-ink outline-none transition-colors placeholder:text-stone/70 focus-visible:border-ink focus-visible:ring-2 focus-visible:ring-ink/15 aria-invalid:border-red-600";

function Field({
  label,
  name,
  error,
  className,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} className="text-xs text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

const invalid = (state: CheckoutState, name: string) =>
  state?.fieldErrors?.[name] ? { "aria-invalid": true as const, "aria-describedby": `${name}-error` } : {};

export function CheckoutForm() {
  const items = useAppStore((state) => state.items);
  const hydrated = useAppStore((state) => state.hydrated);
  const subtotal = useAppStore(selectCartSubtotal);
  const removeItem = useAppStore((state) => state.removeItem);
  const catalog = useCatalog();
  const [state, formAction, pending] = useActionState(placeOrder, undefined);
  const errors = state?.fieldErrors;

  if (!hydrated) return <div aria-busy className="min-h-[60vh]" />;

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center gap-5 py-24 text-center">
        <h1 className="font-heading text-4xl text-ink">Your cart is empty</h1>
        <p className="text-stone">Add something you love, then come back to check out.</p>
        <Link href="/shop" className="rounded-lg bg-ink px-6 py-3 text-sm font-semibold text-white">
          Shop all products
        </Link>
      </div>
    );
  }

  const problemFor = (slug: string, variant?: string) =>
    state?.problems?.find((problem) => problem.slug === slug && problem.variant === variant)?.message;

  return (
    <form
      action={formAction}
      // Submit manually so React keeps what the shopper typed if validation fails.
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        startTransition(() => formAction(data));
      }}
      noValidate
      className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:gap-16"
    >
      <div className="flex flex-col gap-10">
        <h1 className="font-heading text-[40px] leading-none text-ink sm:text-[48px]">Checkout</h1>

        {state?.error && (
          <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            {state.error}
          </p>
        )}

        <fieldset className="flex flex-col gap-5">
          <legend className="pb-5 text-lg font-semibold text-ink">Contact</legend>
          <Field label="Full name" name="name" error={errors?.name}>
            <input id="name" name="name" autoComplete="name" required className={inputClass} {...invalid(state, "name")} />
          </Field>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Email" name="email" error={errors?.email}>
              <input id="email" name="email" type="email" autoComplete="email" required className={inputClass} {...invalid(state, "email")} />
            </Field>
            <Field label="Phone number" name="phone" error={errors?.phone}>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="0803 123 4567"
                required
                className={inputClass}
                {...invalid(state, "phone")}
              />
            </Field>
          </div>
        </fieldset>

        <fieldset className="flex flex-col gap-5">
          <legend className="pb-5 text-lg font-semibold text-ink">Delivery</legend>
          <Field label="Street address" name="address" error={errors?.address}>
            <input id="address" name="address" autoComplete="street-address" required className={inputClass} {...invalid(state, "address")} />
          </Field>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="City / town" name="city" error={errors?.city}>
              <input id="city" name="city" autoComplete="address-level2" required className={inputClass} {...invalid(state, "city")} />
            </Field>
            <Field label="State" name="state" error={errors?.state}>
              <select id="state" name="state" defaultValue="" required className={inputClass} {...invalid(state, "state")}>
                <option value="" disabled>
                  Choose a state
                </option>
                {nigerianStates.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </Field>
          </div>
          <Field label="Delivery notes (optional)" name="notes">
            <textarea
              id="notes"
              name="notes"
              rows={3}
              placeholder="Landmark, gate code, best time to call…"
              className={cn(inputClass, "h-auto py-3")}
            />
          </Field>
        </fieldset>

        <fieldset className="flex flex-col gap-3">
          <legend className="pb-5 text-lg font-semibold text-ink">Payment</legend>
          {paymentMethods.map((method, i) => (
            <label
              key={method.value}
              className="flex cursor-pointer gap-3 rounded-lg border border-[#d1d5db] p-4 has-checked:border-ink has-checked:bg-haze"
            >
              <input
                type="radio"
                name="paymentMethod"
                value={method.value}
                defaultChecked={i === 0}
                className="mt-1 size-4 accent-ink"
              />
              <span className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold text-ink">{method.label}</span>
                <span className="text-sm text-stone">{method.description}</span>
              </span>
            </label>
          ))}
          {errors?.paymentMethod && <p className="text-xs text-red-700">{errors.paymentMethod}</p>}
        </fieldset>

        {/* Honeypot for bots; hidden from people and assistive tech. */}
        <div aria-hidden className="absolute -left-[9999px] h-0 overflow-hidden">
          <label>
            Company
            <input name="company" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(items)} />
      </div>

      <aside className="lg:sticky lg:top-28 lg:self-start">
        <div className="rounded-2xl bg-haze p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-ink">Order summary</h2>
          <ul className="flex flex-col gap-5 py-6">
            {items.map((line) => {
              const product = catalog.find((item) => item.slug === line.slug);
              const problem = problemFor(line.slug, line.variant);
              return (
                <li key={`${line.slug}-${line.variant ?? ""}`} className="flex gap-4">
                  <div className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-white">
                    {product && <Image src={product.image} alt="" fill sizes="64px" className="object-cover" />}
                    <span className="absolute -top-0 -right-0 flex size-5 items-center justify-center rounded-bl-lg bg-ink text-[11px] font-semibold text-white">
                      {line.qty}
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col gap-0.5 text-sm">
                    <span className="font-medium text-ink">{product?.name ?? "Unavailable item"}</span>
                    {line.variant && <span className="text-xs text-stone">{line.variant}</span>}
                    {problem && (
                      <span className="text-xs text-red-700">
                        {problem}{" "}
                        <button type="button" onClick={() => removeItem(line.slug, line.variant)} className="font-medium underline">
                          Remove
                        </button>
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-ink tabular-nums">{formatNGN(line.price * line.qty)}</span>
                </li>
              );
            })}
          </ul>
          <dl className="flex flex-col gap-2 border-t border-ink/10 pt-5 text-sm">
            <div className="flex justify-between">
              <dt className="text-stone">Subtotal</dt>
              <dd className="tabular-nums">{formatNGN(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-stone">Delivery</dt>
              <dd>Free</dd>
            </div>
            <div className="flex justify-between pt-3 text-lg font-semibold text-ink">
              <dt>Total</dt>
              <dd className="tabular-nums">{formatNGN(subtotal)}</dd>
            </div>
          </dl>
          <button
            type="submit"
            disabled={pending}
            className="mt-6 h-[52px] w-full rounded-lg bg-ink text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {pending ? "Placing order…" : "Place order"}
          </button>
          <p className="pt-3 text-center text-xs text-stone">No payment is taken online. You’ll pay by bank transfer or on delivery.</p>
        </div>
      </aside>
    </form>
  );
}
