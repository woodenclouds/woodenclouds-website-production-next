"use client";

import { useEffect, useRef, useState } from "react";
import { homeProcess } from "@/data/home";
import { ProcessMission } from "./ProcessMission";

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
                <p className="wc-home-process-mission">{step.mission}</p>
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
      setProgress(clamp(-rect.top / scrollable));
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

  const scrollToStep = (index: number) => {
    const section = sectionRef.current;
    if (!section) return;
    const scrollable = Math.max(section.offsetHeight - window.innerHeight, 1);
    const top =
      section.getBoundingClientRect().top +
      window.scrollY +
      (index / Math.max(stepCount - 1, 1)) * scrollable;
    window.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
  };

  if (reduced) return <StaticProcess />;

  const stepFloat = progress * (stepCount - 1);
  const active = Math.min(stepCount - 1, Math.max(0, Math.round(stepFloat)));
  const activeStep = steps[active]!;
  const phase = 1 - Math.min(1, Math.abs(stepFloat - active) * 2.2);
  const copyOpacity = ease(phase);
  const copyShift = (1 - copyOpacity) * 24 * Math.sign(stepFloat - active || 1);

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
              From concept
              <br />
              to launch.
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
                <p className="wc-process-step-mission">{activeStep.mission}</p>
                <h3>{activeStep.title}</h3>
                <p>{activeStep.body}</p>
              </article>
            </div>

            <div className="wc-process-visual">
              <ProcessMission
                progress={progress}
                activeStep={active}
                stepCount={stepCount}
              />
            </div>
          </div>

          <ol className="wc-process-rail" aria-label="Process steps">
            {steps.map((step, i) => {
              const on = i === active;
              const passed = i <= active;
              return (
                <li key={step.index} className={[on ? "is-on" : "", passed ? "is-passed" : ""].filter(Boolean).join(" ")}>
                  <button
                    type="button"
                    className="wc-process-rail-btn"
                    onClick={() => scrollToStep(i)}
                    aria-current={on ? "step" : undefined}
                  >
                    <span className="wc-process-rail-dot" />
                    <span className="wc-process-rail-label">{step.title}</span>
                  </button>
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
