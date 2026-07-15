"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { homeServiceCards, servicesFaqs } from "@/data/content";
import { EnquireCta } from "@/components/shared/PageBits";

const approach = [
  {
    index: "01",
    title: "Value-driven research",
    body: "We study your market, competitors, and constraints so every decision earns its place — and every build creates real business value.",
  },
  {
    index: "02",
    title: "Specialized planning",
    body: "Before a line of code or a campaign goes live, we map a strategy that stays aligned with your vision, timeline, and budget.",
  },
  {
    index: "03",
    title: "Precise delivery",
    body: "We implement with focus — shipping high-quality work on schedule, then staying close through launch and beyond.",
  },
];

const serviceRows = [
  ...homeServiceCards,
  {
    title: "Hire Dedicated Team",
    description:
      "Embed skilled developers and specialists into your workflow — flexible capacity without the hiring overhead.",
    image: "/team/team-01.jpg",
    href: "/services/dedicated-team",
  },
];

const practices = [
  { label: "Technology", href: "/services/technology" },
  { label: "Business support", href: "/services/business-support" },
  { label: "Brand & growth", href: "/services/digital-marketing" },
  { label: "Dedicated team", href: "/services/dedicated-team" },
];

export function ServicesView() {
  const [openFaq, setOpenFaq] = useState(0);
  const [ready, setReady] = useState(false);
  const [tick, setTick] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const smooth = useRef({ x: 0, y: 0 });
  const raf = useRef(0);

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 40);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setTick((t) => (t + 1) % practices.length), 2600);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onScroll = () => {
      const rect = hero.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -rect.top / Math.max(rect.height * 0.65, 1)));
      hero.style.setProperty("--svc-scroll", p.toFixed(4));
    };

    const onMove = (e: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      pointer.current = {
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
      };
    };

    const loop = () => {
      smooth.current.x += (pointer.current.x - smooth.current.x) * 0.06;
      smooth.current.y += (pointer.current.y - smooth.current.y) * 0.06;
      hero.style.setProperty("--hx", smooth.current.x.toFixed(4));
      hero.style.setProperty("--hy", smooth.current.y.toFixed(4));
      raf.current = requestAnimationFrame(loop);
    };

    onScroll();
    hero.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    raf.current = requestAnimationFrame(loop);

    return () => {
      hero.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div className="bg-paper text-ink">
      <header
        ref={heroRef}
        className={`wc-svc-stage${ready ? " is-ready" : ""}`}
      >
        <div className="wc-svc-stage-grain" aria-hidden />
        <div className="wc-svc-stage-orb wc-svc-stage-orb--a" aria-hidden />
        <div className="wc-svc-stage-orb wc-svc-stage-orb--b" aria-hidden />
        <div className="wc-svc-stage-orb wc-svc-stage-orb--c" aria-hidden />

        <div className="wc-container wc-svc-stage-frame">
          <span className="wc-svc-stage-corner wc-svc-stage-corner--tl" aria-hidden />
          <span className="wc-svc-stage-corner wc-svc-stage-corner--tr" aria-hidden />
          <span className="wc-svc-stage-corner wc-svc-stage-corner--bl" aria-hidden />
          <span className="wc-svc-stage-corner wc-svc-stage-corner--br" aria-hidden />

          <div className="wc-svc-stage-main">
            <p className="wc-svc-stage-kicker">Services</p>
            <h1 className="wc-svc-stage-title">
              Built to ship.
              <br />
              Ready to scale.
            </h1>
            <p className="wc-svc-stage-ticks" aria-live="polite">
              <span className="wc-svc-stage-ticks-label">We deliver</span>
              <span className="wc-svc-stage-ticks-sep" aria-hidden>
                —
              </span>
              <span key={practices[tick]?.label} className="wc-svc-stage-tick">
                {practices[tick]?.label}
              </span>
            </p>
            <p className="wc-svc-stage-lede">
              Technology, growth support, and brand systems — shaped around outcomes, not feature
              lists.
            </p>
            <div className="wc-svc-stage-actions">
              <a href="#services" className="wc-btn wc-btn-solid">
                Explore services
                <span aria-hidden>↓</span>
              </a>
              <Link href="/contact" className="wc-btn wc-btn-dark">
                Enquire now
              </Link>
            </div>
          </div>

          <div className="wc-svc-stage-foot">
            <ol className="wc-svc-stage-rail" aria-label="Service practices">
              {practices.map((item, i) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ol>

            <button
              type="button"
              className="wc-svc-stage-cue"
              aria-label="Scroll to services"
              onClick={() => {
                document.getElementById("services")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              <span className="wc-svc-stage-cue-line" aria-hidden />
              Scroll
            </button>
          </div>
        </div>
      </header>

      <section id="services" className="wc-services wc-services--light wc-services--text">
        <div className="wc-services-bg" aria-hidden />

        <div className="wc-container relative z-10">
          <header className="wc-services-head">
            <p className="wc-services-kicker">What we do</p>
            <div className="wc-services-head-row">
              <h2 className="wc-services-title">
                Four practices.
                <br />
                One digital partner.
              </h2>
              <p className="wc-services-intro">
                Pick a path — or combine them. Every engagement is built to move your product and
                brand forward together.
              </p>
            </div>
          </header>

          <div className="wc-services-list">
            {serviceRows.map((card, i) => (
              <Link key={card.title} href={card.href} className="wc-services-row group">
                <span className="wc-services-index">{String(i + 1).padStart(2, "0")}</span>

                <div className="wc-services-copy">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>

                <span className="wc-services-go" aria-hidden>
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="wc-svc-approach wc-svc-approach--light">
        <div className="wc-svc-approach-bg" aria-hidden />
        <div className="wc-container relative z-10">
          <header className="wc-svc-approach-head">
            <p className="wc-svc-approach-kicker">How we work</p>
            <h2 className="wc-svc-approach-title">A clear path from idea to impact.</h2>
          </header>

          <div className="wc-svc-approach-list">
            {approach.map((step) => (
              <article key={step.index} className="wc-svc-approach-item">
                <strong>{step.index}</strong>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wc-svc-faq wc-svc-faq--light">
        <div className="wc-container max-w-4xl">
          <h2 className="wc-svc-faq-title">FAQs</h2>
          <div className="wc-svc-faq-list">
            {servicesFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question} className="wc-svc-faq-item">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span aria-hidden>{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen ? <div className="wc-svc-faq-answer">{faq.answer}</div> : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <EnquireCta variant="light" buttonLabel="Start a conversation" />
    </div>
  );
}
