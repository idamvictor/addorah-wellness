import Link from "next/link";

import { logout } from "@/app/admin/actions";
import { InstallAppButton } from "@/components/pwa/install-app-button";
import { listOrders } from "@/lib/orders";
import { cn } from "@/lib/utils";

const navLink = "shrink-0 rounded-md px-3 py-2 text-ink hover:bg-black/5";

export async function AdminHeader({ active }: { active?: "products" | "orders" }) {
  const newOrders = (await listOrders()).filter((order) => order.status === "new").length;

  return (
    <header className="border-b border-black/10 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-3 sm:px-6">
        <Link href="/admin" className="flex items-baseline gap-2">
          <span className="font-heading text-xl text-ink">Addorah Wellness</span>
          <span className="text-xs font-semibold tracking-[0.12em] text-stone uppercase">Admin</span>
        </Link>
        <nav aria-label="Admin" className="-mx-1 flex items-center gap-1 overflow-x-auto text-sm">
          <Link href="/admin" aria-current={active === "products" ? "page" : undefined} className={cn(navLink, active === "products" && "bg-black/5 font-medium")}>
            Products
          </Link>
          <Link
            href="/admin/orders"
            aria-current={active === "orders" ? "page" : undefined}
            className={cn(navLink, "inline-flex items-center gap-1.5", active === "orders" && "bg-black/5 font-medium")}
          >
            Orders
            {newOrders > 0 && (
              <span className="rounded-full bg-teal px-1.5 py-0.5 text-[11px] leading-none font-semibold text-white tabular-nums">
                {newOrders}
                <span className="sr-only"> new</span>
              </span>
            )}
          </Link>
          <Link href="/" target="_blank" className={navLink}>
            View store ↗
          </Link>
          <InstallAppButton label="Install admin app" className={navLink} />
          <form action={logout}>
            <button type="submit" className="shrink-0 rounded-md px-3 py-2 text-stone hover:bg-black/5 hover:text-ink">
              Log out
            </button>
          </form>
        </nav>
      </div>
    </header>
  );
}
