import type { VehicleCategory, VehicleSpec } from "@/lib/types";

/**
 * Vehicle dataset for the compare tool.
 */
export const VEHICLES: VehicleSpec[] = [
  // Electric Cars
  {
    id: "nexon-ev",
    brand: "Tata",
    model: "Nexon EV",
    variant: "Fearless+ Long Range",
    category: "car",
    priceRangeINR: "₹14.49–19.49 Lakh",
    mileageKmpl: null,
    rangeKm: 465,
    engineOrBattery: "45 kWh Battery (143 PS)",
    seatingCapacity: 5,
    images: ["/placeholders/cover-ev.svg"],
    fuelType: "electric",
    bootSpaceLiters: 350,
    airbagsCount: 6,
    hasABS: true,
    hasESP: true,
    dimensionsMm: "3994 x 1811 x 1616",
    groundClearanceMm: 190,
  },
  {
    id: "tiago-ev",
    brand: "Tata",
    model: "Tiago EV",
    variant: "XZ+ Tech LUX",
    category: "car",
    priceRangeINR: "₹7.99–11.89 Lakh",
    mileageKmpl: null,
    rangeKm: 315,
    engineOrBattery: "24 kWh Battery (75 PS)",
    seatingCapacity: 5,
    images: ["/placeholders/cover-ev.svg"],
    fuelType: "electric",
    bootSpaceLiters: 240,
    airbagsCount: 2,
    hasABS: true,
    hasESP: false,
    dimensionsMm: "3769 x 1677 x 1536",
    groundClearanceMm: 166,
  },
  {
    id: "mg-windsor-ev",
    brand: "MG",
    model: "Windsor EV",
    variant: "Essence",
    category: "car",
    priceRangeINR: "₹13.50–15.50 Lakh",
    mileageKmpl: null,
    rangeKm: 331,
    engineOrBattery: "38 kWh Battery (136 PS)",
    seatingCapacity: 5,
    images: ["/placeholders/cover-ev.svg"],
    fuelType: "electric",
    bootSpaceLiters: 604,
    airbagsCount: 6,
    hasABS: true,
    hasESP: true,
    dimensionsMm: "4295 x 1850 x 1677",
    groundClearanceMm: 186,
  },

  // Electric Bikes / Scooters
  {
    id: "ola-s1-pro",
    brand: "Ola Electric",
    model: "S1 Pro",
    variant: "Gen 2",
    category: "bike",
    priceRangeINR: "₹1.34 Lakh",
    mileageKmpl: null,
    rangeKm: 195,
    engineOrBattery: "4 kWh Battery (11 kW Peak)",
    seatingCapacity: 2,
    images: ["/placeholders/cover-ev.svg"],
    fuelType: "electric",
    seatHeightMm: 805,
    kerbWeightKg: 116,
    fuelTankCapacityLiters: null,
    brakes: "Disc (Front & Rear) with CBS",
    topSpeedKmph: 120,
    maxPowerPs: "15 PS (11 kW)",
    maxTorqueNm: "58 Nm",
  },
  {
    id: "ather-450x",
    brand: "Ather",
    model: "450X",
    variant: "3.7 kWh",
    category: "bike",
    priceRangeINR: "₹1.45 Lakh",
    mileageKmpl: null,
    rangeKm: 150,
    engineOrBattery: "3.7 kWh Battery (6.4 kW)",
    seatingCapacity: 2,
    images: ["/placeholders/cover-ev.svg"],
    fuelType: "electric",
    seatHeightMm: 780,
    kerbWeightKg: 111.6,
    fuelTankCapacityLiters: null,
    brakes: "Disc (Front & Rear) with CBS",
    topSpeedKmph: 90,
    maxPowerPs: "8.7 PS (6.4 kW)",
    maxTorqueNm: "26 Nm",
  },

  // ICE Cars (Petrol / Diesel)
  {
    id: "creta",
    brand: "Hyundai",
    model: "Creta",
    variant: "SX (O) 1.5 Turbo",
    category: "car",
    priceRangeINR: "₹11.00–20.15 Lakh",
    mileageKmpl: 18.4,
    rangeKm: null,
    engineOrBattery: "1.5L Turbo Petrol (160 PS)",
    seatingCapacity: 5,
    images: ["/placeholders/cover-car.svg"],
    fuelType: "petrol",
    bootSpaceLiters: 433,
    airbagsCount: 6,
    hasABS: true,
    hasESP: true,
    dimensionsMm: "4330 x 1790 x 1635",
    groundClearanceMm: 190,
  },
  {
    id: "swift",
    brand: "Maruti Suzuki",
    model: "Swift",
    variant: "ZXi+ Dual Tone",
    category: "car",
    priceRangeINR: "₹6.49–9.64 Lakh",
    mileageKmpl: 25.75,
    rangeKm: null,
    engineOrBattery: "1.2L Z-Series Petrol (82 PS)",
    seatingCapacity: 5,
    images: ["/placeholders/cover-car.svg"],
    fuelType: "petrol",
    bootSpaceLiters: 265,
    airbagsCount: 6,
    hasABS: true,
    hasESP: true,
    dimensionsMm: "3860 x 1735 x 1520",
    groundClearanceMm: 163,
  },
  {
    id: "punch",
    brand: "Tata",
    model: "Punch",
    variant: "Creative Flagship",
    category: "car",
    priceRangeINR: "₹6.13–10.20 Lakh",
    mileageKmpl: 20.09,
    rangeKm: null,
    engineOrBattery: "1.2L Revotron Petrol (88 PS)",
    seatingCapacity: 5,
    images: ["/placeholders/cover-car.svg"],
    fuelType: "petrol",
    bootSpaceLiters: 366,
    airbagsCount: 2,
    hasABS: true,
    hasESP: false,
    dimensionsMm: "3827 x 1742 x 1615",
    groundClearanceMm: 187,
  },
  {
    id: "seltos",
    brand: "Kia",
    model: "Seltos",
    variant: "GTX+ Turbo",
    category: "car",
    priceRangeINR: "₹10.90–20.35 Lakh",
    mileageKmpl: 17.7,
    rangeKm: null,
    engineOrBattery: "1.5L TGDi Petrol (160 PS)",
    seatingCapacity: 5,
    images: ["/placeholders/cover-car.svg"],
    fuelType: "petrol",
    bootSpaceLiters: 433,
    airbagsCount: 6,
    hasABS: true,
    hasESP: true,
    dimensionsMm: "4365 x 1800 x 1645",
    groundClearanceMm: 190,
  },
  {
    id: "thar",
    brand: "Mahindra",
    model: "Thar ROXX",
    variant: "AX7L 4WD",
    category: "car",
    priceRangeINR: "₹12.99–22.49 Lakh",
    mileageKmpl: 15.2,
    rangeKm: null,
    engineOrBattery: "2.2L mHawk Diesel (175 PS)",
    seatingCapacity: 5,
    images: ["/placeholders/cover-car.svg"],
    fuelType: "diesel",
    bootSpaceLiters: 644,
    airbagsCount: 6,
    hasABS: true,
    hasESP: true,
    dimensionsMm: "4428 x 1870 x 1923",
    groundClearanceMm: 219,
  },

  // Motorcycles & Bikes
  {
    id: "classic-350",
    brand: "Royal Enfield",
    model: "Classic 350",
    variant: "Chrome Red",
    category: "bike",
    priceRangeINR: "₹1.93–2.30 Lakh",
    mileageKmpl: 36.2,
    rangeKm: null,
    engineOrBattery: "349cc Air-Oil Cooled (20.2 bhp)",
    seatingCapacity: 2,
    images: ["/placeholders/cover-bike.svg"],
    fuelType: "petrol",
    seatHeightMm: 805,
    kerbWeightKg: 195,
    fuelTankCapacityLiters: 13,
    brakes: "Disc (Front 300mm / Rear 270mm) Dual ABS",
    topSpeedKmph: 114,
    maxPowerPs: "20.2 PS @ 6100 rpm",
    maxTorqueNm: "27 Nm @ 4000 rpm",
  },
  {
    id: "apache-rtr-160",
    brand: "TVS",
    model: "Apache RTR 160",
    variant: "4V Special Edition",
    category: "bike",
    priceRangeINR: "₹1.24–1.38 Lakh",
    mileageKmpl: 45.0,
    rangeKm: null,
    engineOrBattery: "159.7cc Oil-Cooled (17.55 PS)",
    seatingCapacity: 2,
    images: ["/placeholders/cover-bike.svg"],
    fuelType: "petrol",
    seatHeightMm: 800,
    kerbWeightKg: 144,
    fuelTankCapacityLiters: 12,
    brakes: "Disc (Front & Rear) Single ABS",
    topSpeedKmph: 114,
    maxPowerPs: "17.55 PS @ 9250 rpm",
    maxTorqueNm: "14.73 Nm @ 7250 rpm",
  },
  {
    id: "pulsar-ns200",
    brand: "Bajaj",
    model: "Pulsar NS200",
    variant: "Dual ABS USD",
    category: "bike",
    priceRangeINR: "₹1.58 Lakh",
    mileageKmpl: 40.3,
    rangeKm: null,
    engineOrBattery: "199.5cc Liquid-Cooled (24.5 PS)",
    seatingCapacity: 2,
    images: ["/placeholders/cover-bike.svg"],
    fuelType: "petrol",
    seatHeightMm: 805,
    kerbWeightKg: 158,
    fuelTankCapacityLiters: 12,
    brakes: "Disc (Front 300mm / Rear 230mm) Dual ABS",
    topSpeedKmph: 136,
    maxPowerPs: "24.5 PS @ 9750 rpm",
    maxTorqueNm: "18.74 Nm @ 8000 rpm",
  },
  {
    id: "freedom-125",
    brand: "Bajaj",
    model: "Freedom 125",
    variant: "NG04 Disc LED",
    category: "bike",
    priceRangeINR: "₹95,000–1.10 Lakh",
    mileageKmpl: 102.0,
    rangeKm: null,
    engineOrBattery: "125cc CNG + Petrol Hybrid",
    seatingCapacity: 2,
    images: ["/placeholders/cover-bike.svg"],
    fuelType: "cng",
    seatHeightMm: 785,
    kerbWeightKg: 149,
    fuelTankCapacityLiters: 2, // 2kg CNG + 2L Petrol
    brakes: "Disc (Front) / Drum (Rear) Sync Braking",
    topSpeedKmph: 90,
    maxPowerPs: "9.5 PS @ 8000 rpm",
    maxTorqueNm: "9.7 Nm @ 5000 rpm",
  },
];

