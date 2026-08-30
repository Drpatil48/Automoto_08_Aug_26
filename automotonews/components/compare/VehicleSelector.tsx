"use client";

import { isBike, vehicleLabel } from "@/lib/vehicles";
import type { VehicleCategory, VehicleSpec } from "@/lib/types";

type VehicleSelectorProps = {
  id: string;
  label: string;
  vehicles: VehicleSpec[];
  value: string;
  excludeId?: string;
  category?: VehicleCategory;
  onChange: (id: string) => void;
};

export function VehicleSelector({
  id,
  label,
  vehicles,
  value,
  excludeId,
  category,
  onChange,
}: VehicleSelectorProps) {
  const filtered = excludeId
    ? vehicles.filter((vehicle) => vehicle.id !== excludeId)
    : vehicles;

  const cars = filtered.filter((v) => !isBike(v));
  const bikes = filtered.filter((v) => isBike(v));

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-300">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-12 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 text-sm font-semibold text-white focus:border-red-600 focus:outline-none cursor-pointer"
        aria-label={label}
      >
        <option value="" className="bg-zinc-900 text-zinc-400">
          {category === "bike"
            ? "Select a bike..."
            : category === "car"
            ? "Select a car..."
            : "Select a vehicle..."}
        </option>
        
        {(!category || category === "car") && cars.length > 0 ? (
          <optgroup label="🚗 Cars / 4-Wheelers" className="bg-zinc-900 text-red-500 font-bold">
            {cars.map((vehicle) => (
              <option key={vehicle.id} value={vehicle.id} className="bg-zinc-900 text-white font-normal">
                {vehicleLabel(vehicle)} {vehicle.variant ? `(${vehicle.variant})` : ""}
              </option>
            ))}
          </optgroup>
        ) : null}

        {(!category || category === "bike") && bikes.length > 0 ? (
          <optgroup label="🏍️ Bikes & Scooters" className="bg-zinc-900 text-amber-500 font-bold">
            {bikes.map((vehicle) => (
              <option key={vehicle.id} value={vehicle.id} className="bg-zinc-900 text-white font-normal">
                {vehicleLabel(vehicle)} {vehicle.variant ? `(${vehicle.variant})` : ""}
              </option>
            ))}
          </optgroup>
        ) : null}
      </select>
    </div>
  );
}
