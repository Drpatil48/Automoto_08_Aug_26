"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useId, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { PRIMARY_NAV, UTILITY_NAV } from "@/lib/constants";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const emptySubscribe = () => () => {};

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const router = useRouter();
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  function handleSearchSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!searchQuery.trim()) return;
    setOpen(false);
    router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
  }

  const drawerContent = open ? (
    <div
      id={panelId}
      className="fixed inset-0 z-[9999] flex flex-col justify-between overflow-y-auto bg-zinc-950 p-6 text-white shadow-2xl animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Drawer"
    >
      <div className="w-full max-w-lg mx-auto">
        {/* Top Header Row with Logo & Close Button */}
        <div className="flex items-center justify-between pb-6 border-b border-zinc-800/80">
          <div className="flex items-center gap-2.5">
            <div className="flex size-8 items-center justify-center rounded-lg bg-red-600 font-black text-white text-sm shadow-md">
              A
            </div>
            <span className="text-base font-extrabold tracking-tight text-white">
              AUTOMOTO<span className="text-red-600">NEWS</span>
              <span className="text-xs text-zinc-400 font-normal ml-0.5">.in</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex size-10 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Embedded Search Input Bar */}
        <form onSubmit={handleSearchSubmit} className="my-6">
          <div className="relative">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search ... (शोध घ्या)"
              className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-5 py-3.5 pr-12 text-sm font-semibold text-white placeholder-zinc-500 focus:border-red-600 focus:bg-zinc-900 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Search"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
            >
              🔍
            </button>
          </div>
        </form>

        {/* Main Navigation Items */}
        <nav aria-label="Mobile Menu Categories">
          <ul className="flex flex-col divide-y divide-zinc-800/60">
            {PRIMARY_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3.5 text-base font-black uppercase tracking-wider text-zinc-100 transition-colors hover:text-red-500"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom Social Channels Footer */}
      <div className="w-full max-w-lg mx-auto pt-6 mt-6 border-t border-zinc-800/80">
        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4 text-center">Follow &amp; Connect</p>
        <div className="flex items-center justify-center gap-2.5">

          {/* WhatsApp — opens WhatsApp channel */}
          <a
            href="https://whatsapp.com/channel/0029VaxAutomotoNews"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Channel"
            className="group flex flex-col items-center gap-1"
          >
            <span className="flex size-12 items-center justify-center rounded-2xl bg-[#25D366] shadow-lg shadow-emerald-950/50 transition-transform group-active:scale-95 group-hover:brightness-110">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </span>
            <span className="text-[9px] font-semibold text-zinc-400 uppercase tracking-wide">WhatsApp</span>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/automotonews.in"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="group flex flex-col items-center gap-1"
          >
            <span className="flex size-12 items-center justify-center rounded-2xl bg-[#1877F2] shadow-lg shadow-blue-950/50 transition-transform group-active:scale-95 group-hover:brightness-110">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </span>
            <span className="text-[9px] font-semibold text-zinc-400 uppercase tracking-wide">Facebook</span>
          </a>

          {/* X / Twitter */}
          <a
            href="https://x.com/automotonews"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="group flex flex-col items-center gap-1"
          >
            <span className="flex size-12 items-center justify-center rounded-2xl bg-black border border-zinc-700 shadow-lg transition-transform group-active:scale-95 group-hover:brightness-125">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </span>
            <span className="text-[9px] font-semibold text-zinc-400 uppercase tracking-wide">X</span>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@automotonews"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="group flex flex-col items-center gap-1"
          >
            <span className="flex size-12 items-center justify-center rounded-2xl bg-[#FF0000] shadow-lg shadow-red-950/50 transition-transform group-active:scale-95 group-hover:brightness-110">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </span>
            <span className="text-[9px] font-semibold text-zinc-400 uppercase tracking-wide">YouTube</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/automotonews.in"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group flex flex-col items-center gap-1"
          >
            <span className="flex size-12 items-center justify-center rounded-2xl shadow-lg shadow-pink-950/50 transition-transform group-active:scale-95 group-hover:brightness-110" style={{background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </span>
            <span className="text-[9px] font-semibold text-zinc-400 uppercase tracking-wide">Instagram</span>
          </a>

        </div>

        {/* Utility Quick Links — below social icons */}
        <div className="mt-5 pt-4 border-t border-zinc-800/60 flex items-center justify-center gap-3">
          {UTILITY_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-2 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:border-red-600 hover:text-white active:scale-95 transition-transform"
              onClick={() => setOpen(false)}
            >
              {item.href === '/compare' && (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/>
                </svg>
              )}
              {item.href === '/search' && (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
              )}
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  ) : null;

  return (
    <div className="flex shrink-0 md:hidden">
      <button
        type="button"
        className="inline-flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-200 transition-colors hover:border-red-600/50 hover:text-white"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true" className="flex flex-col gap-1">
          <span
            className={`block h-0.5 w-4 bg-current transition-transform duration-300 ${open ? "translate-y-1.5 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-4 bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-4 bg-current transition-transform duration-300 ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
          />
        </span>
      </button>

      {mounted && open ? createPortal(drawerContent, document.body) : null}
    </div>
  );
}
