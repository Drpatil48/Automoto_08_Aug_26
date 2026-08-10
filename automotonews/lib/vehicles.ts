import type { VehicleSpec } from "@/lib/types";

/**
 * Vehicle dataset for the compare tool.
 *
 * These records were introduced as Phase 2 sample data for UI development.
 * Do not treat them as verified OEM facts for publication claims.
 * Replace or extend with confirmed specifications before launch; leave
 * unknown fields as null so the UI shows an unavailable state.
 */
export const VEHICLES: VehicleSpec[] = [
  {
    id: "nexon-ev",
    brand: "Tata",
    model: "Nexon EV",
    variant: "Fearless+",
    priceRangeINR: "₹14.5–17.5 Lakh",
    mileageKmpl: null,
    rangeKm: 465,
    engineOrBattery: "45 kWh battery",
    seatingCapacity: 5,
    images: ["/placeholders/cover-ev.svg"],
    fuelType: "electric",
  },
  {
    id: "creta",
    brand: "Hyundai",
    model: "Creta",
    variant: "SX (O)",
    priceRangeINR: "₹14–20 Lakh",
    mileageKmpl: 17.4,
    rangeKm: null,
    engineOrBattery: "1.5L petrol",
    seatingCapacity: 5,
    images: ["/placeholders/cover-car.svg"],
    fuelType: "petrol",
  },
  {
    id: "seltos",
    brand: "Kia",
    model: "Seltos",
    variant: "HTX",
    priceRangeINR: "₹13–20 Lakh",
    mileageKmpl: 17.0,
    rangeKm: null,
    engineOrBattery: "1.5L petrol",
    seatingCapacity: 5,
    images: ["/placeholders/cover-car.svg"],
    fuelType: "petrol",
  },
  {
    id: "apache-rtr-160",
    brand: "TVS",
    model: "Apache RTR 160",
    variant: "4V",
    priceRangeINR: "₹1.2–1.4 Lakh",
    mileageKmpl: 45,
    rangeKm: null,
    engineOrBattery: "160cc petrol",
    seatingCapacity: 2,
    images: ["/placeholders/cover-bike.svg"],
    fuelType: "petrol",
  },
  {
    id: "tiago-ev",
    brand: "Tata",
    model: "Tiago EV",
    variant: "XT LR",
    priceRangeINR: "₹8–12 Lakh",
    mileageKmpl: null,
    rangeKm: 315,
    engineOrBattery: "24 kWh battery",
    seatingCapacity: 5,
    images: ["/placeholders/cover-ev.svg"],
    fuelType: "electric",
  },
];

export function getAllVehicles(): VehicleSpec[] {
  return VEHICLES;
}

export function getVehicleById(id: string): VehicleSpec | null {
  return VEHICLES.find((vehicle) => vehicle.id === id) ?? null;
}

export function getVehiclesByIds(ids: string[]): VehicleSpec[] {
  return ids
    .map((id) => getVehicleById(id))
    .filter((vehicle): vehicle is VehicleSpec => vehicle != null);
}

export function vehicleLabel(vehicle: VehicleSpec): string {
  return `${vehicle.brand} ${vehicle.model}`;
}

export function vehicleFullLabel(vehicle: VehicleSpec): string {
  return `${vehicle.brand} ${vehicle.model} ${vehicle.variant}`.trim();
}

export function formatMileageOrRange(vehicle: VehicleSpec): string {
  if (vehicle.rangeKm != null) return `${vehicle.rangeKm} km`;
  if (vehicle.mileageKmpl != null) return `${vehicle.mileageKmpl} kmpl`;
  return "Unavailable";
}

export function formatSpecValue(
  value: string | number | null | undefined,
  suffix = "",
): string {
  if (value == null || value === "") return "Unavailable";
  return `${value}${suffix}`;
}
