"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const GlobeCanvas = dynamic(
  () => import("./GlobeCanvas").then((m) => m.GlobeCanvas),
  { ssr: false },
);

const LINE_1 = "Designing Your";
const LINE_2 = "Digital Future";

function useTypewriter(active: boolean, text: string, speed = 42, startDelay = 0) {
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!active) {
      setOut("");
      setDone(false);
      return;
    }

    let i = 0;
    let intervalId: ReturnType<typeof setInterval> | undefined;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(intervalId);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [active, text, speed, startDelay]);

  return { out, done };
}

export function HomeDigitalFuture() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollProgress = useRef(0);
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const view = window.innerHeight;
      const raw = 1 - Math.min(Math.max((rect.top + rect.height * 0.35) / view, 0), 1);
      scrollProgress.current = raw;
      setProgress(raw);

      const inView = rect.top < view * 0.8 && rect.bottom > view * 0.15;
      setVisible((prev) => {
        if (inView && !prev) setCycle((c) => c + 1);
        return inView;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const line1 = useTypewriter(visible, LINE_1, 38, 180);
  const line2 = useTypewriter(visible && line1.done, LINE_2, 44, 220);
  const showCursor1 = visible && !line1.done;
  const showCursor2 = visible && line1.done && !line2.done;
  const complete = line1.done && line2.done;

  return (
    <section
      ref={sectionRef}
      id="digital-future"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-black text-white"
    >
      <GlobeCanvas scrollProgress={scrollProgress} />

      <div className="wc-container relative z-10 py-28 text-center">
        <div
          key={cycle}
          className="wc-future-copy mx-auto max-w-5xl"
          style={{
            opacity: visible ? 0.45 + progress * 0.55 : 0,
            transform: `translateY(${visible ? (1 - progress) * 28 : 40}px) scale(${0.97 + progress * 0.03})`,
          }}
        >
          <p className="mb-5 text-[11px] uppercase tracking-[0.35em] text-white/45 md:text-xs">
            Woodenclouds
          </p>

          <h2 className="text-[clamp(2.4rem,7vw,5.4rem)] font-medium leading-[1.08] tracking-[-0.03em]">
            <span className="wc-type-line block min-h-[1.15em] text-white">
              {line1.out}
              {showCursor1 && <span className="wc-type-caret" aria-hidden />}
            </span>
            <span
              className={`wc-type-line mt-1 block min-h-[1.15em] ${complete ? "wc-type-glow" : ""}`}
            >
              <span className="wc-gradient-text">{line2.out}</span>
              {showCursor2 && <span className="wc-type-caret wc-type-caret--accent" aria-hidden />}
            </span>
          </h2>

          <p
            className="mx-auto mt-8 max-w-lg text-sm font-light leading-relaxed text-white/55 transition-all duration-700 md:text-base"
            style={{
              opacity: complete ? 1 : 0,
              transform: complete ? "translateY(0)" : "translateY(12px)",
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
          style={{ opacity: 0.35 + (1 - progress) * 0.4 }}
        >
          <span className="wc-scroll-dot h-1.5 w-px bg-white/70" />
        </span>
      </div>
    </section>
  );
}
