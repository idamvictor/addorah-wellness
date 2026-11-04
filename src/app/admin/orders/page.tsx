import type { Metadata } from "next";
import Link from "next/link";

import { AdminHeader } from "@/components/admin/admin-header";
import { formatOrderDate, OrderStatusBadge } from "@/components/admin/order-status-badge";
import { type OrderStatus, orderStatuses, paymentLabel } from "@/data/orders";
import { requireAdmin } from "@/lib/admin-session";
import { formatNGN } from "@/lib/format";
import { listOrders } from "@/lib/orders";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Orders" };

export default async function AdminOrdersPage({ searchParams }: PageProps<"/admin/orders">) {
  await requireAdmin();
  const { status } = await searchParams;
  const all = await listOrders();
  const filter = orderStatuses.find((option) => option.value === status)?.value as OrderStatus | undefined;
  const orders = filter ? all.filter((order) => order.status === filter) : all;
  const count = (value: OrderStatus) => all.filter((order) => order.status === value).length;

  const chip = "shrink-0 rounded-full border px-3 py-1.5 text-sm transition-colors";

  return (
    <>
      <AdminHeader active="orders" />
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <h1 className="font-heading text-3xl text-ink">Orders</h1>
        <p className="pt-1 text-sm text-stone">
          {all.length} {all.length === 1 ? "order" : "orders"} · newest first. Payment is collected offline (bank transfer or on
          delivery), so update the status as each order progresses.
        </p>

        <nav aria-label="Filter by status" className="mt-6 flex gap-2 overflow-x-auto pb-1">
          <Link
            href="/admin/orders"
            aria-current={!filter ? "page" : undefined}
            className={cn(chip, !filter ? "border-ink bg-ink text-white" : "border-black/15 bg-white text-ink hover:border-ink")}
          >
            All
          </Link>
          {orderStatuses.map((option) => (
            <Link
              key={option.value}
              href={`/admin/orders?status=${option.value}`}
              aria-current={filter === option.value ? "page" : undefined}
              className={cn(
                chip,
                filter === option.value ? "border-ink bg-ink text-white" : "border-black/15 bg-white text-ink hover:border-ink",
              )}
            >
              {option.label} <span className="tabular-nums opacity-60">{count(option.value)}</span>
            </Link>
          ))}
        </nav>

        {orders.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-dashed border-black/15 bg-white px-6 py-16 text-center">
            <p className="font-medium text-ink">{all.length === 0 ? "No orders yet" : "No orders with this status"}</p>
            <p className="pt-1 text-sm text-stone">
              {all.length === 0 ? "Orders placed at checkout will appear here." : "Try another filter."}
            </p>
          </div>
        ) : (
          <div className="mt-4 overflow-x-auto rounded-2xl border border-black/10 bg-white">
            <table className="w-full min-w-[820px] text-left text-sm">
              <thead className="border-b border-black/10 text-xs tracking-wide text-stone uppercase">
                <tr>
                  <th scope="col" className="px-4 py-3 font-medium">
                    Order
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium">
                    Date
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium">
                    Customer
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium">
                    Items
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium">
                    Total
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium">
                    Payment
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-black/[0.02]">
                    <td className="px-4 py-3">
                      <Link href={`/admin/orders/${order.id}`} className="font-medium text-ink hover:underline">
                        {order.number}
                      </Link>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-stone">{formatOrderDate(order.createdAt)}</td>
                    <td className="px-4 py-3">
                      <span className="text-ink">{order.customer.name}</span>
                      <span className="block text-xs text-stone">
                        {order.delivery.city}, {order.delivery.state}
                      </span>
                    </td>
                    <td className="px-4 py-3 tabular-nums">{order.lines.reduce((sum, line) => sum + line.qty, 0)}</td>
                    <td className="px-4 py-3 whitespace-nowrap tabular-nums">{formatNGN(order.total)}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-stone">{paymentLabel(order.paymentMethod)}</td>
                    <td className="px-4 py-3">
                      <OrderStatusBadge status={order.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </>
  );
}
