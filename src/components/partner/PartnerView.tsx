"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { partnerPrograms, partnerReasons, site } from "@/data/content";
import { EnquireCta } from "@/components/shared/PageBits";

export function PartnerView() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 40);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div className="wc-partner-page bg-paper text-ink">
      <header className={`wc-partner-stage${ready ? " is-ready" : ""}`}>
        <div className="wc-partner-stage-grain" aria-hidden />
        <div className="wc-partner-stage-mesh" aria-hidden />
        <div className="wc-partner-stage-orb wc-partner-stage-orb--a" aria-hidden />
        <div className="wc-partner-stage-orb wc-partner-stage-orb--b" aria-hidden />
        <div className="wc-partner-stage-orb wc-partner-stage-orb--c" aria-hidden />

        <div className="wc-container wc-partner-stage-frame">
          <div className="wc-partner-stage-split">
            <div className="wc-partner-stage-main">
              <h1 className="wc-partner-stage-title">
                Grow together.
                <br />
                Win together.
              </h1>
              <p className="wc-partner-stage-lede">
                Partnership paths for delivery capacity, referrals, and strategic alliances — across
                technology, marketing, and business.
              </p>
              <div className="wc-partner-stage-actions">
                <a href="#programs" className="wc-btn wc-btn-solid">
                  Explore programs
                  <span aria-hidden>↓</span>
                </a>
                <Link href="/contact" className="wc-btn wc-btn-dark">
                  Start a conversation
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>

            <div className="wc-partner-stage-visual" aria-hidden>
              <div className="wc-partner-stage-visual-media">
                <img src="/hero/hero-collab.jpg" alt="" />
              </div>
              <div className="wc-partner-stage-visual-shade" />
              <div className="wc-partner-stage-visual-meta">
                <span>Partner programs</span>
                <strong>Three ways to collaborate</strong>
                <em>Outsourcing · Affiliate · Business</em>
              </div>
            </div>
          </div>
        </div>
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
                  <Link href="/contact" className="wc-btn wc-btn-dark mt-8">
                    Talk about this program
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wc-partner-reasons">
        <div className="wc-container">
          <div className="wc-partner-reasons-head">
            <p className="wc-partner-kicker">Why partners stay</p>
            <h2 className="wc-partner-reasons-title">
              Built for collaboration that compounds
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
              <Link href="/contact" className="wc-btn wc-btn-solid">
                Start a conversation
                <span aria-hidden>→</span>
              </Link>
              <a href={`mailto:${site.email}`} className="wc-btn wc-btn-dark">
                Mail us
              </a>
            </div>
          </div>
        </div>
      </section>

      <EnquireCta variant="light" buttonLabel="Start a partnership" />
    </div>
  );
}
