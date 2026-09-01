"use client";

import { useSyncExternalStore } from "react";

const THEME_STORAGE_KEY = "automotonews-theme";

function getThemeSnapshot(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function subscribeTheme(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("theme-change", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("theme-change", callback);
    window.removeEventListener("storage", callback);
  };
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, () => "light");
  const isLight = theme === "light";

  function toggleTheme() {
    const nextTheme = isLight ? "dark" : "light";
    if (nextTheme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // Ignore private mode or quota errors
    }
    window.dispatchEvent(new Event("theme-change"));
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex size-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-300 transition-all hover:border-red-600/50 hover:text-white active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 ${className}`}
      aria-label={isLight ? "डार्क मोड चालू करा (Switch to dark mode)" : "लाईट मोड चालू करा (Switch to light mode)"}
      title={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
    >
      {isLight ? (
        // Moon Icon for switching to Dark Mode
        <svg
          className="size-4 text-amber-500 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73A8.15 8.15 0 0 1 9.08 5.49a8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 13.6 11.69 1 1 0 0 0 .04-1.05Z" />
        </svg>
      ) : (
        // Sun Icon for switching to Light Mode
        <svg
          className="size-4 text-amber-400 fill-none stroke-current stroke-2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      )}
    </button>
  );
}
