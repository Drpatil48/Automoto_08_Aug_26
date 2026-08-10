import Image from "next/image";
import type { ReactNode } from "react";
import { formatSpecValue, vehicleFullLabel } from "@/lib/vehicles";
import type { VehicleSpec } from "@/lib/types";

type VehicleCardProps = {
  vehicle: VehicleSpec;
  action?: ReactNode;
};

export function VehicleCard({ vehicle, action }: VehicleCardProps) {
  const image = vehicle.images[0] ?? null;

  return (
    <article className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="relative aspect-[16/10] bg-muted/15">
        {image ? (
          <Image
            src={image}
            alt={vehicleFullLabel(vehicle)}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted">
            No image
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">
          {vehicle.brand}
        </p>
        <h3 className="mt-1 text-lg font-semibold">
          {vehicle.model}{" "}
          <span className="text-sm font-medium text-muted">{vehicle.variant}</span>
        </h3>
        <p className="mt-2 text-sm text-muted">
          {formatSpecValue(vehicle.fuelType)}
        </p>
        {action ? <div className="mt-4">{action}</div> : null}
      </div>
    </article>
  );
}
