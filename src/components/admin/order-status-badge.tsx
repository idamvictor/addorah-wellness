import { type OrderStatus, statusLabel } from "@/data/orders";
import { cn } from "@/lib/utils";

const tone: Record<OrderStatus, string> = {
  new: "bg-teal/10 text-teal-deep",
  confirmed: "bg-indigo-50 text-indigo-800",
  paid: "bg-emerald-50 text-emerald-800",
  shipped: "bg-amber-50 text-amber-800",
  delivered: "bg-zinc-100 text-zinc-700",
  cancelled: "bg-red-50 text-red-700",
};

export function OrderStatusBadge({ status, className }: { status: OrderStatus; className?: string }) {
  return (
    <span className={cn("rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap", tone[status], className)}>
      {statusLabel(status)}
    </span>
  );
}

const dateFormat = new Intl.DateTimeFormat("en-NG", {
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
  timeZone: "Africa/Lagos",
});

export const formatOrderDate = (iso: string) => dateFormat.format(new Date(iso));
