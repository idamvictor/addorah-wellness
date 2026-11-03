import Image from "next/image";

const testimonials = [
  {
    quote:
      "I am 54 yrs old, and my body felt like it was 90 until I started using hydrogen water. No more aches and pains in my back and joints. Abdominal fat is way down, lost 23 lbs in 2 months.",
    name: "Bryan",
  },
  {
    quote:
      "The energy came day one! Sleep improved day one! Fast forward to day eight, reduced joint pain and mental clarity that I can’t even describe. Sold!",
    name: "Julie",
  },
];

export function RealResults() {
  return (
    <section className="relative overflow-hidden bg-night py-[126px]">
      <Image
        src="/images/home/results-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="relative px-5">
        <div className="flex items-center gap-2">
          <Image src="/images/home/reviews-stars.png" alt="5 stars" width={106} height={18} />
          <p className="text-xs leading-[18px] tracking-[0.36px] text-[#bbb7b7]">
            1,200+ Verified 5 Star Reviews
          </p>
        </div>
        <h2 className="pt-4 font-heading text-[36px] leading-[1.25] font-normal tracking-[-0.02em] text-white sm:text-[45px]">
          Real People, Real Results
        </h2>

        <div className="grid gap-6 pt-16 md:grid-cols-2 md:gap-12">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col rounded-2xl border-[0.8px] border-stone p-8 sm:p-12"
            >
              <Image src="/images/home/reviews-stars.png" alt="5 stars" width={106} height={18} />
              <blockquote className="pt-8 text-lg leading-[1.5] text-white sm:text-[22px] sm:leading-[33px]">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="pt-8">
                <p className="text-[22px] leading-[33px] font-semibold text-white">{testimonial.name}</p>
                <p className="pt-1 text-base leading-6 tracking-[0.48px] text-[#bbb7b7]">
                  Verified Customer
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
