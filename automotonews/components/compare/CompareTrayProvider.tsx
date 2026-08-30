"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { getVehicleCategory, getVehicleById } from "@/lib/vehicles";
import type { VehicleCategory, VehicleSpec } from "@/lib/types";

const STORAGE_KEY = "automotonews.compareTray";
const MAX_COMPARE = 2;
const EMPTY_IDS: string[] = [];

type AddResult = {
  success: boolean;
  message?: string;
};

type CompareTrayContextValue = {
  selectedIds: string[];
  selectedVehicles: VehicleSpec[];
  trayCategory: VehicleCategory | null;
  errorMessage: string | null;
  addVehicle: (id: string) => AddResult;
  removeVehicle: (id: string) => void;
  clear: () => void;
  isSelected: (id: string) => boolean;
  clearError: () => void;
};

const CompareTrayContext = createContext<CompareTrayContextValue | null>(null);

function readStoredIds(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((item): item is string => typeof item === "string")
      .slice(0, MAX_COMPARE);
  } catch {
    return [];
  }
}

let memoryIds: string[] | null = null;
const listeners = new Set<() => void>();

function getClientIds(): string[] {
  if (memoryIds == null) {
    memoryIds = readStoredIds();
  }
  return memoryIds;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function setStoredIds(next: string[] | ((current: string[]) => string[])) {
  const current = getClientIds();
  const resolved = typeof next === "function" ? next(current) : next;
  if (
    resolved.length === current.length &&
    resolved.every((id, index) => id === current[index])
  ) {
    return;
  }
  memoryIds = resolved;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(resolved));
  } catch {
    // Ignore quota / private mode failures.
  }
  listeners.forEach((listener) => listener());
}

export function CompareTrayProvider({ children }: { children: ReactNode }) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const selectedIds = useSyncExternalStore(
    subscribe,
    getClientIds,
    () => EMPTY_IDS,
  );

  const selectedVehicles = useMemo(
    () =>
      selectedIds
        .map((id) => getVehicleById(id))
        .filter((vehicle): vehicle is VehicleSpec => vehicle != null),
    [selectedIds],
  );

  const trayCategory = useMemo<VehicleCategory | null>(() => {
    if (selectedVehicles.length === 0) return null;
    return getVehicleCategory(selectedVehicles[0]);
  }, [selectedVehicles]);

  const clearError = useCallback(() => setErrorMessage(null), []);

  const addVehicle = useCallback((id: string): AddResult => {
    const newVehicle = getVehicleById(id);
    if (!newVehicle) {
      return { success: false, message: "Vehicle not found." };
    }

    const newCategory = getVehicleCategory(newVehicle);

    // Validate category matching against existing tray items
    const currentVehicles = getClientIds()
      .map((item) => getVehicleById(item))
      .filter((v): v is VehicleSpec => v != null);

    if (currentVehicles.length > 0) {
      const existingCategory = getVehicleCategory(currentVehicles[0]);
      if (newCategory !== existingCategory) {
        const msg = `You can't compare a ${newCategory === "car" ? "Car" : "Bike"} with a ${existingCategory === "car" ? "Car" : "Bike"}. Clear tray to compare ${newCategory === "car" ? "Cars" : "Bikes"}.`;
        setErrorMessage(msg);
        return { success: false, message: msg };
      }
    }

    setErrorMessage(null);

    setStoredIds((current) => {
      if (current.includes(id)) return current;
      if (current.length >= MAX_COMPARE) {
        return [current[1] ?? current[0], id].filter(Boolean);
      }
      return [...current, id];
    });

    return { success: true };
  }, []);

  const removeVehicle = useCallback((id: string) => {
    setErrorMessage(null);
    setStoredIds((current) => current.filter((item) => item !== id));
  }, []);

  const clear = useCallback(() => {
    setErrorMessage(null);
    setStoredIds([]);
  }, []);

  const isSelected = useCallback(
    (id: string) => selectedIds.includes(id),
    [selectedIds],
  );

  const value = useMemo(
    () => ({
      selectedIds,
      selectedVehicles,
      trayCategory,
      errorMessage,
      addVehicle,
      removeVehicle,
      clear,
      isSelected,
      clearError,
    }),
    [
      selectedIds,
      selectedVehicles,
      trayCategory,
      errorMessage,
      addVehicle,
      removeVehicle,
      clear,
      isSelected,
      clearError,
    ],
  );

  return (
    <CompareTrayContext.Provider value={value}>
      {children}
    </CompareTrayContext.Provider>
  );
}

export function useCompareTray(): CompareTrayContextValue {
  const context = useContext(CompareTrayContext);
  if (!context) {
    throw new Error("useCompareTray must be used within CompareTrayProvider");
  }
  return context;
}
