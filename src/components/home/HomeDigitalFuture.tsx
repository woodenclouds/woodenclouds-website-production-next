"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const GlobeCanvas = dynamic(
  () => import("./GlobeCanvas").then((m) => m.GlobeCanvas),
  { ssr: false },
);

const LINES = ["Designing your", "digital future."] as const;

function clamp(n: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, n));
}

/** Smoothstep for less mechanical scroll mapping */
function ease(t: number) {
  const x = clamp(t);
  return x * x * (3 - 2 * x);
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

  const stageOpacity = 0.15 + ease(progress / 0.35) * 0.85;
  const subProgress = ease((progress - 0.45) / 0.3);
  const hintOpacity = clamp(1 - progress * 1.6) * 0.65;

  return (
    <section
      ref={sectionRef}
      id="digital-future"
      className="relative bg-paper text-ink"
      style={{ height: "200vh" }}
    >
      <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden">
        <GlobeCanvas scrollProgress={scrollProgress} />

        <div
          className="wc-container relative z-10 py-28 text-center"
          style={{ opacity: stageOpacity }}
        >
          <div className="wc-future-copy mx-auto max-w-5xl">
            <h2 className="wc-digital-title">
              {LINES.map((line, i) => {
                const start = 0.08 + i * 0.16;
                const t = ease((progress - start) / 0.28);
                return (
                  <span
                    key={line}
                    className={`wc-reveal-line${i === 1 ? " wc-reveal-line--soft" : ""}`}
                    style={{
                      opacity: t,
                      transform: `translate3d(0, ${(1 - t) * 28}px, 0)`,
                    }}
                  >
                    {line}
                  </span>
                );
              })}
            </h2>

            <p
              className="wc-reveal-sub"
              style={{
                opacity: subProgress,
                transform: `translate3d(0, ${(1 - subProgress) * 18}px, 0)`,
              }}
            >
              Technology, design, and intelligence — shaped around outcomes, not feature lists.
            </p>
          </div>
        </div>

        <div
          className="pointer-events-none absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
          aria-hidden
          style={{ opacity: hintOpacity }}
        >
          <span className="flex h-10 w-6 items-start justify-center rounded-full border border-ink/20 p-1.5">
            <span className="wc-scroll-dot h-1.5 w-px bg-ink/60" />
          </span>
        </div>
      </div>
    </section>
  );
}
