"use client";

import { vehicleLabel } from "@/lib/vehicles";
import type { VehicleSpec } from "@/lib/types";

type VehicleSelectorProps = {
  id: string;
  label: string;
  vehicles: VehicleSpec[];
  value: string;
  excludeId?: string;
  onChange: (id: string) => void;
};

export function VehicleSelector({
  id,
  label,
  vehicles,
  value,
  excludeId,
  onChange,
}: VehicleSelectorProps) {
  const options = excludeId
    ? vehicles.filter((vehicle) => vehicle.id !== excludeId)
    : vehicles;

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-11 w-full rounded-md border border-border bg-surface px-3 text-sm"
        aria-label={label}
      >
        <option value="">Select a vehicle</option>
        {options.map((vehicle) => (
          <option key={vehicle.id} value={vehicle.id}>
            {vehicleLabel(vehicle)}
            {vehicle.variant ? ` · ${vehicle.variant}` : ""}
          </option>
        ))}
      </select>
    </div>
  );
}
