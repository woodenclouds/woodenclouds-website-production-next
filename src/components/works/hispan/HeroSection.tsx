"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { hispan } from "./assets";

const facts = [
  { label: "Client", value: "Lazza" },
  { label: "Industry", value: "Manufacturing" },
  { label: "Location", value: "Kerala, India" },
  { label: "Platform", value: "Enterprise web app" },
];

export function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollPos(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReducedMotion) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgTransform = `translate3d(0, ${scrollPos * 0.28}px, 0)`;
  const imageTransform = `translate3d(0, ${scrollPos * 0.04}px, 0)`;
  const contentOpacity = Math.max(0, 1 - scrollPos / 520);

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#05070b]">
      <div
        className="absolute inset-0 z-0 overflow-hidden will-change-transform"
        style={{ transform: bgTransform }}
      >
        <div
          className="absolute inset-[-3%] origin-center bg-cover bg-center bg-no-repeat will-change-transform"
          style={{
            backgroundImage: `url('${hispan.hero}')`,
            transform: imageTransform,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(5,7,11,0.82) 0%, rgba(5,7,11,0.42) 48%, rgba(5,7,11,0.18) 100%), linear-gradient(180deg, rgba(5,7,11,0.55) 0%, rgba(5,7,11,0.08) 38%, rgba(5,7,11,0.88) 100%)",
          }}
        />
      </div>

      <div
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-10 md:px-12 md:pb-14 lg:pt-32"
        style={{ opacity: contentOpacity }}
      >
        <div className="max-w-4xl">
          <Link
            href="/works"
            className={`mb-8 inline-block text-[11px] font-medium tracking-[0.18em] text-white/55 uppercase transition-all duration-700 ease-out hover:text-white ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            ← All works
          </Link>

          <p
            className={`mb-4 text-[13px] font-medium tracking-[0.22em] text-emerald-300 uppercase transition-all delay-100 duration-1000 ease-out ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            Case study · HISPAN
          </p>

          <h1
            className={`max-w-3xl text-4xl leading-[1.08] font-medium tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.35rem] ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            } transition-all delay-150 duration-1000 ease-out`}
          >
            Enterprise platform to streamline Lazza&apos;s factory operations
          </h1>

          <p
            className={`mt-6 max-w-xl text-base leading-relaxed font-light text-white/70 sm:text-lg ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            } transition-all delay-300 duration-1000 ease-out`}
          >
            A unified multi-factory system for production, inventory, utilities, and maintenance —
            built so plant teams can see the whole operation in one place.
          </p>
        </div>

        <dl
          className={`mt-14 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-white/15 pt-8 sm:grid-cols-4 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          } transition-all delay-500 duration-1000 ease-out`}
        >
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="mb-1.5 text-[11px] font-medium tracking-[0.18em] text-white/45 uppercase">
                {fact.label}
              </dt>
              <dd className="text-[15px] font-medium text-white">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
