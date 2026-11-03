"use client";

import { useRef } from "react";

import { deleteProduct } from "@/app/admin/actions";
import { Button } from "@/components/ui/button";

export function DeleteProductButton({ slug, name, designed }: { slug: string; name: string; designed: boolean }) {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        className="rounded-md px-2.5 py-1.5 text-sm text-red-700 hover:bg-red-50"
      >
        Delete
      </button>
      <dialog
        ref={dialog}
        aria-labelledby={`delete-${slug}-title`}
        className="m-auto w-[min(440px,calc(100vw-2rem))] rounded-2xl p-6 text-ink backdrop:bg-black/40"
        onClick={(event) => event.target === dialog.current && dialog.current?.close()}
      >
        <h2 id={`delete-${slug}-title`} className="text-lg font-semibold">
          Delete {name}?
        </h2>
        <p className="pt-2 text-sm leading-6 text-stone">
          It will be removed from the shop and its page will show “not found”.
          {designed && " Its designed page stays in the code and comes back if a product with this slug is added again."}{" "}
          This can’t be undone from here.
        </p>
        <form action={deleteProduct} className="flex justify-end gap-2 pt-6">
          <input type="hidden" name="slug" value={slug} />
          <Button type="button" variant="outline" onClick={() => dialog.current?.close()}>
            Cancel
          </Button>
          <Button type="submit" variant="destructive">
            Delete product
          </Button>
        </form>
      </dialog>
    </>
  );
}
