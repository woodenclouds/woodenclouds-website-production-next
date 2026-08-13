"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import { hispan } from "./assets";

const FEATURES: {
  id: string;
  label: string;
  title: ReactNode;
  titleText: string;
  bg: string;
  image: string;
}[] = [
  {
    id: "01",
    label: "Centralized Visibility",
    title: (
      <>
        Home <span className="text-emerald-600 italic">Dashboard</span>
      </>
    ),
    titleText: "Home Dashboard",
    bg: "#FFFFFF",
    image: hispan.screens.home,
  },
  {
    id: "02",
    label: "Production Monitoring",
    title: (
      <>
        Mix <span className="text-emerald-600 italic">Production</span>
      </>
    ),
    titleText: "Mix Production",
    bg: "#FFFFFF",
    image: hispan.screens.production,
  },
  {
    id: "03",
    label: "Machine Monitoring",
    title: (
      <>
        Complaint <span className="text-emerald-600 italic">Tracking</span>
      </>
    ),
    titleText: "Complaint Tracking",
    bg: "#FFFFFF",
    image: hispan.screens.tracking,
  },
];

export function HorizontalShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const update = () => setDimensions({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const target = { current: 0 };
    const displayed = { current: 0 };
    let raf = 0;
    let running = false;

    const sample = () => {
      if (!sectionRef.current) return 0;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportH = window.innerHeight;
      const scrolled = -rect.top;
      const scrollable = sectionHeight - viewportH;
      if (scrollable <= 0) return 0;
      return Math.max(0, Math.min(1, scrolled / scrollable));
    };

    const tick = () => {
      displayed.current += (target.current - displayed.current) * 0.14;
      if (Math.abs(target.current - displayed.current) < 0.0006) {
        displayed.current = target.current;
        running = false;
      }
      setScrollProgress(displayed.current);
      if (running) raf = requestAnimationFrame(tick);
    };

    const kick = () => {
      target.current = sample();
      if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick);
    kick();
    return () => {
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
      cancelAnimationFrame(raf);
    };
  }, []);

  const isMobile = dimensions.w < 768;
  const totalFeatures = FEATURES.length;
  const cardGap = isMobile ? 16 : 32;
  const activeCardWidth = isMobile ? dimensions.w - 48 : Math.min(dimensions.w * 0.75, 1100);
  const cardHeight = isMobile ? dimensions.h * 0.6 : Math.min(dimensions.h * 0.75, 640);
  const maxTranslate = (totalFeatures - 1) * (activeCardWidth + cardGap);
  const translateX = scrollProgress * maxTranslate;

  return (
    <section id="horizontal-showcase" className="relative bg-white">
      <div ref={sectionRef} className="relative" style={{ height: `${totalFeatures * 250}vh` }}>
        <div className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden pb-[15vh]">
          <div className="relative w-full overflow-visible" style={{ height: `${cardHeight}px` }}>
            <div
              className="absolute top-0 left-0 flex h-full items-stretch will-change-transform"
              style={{
                paddingLeft: isMobile ? "24px" : "48px",
                gap: `${cardGap}px`,
                transform: `translate3d(-${translateX}px, 0, 0)`,
              }}
            >
              {FEATURES.map((feature) => (
                <div
                  key={feature.id}
                  className="relative flex h-full flex-shrink-0 flex-col overflow-hidden rounded-[40px] border border-slate-100"
                  style={{
                    width: `${activeCardWidth}px`,
                    backgroundColor: feature.bg,
                  }}
                >
                  <div className="group absolute inset-y-0 left-0 z-20 flex w-full cursor-pointer items-end justify-center md:w-[65%]">
                    <div className="relative flex h-full w-full items-end justify-center">
                      <img
                        src={feature.image}
                        alt={feature.titleText}
                        className="h-auto w-[40%] translate-y-[33%] object-contain mix-blend-multiply transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 md:w-[45%]"
                      />
                    </div>
                  </div>

                  <div className="pointer-events-none relative z-10 mt-auto ml-auto max-w-md p-10 md:p-12 lg:p-16">
                    <span className="mb-3 block text-sm font-normal text-slate-500 md:text-base lg:text-lg">
                      {feature.label}
                    </span>
                    <h3 className="text-3xl leading-[1.1] font-normal tracking-tight text-slate-900 md:text-5xl lg:text-[3.5rem]">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              ))}

              <div style={{ width: `${dimensions.w * 0.1}px`, flexShrink: 0 }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
