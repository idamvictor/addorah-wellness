import Image from "next/image";

import { cn } from "@/lib/utils";

type Cell = string | boolean;

const rows: { label: string; flask: Cell; competitors: Cell }[] = [
  { label: "Capacity", flask: "12oz", competitors: "≤ 8oz" },
  { label: "Lab-tested hydrogen", flask: "Up to 8 ppm (20-min cycle)", competitors: "< 5ppm" },
  { label: "Smart Technology", flask: true, competitors: false },
  { label: "Health App Integrated", flask: true, competitors: false },
  { label: "H2 Analytics Certified", flask: true, competitors: false },
  { label: "No Harmful Chemicals", flask: true, competitors: false },
  { label: "No Heavy Metals", flask: true, competitors: false },
  { label: "Proton Exchange Membrane", flask: true, competitors: false },
  { label: "5-Year Warranty", flask: true, competitors: false },
];

function CellValue({ value }: { value: Cell }) {
  if (value === true) {
    return <Image src="/images/home/icon-yes.svg" alt="Yes" width={20} height={20} className="mx-auto" />;
  }
  if (value === false) {
    return <Image src="/images/home/icon-no.svg" alt="No" width={16} height={16} className="mx-auto" />;
  }
  return <>{value}</>;
}

export function ComparisonTable() {
  return (
    <section className="bg-white px-5 py-[72px]">
      <div className="mx-auto max-w-[760px]">
        <h2 className="text-center font-heading text-[30px] leading-[1.1] font-normal tracking-[-0.01em] text-balance text-ink sm:text-[36px]">
          Not all hydrogen water bottles are the same.
        </h2>
        <table className="mt-10 w-full table-fixed border-collapse text-ink">
          <thead>
            <tr>
              <th className="w-[42%] sm:w-[54%]">
                <span className="sr-only">Feature</span>
              </th>
              <th
                scope="col"
                className="rounded-t-[14px] bg-teal px-2 pt-[26px] pb-[18px] text-base leading-[27px] font-medium text-white sm:text-lg"
              >
                ECHO Flask
              </th>
              <th scope="col" className="px-2 pt-[26px] pb-[18px] text-base leading-[27px] font-medium sm:text-lg">
                Competitors
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const last = i === rows.length - 1;
              return (
                <tr key={row.label}>
                  <th
                    scope="row"
                    className="border-t-[0.8px] border-[#e7edef] px-3 py-[18px] text-left text-sm leading-[21px] font-normal"
                  >
                    {row.label}
                  </th>
                  <td
                    className={cn(
                      "border-t-[0.8px] border-white/25 bg-teal px-3 py-[18px] text-center text-sm leading-6 text-white sm:text-base",
                      last && "rounded-b-[14px] pb-[26px]",
                    )}
                  >
                    <CellValue value={row.flask} />
                  </td>
                  <td className="border-t-[0.8px] border-[#e7edef] px-3 py-[18px] text-center text-sm leading-6 sm:text-base">
                    <CellValue value={row.competitors} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
