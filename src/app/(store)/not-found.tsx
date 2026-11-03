import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-32 text-center">
      <h1 className="font-heading text-4xl text-ink">This page could not be found.</h1>
      <p className="text-stone">The product may have been removed.</p>
      <Link href="/shop" className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white">
        Shop all products
      </Link>
    </section>
  );
}
