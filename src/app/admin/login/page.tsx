import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { LoginForm } from "@/components/admin/login-form";
import { isAdmin } from "@/lib/admin-session";

export const metadata: Metadata = { title: "Sign in" };

export default async function AdminLoginPage() {
  if (await isAdmin()) redirect("/admin");

  return (
    <main className="flex flex-1 items-center justify-center px-4 py-16">
      <div className="w-full max-w-sm rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold tracking-[0.12em] text-stone uppercase">Addorah Wellness</p>
        <h1 className="pt-1 pb-6 font-heading text-3xl text-ink">Admin sign in</h1>
        <LoginForm />
      </div>
    </main>
  );
}
