"use client";

import { useActionState } from "react";

import { login } from "@/app/admin/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  const [state, action, pending] = useActionState(login, undefined);

  return (
    <form action={action} className="flex flex-col gap-4">
      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
        Password
        <Input
          type="password"
          name="password"
          required
          autoFocus
          autoComplete="current-password"
          aria-invalid={state?.error ? true : undefined}
          aria-describedby={state?.error ? "login-error" : undefined}
          className="h-10 bg-white"
        />
      </label>
      {state?.error && (
        <p id="login-error" role="alert" className="text-sm text-red-700">
          {state.error}
        </p>
      )}
      <Button type="submit" disabled={pending} className="h-10">
        {pending ? "Signing in…" : "Sign in"}
      </Button>
    </form>
  );
}
