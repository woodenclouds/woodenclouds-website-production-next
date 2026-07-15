"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { works, workCategories } from "@/data/works";
import { EnquireCta } from "@/components/shared/PageBits";

const featured = works.find((w) => w.featured) ?? works[0];

export function WorksView() {
  const [filter, setFilter] = useState<(typeof workCategories)[number]>("All");

  const filtered = useMemo(
    () => (filter === "All" ? works : works.filter((w) => w.category === filter)),
    [filter],
  );

  return (
    <div className="bg-paper text-ink">
      <header className="wc-works-stage">
        <div className="wc-works-stage-grain" aria-hidden />
        <div className="wc-works-stage-orb wc-works-stage-orb--a" aria-hidden />
        <div className="wc-works-stage-orb wc-works-stage-orb--b" aria-hidden />
        <div className="wc-works-stage-orb wc-works-stage-orb--c" aria-hidden />

        <div className="wc-container wc-works-stage-frame">
          <div className="wc-works-stage-split">
            <div className="wc-works-stage-main">
              <h1 className="wc-works-stage-title">
                Selected work.
                <br />
                Real outcomes.
              </h1>
              <p className="wc-works-stage-lede">
                Products, brands, and experiences shaped with clarity — from first sketch to launch.
              </p>
              <div className="wc-works-stage-actions">
                <a href="#index" className="wc-btn wc-btn-solid">
                  Explore projects
                  <span aria-hidden>↓</span>
                </a>
                <Link href="/contact" className="wc-btn wc-btn-dark">
                  Start a project
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>

            <Link
              href={`/works/${featured.slug}`}
              className="wc-works-stage-visual group"
              aria-label={`${featured.title} — view case`}
            >
              <div className="wc-works-stage-visual-media">
                <img src={featured.image1} alt="" />
              </div>
              <div className="wc-works-stage-visual-shade" aria-hidden />
              <div className="wc-works-stage-visual-meta">
                <span>
                  {featured.category} · {featured.client}
                </span>
                <strong>{featured.title}</strong>
                {featured.result ? <em>{featured.result}</em> : null}
              </div>
            </Link>
          </div>
        </div>
      </header>

      <section id="index" className="wc-works-index">
        <div className="wc-container">
          <header className="wc-works-index-head">
            <div>
              <p className="wc-works-index-kicker">Project index</p>
              <h2 className="wc-works-index-title">Browse by craft</h2>
            </div>
            <p className="wc-works-index-count">
              {filtered.length} {filtered.length === 1 ? "project" : "projects"}
            </p>
          </header>

          <div className="wc-works-filters" role="tablist" aria-label="Filter by category">
            {workCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={filter === cat}
                onClick={() => setFilter(cat)}
                className={`wc-works-filter ${filter === cat ? "is-active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="wc-works-empty">No projects in this category yet.</p>
          ) : (
            <ul className="wc-works-grid">
              {filtered.map((work, i) => {
                const lead = i === 0 && filter === "All";
                return (
                  <li key={work.slug} className={lead ? "wc-works-item is-lead" : "wc-works-item"}>
                    <Link href={`/works/${work.slug}`} className="wc-works-card group">
                      <div className="wc-works-card-media">
                        <img src={work.thumbnail} alt={work.title} />
                      </div>
                      <div className="wc-works-card-body">
                        <span className="wc-works-card-meta">
                          {String(i + 1).padStart(2, "0")} · {work.category}
                          <span aria-hidden> · </span>
                          {work.client}
                        </span>
                        <h3 className="wc-works-card-title">{work.title}</h3>
                        <p className="wc-works-card-desc">{work.title1}</p>
                        {work.result ? <p className="wc-works-card-result">{work.result}</p> : null}
                        <span className="wc-works-card-link">
                          View case
                          <span aria-hidden>→</span>
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>

      <EnquireCta variant="light" buttonLabel="Start a conversation" />
    </div>
  );
}
