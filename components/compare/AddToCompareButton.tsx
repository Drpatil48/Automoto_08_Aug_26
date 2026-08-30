"use client";

import { useCompareTray } from "@/components/compare/CompareTrayProvider";

type AddToCompareButtonProps = {
  vehicleId: string;
};

export function AddToCompareButton({ vehicleId }: AddToCompareButtonProps) {
  const { addVehicle, removeVehicle, isSelected } = useCompareTray();
  const selected = isSelected(vehicleId);

  return (
    <button
      type="button"
      onClick={() => (selected ? removeVehicle(vehicleId) : addVehicle(vehicleId))}
      className="inline-flex min-h-11 w-full items-center justify-center rounded-md border border-border text-sm font-medium hover:bg-background"
    >
      {selected ? "Remove from tray" : "Add to compare tray"}
    </button>
  );
}
