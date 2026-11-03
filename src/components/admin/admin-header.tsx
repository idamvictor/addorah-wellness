import Link from "next/link";

import { logout } from "@/app/admin/actions";
import { InstallAppButton } from "@/components/pwa/install-app-button";

export function AdminHeader() {
  return (
    <header className="border-b border-black/10 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/admin" className="flex items-baseline gap-2">
          <span className="font-heading text-xl text-ink">Addorah Wellness</span>
          <span className="text-xs font-semibold tracking-[0.12em] text-stone uppercase">Admin</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          <Link href="/admin" className="rounded-md px-3 py-2 text-ink hover:bg-black/5">
            Products
          </Link>
          <Link href="/" target="_blank" className="rounded-md px-3 py-2 text-ink hover:bg-black/5">
            View store ↗
          </Link>
          <InstallAppButton label="Install admin app" className="rounded-md px-3 py-2 text-ink hover:bg-black/5" />
          <form action={logout}>
            <button type="submit" className="rounded-md px-3 py-2 text-stone hover:bg-black/5 hover:text-ink">
              Log out
            </button>
          </form>
        </nav>
      </div>
    </header>
  );
}
