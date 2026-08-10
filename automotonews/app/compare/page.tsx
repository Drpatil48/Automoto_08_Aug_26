import type { Metadata } from "next";
import { Suspense } from "react";
import { Breadcrumbs } from "@/components/article/Breadcrumbs";
import { AddToCompareButton } from "@/components/compare/AddToCompareButton";
import { CompareTool } from "@/components/compare/CompareTool";
import { VehicleCard } from "@/components/compare/VehicleCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllVehicles, getVehicleById } from "@/lib/vehicles";
import {
  buildBreadcrumbJsonLd,
  buildPageMetadata,
} from "@/lib/seo";

type ComparePageProps = {
  searchParams: Promise<{ a?: string; b?: string }>;
};

export const metadata: Metadata = buildPageMetadata({
  title: "Compare Vehicles",
  description:
    "Compare two cars or bikes side by side — price, mileage or range, engine or battery, and seating.",
  path: "/compare",
});

function ComparePageInner({
  initialA,
  initialB,
}: {
  initialA: string;
  initialB: string;
}) {
  const vehicles = getAllVehicles();

  return (
    <CompareTool vehicles={vehicles} initialA={initialA} initialB={initialB} />
  );
}

export default async function ComparePage({ searchParams }: ComparePageProps) {
  const { a, b } = await searchParams;
  const vehicles = getAllVehicles();
  const initialA = a && getVehicleById(a) ? a : "";
  const initialB = b && getVehicleById(b) ? b : "";

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Compare", path: "/compare" },
        ])}
      />
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Compare" }]}
      />
      <h1 className="text-3xl font-bold tracking-tight">Compare Vehicles</h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
        Choose two models to compare price, mileage or range, engine or battery,
        and seating. Specs marked Unavailable are not confirmed in our dataset.
        Vehicle figures shown here are provisional sample data for the tool UI —
        verify against OEM sources before treating them as publication facts.
      </p>

      <div className="mt-8">
        <Suspense
          fallback={
            <div className="rounded-2xl border border-border bg-background p-6 text-sm text-muted">
              Loading compare tool…
            </div>
          }
        >
          <ComparePageInner initialA={initialA} initialB={initialB} />
        </Suspense>
      </div>

      <section className="mt-12" aria-labelledby="browse-vehicles-heading">
        <h2 id="browse-vehicles-heading" className="text-xl font-semibold">
          Browse vehicles
        </h2>
        <p className="mt-2 text-sm text-muted">
          Add models to the compare tray, then open a side-by-side view.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              action={<AddToCompareButton vehicleId={vehicle.id} />}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
