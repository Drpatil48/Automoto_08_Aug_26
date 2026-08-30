import type { Metadata } from "next";
import { Suspense } from "react";
import { Breadcrumbs } from "@/components/article/Breadcrumbs";
import { AddToCompareButton } from "@/components/compare/AddToCompareButton";
import { CompareTool } from "@/components/compare/CompareTool";
import { VehicleCard } from "@/components/compare/VehicleCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllVehicles, getVehicleCategory, validateComparison } from "@/lib/vehicles";
import {
  buildBreadcrumbJsonLd,
  buildPageMetadata,
} from "@/lib/seo";

type ComparePageProps = {
  searchParams: Promise<{ a?: string; b?: string }>;
};

export const metadata: Metadata = buildPageMetadata({
  title: "Compare Cars & Bikes",
  description:
    "Compare two cars or two bikes side by side — detailed price, mileage or range, engine displacement, boot space, seat height, and safety specs.",
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
  const validation = validateComparison(a, b);

  const initialA = a ?? "";
  const initialB = b ?? "";

  const categoryLabel = validation.isValid
    ? validation.category === "bike"
      ? "Bikes"
      : "Cars"
    : validation.vehicleA
    ? getVehicleCategory(validation.vehicleA) === "bike"
      ? "Bikes"
      : "Cars"
    : null;

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Compare", href: "/compare" },
    ...(categoryLabel ? [{ label: categoryLabel }] : []),
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Compare", path: "/compare" },
          ...(categoryLabel
            ? [{ name: categoryLabel, path: `/compare?category=${categoryLabel.toLowerCase()}` }]
            : []),
        ])}
      />
      <Breadcrumbs items={breadcrumbs} />

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
          {categoryLabel ? `Compare ${categoryLabel}` : "Compare Vehicles"}
        </h1>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-red-950/80 border border-red-800/60 px-3 py-1 text-xs font-bold text-red-400">
            🚗 Car vs Car
          </span>
          <span className="rounded-full bg-amber-950/80 border border-amber-800/60 px-3 py-1 text-xs font-bold text-amber-400">
            🏍️ Bike vs Bike
          </span>
        </div>
      </div>

      <p className="mt-3 max-w-3xl text-xs sm:text-sm leading-relaxed text-zinc-400">
        Choose two cars or two bikes to compare prices, engine displacement, mileage or EV range, seating, boot space, seat height, and safety features. Cross-category comparison (Cars vs Bikes) is strictly separated for factual accuracy.
      </p>

      <div className="mt-8">
        <Suspense
          fallback={
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-sm text-zinc-400">
              Loading compare tool…
            </div>
          }
        >
          <ComparePageInner initialA={initialA} initialB={initialB} />
        </Suspense>
      </div>

      <section className="mt-14" aria-labelledby="browse-vehicles-heading">
        <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
          <div>
            <h2 id="browse-vehicles-heading" className="text-lg font-black uppercase tracking-wider text-white">
              BROWSE VEHICLE CATALOG
            </h2>
            <p className="mt-1 text-xs text-zinc-400">
              Select any car or bike below to add to your compare tray.
            </p>
          </div>
        </div>

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
