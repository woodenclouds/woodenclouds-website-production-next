"use client";

import Link from "next/link";

import {
  businessSupportBrief,
  businessSupportHero,
  businessSupportOfferings,
  businessSupportProcess,
  howWeHelpAll,
} from "@/data/businessSupport";
import { site } from "@/data/content";
import { EnquireCta } from "@/components/shared/PageBits";

export function BusinessSupportView() {

  return (
    <div className="wc-biz-page">
      <header className="wc-biz-hero">
        <div className="wc-biz-hero-media" aria-hidden>
          <img src={businessSupportHero.image} alt="" />
        </div>
        <div className="wc-biz-hero-wash" aria-hidden />
        <div className="wc-biz-hero-grain" aria-hidden />

        <div className="wc-biz-hero-ui">
          <div className="wc-container wc-biz-hero-inner">
            <p className="wc-biz-hero-eyebrow">{businessSupportHero.eyebrow}</p>
            <h1 className="wc-biz-hero-brand">Woodenclouds</h1>
            <p className="wc-biz-hero-title">{businessSupportHero.title}</p>
            <p className="wc-biz-hero-lede">{businessSupportHero.description}</p>
            <div className="wc-biz-hero-actions">
              <a href="#offerings" className="wc-btn wc-btn-solid">
                See how we help
                <span aria-hidden>→</span>
              </a>
              <Link href="/contact" className="wc-btn wc-btn-light">
                Talk to us
              </Link>
            </div>
          </div>
        </div>

        <a href="#brief" className="wc-biz-hero-scroll" aria-label="Scroll to brief">
          <span>Scroll</span>
          <span aria-hidden>↓</span>
        </a>
      </header>

      <section id="brief" className="wc-biz-brief">
        <div className="wc-container wc-biz-brief-grid">
          <div className="wc-biz-brief-media">
            <img src={businessSupportBrief.image} alt="" />
            <div className="wc-biz-brief-glow" aria-hidden />
          </div>
          <div className="wc-biz-brief-copy">
            <p className="wc-biz-kicker">The brief</p>
            <h2 className="wc-biz-brief-title">{businessSupportBrief.title}</h2>
            <p className="wc-biz-brief-body">{businessSupportBrief.body}</p>
          </div>
        </div>
      </section>

      <section id="offerings" className="wc-biz-offerings">
        <div className="wc-biz-offerings-bg" aria-hidden />
        <div className="wc-container">
          <header className="wc-biz-head">
            <div>
              <p className="wc-biz-kicker">What we bring</p>
              <h2 className="wc-biz-title">Six levers behind the product.</h2>
            </div>
            <p className="wc-biz-intro">
              Consulting, research, strategy, finance, and operations — working as one support
              system so growth stays clear and executable.
            </p>
          </header>

          <ul className="wc-biz-offer-grid">
            {businessSupportOfferings.map((item, i) => (
              <li key={item.title} className="wc-biz-offer">
                <span className="wc-biz-offer-index">{String(i + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p className="wc-biz-offer-tag">{item.tagline}</p>
                <p className="wc-biz-offer-desc">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wc-biz-stages">
        <div className="wc-biz-stages-media" aria-hidden>
          <img src="/about/img5.jpg" alt="" />
        </div>
        <div className="wc-biz-stages-shade" aria-hidden />

        <div className="wc-container wc-biz-stages-inner">
          <header className="wc-biz-stages-head">
            <p className="wc-biz-kicker is-on-dark">Built for every stage</p>
            <h2 className="wc-biz-stages-title">
              Meet you where you are.
              <br />
              <span>Push you where you need to go.</span>
            </h2>
          </header>

          <ol className="wc-biz-stage-rail">
            {howWeHelpAll.map((item) => (
              <li key={item.title}>
                <span className="wc-biz-stage-num">{item.stage}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wc-biz-process">
        <div className="wc-container">
          <header className="wc-biz-head wc-biz-head--center">
            <div>
              <p className="wc-biz-kicker">How we work</p>
              <h2 className="wc-biz-title">Listen. Clarify. Ship. Stay.</h2>
            </div>
          </header>

          <ol className="wc-biz-process-list">
            {businessSupportProcess.map((step) => (
              <li key={step.index}>
                <strong>{step.index}</strong>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wc-biz-next">
        <div className="wc-container">
          <div className="wc-biz-next-panel">
            <div>
              <p className="wc-biz-kicker is-on-dark">Next step</p>
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
              <Link href="/contact" className="wc-btn wc-btn-solid">
                Start a conversation
                <span aria-hidden>→</span>
              </Link>
              <a href={`mailto:${site.email}`} className="wc-btn wc-btn-light">
                Mail us
              </a>
            </div>
          </div>
        </div>
      </section>

      <EnquireCta
        background="/services/startup-business-support.jpg"
        buttonLabel="Get in touch"
      />
    </div>
  );
}
