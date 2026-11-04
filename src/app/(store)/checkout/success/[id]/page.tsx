import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { connection } from "next/server";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { ClearCart } from "@/components/checkout/clear-cart";
import { paymentLabel } from "@/data/orders";
import { site } from "@/data/site";
import { formatNGN } from "@/lib/format";
import { getOrder } from "@/lib/orders";

export const metadata: Metadata = { title: "Order confirmed", robots: { index: false, follow: false } };

export default function OrderSuccessPage({ params }: PageProps<"/checkout/success/[id]">) {
  return (
    <Suspense fallback={<div aria-busy className="min-h-[70vh]" />}>
      <OrderConfirmation params={params} />
    </Suspense>
  );
}

async function OrderConfirmation({ params }: Pick<PageProps<"/checkout/success/[id]">, "params">) {
  // Render per request: order details are personal and must not be stored in the page cache.
  await connection();
  const { id } = await params;
  const order = await getOrder(id);
  if (!order) notFound();

  const bank = site.bankTransfer;

  return (
    <section className="mx-auto w-full max-w-[760px] px-5 pt-12 pb-24 sm:px-8">
      <ClearCart />
      <p className="text-sm font-semibold tracking-[0.12em] text-teal-deep uppercase">Order {order.number}</p>
      <h1 className="pt-2 font-heading text-[40px] leading-none text-ink sm:text-[52px]">
        Thank you, {order.customer.name.split(" ")[0]}.
      </h1>
      <p className="pt-4 text-lg leading-7 text-pretty text-ink">
        We’ve received your order. A copy of the details is below — keep your order number handy.
      </p>

      {order.paymentMethod === "bank-transfer" ? (
        <div className="mt-8 rounded-2xl border border-ink/10 bg-mist p-6">
          <h2 className="text-lg font-semibold text-ink">Complete your payment by bank transfer</h2>
          <p className="pt-1 text-sm text-stone">
            Transfer <strong className="text-ink">{formatNGN(order.total)}</strong> and use{" "}
            <strong className="text-ink">{order.number}</strong> as the reference. We’ll confirm once it arrives.
          </p>
          <dl className="grid gap-3 pt-5 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-stone">Bank</dt>
              <dd className="font-semibold text-ink">{bank.bankName}</dd>
            </div>
            <div>
              <dt className="text-stone">Account name</dt>
              <dd className="font-semibold text-ink">{bank.accountName}</dd>
            </div>
            <div>
              <dt className="text-stone">Account number</dt>
              <dd className="font-semibold text-ink tabular-nums">{bank.accountNumber}</dd>
            </div>
          </dl>
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-ink/10 bg-mist p-6">
          <h2 className="text-lg font-semibold text-ink">Pay on delivery</h2>
          <p className="pt-1 text-sm text-stone">
            We’ll call you on <strong className="text-ink">{order.customer.phone}</strong> to arrange delivery. Pay{" "}
            <strong className="text-ink">{formatNGN(order.total)}</strong> when your order arrives.
          </p>
        </div>
      )}

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-stone uppercase">Delivering to</h2>
          <address className="pt-2 text-sm leading-6 text-ink not-italic">
            {order.customer.name}
            <br />
            {order.delivery.address}
            <br />
            {order.delivery.city}, {order.delivery.state}
            <br />
            {order.customer.phone}
          </address>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-stone uppercase">Payment</h2>
          <p className="pt-2 text-sm text-ink">{paymentLabel(order.paymentMethod)}</p>
        </div>
      </div>

      <ul className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
        {order.lines.map((line) => (
          <li key={`${line.slug}-${line.variant ?? ""}`} className="flex items-center gap-4 py-4">
            <Image src={line.image} alt="" width={56} height={56} className="size-14 rounded-lg bg-haze object-cover" />
            <div className="min-w-0 flex-1 text-sm">
              <p className="font-medium text-ink">{line.name}</p>
              <p className="text-xs text-stone">
                {line.variant ? `${line.variant} · ` : ""}Qty {line.qty}
              </p>
            </div>
            <span className="text-sm tabular-nums">{formatNGN(line.price * line.qty)}</span>
          </li>
        ))}
      </ul>
      <dl className="ml-auto flex max-w-xs flex-col gap-2 pt-5 text-sm">
        <div className="flex justify-between">
          <dt className="text-stone">Subtotal</dt>
          <dd className="tabular-nums">{formatNGN(order.subtotal)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-stone">Delivery</dt>
          <dd>{order.deliveryFee ? formatNGN(order.deliveryFee) : "Free"}</dd>
        </div>
        <div className="flex justify-between pt-2 text-base font-semibold">
          <dt>Total</dt>
          <dd className="tabular-nums">{formatNGN(order.total)}</dd>
        </div>
      </dl>

      <div className="flex flex-wrap items-center gap-4 pt-12">
        <Link href="/shop" className="rounded-lg bg-ink px-6 py-3 text-sm font-semibold text-white">
          Continue shopping
        </Link>
        <p className="text-sm text-stone">
          Questions? Email{" "}
          <a href={`mailto:${site.supportEmail}`} className="text-ink underline">
            {site.supportEmail}
          </a>
        </p>
      </div>
    </section>
  );
}
