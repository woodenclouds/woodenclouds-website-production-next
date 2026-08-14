"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { hispan } from "./assets";
import { smoothScrollTo, smoothScrollToId } from "./smoothScroll";

const navLinks = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "technology", label: "Architecture" },
  { id: "solution", label: "The Making" },
  { id: "showcase", label: "Features" },
  { id: "impact", label: "The Impact" },
];

export function CaseStudyNav({ activeSection }: { activeSection: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [forceDarkTheme, setForceDarkTheme] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleSync = (e: Event) => {
      const detail = (e as CustomEvent<{ isDark: boolean }>).detail;
      setForceDarkTheme(Boolean(detail?.isDark));
    };
    window.addEventListener("sync-header-theme", handleSync);
    return () => window.removeEventListener("sync-header-theme", handleSync);
  }, []);

  const isDarkSection = forceDarkTheme;
  const isDarkTheme = isDarkSection;
  const showHispanNav = scrolled;

  const scrollTo = (id: string) => {
    const fullBleed = id === "technology" || id === "showcase";
    smoothScrollToId(id, fullBleed ? 0 : 80);
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-[60] transition-all duration-500 ease-in-out ${
        showHispanNav
          ? isDarkSection
            ? "pointer-events-auto border-b border-emerald-900/80 bg-emerald-950/95 py-4 opacity-100 shadow-sm backdrop-blur-md"
            : "pointer-events-auto border-b border-slate-200 bg-white/95 py-4 opacity-100 shadow-sm backdrop-blur-md"
          : "pointer-events-none bg-transparent py-6 opacity-0"
      }`}
      aria-hidden={!showHispanNav}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        <div className="pointer-events-none flex items-center gap-3 opacity-0">
          <img src="/brand/logo-dark.png" alt="" className="h-[13px] w-auto md:h-[15px]" />
          <span className="text-sm">×</span>
          <img src={hispan.logo} alt="" className="h-8 w-auto md:h-10" />
        </div>

        <div
          className={`absolute top-1/2 z-50 flex -translate-y-1/2 items-center transition-all duration-700 ease-in-out ${
            isDarkSection
              ? "left-1/2 -translate-x-1/2 scale-125"
              : "left-6 translate-x-0 scale-100 md:left-12"
          }`}
        >
          <Link
            href="/"
            className={`flex items-center overflow-hidden transition-all duration-700 ease-in-out ${
              isDarkSection
                ? "pointer-events-none mr-0 max-w-0 gap-0 opacity-0"
                : "mr-3 max-w-[220px] gap-3 opacity-100"
            }`}
            aria-label="Woodenclouds home"
          >
            <img
              src={isDarkTheme ? "/brand/logo-light.png" : "/brand/logo-dark.png"}
              alt="Woodenclouds"
              className="h-[13px] w-auto shrink-0 md:h-[15px]"
            />
            <span
              className={`shrink-0 text-[15px] leading-none ${
                isDarkTheme ? "text-white/35" : "text-slate-300"
              }`}
              aria-hidden
            >
              ×
            </span>
          </Link>

          <button
            type="button"
            className="flex cursor-pointer items-center gap-2"
            onClick={() => smoothScrollTo(0)}
            aria-label="HISPAN — back to top"
          >
            <img
              src={hispan.logo}
              alt="HISPAN"
              className={`h-8 w-auto transition-all duration-700 md:h-10 ${
                isDarkTheme ? "drop-shadow-[0_0_4px_rgba(255,255,255,0.25)]" : ""
              }`}
            />
            <span className="flex items-center text-2xl leading-none font-bold tracking-tighter whitespace-nowrap">
              <span
                className={`overflow-hidden text-emerald-400 transition-all duration-700 ease-in-out ${
                  isDarkSection ? "ml-2 max-w-[320px] opacity-100" : "ml-0 max-w-0 opacity-0"
                }`}
              >
                - Behind <span className="italic">the</span>{" "}
                <span className="text-white">Build</span>
              </span>
            </span>
          </button>
        </div>

        <nav
          className={`hidden items-center gap-6 transition-all duration-700 ease-in-out lg:flex ${
            isDarkSection ? "pointer-events-none scale-95 opacity-0" : "scale-100 opacity-100"
          }`}
          aria-label="Case study sections"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollTo(link.id)}
                className={`text-[15px] transition-colors duration-700 ease-in-out ${
                  isActive
                    ? isDarkTheme
                      ? "font-medium text-emerald-400"
                      : "font-medium text-emerald-600"
                    : isDarkTheme
                      ? "text-white/70 hover:text-white"
                      : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
