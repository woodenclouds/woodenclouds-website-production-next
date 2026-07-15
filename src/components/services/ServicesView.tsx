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
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 40);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onScroll = () => {
      const rect = hero.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -rect.top / Math.max(rect.height * 0.7, 1)));
      hero.style.setProperty("--svc-scroll", p.toFixed(4));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-paper text-ink">
      <header
        ref={heroRef}
        className={`wc-svc-hero wc-svc-hero--light${ready ? " is-ready" : ""}`}
      >
        <div className="wc-svc-hero-media" aria-hidden>
          <img src="/services/technology.jpg" alt="" draggable={false} />
          <span className="wc-svc-hero-media-shade" />
        </div>

        <div className="wc-svc-hero-wash" aria-hidden />
        <div className="wc-svc-hero-grain" aria-hidden />

        <div className="wc-svc-hero-ui">
          <div className="wc-container wc-svc-hero-layout">
            <div className="wc-svc-hero-copy">
              <p className="wc-svc-hero-kicker">Services</p>
              <h1 className="wc-svc-hero-title">
                Built to ship.
                <br />
                Ready to scale.
              </h1>
              <p className="wc-svc-hero-lede">
                Technology, growth support, and brand systems — shaped around outcomes, not feature
                lists.
              </p>
              <div className="wc-svc-hero-actions">
                <a href="#services" className="wc-btn wc-btn-solid">
                  Explore services
                  <span aria-hidden>→</span>
                </a>
                <Link href="/contact" className="wc-btn wc-btn-dark">
                  Enquire now
                </Link>
              </div>
            </div>

            <aside className="wc-svc-hero-aside" aria-label="Service practices">
              <p className="wc-svc-hero-aside-label">Practices</p>
              <ol className="wc-svc-hero-practices">
                {practices.map((item, i) => (
                  <li key={item.href}>
                    <Link href={item.href}>
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </div>

        <button
          type="button"
          className="wc-svc-hero-scroll"
          aria-label="Scroll to services"
          onClick={() => {
            document.getElementById("services")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          <span className="wc-svc-hero-scroll-line" aria-hidden />
          Scroll
        </button>
      </header>

      <section id="services" className="wc-services wc-services--light">
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

                <div className="wc-services-media">
                  <img src={card.image} alt="" draggable={false} />
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
