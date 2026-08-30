"use client";

import dynamic from "next/dynamic";
import type { VehicleSpec } from "@/lib/types";

const CompareTool = dynamic(
  () =>
    import("@/components/compare/CompareTool").then((mod) => mod.CompareTool),
  {
    loading: () => (
      <div
        className="rounded-2xl border border-border bg-background p-6 text-sm text-muted"
        style={{ minHeight: 280 }}
        aria-hidden="true"
      >
        Loading compare…
      </div>
    ),
    ssr: false,
  },
);

type ComparePreviewToolProps = {
  vehicles: VehicleSpec[];
};

/**
 * Below-the-fold homepage compare island — deferred client bundle.
 */
export function ComparePreviewTool({ vehicles }: ComparePreviewToolProps) {
  return (
    <CompareTool
      vehicles={vehicles}
      initialA={vehicles[0]?.id ?? ""}
      initialB={vehicles[1]?.id ?? ""}
      compact
    />
  );
}
