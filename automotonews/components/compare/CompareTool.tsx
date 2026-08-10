"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SpecComparisonTable } from "@/components/compare/SpecComparisonTable";
import { VehicleCard } from "@/components/compare/VehicleCard";
import { VehicleSelector } from "@/components/compare/VehicleSelector";
import { useCompareTray } from "@/components/compare/CompareTrayProvider";
import type { VehicleSpec } from "@/lib/types";

type CompareToolProps = {
  vehicles: VehicleSpec[];
  initialA?: string;
  initialB?: string;
  compact?: boolean;
};

export function CompareTool({
  vehicles,
  initialA = "",
  initialB = "",
  compact = false,
}: CompareToolProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { addVehicle, removeVehicle, isSelected } = useCompareTray();

  const [modelA, setModelA] = useState(initialA);
  const [modelB, setModelB] = useState(initialB);
  const [syncedInitials, setSyncedInitials] = useState({
    a: initialA,
    b: initialB,
  });

  if (initialA !== syncedInitials.a || initialB !== syncedInitials.b) {
    setSyncedInitials({ a: initialA, b: initialB });
    setModelA(initialA);
    setModelB(initialB);
  }

  const selected = useMemo(() => {
    const a = vehicles.find((item) => item.id === modelA) ?? null;
    const b = vehicles.find((item) => item.id === modelB) ?? null;
    return { a, b };
  }, [modelA, modelB, vehicles]);

  const canCompare =
    selected.a != null && selected.b != null && selected.a.id !== selected.b.id;

  useEffect(() => {
    if (compact || pathname !== "/compare") return;
    const params = new URLSearchParams(searchParams.toString());
    if (modelA) params.set("a", modelA);
    else params.delete("a");
    if (modelB) params.set("b", modelB);
    else params.delete("b");
    const next = params.toString();
    const current = searchParams.toString();
    if (next !== current) {
      router.replace(next ? `${pathname}?${next}` : pathname, { scroll: false });
    }
  }, [compact, modelA, modelB, pathname, router, searchParams]);

  function toggleTray(id: string) {
    if (isSelected(id)) removeVehicle(id);
    else addVehicle(id);
  }

  return (
    <div className="rounded-2xl border border-border bg-background p-4 sm:p-6">
      <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-end">
        <VehicleSelector
          id={compact ? "preview-model-a" : "compare-model-a"}
          label="Vehicle A"
          vehicles={vehicles}
          value={modelA}
          excludeId={modelB || undefined}
          onChange={setModelA}
        />
        <p className="hidden pb-3 text-center text-sm font-semibold text-muted md:block">
          vs
        </p>
        <VehicleSelector
          id={compact ? "preview-model-b" : "compare-model-b"}
          label="Vehicle B"
          vehicles={vehicles}
          value={modelB}
          excludeId={modelA || undefined}
          onChange={setModelB}
        />
      </div>

      <div
        className="mt-6"
        role="region"
        aria-live="polite"
        aria-label="Comparison results"
      >
        {!selected.a && !selected.b ? (
          <p className="rounded-lg border border-dashed border-border p-4 text-sm text-muted">
            Select two vehicles to compare price, mileage/range, powertrain, and
            seating.
          </p>
        ) : !canCompare ? (
          <div className="grid gap-4 md:grid-cols-2">
            {selected.a ? (
              <VehicleCard
                vehicle={selected.a}
                action={
                  <button
                    type="button"
                    onClick={() => toggleTray(selected.a!.id)}
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-md border border-border text-sm font-medium hover:bg-background"
                  >
                    {isSelected(selected.a.id)
                      ? "Remove from tray"
                      : "Add to compare tray"}
                  </button>
                }
              />
            ) : (
              <p className="rounded-lg border border-dashed border-border p-4 text-sm text-muted">
                Choose Vehicle A.
              </p>
            )}
            {selected.b ? (
              <VehicleCard
                vehicle={selected.b}
                action={
                  <button
                    type="button"
                    onClick={() => toggleTray(selected.b!.id)}
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-md border border-border text-sm font-medium hover:bg-background"
                  >
                    {isSelected(selected.b.id)
                      ? "Remove from tray"
                      : "Add to compare tray"}
                  </button>
                }
              />
            ) : (
              <p className="rounded-lg border border-dashed border-border p-4 text-sm text-muted">
                Choose a second, different vehicle to complete the comparison.
              </p>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <SpecComparisonTable vehicleA={selected.a!} vehicleB={selected.b!} />
            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  addVehicle(selected.a!.id);
                  addVehicle(selected.b!.id);
                }}
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-4 text-sm font-medium hover:bg-surface"
              >
                Save both to compare tray
              </button>
              {compact ? (
                <Link
                  href={`/compare?a=${selected.a!.id}&b=${selected.b!.id}`}
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-4 text-sm font-semibold text-white hover:bg-accent-dark"
                >
                  Open full compare
                </Link>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
