import { ComparePreviewTool } from "@/components/home/ComparePreviewTool";
import { SectionHeading } from "@/components/home/SectionHeading";
import type { VehicleSpec } from "@/lib/types";

type ComparePreviewProps = {
  vehicles: VehicleSpec[];
};

/**
 * Server-rendered section shell; interactive compare tool is a deferred
 * client island (see ComparePreviewTool).
 */
export function ComparePreview({ vehicles }: ComparePreviewProps) {
  return (
    <section
      id="compare"
      className="border-y border-border bg-surface"
      aria-labelledby="compare-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-10">
        <SectionHeading
          id="compare-heading"
          title="Compare Before You Buy"
          description="Select two models and check price, range, and key specs side by side."
          href="/compare"
          linkLabel="Open full compare"
        />
        <ComparePreviewTool vehicles={vehicles} />
      </div>
    </section>
  );
}