export function getAllVehicles(): VehicleSpec[] {
  return VEHICLES;
}

export function getVehicleById(id: string): VehicleSpec | null {
  const cleanId = id.trim().toLowerCase();
  return VEHICLES.find((vehicle) => vehicle.id.toLowerCase() === cleanId) ?? null;
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

/**
 * Returns the exact vehicle category ("car" | "bike").
 */
export function getVehicleCategory(vehicle: VehicleSpec): VehicleCategory {
  return vehicle.category ?? (vehicle.seatingCapacity === 2 ? "bike" : "car");
}

export function isBike(vehicle: VehicleSpec): boolean {
  return getVehicleCategory(vehicle) === "bike";
}

export function isCar(vehicle: VehicleSpec): boolean {
  return getVehicleCategory(vehicle) === "car";
}

export function getVehicleCategoryType(vehicle: VehicleSpec): VehicleCategory {
  return getVehicleCategory(vehicle);
}

/**
 * Returns all vehicles matching the requested category ("car" | "bike").
 * If no category is passed, returns all vehicles.
 */
export function getComparableVehicles(category?: VehicleCategory): VehicleSpec[] {
  if (!category) return VEHICLES;
  return VEHICLES.filter((vehicle) => getVehicleCategory(vehicle) === category);
}

/**
 * Validates whether vehicleA and vehicleB can be compared.
 * Reusable business logic rule:
 * Must exist, must be different IDs, and MUST be of the exact same category.
 */
export function canCompare(
  vehicleA?: VehicleSpec | null,
  vehicleB?: VehicleSpec | null,
): boolean {
  if (!vehicleA || !vehicleB) return false;
  if (vehicleA.id === vehicleB.id) return false;
  return getVehicleCategory(vehicleA) === getVehicleCategory(vehicleB);
}

export type ComparisonValidationResult =
  | { isValid: true; category: VehicleCategory; vehicleA: VehicleSpec; vehicleB: VehicleSpec }
  | {
      isValid: false;
      errorType: "mismatch" | "same" | "not_found" | "empty" | "partial";
      message: string;
      vehicleA?: VehicleSpec | null;
      vehicleB?: VehicleSpec | null;
    };

/**
 * Validates a comparison request given two vehicle IDs (e.g. from URL query params).
 */
export function validateComparison(
  aId?: string,
  bId?: string,
): ComparisonValidationResult {
  if (!aId && !bId) {
    return {
      isValid: false,
      errorType: "empty",
      message: "Please select two cars or two bikes to compare.",
    };
  }

  const vehicleA = aId ? getVehicleById(aId) : null;
  const vehicleB = bId ? getVehicleById(bId) : null;

  if (aId && !vehicleA) {
    return {
      isValid: false,
      errorType: "not_found",
      message: `Vehicle "${aId}" was not found. Please select a valid car or bike to compare.`,
      vehicleA: null,
      vehicleB,
    };
  }

  if (bId && !vehicleB) {
    return {
      isValid: false,
      errorType: "not_found",
      message: `Vehicle "${bId}" was not found. Please select a valid car or bike to compare.`,
      vehicleA,
      vehicleB: null,
    };
  }

  if (vehicleA && vehicleB) {
    if (vehicleA.id === vehicleB.id) {
      return {
        isValid: false,
        errorType: "same",
        message: `You selected the same vehicle twice (${vehicleLabel(vehicleA)}). Please select two different vehicles.`,
        vehicleA,
        vehicleB,
      };
    }

    const categoryA = getVehicleCategory(vehicleA);
    const categoryB = getVehicleCategory(vehicleB);

    if (categoryA !== categoryB) {
      return {
        isValid: false,
        errorType: "mismatch",
        message: `You cannot compare a ${categoryA === "car" ? "Car" : "Bike"} (${vehicleLabel(vehicleA)}) with a ${categoryB === "car" ? "Car" : "Bike"} (${vehicleLabel(vehicleB)}). Please select two cars or two bikes.`,
        vehicleA,
        vehicleB,
      };
    }

    return {
      isValid: true,
      category: categoryA,
      vehicleA,
      vehicleB,
    };
  }

  return {
    isValid: false,
    errorType: "partial",
    message: "Please select a second vehicle of the same category to complete the comparison.",
    vehicleA,
    vehicleB,
  };
}

export function formatMileageOrRange(vehicle: VehicleSpec): string {
  if (vehicle.rangeKm != null) return `${vehicle.rangeKm} km`;
  if (vehicle.mileageKmpl != null) return `${vehicle.mileageKmpl} kmpl`;
  return "Unavailable";
}

export function formatSpecValue(
  value: string | number | boolean | null | undefined,
  suffix = "",
): string {
  if (value == null || value === "") return "Unavailable";
  if (typeof value === "boolean") return value ? "Yes (होय)" : "No (नाही)";
  return `${value}${suffix}`;
}
