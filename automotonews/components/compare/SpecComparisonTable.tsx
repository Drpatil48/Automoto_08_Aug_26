import Image from "next/image";
import {
  formatMileageOrRange,
  formatSpecValue,
  getVehicleCategory,
  vehicleFullLabel,
  vehicleLabel,
} from "@/lib/vehicles";
import type { VehicleCategory, VehicleSpec } from "@/lib/types";

type SpecComparisonTableProps = {
  vehicleA: VehicleSpec;
  vehicleB: VehicleSpec;
  category?: VehicleCategory;
};

type SpecRow = {
  label: string;
  valueA: string;
  valueB: string;
};

function Unavailable() {
  return <span className="text-zinc-500 italic text-xs">N/A</span>;
}

function SpecCell({ value }: { value: string }) {
  if (value === "Unavailable") return <Unavailable />;
  return <span className="font-semibold text-zinc-100">{value}</span>;
}

export function SpecComparisonTable({
  vehicleA,
  vehicleB,
  category: propCategory,
}: SpecComparisonTableProps) {
  const activeCategory = propCategory ?? getVehicleCategory(vehicleA);
  const isBike = activeCategory === "bike";

  const carRows: SpecRow[] = [
    {
      label: "Price Range (किंमत)",
      valueA: formatSpecValue(vehicleA.priceRangeINR),
      valueB: formatSpecValue(vehicleB.priceRangeINR),
    },
    {
      label: "Engine / Battery (इंजिन / बॅटरी)",
      valueA: formatSpecValue(vehicleA.engineOrBattery),
      valueB: formatSpecValue(vehicleB.engineOrBattery),
    },
    {
      label: "Mileage / Range (मायलेज / रेंज)",
      valueA: formatMileageOrRange(vehicleA),
      valueB: formatMileageOrRange(vehicleB),
    },
    {
      label: "Fuel Type (इंधन प्रकार)",
      valueA: formatSpecValue(vehicleA.fuelType ? vehicleA.fuelType.toUpperCase() : null),
      valueB: formatSpecValue(vehicleB.fuelType ? vehicleB.fuelType.toUpperCase() : null),
    },
    {
      label: "Seating Capacity (सीटिंग क्षमता)",
      valueA: formatSpecValue(vehicleA.seatingCapacity, " Seats"),
      valueB: formatSpecValue(vehicleB.seatingCapacity, " Seats"),
    },
    {
      label: "Boot Space (बूट स्पेस)",
      valueA: formatSpecValue(vehicleA.bootSpaceLiters, " Liters"),
      valueB: formatSpecValue(vehicleB.bootSpaceLiters, " Liters"),
    },
    {
      label: "Ground Clearance (ग्राउंड क्लिअरन्स)",
      valueA: formatSpecValue(vehicleA.groundClearanceMm, " mm"),
      valueB: formatSpecValue(vehicleB.groundClearanceMm, " mm"),
    },
    {
      label: "Airbags Safety (एअरबॅग्स)",
      valueA: formatSpecValue(vehicleA.airbagsCount, " Airbags"),
      valueB: formatSpecValue(vehicleB.airbagsCount, " Airbags"),
    },
    {
      label: "ABS & ESP Safety (सुरक्षा वैशिष्ट्ये)",
      valueA: vehicleA.hasABS ? "ABS + ESP" : "Standard",
      valueB: vehicleB.hasABS ? "ABS + ESP" : "Standard",
    },
    {
      label: "Dimensions L x W x H (आकारमान)",
      valueA: formatSpecValue(vehicleA.dimensionsMm),
      valueB: formatSpecValue(vehicleB.dimensionsMm),
    },
  ];

  const bikeRows: SpecRow[] = [
    {
      label: "Price Range (किंमत)",
      valueA: formatSpecValue(vehicleA.priceRangeINR),
      valueB: formatSpecValue(vehicleB.priceRangeINR),
    },
    {
      label: "Engine / Powertrain (इंजिन क्षमता)",
      valueA: formatSpecValue(vehicleA.engineOrBattery),
      valueB: formatSpecValue(vehicleB.engineOrBattery),
    },
    {
      label: "Max Power (जास्तीत जास्त पॉवर)",
      valueA: formatSpecValue(vehicleA.maxPowerPs),
      valueB: formatSpecValue(vehicleB.maxPowerPs),
    },
    {
      label: "Max Torque (टॉर्क)",
      valueA: formatSpecValue(vehicleA.maxTorqueNm),
      valueB: formatSpecValue(vehicleB.maxTorqueNm),
    },
    {
      label: "Mileage / Range (मायलेज / रेंज)",
      valueA: formatMileageOrRange(vehicleA),
      valueB: formatMileageOrRange(vehicleB),
    },
    {
      label: "Fuel Type (इंधन प्रकार)",
      valueA: formatSpecValue(vehicleA.fuelType ? vehicleA.fuelType.toUpperCase() : null),
      valueB: formatSpecValue(vehicleB.fuelType ? vehicleB.fuelType.toUpperCase() : null),
    },
    {
      label: "Kerb Weight (वजन)",
      valueA: formatSpecValue(vehicleA.kerbWeightKg, " kg"),
      valueB: formatSpecValue(vehicleB.kerbWeightKg, " kg"),
    },
    {
      label: "Fuel Tank Capacity (फ्युएल टँक)",
      valueA: formatSpecValue(vehicleA.fuelTankCapacityLiters, " L"),
      valueB: formatSpecValue(vehicleB.fuelTankCapacityLiters, " L"),
    },
    {
      label: "Seat Height (सीटची उंची)",
      valueA: formatSpecValue(vehicleA.seatHeightMm, " mm"),
      valueB: formatSpecValue(vehicleB.seatHeightMm, " mm"),
    },
    {
      label: "Brakes System (ब्रेकिंग सिस्टम)",
      valueA: formatSpecValue(vehicleA.brakes),
      valueB: formatSpecValue(vehicleB.brakes),
    },
    {
      label: "Top Speed (टॉप स्पीड)",
      valueA: formatSpecValue(vehicleA.topSpeedKmph, " km/h"),
      valueB: formatSpecValue(vehicleB.topSpeedKmph, " km/h"),
    },
  ];

  const rows = isBike ? bikeRows : carRows;

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-900/80 shadow-2xl">
      <div className="flex items-center justify-between border-b border-zinc-800/80 bg-zinc-950 px-5 py-3 text-xs font-black uppercase tracking-wider text-zinc-400">
        <span>Specification Comparison ({isBike ? "🏍️ Bike vs Bike" : "🚗 Car vs Car"})</span>
        <span className="rounded-full bg-zinc-900 border border-zinc-800 px-3 py-1 text-[11px] font-bold text-red-400">
          {isBike ? "Motorcycle / Scooter Specs" : "Automobile Specs"}
        </span>
      </div>

      <div className="grid grid-cols-3 border-b border-zinc-800/80 bg-zinc-950/80">
        <div className="p-4 text-xs font-black uppercase tracking-wider text-zinc-400">Model Details</div>
        {[vehicleA, vehicleB].map((vehicle) => (
          <div key={vehicle.id} className="border-l border-zinc-800/80 p-4">
            <div className="relative mb-3 aspect-[16/10] overflow-hidden rounded-xl bg-zinc-800">
              {vehicle.images[0] ? (
                <Image
                  src={vehicle.images[0]}
                  alt={vehicleFullLabel(vehicle)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 40vw, 280px"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-xs text-zinc-500">
                  No image
                </div>
              )}
            </div>
            <p className="text-[11px] font-black uppercase tracking-widest text-red-500">
              {vehicle.brand}
            </p>
            <p className="mt-1 text-sm font-bold text-white sm:text-base">
              {vehicleLabel(vehicle)}
            </p>
            <p className="text-xs text-zinc-400">{vehicle.variant}</p>
          </div>
        ))}
      </div>

      <table className="w-full table-fixed text-left text-xs sm:text-sm">
        <caption className="sr-only">
          Side-by-side specification comparison for {vehicleLabel(vehicleA)} and{" "}
          {vehicleLabel(vehicleB)}
        </caption>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-zinc-800/60 last:border-b-0">
              <th
                scope="row"
                className="bg-zinc-950/40 p-4 align-top text-xs font-bold uppercase tracking-wider text-zinc-400"
              >
                {row.label}
              </th>
              <td className="border-l border-zinc-800/60 p-4 align-top">
                <SpecCell value={row.valueA} />
              </td>
              <td className="border-l border-zinc-800/60 p-4 align-top">
                <SpecCell value={row.valueB} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
