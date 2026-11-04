import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { updateOrderStatus } from "@/app/admin/actions";
import { AdminHeader } from "@/components/admin/admin-header";
import { formatOrderDate, OrderStatusBadge } from "@/components/admin/order-status-badge";
import { OrderStatusForm } from "@/components/admin/order-status-form";
import { paymentLabel, statusLabel } from "@/data/orders";
import { requireAdmin } from "@/lib/admin-session";
import { formatNGN } from "@/lib/format";
import { getOrder } from "@/lib/orders";

export const metadata: Metadata = { title: "Order" };

const card = "rounded-2xl border border-black/10 bg-white p-5 sm:p-6";
const cardTitle = "text-sm font-semibold tracking-wide text-stone uppercase";

export default async function AdminOrderPage({ params, searchParams }: PageProps<"/admin/orders/[id]">) {
  await requireAdmin();
  const { id } = await params;
  const { saved } = await searchParams;
  const order = await getOrder(id);
  if (!order) notFound();

  const phoneHref = `tel:${order.customer.phone.replace(/[^\d+]/g, "")}`;

  return (
    <>
      <AdminHeader active="orders" />
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <Link href="/admin/orders" className="text-sm text-stone hover:text-ink">
          ← Orders
        </Link>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <h1 className="font-heading text-3xl text-ink">Order {order.number}</h1>
          <OrderStatusBadge status={order.status} />
        </div>
        <p className="pt-1 text-sm text-stone">
          Placed {formatOrderDate(order.createdAt)} · {paymentLabel(order.paymentMethod)}
        </p>

        {saved && (
          <p role="status" className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
            Order updated.
          </p>
        )}

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="flex flex-col gap-6">
            <section className={card}>
              <h2 className={cardTitle}>Items</h2>
              <ul className="divide-y divide-black/5">
                {order.lines.map((line) => (
                  <li key={`${line.slug}-${line.variant ?? ""}`} className="flex items-center gap-4 py-4">
                    <Image src={line.image} alt="" width={56} height={56} className="size-14 rounded-lg bg-haze object-cover" />
                    <div className="min-w-0 flex-1 text-sm">
                      <p className="font-medium text-ink">{line.name}</p>
                      <p className="text-xs text-stone">
                        {line.variant ? `${line.variant} · ` : ""}
                        {formatNGN(line.price)} × {line.qty}
                      </p>
                    </div>
                    <span className="text-sm tabular-nums">{formatNGN(line.price * line.qty)}</span>
                  </li>
                ))}
              </ul>
              <dl className="ml-auto flex max-w-xs flex-col gap-1.5 border-t border-black/10 pt-4 text-sm">
                <div className="flex justify-between">
                  <dt className="text-stone">Subtotal</dt>
                  <dd className="tabular-nums">{formatNGN(order.subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-stone">Delivery</dt>
                  <dd>{order.deliveryFee ? formatNGN(order.deliveryFee) : "Free"}</dd>
                </div>
                <div className="flex justify-between pt-1 text-base font-semibold">
                  <dt>Total</dt>
                  <dd className="tabular-nums">{formatNGN(order.total)}</dd>
                </div>
              </dl>
            </section>

            <section className={card}>
              <h2 className={cardTitle}>History</h2>
              <ol className="flex flex-col gap-4 pt-4">
                {[...order.history].reverse().map((entry, i) => (
                  <li key={`${entry.at}-${i}`} className="flex gap-3 text-sm">
                    <span aria-hidden className="mt-1.5 size-2 shrink-0 rounded-full bg-ink/40" />
                    <div>
                      <p className="text-ink">
                        <span className="font-medium">{statusLabel(entry.status)}</span>
                        <span className="text-stone"> · {formatOrderDate(entry.at)}</span>
                      </p>
                      {entry.note && <p className="pt-0.5 whitespace-pre-line text-stone">{entry.note}</p>}
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          <div className="flex flex-col gap-6">
            <section className={card}>
              <h2 className={cardTitle}>Update status</h2>
              <div className="pt-4">
                <OrderStatusForm action={updateOrderStatus.bind(null, order.id)} current={order.status} />
              </div>
            </section>

            <section className={card}>
              <h2 className={cardTitle}>Customer</h2>
              <div className="flex flex-col gap-1 pt-3 text-sm">
                <p className="font-medium text-ink">{order.customer.name}</p>
                <a href={phoneHref} className="text-ink underline-offset-4 hover:underline">
                  {order.customer.phone}
                </a>
                <a href={`mailto:${order.customer.email}`} className="break-all text-ink underline-offset-4 hover:underline">
                  {order.customer.email}
                </a>
              </div>
            </section>

            <section className={card}>
              <h2 className={cardTitle}>Delivery</h2>
              <address className="pt-3 text-sm leading-6 text-ink not-italic">
                {order.delivery.address}
                <br />
                {order.delivery.city}, {order.delivery.state}
              </address>
              {order.delivery.notes && (
                <p className="mt-3 rounded-lg bg-haze px-3 py-2 text-sm whitespace-pre-line text-ink">{order.delivery.notes}</p>
              )}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
