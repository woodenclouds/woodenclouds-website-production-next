"use client";

import { dedicatedAdvantages, dedicatedSquads } from "@/data/dedicatedTeam";
import { site } from "@/data/content";
import { useQuote } from "@/components/layout/QuoteProvider";
import { EnquireCta } from "@/components/shared/PageBits";

export function DedicatedTeamView() {
  const { openQuote } = useQuote();

  return (
    <div className="wc-team-page bg-[#05070b] text-white">
      <header className="wc-partner-hero">
        <div className="wc-partner-hero-media" aria-hidden>
          <img src="/team/team-work.jpg" alt="" />
        </div>
        <div className="wc-partner-hero-overlay" aria-hidden />

        <div className="wc-partner-hero-ui">
          <div className="wc-container">
            <p className="wc-team-hero-brand">Woodenclouds</p>
            <h1 className="wc-partner-hero-title">
              Teams that ship
              <br />
              <span className="wc-gradient-text">with you.</span>
            </h1>
            <p className="wc-partner-hero-lede">
              Cross-functional squads for engineering, design, and marketing that embed with your
              roadmap — flexible capacity without building every role in-house.
            </p>
            <div className="wc-partner-hero-actions">
              <a href="#squads" className="wc-btn wc-btn-light">
                Explore teams
                <span aria-hidden>→</span>
              </a>
              <button type="button" className="wc-btn wc-btn-light" onClick={openQuote}>
                Hire a team
              </button>
            </div>
          </div>
        </div>

        <a href="#squads" className="wc-partner-hero-scroll" aria-label="Scroll to teams">
          <span>Scroll</span>
          <span aria-hidden>↓</span>
        </a>
      </header>

      <section id="squads" className="wc-partner-programs">
        <div className="wc-container">
          <header className="wc-partner-programs-head">
            <div>
              <p className="wc-partner-kicker">Hire dedicated team</p>
              <h2 className="wc-partner-programs-title">Four squads. One standard of delivery.</h2>
            </div>
            <p className="wc-partner-programs-intro">
              Pick the pod that fits your roadmap — or combine them. Every squad plugs into your
              rituals and ships with you.
            </p>
          </header>

          <ul className="wc-partner-list">
            {dedicatedSquads.map((squad, i) => (
              <li key={squad.id} id={squad.id} className="wc-partner-item">
                <div className="wc-partner-item-media">
                  <img src={squad.image} alt="" />
                </div>
                <div className="wc-partner-item-body">
                  <span className="wc-partner-item-index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="wc-partner-item-title">{squad.title}</h3>
                  <p className="wc-partner-item-tagline">{squad.tagline}</p>
                  <p className="wc-partner-item-desc">{squad.description}</p>
                  <ul className="wc-partner-item-highlights">
                    {squad.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <button type="button" className="wc-btn wc-btn-dark mt-8" onClick={openQuote}>
                    Talk about this team
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
            <p className="wc-partner-kicker is-light">The dedicated team advantage</p>
            <h2 className="wc-partner-reasons-title">
              Built to plug in and{" "}
              <span className="wc-gradient-text">keep shipping</span>
            </h2>
          </div>
          <ol className="wc-partner-reasons-grid wc-team-advantages">
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

      <section className="wc-partner-next">
        <div className="wc-container">
          <div className="wc-partner-next-row">
            <div>
              <p className="wc-partner-kicker">Next step</p>
              <h2 className="wc-partner-next-title">Ready to hire a team?</h2>
              <p className="wc-partner-next-copy">
                Tell us what you need to ship. We&apos;ll reply with the right squad shape, timeline,
                and next steps.
              </p>
              <a href={`mailto:${site.email}`} className="wc-partner-next-mail">
                {site.email}
              </a>
            </div>
            <div className="wc-partner-next-actions">
              <button type="button" className="wc-btn wc-btn-solid" onClick={openQuote}>
                Hire a team
                <span aria-hidden>→</span>
              </button>
              <a href={`mailto:${site.email}`} className="wc-btn wc-btn-dark">
                Mail us
              </a>
            </div>
          </div>
        </div>
      </section>

      <EnquireCta background="/team/team-work.jpg" buttonLabel="Hire a dedicated team" />
    </div>
  );
}
