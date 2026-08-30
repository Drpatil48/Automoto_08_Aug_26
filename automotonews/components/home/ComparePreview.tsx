import { ComparePreviewTool } from "@/components/home/ComparePreviewTool";
import { SectionHeading } from "@/components/home/SectionHeading";
import type { VehicleSpec } from "@/lib/types";

type ComparePreviewProps = {
  vehicles: VehicleSpec[];
};

export function ComparePreview({ vehicles }: ComparePreviewProps) {
  return (
    <section
      id="compare"
      className="border-y border-zinc-800/80 bg-zinc-950/80 px-4 py-8 sm:px-6 lg:py-12"
      aria-labelledby="compare-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="compare-heading"
          title="COMPARE BEFORE YOU BUY | वाहनांची तुलना करा"
          description="Select two vehicles to compare specs, prices, mileage/range, and key features side-by-side."
          href="/compare"
          linkLabel="Full Compare Tool"
        />
        <div className="mt-6 rounded-2xl border border-zinc-800/90 bg-zinc-900/70 p-4 sm:p-6 lg:p-8 shadow-xl">
          <ComparePreviewTool vehicles={vehicles} />
        </div>
      </div>
    </section>
  );
}
