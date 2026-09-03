"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { servicesFaqs } from "@/data/content";
import {
  servicePractices,
  servicesApproach,
  servicesHero,
} from "@/data/services";
import { getFeaturedWorks } from "@/data/works";
import { EnquireCta } from "@/components/shared/PageBits";
import { IndustriesJumpNav } from "@/components/industries/IndustriesJumpNav";
import FloatingLines from "@/components/services/FloatingLines";

export function ServicesView() {
  const [openFaq, setOpenFaq] = useState(0);
  const [ready, setReady] = useState(false);
  const featured = getFeaturedWorks(2);
  const jumpItems = useMemo(
    () => servicePractices.map(({ id, name }) => ({ id, name })),
    [],
  );

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 40);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div className="bg-paper text-ink">
      <header
        className={`wc-svc-stage h-[100svh] !bg-none bg-white${ready ? " is-ready" : ""}`}
      >
        <div className="absolute inset-0 z-0">
          <FloatingLines
            enabledWaves={["top", "bottom"]}
            topWavePosition={{ x: 10, y: 0.65, rotate: -0.4 }}
            lineCount={[10, 15, 20]}
            lineDistance={2}
            bendRadius={6}
            bendStrength={-4.5}
            interactive={true}
            parallax={true}
            animationSpeed={1.5}
            linesGradient={["#ad92d5", "#2f4973", "#06b6d4"]}
            lightMode
            backgroundColor="#ffffff"
          />
        </div>

        <div className="wc-container relative z-10 wc-svc-stage-frame pointer-events-none !pt-0 !pb-0 !min-h-[100svh] flex items-center justify-center">
          <div className="wc-svc-stage-main text-center flex flex-col items-center max-w-4xl">
            <p className="wc-svc-stage-kicker">{servicesHero.kicker}</p>
            <h1 className="wc-svc-stage-title">
              {servicesHero.titleLine1}
              <br />
              {servicesHero.titleLine2}
            </h1>
            <p className="wc-svc-stage-lede mx-auto">{servicesHero.description}</p>
            <div className="wc-svc-stage-actions pointer-events-auto justify-center">
              <a href={`#${jumpItems[0]?.id ?? "technology"}`} className="wc-btn wc-btn-solid">
                Explore services
                <span aria-hidden>↓</span>
              </a>
              <Link href="/contact" className="wc-btn wc-btn-dark">
                Enquire now
              </Link>
            </div>
          </div>
        </div>
      </header>

      <IndustriesJumpNav items={jumpItems} label="Services" />

      <div className="bg-paper text-ink">
        {servicePractices.map((practice, index) => {
          const reverse = index % 2 === 1;
          return (
            <section
              key={practice.id}
              id={practice.id}
              className="wc-svc-block scroll-mt-28 border-b border-black/8 last:border-b-0"
            >
              <div className="wc-container py-16 md:py-24">
                <div
                  className={[
                    "grid items-center gap-10 lg:grid-cols-12 lg:gap-14",
                    reverse ? "lg:[&>*:first-child]:order-2" : "",
                  ].join(" ")}
                >
                  <div className="lg:col-span-6">
                    <div className="wc-svc-vector">
                      <div className="wc-svc-vector-frame" aria-hidden>
                        <img
                          src={practice.image}
                          alt={practice.imageAlt}
                          className="wc-svc-vector-art object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <p className="mb-3 text-sm font-light uppercase tracking-[0.18em] text-muted">
                      ({String(index + 1).padStart(2, "0")}) {practice.name}
                    </p>
                    <h2 className="text-3xl font-light tracking-tight text-ink md:text-4xl">
                      {practice.title}
                    </h2>
                    <p className="mt-3 text-lg font-light text-ink/80">{practice.tagline}</p>
                    <p className="mt-5 max-w-xl text-sm font-light leading-relaxed text-muted md:text-base">
                      {practice.description}
                    </p>

                    <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2">
                      {practice.focus.map((item) => (
                        <li
                          key={item}
                          className="border-t border-black/10 py-3 text-sm font-light text-ink/80"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>

                    <Link href={practice.href} className="wc-btn wc-btn-dark mt-8">
                      {practice.cta}
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="wc-svc-approach wc-svc-approach--light">
        <div className="wc-svc-approach-bg" aria-hidden />
        <div className="wc-container relative z-10 wc-section">
          <header className="max-w-2xl">
            <p className="wc-svc-approach-kicker">How we work</p>
            <h2 className="wc-svc-approach-title">A clear path from idea to impact.</h2>
          </header>
          <ol className="wc-svc-approach-grid">
            {servicesApproach.map((step, i) => (
              <li key={step.title}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wc-section bg-paper text-ink">
        <div className="wc-container">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-sm font-light uppercase tracking-[0.18em] text-muted">
                Across engagements
              </p>
              <h2 className="text-3xl font-light text-ink md:text-4xl">Selected work</h2>
            </div>
            <Link href="/works" className="wc-home-link">
              View all works
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {featured.map((work) => (
              <Link key={work.slug} href={`/works/${work.slug}`} className="group block">
                <div className="wc-svc-media overflow-hidden">
                  <img
                    src={work.thumbnail}
                    alt={work.title}
                    className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-5 text-xs font-light uppercase tracking-[0.16em] text-muted">
                  {work.client} · {work.category}
                </p>
                <h3 className="mt-2 text-2xl font-light tracking-tight text-ink group-hover:opacity-70">
                  {work.title}
                </h3>
                <p className="mt-2 max-w-md text-sm font-light leading-relaxed text-muted">
                  {work.description1}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="wc-svc-faq wc-svc-faq--light">
        <div className="wc-container max-w-4xl">
          <p className="mb-3 text-sm font-light uppercase tracking-[0.18em] text-muted">
            Common questions
          </p>
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
