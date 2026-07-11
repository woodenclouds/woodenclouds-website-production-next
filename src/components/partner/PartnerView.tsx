"use client";

import { partnerPrograms, partnerReasons, site } from "@/data/content";
import { useQuote } from "@/components/layout/QuoteProvider";
import { EnquireCta } from "@/components/shared/PageBits";

export function PartnerView() {
  const { openQuote } = useQuote();

  return (
    <div className="bg-[#05070b] text-white">
      <header className="wc-partner-hero">
        <div className="wc-partner-hero-media" aria-hidden>
          <img src="/hero/hero-collab.jpg" alt="" />
        </div>
        <div className="wc-partner-hero-overlay" aria-hidden />

        <div className="wc-partner-hero-ui">
          <div className="wc-container">
            <h1 className="wc-partner-hero-title">
              Grow together.
              <br />
              <span className="wc-gradient-text">Partner with us.</span>
            </h1>
            <p className="wc-partner-hero-lede">
              Collaboration that drives growth — across delivery, referrals, and strategic
              alliances in technology, marketing, and business.
            </p>
            <div className="wc-partner-hero-actions">
              <a href="#programs" className="wc-btn wc-btn-light">
                Explore programs
                <span aria-hidden>→</span>
              </a>
              <button type="button" className="wc-btn wc-btn-light" onClick={openQuote}>
                Start a conversation
              </button>
            </div>
          </div>
        </div>

        <a href="#programs" className="wc-partner-hero-scroll" aria-label="Scroll to programs">
          <span>Scroll</span>
          <span aria-hidden>↓</span>
        </a>
      </header>

      <section id="programs" className="wc-partner-programs">
        <div className="wc-container">
          <header className="wc-partner-programs-head">
            <div>
              <p className="wc-partner-kicker">How we partner</p>
              <h2 className="wc-partner-programs-title">Three ways to grow together</h2>
            </div>
            <p className="wc-partner-programs-intro">
              Whether you need delivery capacity, referral income, or a strategic alliance — there
              is a path that fits.
            </p>
          </header>

          <ul className="wc-partner-list">
            {partnerPrograms.map((program, i) => (
              <li key={program.id} id={program.id} className="wc-partner-item">
                <div className="wc-partner-item-media">
                  <img src={program.image} alt="" />
                </div>
                <div className="wc-partner-item-body">
                  <span className="wc-partner-item-index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="wc-partner-item-title">{program.title}</h3>
                  <p className="wc-partner-item-tagline">{program.tagline}</p>
                  <p className="wc-partner-item-desc">{program.description}</p>
                  <ul className="wc-partner-item-highlights">
                    {program.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <button type="button" className="wc-btn wc-btn-dark mt-8" onClick={openQuote}>
                    Talk about this program
                    <span aria-hidden>→</span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wc-partner-reasons">
        <div className="wc-container">
          <div className="wc-partner-reasons-head">
            <p className="wc-partner-kicker is-light">Why partners stay</p>
            <h2 className="wc-partner-reasons-title">
              Built for collaboration that{" "}
              <span className="wc-gradient-text">actually compounds</span>
            </h2>
          </div>
          <ol className="wc-partner-reasons-grid">
            {partnerReasons.map((reason, i) => (
              <li key={reason.title}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{reason.title}</h3>
                <p>{reason.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wc-partner-next">
        <div className="wc-container">
          <div className="wc-partner-next-row">
            <div>
              <p className="wc-partner-kicker">Next step</p>
              <h2 className="wc-partner-next-title">Ready to partner?</h2>
              <p className="wc-partner-next-copy">
                Tell us how you want to collaborate. We&apos;ll reply with the right program details
                and next steps.
              </p>
              <a href={`mailto:${site.email}`} className="wc-partner-next-mail">
                {site.email}
              </a>
            </div>
            <div className="wc-partner-next-actions">
              <button type="button" className="wc-btn wc-btn-solid" onClick={openQuote}>
                Start a conversation
                <span aria-hidden>→</span>
              </button>
              <a href={`mailto:${site.email}`} className="wc-btn wc-btn-dark">
                Mail us
              </a>
            </div>
          </div>
        </div>
      </section>

      <EnquireCta buttonLabel="Partner with Woodenclouds" />
    </div>
  );
}
