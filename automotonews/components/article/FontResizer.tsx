"use client";

import { useEffect, useState } from "react";

export type FontSizeLevel = "sm" | "base" | "lg" | "xl";

export function FontResizer() {
  const [size, setSize] = useState<FontSizeLevel>("base");

  useEffect(() => {
    const saved = localStorage.getItem("article_font_size") as FontSizeLevel;
    if (saved && ["sm", "base", "lg", "xl"].includes(saved)) {
      setSize(saved);
      applyFontSize(saved);
    }
  }, []);

  function applyFontSize(newSize: FontSizeLevel) {
    const el = document.querySelector(".article-body");
    if (!el) return;

    el.classList.remove(
      "text-sm",
      "text-base",
      "text-lg",
      "text-xl",
      "text-[1.05rem]",
    );

    switch (newSize) {
      case "sm":
        el.classList.add("text-sm", "leading-6");
        break;
      case "base":
        el.classList.add("text-[1.05rem]", "leading-8");
        break;
      case "lg":
        el.classList.add("text-lg", "leading-8");
        break;
      case "xl":
        el.classList.add("text-xl", "leading-9");
        break;
    }
  }

  function handleSizeChange(newSize: FontSizeLevel) {
    setSize(newSize);
    localStorage.setItem("article_font_size", newSize);
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
