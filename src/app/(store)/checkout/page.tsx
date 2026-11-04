import type { Metadata } from "next";

import { CheckoutForm } from "@/components/checkout/checkout-form";

export const metadata: Metadata = { title: "Checkout", robots: { index: false } };

export default function CheckoutPage() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-5 pt-10 pb-24 sm:px-8 lg:pt-14">
      <CheckoutForm />
    </section>
  );
}
