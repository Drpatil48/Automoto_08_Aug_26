"use client";

import Image from "next/image";
import Link from "next/link";
import { useCompareTray } from "@/components/compare/CompareTrayProvider";
import { vehicleLabel } from "@/lib/vehicles";

export function CompareTray() {
  const { selectedVehicles, trayCategory, errorMessage, removeVehicle, clear, clearError } =
    useCompareTray();

  if (selectedVehicles.length === 0 && !errorMessage) return null;

  const href =
    selectedVehicles.length === 2
      ? `/compare?a=${selectedVehicles[0].id}&b=${selectedVehicles[1].id}`
      : `/compare?a=${selectedVehicles[0]?.id ?? ""}`;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-800 bg-zinc-950/95 text-zinc-100 backdrop-blur-md shadow-2xl"
      role="region"
      aria-label="Compare tray"
      data-compare-tray
    >
      {errorMessage ? (
        <div className="bg-red-950 border-b border-red-800 px-4 py-2 text-center text-xs font-bold text-red-200 flex items-center justify-between">
          <span>⚠️ {errorMessage}</span>
          <button
            type="button"
            onClick={clearError}
            className="ml-2 rounded bg-red-900/60 px-2 py-0.5 text-xs text-white hover:bg-red-800"
          >
            Dismiss
          </button>
        </div>
      ) : null}

      {selectedVehicles.length > 0 ? (
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex flex-1 flex-wrap items-center gap-3">
            <p className="text-xs font-extrabold uppercase tracking-wider text-red-500 flex items-center gap-1.5">
              <span>{trayCategory === "bike" ? "🏍️ Bike Compare" : "🚗 Car Compare"}</span>
              <span className="text-zinc-400 font-normal">({selectedVehicles.length}/2)</span>
            </p>
            {selectedVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-1.5"
              >
                <div className="relative h-7 w-11 overflow-hidden rounded-md bg-zinc-800">
                  {vehicle.images[0] ? (
                    <Image
                      src={vehicle.images[0]}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  ) : null}
                </div>
                <span className="max-w-[9rem] truncate text-xs font-bold text-white">
                  {vehicleLabel(vehicle)}
                </span>
                <button
                  type="button"
                  onClick={() => removeVehicle(vehicle.id)}
                  className="flex size-6 items-center justify-center rounded-full text-xs font-bold text-zinc-400 hover:bg-zinc-800 hover:text-white"
                  aria-label={`Remove ${vehicleLabel(vehicle)} from compare`}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={clear}
              className="inline-flex min-h-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 px-4 text-xs font-bold uppercase tracking-wider text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
            >
              Clear
            </button>
            <Link
              href={href}
              className="inline-flex min-h-10 items-center justify-center rounded-xl bg-red-600 px-5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-red-950/40 transition-all hover:bg-red-500 hover:shadow-red-900/60"
            >
              {selectedVehicles.length === 2 ? "Compare Now →" : "Open Compare"}
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
