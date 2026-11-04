"use client";

import { useActionState } from "react";

import type { FormState } from "@/app/admin/actions";
import { Button } from "@/components/ui/button";
import { type OrderStatus, orderStatuses } from "@/data/orders";

export function OrderStatusForm({
  action,
  current,
}: {
  action: (state: FormState, formData: FormData) => Promise<FormState>;
  current: OrderStatus;
}) {
  const [state, formAction, pending] = useActionState(action, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
        Status
        <select
          name="status"
          defaultValue={current}
          className="h-10 rounded-lg border border-input bg-white px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          {orderStatuses.map((status) => (
            <option key={status.value} value={status.value}>
              {status.label}
            </option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
        Note (optional)
        <textarea
          name="note"
          rows={3}
          maxLength={500}
          placeholder="e.g. Transfer received, ref AW-1001"
          className="rounded-lg border border-input bg-white px-2.5 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        />
      </label>
      {state?.error && (
        <p role="alert" className="text-sm text-red-700">
          {state.error}
        </p>
      )}
      <Button type="submit" disabled={pending} className="h-10">
        {pending ? "Saving…" : "Update order"}
      </Button>
    </form>
  );
}
