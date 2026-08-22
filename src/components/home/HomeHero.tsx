"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { heroContent } from "@/data/hero";

export function HomeHero() {
  const stageRef = useRef<HTMLElement>(null);
  const [ready, setReady] = useState(false);
  const [tick, setTick] = useState(0);
  const pointer = useRef({ x: 0, y: 0 });
  const smooth = useRef({ x: 0, y: 0 });
  const raf = useRef(0);

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 40);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(
      () => setTick((t) => (t + 1) % heroContent.ticks.length),
      2400,
    );
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: PointerEvent) => {
      const rect = stage.getBoundingClientRect();
      pointer.current = {
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
      };
    };

    const loop = () => {
      smooth.current.x += (pointer.current.x - smooth.current.x) * 0.06;
      smooth.current.y += (pointer.current.y - smooth.current.y) * 0.06;
      const { x, y } = smooth.current;
      stage.style.setProperty("--hx", x.toFixed(4));
      stage.style.setProperty("--hy", y.toFixed(4));
      raf.current = requestAnimationFrame(loop);
    };

    stage.addEventListener("pointermove", onMove, { passive: true });
    raf.current = requestAnimationFrame(loop);
    return () => {
      stage.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onScroll = () => {
      const rect = stage.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -rect.top / Math.max(rect.height * 0.65, 1)));
      stage.style.setProperty("--hscroll", p.toFixed(4));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header ref={stageRef} className={`wc-hero${ready ? " is-ready" : ""}`}>
      <div className="wc-hero-grain" aria-hidden />
      <div className="wc-hero-orb wc-hero-orb--a" aria-hidden />
      <div className="wc-hero-orb wc-hero-orb--b" aria-hidden />
      <div className="wc-hero-orb wc-hero-orb--c" aria-hidden />

      <div className="wc-container wc-hero-frame">
        <span className="wc-hero-corner wc-hero-corner--tl" aria-hidden />
        <span className="wc-hero-corner wc-hero-corner--tr" aria-hidden />
        <span className="wc-hero-corner wc-hero-corner--bl" aria-hidden />
        <span className="wc-hero-corner wc-hero-corner--br" aria-hidden />

        <div className="wc-hero-top">
          <h1 className="wc-hero-statement">{heroContent.statement}</h1>
          <p className="wc-hero-ticks" aria-live="polite">
            <span className="wc-hero-ticks-label">{heroContent.prefix}</span>
            <span key={heroContent.ticks[tick]} className="wc-hero-tick">
              {heroContent.ticks[tick]}
            </span>
          </p>
        </div>

        <div className="wc-hero-mid">
          <Link href={heroContent.cta.href} className="wc-hero-cta">
            <span>{heroContent.cta.label}</span>
            <span className="wc-hero-cta-arrow" aria-hidden>
              ↓
            </span>
          </Link>
        </div>

        <div className="wc-hero-bottom">
          <p className="wc-hero-headline">{heroContent.headline}</p>
          <button
            type="button"
            className="wc-hero-scroll-cue"
            aria-label="Scroll to explore"
            onClick={() => {
              document.getElementById("process")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            <span className="wc-hero-scroll-line" aria-hidden />
            Scroll
          </button>
        </div>
      </div>
    </header>
  );
}
