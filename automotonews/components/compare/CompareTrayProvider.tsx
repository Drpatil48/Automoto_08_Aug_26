"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { getVehicleById } from "@/lib/vehicles";
import type { VehicleSpec } from "@/lib/types";

const STORAGE_KEY = "automotonews.compareTray";
const MAX_COMPARE = 2;
const EMPTY_IDS: string[] = [];

type CompareTrayContextValue = {
  selectedIds: string[];
  selectedVehicles: VehicleSpec[];
  addVehicle: (id: string) => void;
  removeVehicle: (id: string) => void;
  clear: () => void;
  isSelected: (id: string) => boolean;
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
  const selectedIds = useSyncExternalStore(
    subscribe,
    getClientIds,
    () => EMPTY_IDS,
  );

  const addVehicle = useCallback((id: string) => {
    setStoredIds((current) => {
      if (current.includes(id)) return current;
      if (current.length >= MAX_COMPARE) {
        return [current[1] ?? current[0], id].filter(Boolean);
      }
      return [...current, id];
    });
  }, []);

  const removeVehicle = useCallback((id: string) => {
    setStoredIds((current) => current.filter((item) => item !== id));
  }, []);

  const clear = useCallback(() => setStoredIds([]), []);

  const isSelected = useCallback(
    (id: string) => selectedIds.includes(id),
    [selectedIds],
  );

  const selectedVehicles = useMemo(
    () =>
      selectedIds
        .map((id) => getVehicleById(id))
        .filter((vehicle): vehicle is VehicleSpec => vehicle != null),
    [selectedIds],
  );

  const value = useMemo(
    () => ({
      selectedIds,
      selectedVehicles,
      addVehicle,
      removeVehicle,
      clear,
      isSelected,
    }),
    [selectedIds, selectedVehicles, addVehicle, removeVehicle, clear, isSelected],
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
