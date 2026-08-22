"use client";

import Link from "next/link";
import { useState } from "react";
import { servicesFaqs } from "@/data/content";
import {
  serviceCatalog,
  servicesApproach,
  servicesHero,
} from "@/data/services";
import { getFeaturedWorks } from "@/data/works";
import { EnquireCta } from "@/components/shared/PageBits";
import { IndustriesJumpNav } from "@/components/industries/IndustriesJumpNav";

export function ServicesView() {
  const [openFaq, setOpenFaq] = useState(0);
  const featured = getFeaturedWorks(2);
  const jumpItems = serviceCatalog.map(({ id, name }) => ({ id, name }));

  return (
    <div className="wc-svc-page">
      <header className="wc-svc-intro">
        <div className="wc-container">
          <p className="wc-svc-pillar-kicker">{servicesHero.kicker}</p>
          <h1>{servicesHero.title}</h1>
          <p>{servicesHero.description}</p>
        </div>
      </header>

      <IndustriesJumpNav items={jumpItems} label="Services" />

      {serviceCatalog.map((group, index) => (
        <section key={group.id} id={group.id} className="wc-svc-pillar scroll-mt-28">
          <div className="wc-container">
            <div className="wc-svc-pillar-grid">
              <div className="wc-svc-pillar-copy">
                <p className="wc-svc-pillar-kicker">
                  ({String(index + 1).padStart(2, "0")}) {group.name}
                </p>
                <h2>{group.tagline}</h2>
                <p>{group.description}</p>
                <Link href={group.href} className="wc-btn wc-btn-dark">
                  {group.cta}
                  <span aria-hidden>→</span>
                </Link>
              </div>
              <ol className="wc-svc-pillar-list">
                {group.items.map((item, itemIndex) => (
                  <li key={item.title}>
                    <span>{String(itemIndex + 1).padStart(2, "0")}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <em>{item.note}</em>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      ))}

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
