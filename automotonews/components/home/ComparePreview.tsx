"use client";

import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/home/SectionHeading";
import type { VehicleSpec } from "@/lib/types";

type ComparePreviewProps = {
  vehicles: VehicleSpec[];
};

function vehicleLabel(vehicle: VehicleSpec): string {
  return `${vehicle.brand} ${vehicle.model}`;
}

function SpecTile({ vehicle }: { vehicle: VehicleSpec }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            {vehicle.brand}
          </p>
          <h3 className="mt-1 text-lg font-semibold">
            {vehicle.model}{" "}
            <span className="text-sm font-medium text-muted">{vehicle.variant}</span>
          </h3>
        </div>
        <span className="rounded-md bg-background px-2 py-1 text-xs font-semibold uppercase text-foreground">
          {vehicle.fuelType}
        </span>
      </div>
      <dl className="mt-4 grid gap-2 text-sm">
        <div className="flex justify-between gap-3 border-b border-border py-2">
          <dt className="text-muted">Price</dt>
          <dd className="font-medium">{vehicle.priceRangeINR}</dd>
        </div>
        <div className="flex justify-between gap-3 border-b border-border py-2">
          <dt className="text-muted">
            {vehicle.rangeKm != null ? "Range" : "Mileage"}
          </dt>
          <dd className="font-medium">
            {vehicle.rangeKm != null
              ? `${vehicle.rangeKm} km`
              : `${vehicle.mileageKmpl ?? "—"} kmpl`}
          </dd>
        </div>
        <div className="flex justify-between gap-3 border-b border-border py-2">
          <dt className="text-muted">Powertrain</dt>
          <dd className="font-medium">{vehicle.engineOrBattery}</dd>
        </div>
        <div className="flex justify-between gap-3 py-2">
          <dt className="text-muted">Seating</dt>
          <dd className="font-medium">{vehicle.seatingCapacity}</dd>
        </div>
      </dl>
    </div>
  );
}

export function ComparePreview({ vehicles }: ComparePreviewProps) {
  const [modelA, setModelA] = useState(vehicles[0]?.id ?? "");
  const [modelB, setModelB] = useState(vehicles[1]?.id ?? "");

  const selected = useMemo(() => {
    const a = vehicles.find((item) => item.id === modelA) ?? null;
    const b = vehicles.find((item) => item.id === modelB) ?? null;
    return { a, b };
  }, [modelA, modelB, vehicles]);

  const canCompare =
    selected.a != null && selected.b != null && selected.a.id !== selected.b.id;

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

        <div className="rounded-2xl border border-border bg-background p-4 sm:p-6">
          <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto] md:items-end">
            <div>
              <label htmlFor="modelA" className="mb-2 block text-sm font-medium">
                Model A
              </label>
              <select
                id="modelA"
                value={modelA}
                onChange={(event) => setModelA(event.target.value)}
                className="min-h-11 w-full rounded-md border border-border bg-surface px-3 text-sm"
                aria-label="Select first vehicle"
              >
                {vehicles.map((vehicle) => (
                  <option key={vehicle.id} value={vehicle.id}>
                    {vehicleLabel(vehicle)}
                  </option>
                ))}
              </select>
            </div>

            <p className="hidden pb-3 text-center text-sm font-semibold text-muted md:block">
              vs
            </p>

            <div>
              <label htmlFor="modelB" className="mb-2 block text-sm font-medium">
                Model B
              </label>
              <select
                id="modelB"
                value={modelB}
                onChange={(event) => setModelB(event.target.value)}
                className="min-h-11 w-full rounded-md border border-border bg-surface px-3 text-sm"
                aria-label="Select second vehicle"
              >
                {vehicles.map((vehicle) => (
                  <option key={vehicle.id} value={vehicle.id}>
                    {vehicleLabel(vehicle)}
                  </option>
                ))}
              </select>
            </div>

            <p className="text-sm text-muted md:pb-3 md:text-center">
              Mock preview
            </p>
          </div>

          <div
            className="mt-6"
            role="region"
            aria-live="polite"
            aria-label="Comparison results"
          >
            {!canCompare ? (
              <p className="rounded-lg border border-dashed border-border p-4 text-sm text-muted">
                Choose two different vehicles to preview specs. Full compare
                tooling ships in Phase 6.
              </p>
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                {selected.a ? <SpecTile vehicle={selected.a} /> : null}
                {selected.b ? <SpecTile vehicle={selected.b} /> : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
