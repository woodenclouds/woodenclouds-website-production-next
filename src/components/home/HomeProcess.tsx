"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { homeProcess } from "@/data/home";

const ProcessCanvas = dynamic(
  () => import("./ProcessCanvas").then((m) => m.ProcessCanvas),
  { ssr: false },
);

function clamp(n: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, n));
}

function ease(t: number) {
  const x = clamp(t);
  return x * x * (3 - 2 * x);
}

function StaticProcess() {
  return (
    <section id="process" className="wc-home-block wc-home-process">
      <div className="wc-container">
        <header className="mb-10 md:mb-14">
          <p className="wc-home-kicker">Our process</p>
          <h2 className="wc-home-title">
            A clear path
            <br />
            from brief to launch.
          </h2>
        </header>
        <ol className="wc-home-process-list">
          {homeProcess.map((step) => (
            <li key={step.index} className="wc-home-process-item">
              <span className="wc-home-process-index">{step.index}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function HomeProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollProgress = useRef(0);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);
  const steps = homeProcess;
  const stepCount = steps.length;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduced) return;
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
  }, [reduced]);

  if (reduced) return <StaticProcess />;

  const stepFloat = progress * (stepCount - 1);
  const active = Math.min(stepCount - 1, Math.max(0, Math.round(stepFloat)));
  const activeStep = steps[active]!;
  // Sharp crossfade around each integer step — no stacked ghost titles
  const phase = 1 - Math.min(1, Math.abs(stepFloat - active) * 2.2);
  const copyOpacity = ease(phase);
  const copyShift = (1 - copyOpacity) * 28 * Math.sign(stepFloat - active || 1);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="wc-process-scroll"
      style={{ height: `${Math.max(stepCount, 3) * 100}vh` }}
      aria-label="Our process"
    >
      <div className="wc-process-sticky">
        <div className="wc-container wc-process-inner">
          <header className="wc-process-head">
            <p className="wc-home-kicker">Our process</p>
            <h2 className="wc-home-title">
              A clear path
              <br />
              from brief to launch.
            </h2>
          </header>

          <div className="wc-process-stage">
            <div className="wc-process-copy" aria-live="polite">
              <article
                className="wc-process-step is-active"
                style={{
                  opacity: copyOpacity,
                  transform: `translate3d(0, ${copyShift}px, 0)`,
                }}
              >
                <span className="wc-process-step-index">{activeStep.index}</span>
                <h3>{activeStep.title}</h3>
                <p>{activeStep.body}</p>
              </article>
            </div>

            <div className="wc-process-visual" aria-hidden>
              <ProcessCanvas scrollProgress={scrollProgress} stepCount={stepCount} />
              <div className="wc-process-visual-veil" />
              <div className="wc-process-visual-grid" />
            </div>
          </div>

          <ol className="wc-process-rail" aria-label="Process steps">
            {steps.map((step, i) => {
              const on = i === active;
              const passed = i < active || (i === active && progress > 0.02);
              return (
                <li
                  key={step.index}
                  className={[on ? "is-on" : "", passed ? "is-passed" : ""].filter(Boolean).join(" ")}
                >
                  <span className="wc-process-rail-dot" />
                  <span className="wc-process-rail-label">{step.title}</span>
                </li>
              );
            })}
          </ol>

          <div
            className="wc-process-progress"
            aria-hidden
            style={{ transform: `scaleX(${ease(progress)})` }}
          />
        </div>
      </div>
    </section>
  );
}
