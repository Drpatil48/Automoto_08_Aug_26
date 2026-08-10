import Image from "next/image";
import {
  formatMileageOrRange,
  formatSpecValue,
  vehicleFullLabel,
  vehicleLabel,
} from "@/lib/vehicles";
import type { VehicleSpec } from "@/lib/types";

type SpecComparisonTableProps = {
  vehicleA: VehicleSpec;
  vehicleB: VehicleSpec;
};

type SpecRow = {
  label: string;
  valueA: string;
  valueB: string;
};

function Unavailable() {
  return <span className="text-muted">Unavailable</span>;
}

function SpecCell({ value }: { value: string }) {
  if (value === "Unavailable") return <Unavailable />;
  return <span className="font-medium">{value}</span>;
}

export function SpecComparisonTable({
  vehicleA,
  vehicleB,
}: SpecComparisonTableProps) {
  const rows: SpecRow[] = [
    {
      label: "Price",
      valueA: formatSpecValue(vehicleA.priceRangeINR),
      valueB: formatSpecValue(vehicleB.priceRangeINR),
    },
    {
      label: "Mileage / Range",
      valueA: formatMileageOrRange(vehicleA),
      valueB: formatMileageOrRange(vehicleB),
    },
    {
      label: "Engine / Battery",
      valueA: formatSpecValue(vehicleA.engineOrBattery),
      valueB: formatSpecValue(vehicleB.engineOrBattery),
    },
    {
      label: "Seating",
      valueA: formatSpecValue(vehicleA.seatingCapacity),
      valueB: formatSpecValue(vehicleB.seatingCapacity),
    },
    {
      label: "Fuel type",
      valueA: formatSpecValue(vehicleA.fuelType),
      valueB: formatSpecValue(vehicleB.fuelType),
    },
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="grid grid-cols-3 border-b border-border bg-background">
        <div className="p-3 text-sm font-semibold text-muted sm:p-4">Spec</div>
        {[vehicleA, vehicleB].map((vehicle) => (
          <div key={vehicle.id} className="border-l border-border p-3 sm:p-4">
            <div className="relative mb-3 aspect-[16/10] overflow-hidden rounded-md bg-muted/15">
              {vehicle.images[0] ? (
                <Image
                  src={vehicle.images[0]}
                  alt={vehicleFullLabel(vehicle)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 40vw, 280px"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-xs text-muted">
                  No image
                </div>
              )}
            </div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              {vehicle.brand}
            </p>
            <p className="mt-1 text-sm font-semibold sm:text-base">
              {vehicleLabel(vehicle)}
            </p>
            <p className="text-xs text-muted sm:text-sm">{vehicle.variant}</p>
          </div>
        ))}
      </div>

      <table className="w-full table-fixed text-left text-sm">
        <caption className="sr-only">
          Side-by-side specification comparison for {vehicleLabel(vehicleA)} and{" "}
          {vehicleLabel(vehicleB)}
        </caption>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-border last:border-b-0">
              <th
                scope="row"
                className="bg-background/60 p-3 align-top font-medium text-muted sm:p-4"
              >
                {row.label}
              </th>
              <td className="border-l border-border p-3 align-top sm:p-4">
                <SpecCell value={row.valueA} />
              </td>
              <td className="border-l border-border p-3 align-top sm:p-4">
                <SpecCell value={row.valueB} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
