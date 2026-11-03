"use client";

import Link from "next/link";
import { type ReactNode, startTransition, useActionState, useEffect, useState } from "react";

import type { FormState } from "@/app/admin/actions";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories } from "@/data/categories";
import { type PriceSet, type Product, productBadges, productStatuses } from "@/data/products";
import { formatNGN } from "@/lib/format";
import type { PriceEditor } from "@/lib/price-editor";
import { cn } from "@/lib/utils";

type Action = (state: FormState, formData: FormData) => Promise<FormState>;

const control = "h-10 bg-white";
const textareaClass =
  "min-h-28 w-full rounded-lg border border-input bg-white px-2.5 py-2 text-base outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive md:text-sm";

function Field({
  label,
  name,
  hint,
  error,
  children,
  className,
}: {
  label: string;
  name: string;
  hint?: ReactNode;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${name}-error`} className="text-xs text-red-700">
          {error}
        </p>
      ) : (
        hint && <p className="text-xs text-stone">{hint}</p>
      )}
    </div>
  );
}

function Section({ title, description, children }: { title: string; description?: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-black/10 bg-white p-5 sm:p-6">
      <h2 className="text-base font-semibold text-ink">{title}</h2>
      {description && <p className="pt-1 text-sm text-stone">{description}</p>}
      <div className="flex flex-col gap-5 pt-5">{children}</div>
    </section>
  );
}

const errorProps = (errors: Record<string, string> | undefined, name: string) =>
  errors?.[name] ? { "aria-invalid": true as const, "aria-describedby": `${name}-error` } : {};

const money = (value: number | undefined) => (value === undefined ? "" : String(value));
const placeholder = (value: number | undefined) => (value === undefined ? "—" : formatNGN(value));

/** Price / compare-at / subscribe inputs; empty means "use the design's price" (shown as the placeholder). */
function PriceRow({
  prefix,
  label,
  value,
  fallback,
  subscribe,
  errors,
}: {
  prefix: string;
  label: string;
  value?: PriceSet;
  fallback: PriceSet;
  subscribe: boolean;
  errors?: Record<string, string>;
}) {
  const cells: [keyof PriceSet, string][] = [
    ["price", "Price"],
    ["compareAt", "Compare-at"],
    ...(subscribe ? ([["subscribe", "Subscribe"]] as [keyof PriceSet, string][]) : []),
  ];
  return (
    <tr className="align-top">
      <th scope="row" className="py-2 pr-3 text-left text-sm font-normal text-ink">
        {label}
      </th>
      {cells.map(([key, cellLabel]) => {
        const name = `${prefix}.${key}`;
        return (
          <td key={key} className="py-2 pr-3">
            <Input
              id={name}
              name={name}
              inputMode="decimal"
              aria-label={`${label} ${cellLabel}`}
              defaultValue={money(value?.[key])}
              placeholder={placeholder(fallback[key])}
              className={cn(control, "min-w-32 tabular-nums")}
              {...errorProps(errors, name)}
            />
            {errors?.[name] && (
              <p id={`${name}-error`} className="pt-1 text-xs text-red-700">
                {errors[name]}
              </p>
            )}
          </td>
        );
      })}
    </tr>
  );
}

export function ProductForm({
  action,
  product,
  editor,
  designed,
}: {
  action: Action;
  product?: Product;
  editor: PriceEditor;
  designed: boolean;
}) {
  const isNew = !product;
  const [state, formAction, pending] = useActionState(action, undefined);
  const errors = state?.fieldErrors;
  const [preview, setPreview] = useState<string | undefined>(product?.image);

  useEffect(() => {
    return () => {
      if (preview?.startsWith("blob:")) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const variants = editor.variants;

  return (
    <form
      action={formAction}
      // Submit manually so React doesn't reset the fields when the server returns validation errors.
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        startTransition(() => formAction(data));
      }}
      className="flex flex-col gap-6"
      noValidate
    >
      {state?.error && (
        <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {state.error}
        </p>
      )}

      <Section title="Details">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name" name="name" error={errors?.name} className="sm:col-span-2">
            <Input id="name" name="name" required defaultValue={product?.name} className={control} {...errorProps(errors, "name")} />
          </Field>
          <Field label="Short name" name="shortName" hint="Used in the menu and cart. Defaults to the name.">
            <Input id="shortName" name="shortName" defaultValue={product?.shortName} className={control} />
          </Field>
          {isNew ? (
            <Field label="URL slug" name="slug" error={errors?.slug} hint="Leave empty to create it from the name.">
              <Input
                id="slug"
                name="slug"
                placeholder="echo-travel-case"
                pattern="[a-z0-9]+(-[a-z0-9]+)*"
                className={cn(control, "font-mono")}
                {...errorProps(errors, "slug")}
              />
            </Field>
          ) : (
            <Field label="URL slug" name="slug-display" hint="The slug can’t be changed after a product is created.">
              <Input id="slug-display" value={product.slug} readOnly disabled className={cn(control, "font-mono")} />
            </Field>
          )}
          <Field label="Tagline" name="tagline" className="sm:col-span-2">
            <Input id="tagline" name="tagline" defaultValue={product?.tagline} className={control} />
          </Field>
          <Field
            label="Description"
            name="description"
            className="sm:col-span-2"
            hint={designed ? "Only shown on the generic page; this product has a designed page." : "Shown on the product page. Leave a blank line between paragraphs."}
          >
            <textarea id="description" name="description" defaultValue={product?.description} className={textareaClass} />
          </Field>
        </div>
      </Section>

      <Section title="Image" description="PNG, JPG or WebP, up to 5 MB. Square images look best.">
        <div className="flex flex-wrap items-start gap-5">
          <div className="size-32 shrink-0 overflow-hidden rounded-xl bg-haze">
            {preview && (
              // eslint-disable-next-line @next/next/no-img-element -- local blob preview
              <img src={preview} alt="" className="size-full object-cover" />
            )}
          </div>
          <Field label={isNew ? "Product image" : "Replace image"} name="image" error={errors?.image} className="min-w-60 flex-1">
            <Input
              id="image"
              name="image"
              type="file"
              accept="image/png,image/jpeg,image/webp"
              className={cn(control, "py-1.5")}
              onChange={(event) => {
                const file = event.target.files?.[0];
                setPreview(file ? URL.createObjectURL(file) : product?.image);
              }}
              {...errorProps(errors, "image")}
            />
          </Field>
        </div>
      </Section>

      <Section title="Pricing" description="Shown on shop cards, the home carousel and (for machines, bottles and drink mix) the product page. All prices in NGN.">
        <div className="grid gap-5 sm:grid-cols-3">
          <Field label="Price" name="price" error={errors?.price}>
            <Input
              id="price"
              name="price"
              inputMode="decimal"
              defaultValue={money(product?.price)}
              className={cn(control, "tabular-nums")}
              {...errorProps(errors, "price")}
            />
          </Field>
          <Field label="Compare-at price" name="compareAtPrice" error={errors?.compareAtPrice} hint="Shown struck through.">
            <Input
              id="compareAtPrice"
              name="compareAtPrice"
              inputMode="decimal"
              defaultValue={money(product?.compareAtPrice)}
              className={cn(control, "tabular-nums")}
              {...errorProps(errors, "compareAtPrice")}
            />
          </Field>
          <label className="flex items-center gap-2 self-center pt-6 text-sm text-ink">
            <input type="checkbox" name="priceFrom" defaultChecked={product?.priceFrom} className="size-4 accent-ink" />
            Show as “From …”
          </label>
        </div>
      </Section>

      {(editor.base || variants) && (
        <Section
          title="Product page prices"
          description="Leave a field empty to keep the price from the design (shown in grey)."
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs tracking-wide text-stone uppercase">
                  <th scope="col" className="pr-3 pb-1 font-medium">
                    {variants?.label ?? "Option"}
                  </th>
                  <th scope="col" className="pr-3 pb-1 font-medium">
                    Price
                  </th>
                  <th scope="col" className="pr-3 pb-1 font-medium">
                    Compare-at
                  </th>
                  {(editor.base?.subscribe || variants?.subscribe) && (
                    <th scope="col" className="pr-3 pb-1 font-medium">
                      Subscribe
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {editor.base && (
                  <PriceRow
                    prefix="pagePrice"
                    label={variants ? "Default (no option)" : "Page price"}
                    value={product?.pagePrice}
                    fallback={editor.base.default}
                    subscribe={editor.base.subscribe}
                    errors={errors}
                  />
                )}
                {variants?.options.map((option, i) => (
                  <PriceRow
                    key={option.name}
                    prefix={`variant.${i}`}
                    label={option.name}
                    value={product?.variantPrices?.[option.name]}
                    fallback={option.default}
                    subscribe={variants.subscribe}
                    errors={errors}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <input type="hidden" name="variantCount" value={variants?.options.length ?? 0} />
          {variants?.options.map((option, i) => (
            <input key={option.name} type="hidden" name={`variant.${i}.name`} value={option.name} />
          ))}
        </Section>
      )}

      <Section title="Availability">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Status" name="status" error={errors?.status}>
            <select
              id="status"
              name="status"
              defaultValue={product?.status ?? "available"}
              className="h-10 rounded-lg border border-input bg-white px-2.5 text-sm text-ink outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {productStatuses.map((status) => (
                <option key={status.value} value={status.value}>
                  {status.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Review count" name="reviewCount" error={errors?.reviewCount}>
            <Input
              id="reviewCount"
              name="reviewCount"
              inputMode="numeric"
              defaultValue={product?.reviewCount ?? ""}
              className={cn(control, "tabular-nums")}
              {...errorProps(errors, "reviewCount")}
            />
          </Field>
          <label className="flex items-center gap-2 text-sm text-ink sm:col-span-2">
            <input type="checkbox" name="hasDetailPage" defaultChecked={product?.hasDetailPage ?? true} className="size-4 accent-ink" />
            Product has a page (shop cards link to it)
          </label>
        </div>
      </Section>

      <Section title="Badges and categories">
        <fieldset className="flex flex-col gap-2">
          <legend className="pb-2 text-sm font-medium text-ink">Badges</legend>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {productBadges.map((badge) => (
              <label key={badge.value} className="flex items-center gap-2 text-sm text-ink">
                <input
                  type="checkbox"
                  name="badges"
                  value={badge.value}
                  defaultChecked={product?.badges.includes(badge.value)}
                  className="size-4 accent-ink"
                />
                {badge.label}
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset className="flex flex-col gap-2">
          <legend className="pb-2 text-sm font-medium text-ink">Categories</legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {categories.map((category) => (
              <label key={category.slug} className="flex items-center gap-2 text-sm text-ink">
                <input
                  type="checkbox"
                  name="categories"
                  value={category.slug}
                  defaultChecked={product?.categories.includes(category.slug)}
                  className="size-4 accent-ink"
                />
                {category.name}
              </label>
            ))}
          </div>
        </fieldset>
      </Section>

      <div className="sticky bottom-0 -mx-4 flex justify-end gap-2 border-t border-black/10 bg-[#f6f6f7]/95 px-4 py-4 backdrop-blur sm:mx-0 sm:rounded-b-2xl">
        <Link href="/admin" className={cn(buttonVariants({ variant: "outline" }), "h-10 px-4")}>
          Cancel
        </Link>
        <Button type="submit" disabled={pending} className="h-10 px-5">
          {pending ? "Saving…" : isNew ? "Create product" : "Save changes"}
        </Button>
      </div>
    </form>
  );
}
