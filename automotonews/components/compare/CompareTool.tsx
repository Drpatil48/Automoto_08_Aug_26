"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SpecComparisonTable } from "@/components/compare/SpecComparisonTable";
import { VehicleCard } from "@/components/compare/VehicleCard";
import { VehicleSelector } from "@/components/compare/VehicleSelector";
import { useCompareTray } from "@/components/compare/CompareTrayProvider";
import type { VehicleCategory, VehicleSpec } from "@/lib/types";
import {
  getVehicleById,
  getVehicleCategory,
  validateComparison,
  vehicleLabel,
} from "@/lib/vehicles";

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

  // Determine active category mode ("car" | "bike" | null)
  const activeCategoryMode = useMemo<VehicleCategory | null>(() => {
    if (selected.a) return getVehicleCategory(selected.a);
    if (selected.b) return getVehicleCategory(selected.b);
    return null;
  }, [selected.a, selected.b]);

  const validation = useMemo(
    () => validateComparison(modelA, modelB),
    [modelA, modelB],
  );

  // Filter vehicles based on active category mode
  const selectableVehicles = useMemo(() => {
    if (!activeCategoryMode) return vehicles;
    return vehicles.filter((v) => getVehicleCategory(v) === activeCategoryMode);
  }, [activeCategoryMode, vehicles]);

  function handleSelectA(id: string) {
    setModelA(id);
    if (id) {
      const newA = getVehicleById(id);
      if (newA && selected.b && getVehicleCategory(newA) !== getVehicleCategory(selected.b)) {
        setModelB("");
      }
    }
  }

  function handleSelectB(id: string) {
    setModelB(id);
    if (id) {
      const newB = getVehicleById(id);
      if (newB && selected.a && getVehicleCategory(newB) !== getVehicleCategory(selected.a)) {
        setModelA("");
      }
    }
  }

  function handleSetMode(mode: VehicleCategory) {
    // If current selections don't match target mode, reset them
    if (selected.a && getVehicleCategory(selected.a) !== mode) {
      setModelA("");
    }
    if (selected.b && getVehicleCategory(selected.b) !== mode) {
      setModelB("");
    }
  }

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
    <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/80 p-5 sm:p-7 shadow-xl">
      {/* Category Mode Selector Tabs */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800/80 pb-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleSetMode("car")}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-black uppercase tracking-wider transition-all ${
              activeCategoryMode === "car" || (!activeCategoryMode && true)
                ? "bg-red-600 text-white shadow-md shadow-red-950/40"
                : "border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white"
            }`}
          >
            🚗 Compare Cars
          </button>
          <button
            type="button"
            onClick={() => handleSetMode("bike")}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-black uppercase tracking-wider transition-all ${
              activeCategoryMode === "bike"
                ? "bg-amber-600 text-white shadow-md shadow-amber-950/40"
                : "border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white"
            }`}
          >
            🏍️ Compare Bikes
          </button>
        </div>
        {activeCategoryMode ? (
          <span className="text-xs font-bold text-zinc-400">
            Comparing: <strong className="text-white uppercase">{activeCategoryMode === "bike" ? "Bikes & Scooters" : "Cars & SUVs"}</strong>
          </span>
        ) : null}
      </div>

      <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-end">
        <VehicleSelector
          id={compact ? "preview-model-a" : "compare-model-a"}
          label={
            activeCategoryMode
              ? `Vehicle A (${activeCategoryMode === "bike" ? "बाईक निवडा" : "कार निवडा"})`
              : "Vehicle A (पहिलं वाहन)"
          }
          vehicles={selectableVehicles}
          value={modelA}
          excludeId={modelB || undefined}
          category={activeCategoryMode || undefined}
          onChange={handleSelectA}
        />
        <div className="hidden pb-3 text-center text-xs font-black uppercase tracking-widest text-zinc-500 md:block">
          VS
        </div>
        <VehicleSelector
          id={compact ? "preview-model-b" : "compare-model-b"}
          label={
            activeCategoryMode
              ? `Vehicle B (${activeCategoryMode === "bike" ? "बाईक निवडा" : "कार निवडा"})`
              : "Vehicle B (दुसरं वाहन)"
          }
          vehicles={selectableVehicles}
          value={modelB}
          excludeId={modelA || undefined}
          category={activeCategoryMode || undefined}
          onChange={handleSelectB}
        />
      </div>

      <div
        className="mt-6"
        role="region"
        aria-live="polite"
        aria-label="Comparison results"
      >
        {/* Category Mismatch Error State (e.g. /compare?a=classic-350&b=creta) */}
        {!validation.isValid && validation.errorType === "mismatch" ? (
          <div className="rounded-2xl border border-red-800 bg-red-950/40 p-6 text-center shadow-lg">
            <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-red-900/60 text-xl text-red-400">
              ⚠️
            </div>
            <h3 className="text-base font-extrabold uppercase tracking-wide text-white">
              Category Mismatch
            </h3>
            <p className="mt-2 text-xs sm:text-sm font-medium text-red-200">
              {validation.message}
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {selected.a ? (
                <button
                  type="button"
                  onClick={() => setModelB("")}
                  className="rounded-xl border border-red-700 bg-red-900/80 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-red-800"
                >
                  Clear Vehicle B & Keep {vehicleLabel(selected.a)}
                </button>
              ) : null}
              {selected.b ? (
                <button
                  type="button"
                  onClick={() => setModelA("")}
                  className="rounded-xl border border-red-700 bg-red-900/80 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-red-800"
                >
                  Clear Vehicle A & Keep {vehicleLabel(selected.b)}
                </button>
              ) : null}
              <button
                type="button"
                onClick={() => {
                  setModelA("");
                  setModelB("");
                }}
                className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white"
              >
                Reset Both
              </button>
            </div>
          </div>
        ) : !selected.a && !selected.b ? (
          <p className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/40 p-8 text-center text-sm sm:text-base font-semibold text-zinc-300">
            तुलना करण्यासाठी दोन वाहने निवडा (Select two cars or two bikes to compare price, mileage/range, and key specs).
          </p>
        ) : !validation.isValid ? (
          <div className="space-y-4">
            <p className="rounded-xl border border-amber-900/40 bg-amber-950/20 p-4 text-center text-xs font-semibold text-amber-300">
              {validation.message}
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {selected.a ? (
                <VehicleCard
                  vehicle={selected.a}
                  action={
                    <button
                      type="button"
                      onClick={() => toggleTray(selected.a!.id)}
                      className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-xs font-bold uppercase tracking-wider text-zinc-200 transition-colors hover:border-red-600/50 hover:bg-zinc-800 hover:text-white"
                    >
                      {isSelected(selected.a.id)
                        ? "Remove from compare tray"
                        : "Add to compare tray"}
                    </button>
                  }
                />
              ) : (
                <p className="rounded-xl border border-dashed border-zinc-800 bg-zinc-900/40 p-6 text-xs text-zinc-400">
                  Choose Vehicle A above.
                </p>
              )}
              {selected.b ? (
                <VehicleCard
                  vehicle={selected.b}
                  action={
                    <button
                      type="button"
                      onClick={() => toggleTray(selected.b!.id)}
                      className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-xs font-bold uppercase tracking-wider text-zinc-200 transition-colors hover:border-red-600/50 hover:bg-zinc-800 hover:text-white"
                    >
                      {isSelected(selected.b.id)
                        ? "Remove from compare tray"
                        : "Add to compare tray"}
                    </button>
                  }
                />
              ) : (
                <p className="rounded-xl border border-dashed border-zinc-800 bg-zinc-900/40 p-6 text-xs text-zinc-400">
                  Choose a second {activeCategoryMode === "bike" ? "bike" : "car"} to complete the comparison.
                </p>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <SpecComparisonTable
              vehicleA={selected.a!}
              vehicleB={selected.b!}
              category={validation.category}
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  addVehicle(selected.a!.id);
                  addVehicle(selected.b!.id);
                }}
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 px-5 text-xs font-bold uppercase tracking-wider text-zinc-200 transition-colors hover:border-red-600/50 hover:bg-zinc-800 hover:text-white"
              >
                Save both to compare tray
              </button>
              {compact ? (
                <Link
                  href={`/compare?a=${selected.a!.id}&b=${selected.b!.id}`}
                  className="inline-flex min-h-11 items-center justify-center rounded-xl bg-red-600 px-5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-red-950/40 transition-all hover:bg-red-500 hover:shadow-red-900/60"
                >
                  Open full compare →
                </Link>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
