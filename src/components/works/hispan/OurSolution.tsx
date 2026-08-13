"use client";

import { useEffect, useRef, useState } from "react";
import { hispan } from "./assets";

export function OurSolution() {
  const [expandProgress, setExpandProgress] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const visibleAmount = windowHeight - rect.top;
        const totalDistance = windowHeight / 1.2;

        let progress = 0;
        if (visibleAmount > 0) {
          progress = Math.min(visibleAmount / totalDistance, 1);
        }

        const easeProgress =
          progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        setExpandProgress(easeProgress);

        const centerOffset = windowHeight / 2 - (rect.top + rect.height / 2);
        setParallaxOffset(centerOffset * 0.15);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="solution" className="bg-[#FAFAFC] pt-32 pb-12 lg:pt-48">
      <div className="mx-auto mb-16 max-w-7xl px-6 md:px-12 lg:mb-24">
        <div className="grid w-full grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl leading-tight font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              The <span className="text-emerald-500 italic">Making</span>
            </h2>
          </div>
          <div className="lg:pt-2">
            <p className="mb-4 text-xl leading-snug font-bold text-slate-900 sm:text-2xl">
              Hispan delivers a unified enterprise platform that centralizes every critical
              manufacturing operation into{" "}
              <span className="text-emerald-500 italic">a single intelligent dashboard</span>.
            </p>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              The platform combines operational monitoring, inventory workflows, analytics,
              reporting, secure role management, and AI-powered insights to help organizations
              improve operational efficiency and maintain complete visibility across all production
              facilities.
            </p>
          </div>
        </div>
      </div>

      <div ref={sectionRef} className="flex w-full justify-center">
        <div
          className="w-full overflow-hidden bg-emerald-950 will-change-transform"
          style={{
            clipPath: `inset(0% ${(1 - expandProgress) * 25}% 0% ${(1 - expandProgress) * 25}%)`,
            WebkitClipPath: `inset(0% ${(1 - expandProgress) * 25}% 0% ${(1 - expandProgress) * 25}%)`,
            transform: `scale(${0.9 + expandProgress * 0.1}) translateZ(0)`,
          }}
        >
          <img
            src={hispan.laptop}
            alt="Hispan Dashboard on Laptop"
            className="h-auto w-full object-cover drop-shadow-2xl will-change-transform"
            style={{
              transform: `scale(1.1) translateY(${parallaxOffset}px)`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
