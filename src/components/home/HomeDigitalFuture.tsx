"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const GlobeCanvas = dynamic(
  () => import("./GlobeCanvas").then((m) => m.GlobeCanvas),
  { ssr: false },
);

export function HomeDigitalFuture() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollProgress = useRef(0);
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const view = window.innerHeight;
      // 0 when section enters bottom, 1 when centered / past
      const raw = 1 - Math.min(Math.max((rect.top + rect.height * 0.35) / view, 0), 1);
      scrollProgress.current = raw;
      setProgress(raw);
      setVisible(rect.top < view * 0.85 && rect.bottom > view * 0.1);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const textOpacity = 0.35 + progress * 0.65;
  const textY = (1 - progress) * 36;

  return (
    <section
      ref={sectionRef}
      id="digital-future"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-black text-white"
    >
      <GlobeCanvas scrollProgress={scrollProgress} />

      <div className="wc-container relative z-10 py-28 text-center">
        <div
          className="mx-auto max-w-5xl transition-all duration-500 ease-out"
          style={{
            opacity: visible ? textOpacity : 0,
            transform: `translateY(${visible ? textY : 48}px)`,
          }}
        >
          <h2 className="text-[clamp(2.6rem,7vw,5.5rem)] font-medium leading-[1.05] tracking-[-0.03em]">
            <span className="block text-white">Designing Your</span>
            <span className="wc-gradient-text mt-1 block">Digital Future</span>
          </h2>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
        aria-hidden
      >
        <span
          className="flex h-10 w-6 items-start justify-center rounded-full border border-white/25 p-1.5"
          style={{ opacity: 0.35 + (1 - progress) * 0.4 }}
        >
          <span className="wc-scroll-dot h-1.5 w-px bg-white/70" />
        </span>
      </div>
    </section>
  );
}
