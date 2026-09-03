"use client";

import Link from "next/link";
import { useState } from "react";
import type { TechDetail } from "@/data/technology";
import { technologyCapabilities, technologyProcess } from "@/data/technology";
import { site } from "@/data/content";
import { EnquireCta } from "@/components/shared/PageBits";

export function TechnologyDetailView({ page }: { page: TechDetail }) {
  const [openFaq, setOpenFaq] = useState(0);

  const related = technologyCapabilities.filter(
    (item) => item.href !== `/services/technology/${page.slug}`,
  );

  return (
    <div className="wc-tech-page">
      <header className="wc-tech-detail-hero">
        <div className="wc-tech-detail-hero-media" aria-hidden>
          <img src={page.image} alt="" />
        </div>
        <div className="wc-tech-detail-hero-wash" aria-hidden />

        <div className="wc-tech-detail-hero-ui">
          <div className="wc-container">
            <nav className="wc-tech-crumb is-on-dark" aria-label="Breadcrumb">
              <Link href="/services">Services</Link>
              <span aria-hidden>/</span>
              <Link href="/services/technology">Technology</Link>
              <span aria-hidden>/</span>
              <span>{page.title}</span>
            </nav>

            <p className="wc-tech-kicker is-on-dark">Technology</p>
            <h1 className="wc-tech-detail-title">{page.title}</h1>
            <p className="wc-tech-detail-tagline">{page.tagline}</p>
            <p className="wc-tech-detail-lede">{page.description}</p>
            <div className="wc-tech-detail-actions">
              <Link href="/contact" className="wc-btn wc-btn-solid">
                Start a project
                <span aria-hidden>→</span>
              </Link>
              <a href="#outcomes" className="wc-btn wc-btn-light">
                See outcomes
              </a>
            </div>
          </div>
        </div>
      </header>

      <section id="outcomes" className="wc-tech-section">
        <div className="wc-container">
          <header className="wc-tech-section-head wc-tech-section-head--list">
            <p className="wc-tech-kicker">What you get</p>
            <h2 className="wc-tech-section-title">
              Built around outcomes, not feature lists.
            </h2>
          </header>

          <ul className="wc-tech-highlights">
            {page.highlights.map((item, i) => (
              <li key={item}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wc-tech-process">
        <div className="wc-container">
          <header className="wc-tech-section-head wc-tech-section-head--list">
            <p className="wc-tech-kicker">How we build</p>
            <h2 className="wc-tech-section-title">A clear path from brief to launch.</h2>
          </header>

          <div className="wc-tech-process-list">
            {technologyProcess.map((step) => (
              <article key={step.index} className="wc-tech-process-item">
                <strong>{step.index}</strong>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {(page.logos.length > 0 || page.platforms) && (
        <section id="stack" className="wc-tech-stack">
          <div className="wc-container">
            {page.logos.length > 0 && (
              <>
                <header className="wc-tech-section-head wc-tech-section-head--list">
                  <p className="wc-tech-kicker">Stack</p>
                  <h2 className="wc-tech-section-title">Technologies we work with</h2>
                </header>
                <ul className="wc-tech-logos">
                  {page.logos.map((logo) => (
                    <li key={logo.alt}>
                      <img src={logo.src} alt={logo.alt} />
                      <span>{logo.alt}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {page.platforms && (
              <>
                <header
                  className={`wc-tech-section-head wc-tech-section-head--list ${
                    page.logos.length > 0 ? "wc-tech-stack-gap" : ""
                  }`}
                >
                  <p className="wc-tech-kicker">Platforms</p>
                  <h2 className="wc-tech-section-title">Commerce platforms we ship on</h2>
                </header>
                <ul className="wc-tech-platforms">
                  {page.platforms.map((platform, i) => (
                    <li key={platform.title}>
                      <span className="wc-tech-card-index">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="wc-tech-platforms-logo" aria-hidden>
                        <img src={platform.image} alt="" />
                      </div>
                      <div>
                        <h3>{platform.title}</h3>
                        <p>{platform.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </section>
      )}

      <section className="wc-tech-faq">
        <div className="wc-container">
          <div className="wc-tech-faq-layout">
            <div className="wc-tech-faq-intro">
              <p className="wc-tech-kicker">FAQs</p>
              <h2 className="wc-tech-section-title">
                Answers before you{" "}
                <span className="wc-gradient-text">start</span>
              </h2>
              <p className="wc-tech-faq-copy">
                Quick context on scope, stack, and what happens after launch — ask anything else when
                you reach out.
              </p>
              <a href={`mailto:${site.email}`} className="wc-tech-faq-mail">
                {site.email}
              </a>
            </div>

            <div className="wc-tech-faq-list">
              {page.faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={faq.question}
                    className={`wc-tech-faq-item${isOpen ? " is-open" : ""}`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span className="wc-tech-faq-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="wc-tech-faq-question">{faq.question}</span>
                      <span className="wc-tech-faq-toggle" aria-hidden>
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen ? <div className="wc-tech-faq-answer">{faq.answer}</div> : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="wc-tech-related">
        <div className="wc-container">
          <header className="wc-tech-section-head wc-tech-section-head--related">
            <div>
              <p className="wc-tech-kicker">More technology</p>
              <h2 className="wc-tech-section-title">Explore related capabilities</h2>
            </div>
            <Link href="/services/technology" className="wc-tech-related-all">
              All technology
              <span aria-hidden>→</span>
            </Link>
          </header>

          <ul className="wc-tech-grid">
            {related.slice(0, 3).map((item, i) => (
              <li key={item.href}>
                <Link href={item.href} className="wc-tech-card">
                  <div className="wc-tech-card-media" aria-hidden>
                    <img src={item.image} alt="" draggable={false} />
                  </div>
                  <div className="wc-tech-card-body">
                    <span className="wc-tech-card-index">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="wc-tech-card-title">{item.title}</h3>
                    <p className="wc-tech-card-tagline">{item.tagline}</p>
                    <span className="wc-tech-card-go">
                      Explore
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wc-tech-next">
        <div className="wc-container">
          <div className="wc-tech-next-row">
            <div>
              <p className="wc-tech-kicker">Next step</p>
              <h2 className="wc-tech-next-title">Ready to start {page.title.toLowerCase()}?</h2>
              <p className="wc-tech-next-copy">
                Share your brief and we&apos;ll come back with approach, timeline, and next steps.
              </p>
              <a href={`mailto:${site.email}`} className="wc-tech-next-mail">
                {site.email}
              </a>
            </div>
            <div className="wc-tech-next-actions">
              <Link href="/contact" className="wc-btn wc-btn-solid">
                Start a project
                <span aria-hidden>→</span>
              </Link>
              <a href={`mailto:${site.email}`} className="wc-btn wc-btn-dark">
                Mail us
              </a>
            </div>
          </div>
        </div>
      </section>

      <EnquireCta background={page.image} buttonLabel="Get in touch" />
    </div>
  );
}
