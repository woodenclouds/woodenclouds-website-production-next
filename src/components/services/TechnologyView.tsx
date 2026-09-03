"use client";

import Link from "next/link";
import {
  technologyCapabilities,
  technologyHero,
  technologyProcess,
  technologyStandards,
} from "@/data/technology";
import { site } from "@/data/content";
import { EnquireCta } from "@/components/shared/PageBits";

export function TechnologyView() {

  return (
    <div className="wc-tech-page">
      <header className="wc-tech-hero">
        <div className="wc-tech-hero-media" aria-hidden>
          <img src={technologyHero.image} alt="" />
        </div>
        <div className="wc-tech-hero-wash" aria-hidden />
        <div className="wc-tech-hero-grain" aria-hidden />

        <div className="wc-tech-hero-ui">
          <div className="wc-container">
            <h1 className="wc-tech-hero-title">
              {technologyHero.title}
              <br />
              <span className="wc-gradient-text">{technologyHero.titleAccent}</span>
            </h1>
            <p className="wc-tech-hero-lede">{technologyHero.description}</p>
            <div className="wc-tech-hero-actions">
              <a href="#capabilities" className="wc-btn wc-btn-solid">
                Explore capabilities
                <span aria-hidden>→</span>
              </a>
              <Link href="/contact" className="wc-btn wc-btn-light">
                Start a project
              </Link>
            </div>
          </div>
        </div>

        <a href="#capabilities" className="wc-tech-hero-scroll" aria-label="Scroll to capabilities">
          <span>Scroll</span>
          <span aria-hidden>↓</span>
        </a>
      </header>

      <section id="capabilities" className="wc-tech-section">
        <div className="wc-tech-section-bg" aria-hidden />
        <div className="wc-container relative z-10">
          <header className="wc-tech-section-head wc-tech-section-head--list">
            <p className="wc-tech-kicker">Technology services</p>
            <h2 className="wc-tech-section-title">
              Six capabilities. One engineering standard.
            </h2>
            <p className="wc-tech-section-intro">
              Pick the surface you need — or combine them. Every engagement is built to ship cleanly
              and scale with you.
            </p>
          </header>

          <ul className="wc-tech-grid">
            {technologyCapabilities.map((card, i) => (
              <li key={card.title}>
                <Link href={card.href} className="wc-tech-card">
                  <div className="wc-tech-card-media" aria-hidden>
                    <img src={card.image} alt="" draggable={false} />
                  </div>
                  <div className="wc-tech-card-body">
                    <span className="wc-tech-card-index">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="wc-tech-card-title">{card.title}</h3>
                    <p className="wc-tech-card-tagline">{card.tagline}</p>
                    <p className="wc-tech-card-desc">{card.description}</p>
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

      <section className="wc-tech-process">
        <div className="wc-container">
          <header className="wc-tech-section-head wc-tech-section-head--compact">
            <div>
              <p className="wc-tech-kicker">How we build</p>
              <h2 className="wc-tech-section-title">A clear path from brief to launch.</h2>
            </div>
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

      <section className="wc-tech-standards">
        <div className="wc-container">
          <header className="wc-tech-section-head wc-tech-section-head--compact">
            <div>
              <p className="wc-tech-kicker">How we work</p>
              <h2 className="wc-tech-section-title">
                Engineering with <span className="wc-gradient-text">intent</span>
              </h2>
            </div>
          </header>

          <ol className="wc-tech-standards-grid">
            {technologyStandards.map((item, i) => (
              <li key={item.title}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wc-tech-next">
        <div className="wc-container">
          <div className="wc-tech-next-row">
            <div>
              <p className="wc-tech-kicker">Next step</p>
              <h2 className="wc-tech-next-title">Ready to build?</h2>
              <p className="wc-tech-next-copy">
                Tell us what you need to ship. We&apos;ll reply with a clear approach, timeline, and
                next steps.
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

      <EnquireCta background="/services/technology.jpg" buttonLabel="Get in touch" />
    </div>
  );
}
