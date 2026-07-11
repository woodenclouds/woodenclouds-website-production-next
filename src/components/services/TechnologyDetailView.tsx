"use client";

import Link from "next/link";
import { useState } from "react";
import type { TechDetail } from "@/data/technology";
import { technologyCapabilities } from "@/data/technology";
import { site } from "@/data/content";
import { useQuote } from "@/components/layout/QuoteProvider";
import { EnquireCta } from "@/components/shared/PageBits";

export function TechnologyDetailView({ page }: { page: TechDetail }) {
  const { openQuote } = useQuote();
  const [openFaq, setOpenFaq] = useState(0);

  const related = technologyCapabilities.filter(
    (item) => item.href !== `/services/technology/${page.slug}`,
  );

  return (
    <div className="wc-tech-page">
      <header className="wc-tech-detail-hero">
        <div className="wc-tech-detail-hero-bg" aria-hidden />
        <div className="wc-container">
          <nav className="wc-tech-crumb" aria-label="Breadcrumb">
            <Link href="/services">Services</Link>
            <span aria-hidden>/</span>
            <Link href="/services/technology">Technology</Link>
            <span aria-hidden>/</span>
            <span>{page.title}</span>
          </nav>

          <h1 className="wc-tech-detail-title">{page.title}</h1>
          <p className="wc-tech-detail-tagline">{page.tagline}</p>
          <p className="wc-tech-detail-lede">{page.description}</p>
          <div className="wc-tech-hero-actions">
            <button type="button" className="wc-btn wc-btn-solid" onClick={openQuote}>
              Start a project
              <span aria-hidden>→</span>
            </button>
            {(page.logos.length > 0 || page.platforms) && (
              <a href="#stack" className="wc-btn wc-btn-dark">
                {page.platforms && page.logos.length === 0 ? "See platforms" : "See the stack"}
              </a>
            )}
          </div>
        </div>

        <div className="wc-tech-detail-band" aria-hidden>
          <div className="wc-container">
            <div className="wc-tech-detail-visual">
              <img src={page.image} alt="" />
            </div>
          </div>
        </div>
      </header>

      <section className="wc-tech-section">
        <div className="wc-container">
          <header className="wc-tech-section-head wc-tech-section-head--compact">
            <div>
              <p className="wc-tech-kicker">What you get</p>
              <h2 className="wc-tech-section-title">Built around outcomes, not feature lists.</h2>
            </div>
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

      {(page.logos.length > 0 || page.platforms) && (
        <section id="stack" className="wc-tech-stack">
          <div className="wc-container">
            {page.logos.length > 0 && (
              <>
                <header className="wc-tech-section-head wc-tech-section-head--compact">
                  <div>
                    <p className="wc-tech-kicker">Stack</p>
                    <h2 className="wc-tech-section-title">Technologies we work with</h2>
                  </div>
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
                  className={`wc-tech-section-head wc-tech-section-head--compact ${
                    page.logos.length > 0 ? "wc-tech-stack-gap" : ""
                  }`}
                >
                  <div>
                    <p className="wc-tech-kicker">Platforms</p>
                    <h2 className="wc-tech-section-title">Commerce platforms we ship on</h2>
                  </div>
                </header>
                <ul className="wc-tech-platforms">
                  {page.platforms.map((platform, i) => (
                    <li key={platform.title}>
                      <span className="wc-tech-row-index">{String(i + 1).padStart(2, "0")}</span>
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
        <div className="wc-container max-w-4xl">
          <h2 className="wc-tech-section-title">FAQs</h2>
          <div className="wc-tech-faq-list">
            {page.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question} className="wc-tech-faq-item">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span aria-hidden>{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen ? <div className="wc-tech-faq-answer">{faq.answer}</div> : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="wc-tech-related">
        <div className="wc-container">
          <header className="wc-tech-section-head wc-tech-section-head--compact">
            <div>
              <p className="wc-tech-kicker">More technology</p>
              <h2 className="wc-tech-section-title">Explore related capabilities</h2>
            </div>
            <Link href="/services/technology" className="wc-tech-related-all">
              All technology
              <span aria-hidden>→</span>
            </Link>
          </header>

          <div className="wc-tech-related-list">
            {related.slice(0, 4).map((item, i) => (
              <Link key={item.href} href={item.href} className="wc-tech-related-row">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.tagline}</p>
                </div>
                <span aria-hidden>→</span>
              </Link>
            ))}
          </div>
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
              <button type="button" className="wc-btn wc-btn-solid" onClick={openQuote}>
                Start a project
                <span aria-hidden>→</span>
              </button>
              <a href={`mailto:${site.email}`} className="wc-btn wc-btn-dark">
                Mail us
              </a>
            </div>
          </div>
        </div>
      </section>

      <EnquireCta background="/services/technology.jpg" buttonLabel="Enquire now" />
    </div>
  );
}
