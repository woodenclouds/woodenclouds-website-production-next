"use client";

import {
  businessSupportHero,
  businessSupportOfferings,
  businessSupportProcess,
  howWeHelpAll,
} from "@/data/businessSupport";
import { site } from "@/data/content";
import { useQuote } from "@/components/layout/QuoteProvider";
import { EnquireCta } from "@/components/shared/PageBits";

export function BusinessSupportView() {
  const { openQuote } = useQuote();

  return (
    <div className="wc-biz-page">
      <header className="wc-biz-hero">
        <div className="wc-biz-hero-media" aria-hidden>
          <img src={businessSupportHero.image} alt="" />
        </div>
        <div className="wc-biz-hero-wash" aria-hidden />
        <div className="wc-biz-hero-grain" aria-hidden />

        <div className="wc-biz-hero-ui">
          <div className="wc-container">
            <p className="wc-biz-brand">Woodenclouds</p>
            <h1 className="wc-biz-hero-title">
              {businessSupportHero.title}
              <br />
              <span className="wc-gradient-text">{businessSupportHero.titleAccent}</span>
            </h1>
            <p className="wc-biz-hero-lede">{businessSupportHero.description}</p>
            <div className="wc-biz-hero-actions">
              <a href="#how-we-help" className="wc-btn wc-btn-solid">
                How we help
                <span aria-hidden>→</span>
              </a>
              <button type="button" className="wc-btn wc-btn-dark" onClick={openQuote}>
                Talk to us
              </button>
            </div>
          </div>
        </div>

        <a href="#offerings" className="wc-biz-hero-scroll" aria-label="Scroll to offerings">
          <span>Scroll</span>
          <span aria-hidden>↓</span>
        </a>
      </header>

      <section id="offerings" className="wc-biz-offerings">
        <div className="wc-biz-offerings-bg" aria-hidden />
        <div className="wc-container">
          <header className="wc-biz-head">
            <div>
              <p className="wc-biz-kicker">What we offer</p>
              <h2 className="wc-biz-title">
                Six ways we steady the business behind the product.
              </h2>
            </div>
            <p className="wc-biz-intro">
              Beyond builds and campaigns — the consulting, planning, and operational layers that
              keep growth from getting messy.
            </p>
          </header>

          <ol className="wc-biz-offer-list">
            {businessSupportOfferings.map((item, i) => (
              <li key={item.title} className="wc-biz-offer">
                <span className="wc-biz-offer-index">{String(i + 1).padStart(2, "0")}</span>
                <div className="wc-biz-offer-copy">
                  <h3>{item.title}</h3>
                  <p className="wc-biz-offer-tag">{item.tagline}</p>
                  <p className="wc-biz-offer-desc">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="how-we-help" className="wc-biz-help">
        <div className="wc-biz-help-media" aria-hidden>
          <img src="/about/img2.jpg" alt="" />
        </div>
        <div className="wc-biz-help-shade" aria-hidden />

        <div className="wc-container wc-biz-help-inner">
          <header className="wc-biz-help-head">
            <p className="wc-biz-kicker is-on-dark">How we help all</p>
            <h2 className="wc-biz-help-title">
              One standard of care.
              <br />
              <span>Every stage of the journey.</span>
            </h2>
            <p className="wc-biz-help-lede">
              Whether you are validating an idea or running an established team, we meet you where
              you are — with clarity, craft, and accountability.
            </p>
          </header>

          <ul className="wc-biz-help-rail">
            {howWeHelpAll.map((item, i) => (
              <li key={item.title}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wc-biz-process">
        <div className="wc-container">
          <header className="wc-biz-head wc-biz-head--compact">
            <div>
              <p className="wc-biz-kicker">How we work</p>
              <h2 className="wc-biz-title">From brief to lasting momentum.</h2>
            </div>
          </header>

          <div className="wc-biz-timeline">
            {businessSupportProcess.map((step) => (
              <article key={step.index} className="wc-biz-step">
                <strong className="wc-biz-step-index">{step.index}</strong>
                <div className="wc-biz-step-marker" aria-hidden>
                  <span />
                </div>
                <div className="wc-biz-step-body">
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wc-biz-next">
        <div className="wc-container">
          <div className="wc-biz-next-panel">
            <div>
              <p className="wc-biz-kicker">Next step</p>
              <h2 className="wc-biz-next-title">Ready for a clearer path?</h2>
              <p className="wc-biz-next-copy">
                Tell us where the business stands. We&apos;ll reply with how we can help and what
                working together looks like.
              </p>
              <a href={`mailto:${site.email}`} className="wc-biz-next-mail">
                {site.email}
              </a>
            </div>
            <div className="wc-biz-next-actions">
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

      <EnquireCta
        background="/services/startup-business-support.jpg"
        buttonLabel="Enquire now"
      />
    </div>
  );
}
