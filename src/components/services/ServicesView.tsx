"use client";

import Link from "next/link";
import { useState } from "react";
import { homeServiceCards, servicesFaqs } from "@/data/content";
import { useQuote } from "@/components/layout/QuoteProvider";
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

export function ServicesView() {
  const { openQuote } = useQuote();
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="bg-[#05070b] text-white">
      <header className="wc-svc-hero">
        <div className="wc-svc-hero-media" aria-hidden>
          <video src="/videos/video3.mp4" autoPlay muted loop playsInline />
        </div>
        <div className="wc-svc-hero-overlay" aria-hidden />

        <div className="wc-svc-hero-ui">
          <div className="wc-container">
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
              <a href="#services" className="wc-btn wc-btn-light">
                Explore services
                <span aria-hidden>→</span>
              </a>
              <button type="button" className="wc-btn wc-btn-light" onClick={openQuote}>
                Enquire now
              </button>
            </div>
          </div>
        </div>

        <a href="#services" className="wc-svc-hero-scroll" aria-label="Scroll to services">
          <span>Scroll</span>
          <span aria-hidden>↓</span>
        </a>
      </header>

      <section id="services" className="wc-services">
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

      <section className="wc-svc-approach">
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

      <section className="wc-svc-faq">
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

      <EnquireCta />
    </div>
  );
}
