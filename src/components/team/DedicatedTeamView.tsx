"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { dedicatedAdvantages, dedicatedSquads } from "@/data/dedicatedTeam";
import { site } from "@/data/content";
import { EnquireCta } from "@/components/shared/PageBits";

export function DedicatedTeamView() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 40);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div className="wc-team-page bg-paper text-ink">
      <header className={`wc-team-stage${ready ? " is-ready" : ""}`}>
        <div className="wc-team-stage-grain" aria-hidden />
        <div className="wc-team-stage-mesh" aria-hidden />
        <div className="wc-team-stage-orb wc-team-stage-orb--a" aria-hidden />
        <div className="wc-team-stage-orb wc-team-stage-orb--b" aria-hidden />
        <div className="wc-team-stage-orb wc-team-stage-orb--c" aria-hidden />

        <div className="wc-container wc-team-stage-frame">
          <div className="wc-team-stage-split">
            <div className="wc-team-stage-main">
              <h1 className="wc-team-stage-title">
                Your roadmap.
                <br />
                Our squads.
              </h1>
              <p className="wc-team-stage-lede">
                Embed dedicated pods for marketing, product, engineering, and support — capacity
                that plugs into your rituals and ships with your priorities.
              </p>
              <div className="wc-team-stage-actions">
                <a href="#squads" className="wc-btn wc-btn-solid">
                  Explore teams
                  <span aria-hidden>↓</span>
                </a>
                <Link href="/contact" className="wc-btn wc-btn-dark">
                  Hire a team
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>

            <div className="wc-team-stage-visual" aria-hidden>
              <div className="wc-team-stage-visual-media">
                <img src="/team/team-work.jpg" alt="" />
              </div>
              <div className="wc-team-stage-visual-shade" />
              <div className="wc-team-stage-visual-meta">
                <span>Dedicated capacity</span>
                <strong>Squads that embed and deliver</strong>
                <em>Marketing · Tech · Product · Support</em>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="squads" className="wc-team-squads">
        <div className="wc-container">
          <header className="wc-team-squads-head">
            <div>
              <p className="wc-team-kicker">Hire dedicated team</p>
              <h2 className="wc-team-squads-title">Four squads. One standard of delivery.</h2>
            </div>
            <p className="wc-team-squads-intro">
              Pick the pod that fits your roadmap — or combine them. Every squad plugs into your
              rituals and ships with you.
            </p>
          </header>

          <ul className="wc-team-list">
            {dedicatedSquads.map((squad, i) => (
              <li key={squad.id} id={squad.id} className="wc-team-item">
                <div className="wc-team-item-media">
                  <img src={squad.image} alt="" />
                </div>
                <div className="wc-team-item-body">
                  <span className="wc-team-item-index">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="wc-team-item-title">{squad.title}</h3>
                  <p className="wc-team-item-tagline">{squad.tagline}</p>
                  <p className="wc-team-item-desc">{squad.description}</p>
                  <ul className="wc-team-item-highlights">
                    {squad.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link href="/contact" className="wc-btn wc-btn-dark mt-8">
                    Talk about this team
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wc-team-advantages">
        <div className="wc-container">
          <div className="wc-team-advantages-head">
            <p className="wc-team-kicker">The dedicated team advantage</p>
            <h2 className="wc-team-advantages-title">
              Built to plug in and keep shipping
            </h2>
          </div>
          <ol className="wc-team-advantages-grid">
            {dedicatedAdvantages.map((item, i) => (
              <li key={item.title}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wc-team-next">
        <div className="wc-container">
          <div className="wc-team-next-row">
            <div>
              <p className="wc-team-kicker">Next step</p>
              <h2 className="wc-team-next-title">Ready to hire a team?</h2>
              <p className="wc-team-next-copy">
                Tell us what you need to ship. We&apos;ll reply with the right squad shape, timeline,
                and next steps.
              </p>
              <a href={`mailto:${site.email}`} className="wc-team-next-mail">
                {site.email}
              </a>
            </div>
            <div className="wc-team-next-actions">
              <Link href="/contact" className="wc-btn wc-btn-solid">
                Hire a team
                <span aria-hidden>→</span>
              </Link>
              <a href={`mailto:${site.email}`} className="wc-btn wc-btn-dark">
                Mail us
              </a>
            </div>
          </div>
        </div>
      </section>

      <EnquireCta variant="light" buttonLabel="Hire a dedicated team" />
    </div>
  );
}
