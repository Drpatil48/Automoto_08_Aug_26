"use client";

import { useSyncExternalStore } from "react";

export type FontSizeLevel = "sm" | "base" | "lg" | "xl";

function applyFontSize(newSize: FontSizeLevel) {
  const el = document.querySelector(".article-body");
  if (!el) return;

  el.classList.remove(
    "text-base",
    "text-lg",
    "text-xl",
    "text-2xl",
    "text-[1.05rem]",
    "text-[1.2rem]",
    "leading-7",
    "leading-8",
    "leading-9",
    "leading-[1.85]",
    "leading-[1.9]",
  );

  switch (newSize) {
    case "sm":
      el.classList.add("text-base", "leading-7");
      break;
    case "base":
      el.classList.add("text-[1.2rem]", "leading-[1.9]");
      break;
    case "lg":
      el.classList.add("text-xl", "leading-[1.9]");
      break;
    case "xl":
      el.classList.add("text-2xl", "leading-[1.95]");
      break;
  }
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot(): FontSizeLevel {
  try {
    const saved = localStorage.getItem("article_font_size") as FontSizeLevel;
    if (saved && ["sm", "base", "lg", "xl"].includes(saved)) {
      return saved;
    }
  } catch {}
  return "base";
}

function getServerSnapshot(): FontSizeLevel {
  return "base";
}

export function FontResizer() {
  const size = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function handleSizeChange(newSize: FontSizeLevel) {
    try {
      localStorage.setItem("article_font_size", newSize);
      window.dispatchEvent(new Event("storage"));
    } catch {}
    applyFontSize(newSize);
  }

  return (
    <div className="flex items-center gap-1.5 rounded-xl border border-zinc-800 bg-zinc-900/90 p-1">
      <span className="px-1 text-[10px] font-extrabold uppercase tracking-wider text-zinc-400">
        FONT:
      </span>
      <button
        type="button"
        onClick={() => handleSizeChange("sm")}
        className={`rounded-lg px-2 py-0.5 text-xs font-black transition-colors ${
          size === "sm"
            ? "bg-red-600 text-white"
            : "text-zinc-400 hover:text-white"
        }`}
        aria-label="Small font size"
      >
        A-
      </button>
      <button
        type="button"
        onClick={() => handleSizeChange("base")}
        className={`rounded-lg px-2 py-0.5 text-xs font-black transition-colors ${
          size === "base"
            ? "bg-red-600 text-white"
            : "text-zinc-400 hover:text-white"
        }`}
        aria-label="Standard font size"
      >
        A
      </button>
      <button
        type="button"
        onClick={() => handleSizeChange("lg")}
        className={`rounded-lg px-2.5 py-0.5 text-sm font-black transition-colors ${
          size === "lg" || size === "xl"
            ? "bg-red-600 text-white"
            : "text-zinc-400 hover:text-white"
        }`}
        aria-label="Large font size"
      >
        A+
      </button>
    </div>
  );
}
