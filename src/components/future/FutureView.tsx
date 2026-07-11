"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const GlobeCanvas = dynamic(
  () => import("@/components/home/GlobeCanvas").then((m) => m.GlobeCanvas),
  { ssr: false },
);

const meaning = [
  {
    num: "01",
    title: "The idea",
    body: "With internet and a laptop, skilled people can work from anywhere. Future Woodenclouds turns that into a real company system — not a loose marketplace.",
  },
  {
    num: "02",
    title: "The system",
    body: "We aggregate skilled manpower across every category into one connected pool. Woodenclouds manages matching, coordination, and delivery.",
  },
  {
    num: "03",
    title: "The need",
    body: "Talent should not be locked to one city. Companies need skilled remote teams — and people need a trusted path to work without borders.",
  },
];

const steps = [
  { num: "01", title: "Connect", body: "Skilled people join from anywhere." },
  { num: "02", title: "Aggregate", body: "All categories, one talent pool." },
  { num: "03", title: "Manage", body: "Woodenclouds runs the network." },
  { num: "04", title: "Deliver", body: "Companies get remote teams they can trust." },
];

const categories = [
  { title: "Technology", body: "Developers, engineers, QA, DevOps." },
  { title: "Design & creative", body: "UI/UX, brand, and digital craft." },
  { title: "Growth & business", body: "Marketing, BDE, sales, operations." },
  { title: "Specialists", body: "Any remote-ready skilled category." },
];

function clamp(n: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, n));
}

export function FutureView() {
  const scrollProgress = useRef(0);
  const finaleRef = useRef<HTMLElement>(null);
  const [finaleProgress, setFinaleProgress] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      scrollProgress.current = 1;
      setFinaleProgress(1);
      return;
    }

    let ticking = false;

    const update = () => {
      const view = window.innerHeight;
      const pageScrollable = Math.max(
        document.documentElement.scrollHeight - view,
        1,
      );
      // Pure top → bottom progress drives globe connections
      const pageProgress = clamp(window.scrollY / pageScrollable);
      scrollProgress.current = pageProgress;

      const finale = finaleRef.current;
      if (finale) {
        const rect = finale.getBoundingClientRect();
        const runway = Math.max(finale.offsetHeight - view, 1);
        setFinaleProgress(clamp(-rect.top / runway));
      } else {
        setFinaleProgress(0);
      }

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

  // Fade in as the sticky finale stage is scrolled
  const finaleOpacity = clamp(finaleProgress / 0.45);
  const finaleScale = 0.92 + finaleOpacity * 0.08;

  return (
    <div className="wc-fw-page">
      <div className="wc-fw-globe-bg">
        <GlobeCanvas scrollProgress={scrollProgress} showConnections />
      </div>

      <div className="wc-fw-content">
        <header className="wc-fw-hero" aria-label="Future Woodenclouds">
          <div className="wc-fw-hero-ui">
            <div className="wc-fw-stage">
              <p className="wc-fw-brand">
                Future <span>Woodenclouds</span>
              </p>
              <h1 className="wc-fw-hero-title">
                Internet. A laptop.
                <br />
                <span className="wc-fw-hero-accent wc-fw-hero-accent--nowrap">
                  Work&nbsp;from&nbsp;anywhere.
                </span>
              </h1>
              <p className="wc-fw-hero-lede">
                Building the world&apos;s #1 company-managed remote network — skilled people
                across every category, connected and ready to work from anywhere on earth.
              </p>
              <div className="wc-fw-hero-actions">
                <Link href="/career" className="wc-btn wc-btn-light">
                  Join the network
                  <span aria-hidden>→</span>
                </Link>
                <a href="#meaning" className="wc-btn wc-btn-light">
                  What we mean
                </a>
              </div>
            </div>
          </div>

          <div className="wc-fw-hero-scroll" aria-hidden>
            <span className="wc-fw-hero-scroll-pill">
              <span className="wc-scroll-dot" />
            </span>
          </div>
        </header>

        <section id="meaning" className="wc-fw-section">
          <div className="wc-fw-stage">
            <p className="wc-fw-kicker">What we mean</p>
            <h2 className="wc-fw-section-title">
              The world changed.
              <br />
              Work should too.
            </h2>
            <p className="wc-fw-section-lede">
              Geography no longer decides who gets to build. Future Woodenclouds makes that
              freedom real — structured, managed, and trusted at global scale.
            </p>

            <div className="wc-fw-stack">
              {meaning.map((item) => (
                <article key={item.title} className="wc-fw-stack-item">
                  <span className="wc-fw-stack-num">{item.num}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="wc-fw-section wc-fw-section--open">
          <div className="wc-fw-stage wc-fw-stage--wide">
            <p className="wc-fw-kicker">Our vision</p>
            <h2 className="wc-fw-section-title wc-fw-section-title--lg">
              Skill should travel
              <br />
              <span className="wc-gradient-text">as freely as the internet.</span>
            </h2>
            <p className="wc-fw-section-lede">
              Anyone with talent, a laptop, and connection should work with the best teams
              on earth — without leaving home, without borders in the way.
            </p>
            <p className="wc-fw-ambition">
              We are building Woodenclouds Connect to become the number one remote
              skilled-network company in the world.
            </p>
          </div>
        </section>

        <section className="wc-fw-section">
          <div className="wc-fw-stage wc-fw-stage--wide">
            <p className="wc-fw-kicker">The model</p>
            <h2 className="wc-fw-section-title">
              Four steps.
              <br />
              One network.
            </h2>
            <p className="wc-fw-section-lede">
              Not unmanaged freelancing — a company-run connect layer for global skilled
              manpower.
            </p>

            <div className="wc-fw-steps">
              {steps.map((step) => (
                <article key={step.title} className="wc-fw-step">
                  <span>{step.num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="wc-fw-section wc-fw-section--open">
          <div className="wc-fw-stage">
            <p className="wc-fw-kicker">Who we connect</p>
            <h2 className="wc-fw-section-title">
              All categories.
              <br />
              One network.
            </h2>
            <p className="wc-fw-section-lede">
              If you can do great work with a laptop and internet, you belong here.
            </p>

            <div className="wc-fw-cats">
              {categories.map((item) => (
                <article key={item.title} className="wc-fw-cat">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          ref={finaleRef}
          className="wc-fw-finale"
          aria-label="Woodenclouds Connect"
        >
          <div className="wc-fw-finale-stage">
            <p
              className="wc-fw-finale-title"
              style={{
                opacity: finaleOpacity,
                transform: `translateY(${(1 - finaleOpacity) * 24}px) scale(${finaleScale})`,
              }}
            >
              Woodenclouds
              <br />
              <span>Connect</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
