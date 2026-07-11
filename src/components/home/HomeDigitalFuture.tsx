"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";

const GlobeCanvas = dynamic(
  () => import("./GlobeCanvas").then((m) => m.GlobeCanvas),
  { ssr: false },
);

const LINE_1 = "Designing Your";
const LINE_2 = "Digital Future";
const FULL = `${LINE_1}\n${LINE_2}`;

function clamp(n: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, n));
}

export function HomeDigitalFuture() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollProgress = useRef(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let ticking = false;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const view = window.innerHeight;
      // Progress while the sticky stage is pinned:
      // 0 = section top hits viewport top, 1 = section almost finished
      const scrollable = Math.max(section.offsetHeight - view, 1);
      const scrolled = clamp(-rect.top / scrollable);
      scrollProgress.current = scrolled;
      setProgress(scrolled);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Map scroll to typed characters (writing effect driven by scroll)
  const typed = useMemo(() => {
    const writeEnd = 0.62; // finish typing by 62% of section scroll
    const t = clamp(progress / writeEnd);
    const count = Math.floor(t * FULL.length);
    return FULL.slice(0, count);
  }, [progress]);

  const [typed1, typed2 = ""] = typed.split("\n");
  const charsDone = typed.length;
  const line1Done = charsDone >= LINE_1.length;
  const allDone = charsDone >= FULL.length;
  const showCaret1 = progress > 0.02 && !line1Done;
  const showCaret2 = line1Done && !allDone;
  const subOpacity = clamp((progress - 0.58) / 0.2);
  const stageOpacity = clamp(0.2 + progress * 1.2);

  return (
    <section
      ref={sectionRef}
      id="digital-future"
      className="relative bg-black text-white"
      style={{ height: "220vh" }}
    >
      <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden">
        <GlobeCanvas scrollProgress={scrollProgress} />

        <div
          className="wc-container relative z-10 py-28 text-center"
          style={{ opacity: stageOpacity }}
        >
          <div className="wc-future-copy mx-auto max-w-5xl">
            <p
              className="mb-5 text-[11px] uppercase tracking-[0.35em] text-white/45 md:text-xs"
              style={{ opacity: clamp(progress * 3) }}
            >
              Woodenclouds
            </p>

            <h2 className="wc-digital-title text-[clamp(2.4rem,7vw,5.4rem)] font-light leading-[1.08] tracking-[-0.03em]">
              <span className="wc-type-line block min-h-[1.15em] text-white/90">
                {typed1}
                {showCaret1 && <span className="wc-type-caret" aria-hidden />}
              </span>
              <span
                className={`wc-type-line mt-1 block min-h-[1.15em] ${allDone ? "wc-type-glow" : ""}`}
              >
                <span className="wc-type-future">{typed2}</span>
                {showCaret2 && (
                  <span className="wc-type-caret wc-type-caret--accent" aria-hidden />
                )}
              </span>
            </h2>

            <p
              className="mx-auto mt-8 max-w-lg text-sm font-light leading-relaxed text-white/55 md:text-base"
              style={{
                opacity: subOpacity,
                transform: `translateY(${(1 - subOpacity) * 16}px)`,
              }}
            >
              Technology, design, and intelligence — shaped into products that feel inevitable.
            </p>
          </div>
        </div>

        <div
          className="pointer-events-none absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
          aria-hidden
        >
          <span
            className="flex h-10 w-6 items-start justify-center rounded-full border border-white/25 p-1.5"
            style={{ opacity: clamp(1 - progress * 1.4) * 0.7 }}
          >
            <span className="wc-scroll-dot h-1.5 w-px bg-white/70" />
          </span>
        </div>
      </div>
    </section>
  );
}
