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
    <article className="overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-900/80 shadow-lg">
      <div className="relative aspect-[16/10] bg-zinc-800">
        {image ? (
          <Image
            src={image}
            alt={vehicleFullLabel(vehicle)}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-zinc-500">
            No image
          </div>
        )}
      </div>
      <div className="p-5">
        <p className="text-[11px] font-black uppercase tracking-widest text-red-500">
          {vehicle.brand}
        </p>
        <h3 className="mt-1 text-lg font-bold text-white">
          {vehicle.model}{" "}
          <span className="text-xs font-normal text-zinc-400">{vehicle.variant}</span>
        </h3>
        <p className="mt-2 text-xs font-medium text-zinc-400">
          {formatSpecValue(vehicle.fuelType)}
        </p>
        {action ? <div className="mt-4">{action}</div> : null}
      </div>
    </article>
  );
}
