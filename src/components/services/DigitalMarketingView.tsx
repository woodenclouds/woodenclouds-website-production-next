"use client";

import {
  digitalMarketingApproach,
  digitalMarketingHero,
  digitalMarketingOutcomes,
  digitalMarketingServices,
  digitalMarketingStory,
} from "@/data/digitalMarketing";
import { site } from "@/data/content";
import { useQuote } from "@/components/layout/QuoteProvider";
import { EnquireCta } from "@/components/shared/PageBits";

export function DigitalMarketingView() {
  const { openQuote } = useQuote();

  return (
    <div className="wc-mkt-page">
      <header className="wc-mkt-hero">
        <div className="wc-mkt-hero-media" aria-hidden>
          <img src={digitalMarketingHero.image} alt="" />
        </div>
        <div className="wc-mkt-hero-wash" aria-hidden />
        <div className="wc-mkt-hero-grain" aria-hidden />

        <div className="wc-mkt-hero-ui">
          <div className="wc-container">
            <h1 className="wc-mkt-hero-title">
              {digitalMarketingHero.title}
              <br />
              <span className="wc-gradient-text">{digitalMarketingHero.titleAccent}</span>
            </h1>
            <p className="wc-mkt-hero-lede">{digitalMarketingHero.description}</p>
            <div className="wc-mkt-hero-actions">
              <a href="#services" className="wc-btn wc-btn-solid">
                See services
                <span aria-hidden>→</span>
              </a>
              <button type="button" className="wc-btn wc-btn-light" onClick={openQuote}>
                Start a campaign
              </button>
            </div>
          </div>
        </div>

        <a href="#story" className="wc-mkt-hero-scroll" aria-label="Scroll to story">
          <span>Scroll</span>
          <span aria-hidden>↓</span>
        </a>
      </header>

      <section id="story" className="wc-mkt-story">
        <div className="wc-container wc-mkt-story-grid">
          <div className="wc-mkt-story-media">
            <video
              src={digitalMarketingStory.video}
              autoPlay
              muted
              loop
              playsInline
              aria-label="Woodenclouds branding and marketing"
            />
          </div>
          <div className="wc-mkt-story-copy">
            <p className="wc-mkt-kicker">The brief</p>
            <h2 className="wc-mkt-story-title">{digitalMarketingStory.title}</h2>
            <p className="wc-mkt-story-body">{digitalMarketingStory.body}</p>
          </div>
        </div>
      </section>

      <section id="services" className="wc-mkt-services">
        <div className="wc-container">
          <header className="wc-mkt-head">
            <div>
              <p className="wc-mkt-kicker">What we craft</p>
              <h2 className="wc-mkt-title">From first impression to lasting demand.</h2>
            </div>
            <p className="wc-mkt-intro">
              Brand, campaigns, content, social, and SEO — working as one system so every channel
              strengthens the next.
            </p>
          </header>
        </div>

        <div className="wc-mkt-service-list">
          {digitalMarketingServices.map((item, i) => (
            <article
              key={item.title}
              className={`wc-mkt-service ${i % 2 === 1 ? "is-flip" : ""}`}
            >
              <div className="wc-mkt-service-media" aria-hidden>
                <img src={item.image} alt="" />
              </div>
              <div className="wc-mkt-service-copy">
                <span className="wc-mkt-service-index">{String(i + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p className="wc-mkt-service-tag">{item.tagline}</p>
                <p className="wc-mkt-service-desc">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="wc-mkt-approach">
        <div className="wc-mkt-approach-bg" aria-hidden />
        <div className="wc-container">
          <header className="wc-mkt-head wc-mkt-head--center">
            <div>
              <p className="wc-mkt-kicker">How we do it</p>
              <h2 className="wc-mkt-title">Listen. Learn. Launch.</h2>
            </div>
          </header>

          <ol className="wc-mkt-approach-list">
            {digitalMarketingApproach.map((step) => (
              <li key={step.index}>
                <strong>{step.index}</strong>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wc-mkt-outcomes">
        <div className="wc-container">
          <header className="wc-mkt-head">
            <div>
              <p className="wc-mkt-kicker">What changes</p>
              <h2 className="wc-mkt-title">What you should feel after we start.</h2>
            </div>
          </header>

          <ul className="wc-mkt-outcome-rail">
            {digitalMarketingOutcomes.map((item, i) => (
              <li key={item.title}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wc-mkt-next">
        <div className="wc-container">
          <div className="wc-mkt-next-panel">
            <div>
              <p className="wc-mkt-kicker is-on-dark">Next step</p>
              <h2 className="wc-mkt-next-title">Ready to make the brand work harder?</h2>
              <p className="wc-mkt-next-copy">
                Share your goals — a new identity, a campaign sprint, or always-on growth. We&apos;ll
                come back with a clear plan and next steps.
              </p>
              <a href={`mailto:${site.email}`} className="wc-mkt-next-mail">
                {site.email}
              </a>
            </div>
            <div className="wc-mkt-next-actions">
              <button type="button" className="wc-btn wc-btn-solid" onClick={openQuote}>
                Start a conversation
                <span aria-hidden>→</span>
              </button>
              <a href={`mailto:${site.email}`} className="wc-btn wc-btn-light">
                Mail us
              </a>
            </div>
          </div>
        </div>
      </section>

      <EnquireCta background="/services/marketing.jpg" buttonLabel="Enquire now" />
    </div>
  );
}
