"use client";

import Link from "next/link";
import { hero } from "@/data/hero";

export function HomeHero() {
  return (
    <header className="wc-hero">
      <div className="wc-hero-stage">
        <div className="wc-hero-media">
          <img src={hero.image} alt={hero.alt} draggable={false} />
        </div>
        <div className="wc-hero-overlay" aria-hidden />
      </div>

      <div className="wc-hero-ui">
        <div className="wc-container wc-hero-content">
          <div className="wc-hero-copy">
            <h1>{hero.headline}</h1>
            <p className="wc-hero-lede">{hero.lede}</p>
            <Link href={hero.cta.href} className="wc-hero-cta">
              {hero.cta.label}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="wc-hero-chrome">
          <div className="wc-container">
            <div className="wc-hero-chrome-row">
              <button
                type="button"
                className="wc-hero-scroll"
                aria-label="Scroll to next section"
                onClick={() => {
                  document.getElementById("digital-future")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                <span className="wc-hero-scroll-chevs" aria-hidden>
                  <span />
                  <span />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
