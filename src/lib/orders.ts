import "server-only";

import { randomBytes } from "node:crypto";

import type { Order } from "@/data/orders";
import { jsonStore } from "@/lib/json-store";

/** Customer orders (data/orders.json). Contains personal data: never committed to git. */
const store = jsonStore<{ nextNumber: number; orders: Order[] }>("orders.json", () => ({ nextNumber: 1001, orders: [] }));

/** Newest first. Always read fresh so the admin sees new orders immediately. */
export async function listOrders(): Promise<Order[]> {
  const { orders } = await store.read();
  return [...orders].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function getOrder(id: string): Promise<Order | undefined> {
  if (!/^[A-Za-z0-9_-]{16,32}$/.test(id)) return undefined;
  const { orders } = await store.read();
  return orders.find((order) => order.id === id);
}

export function createOrder(draft: Omit<Order, "id" | "number" | "createdAt" | "status" | "history">): Promise<Order> {
  return store.mutate(async (data) => {
    const now = new Date().toISOString();
    const order: Order = {
      ...draft,
      id: randomBytes(12).toString("base64url"),
      number: `AW-${data.nextNumber}`,
      createdAt: now,
      status: "new",
      history: [{ status: "new", at: now }],
    };
    return { data: { nextNumber: data.nextNumber + 1, orders: [...data.orders, order] }, result: order };
  });
}

export function updateOrder(id: string, change: (order: Order) => Order): Promise<Order | undefined> {
  return store.mutate(async (data) => {
    const index = data.orders.findIndex((order) => order.id === id);
    if (index < 0) return { data, result: undefined };
    const orders = [...data.orders];
    orders[index] = change(orders[index]);
    return { data: { ...data, orders }, result: orders[index] };
  });
}
