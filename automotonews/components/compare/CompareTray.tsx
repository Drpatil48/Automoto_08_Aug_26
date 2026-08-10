"use client";

import Image from "next/image";
import Link from "next/link";
import { useCompareTray } from "@/components/compare/CompareTrayProvider";
import { vehicleLabel } from "@/lib/vehicles";

export function CompareTray() {
  const { selectedVehicles, removeVehicle, clear } = useCompareTray();

  if (selectedVehicles.length === 0) return null;

  const href =
    selectedVehicles.length === 2
      ? `/compare?a=${selectedVehicles[0].id}&b=${selectedVehicles[1].id}`
      : `/compare?a=${selectedVehicles[0].id}`;

  return (
    <div
      className="fixed inset-x-0 bottom-[4.5rem] z-50 border-t border-border bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/90 md:bottom-0"
      role="region"
      aria-label="Compare tray"
      data-compare-tray
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 flex-wrap items-center gap-3">
          <p className="text-sm font-semibold">Compare ({selectedVehicles.length}/2)</p>
          {selectedVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="flex items-center gap-2 rounded-md border border-border bg-background px-2 py-1.5"
            >
              <div className="relative h-8 w-12 overflow-hidden rounded bg-muted/20">
                {vehicle.images[0] ? (
                  <Image
                    src={vehicle.images[0]}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                ) : null}
              </div>
              <span className="max-w-[9rem] truncate text-sm font-medium">
                {vehicleLabel(vehicle)}
              </span>
              <button
                type="button"
                onClick={() => removeVehicle(vehicle.id)}
                className="min-h-8 min-w-8 rounded text-sm text-muted hover:bg-background hover:text-foreground"
                aria-label={`Remove ${vehicleLabel(vehicle)} from compare`}
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={clear}
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-4 text-sm font-medium hover:bg-background"
          >
            Clear
          </button>
          <Link
            href={href}
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-4 text-sm font-semibold text-white hover:bg-accent-dark"
          >
            {selectedVehicles.length === 2 ? "Compare now" : "Open compare"}
          </Link>
        </div>
      </div>
    </div>
  );
}
