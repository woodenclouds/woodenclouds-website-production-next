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
    <div className="bg-[#05070b] text-white">
      <header className="wc-works-hero">
        <div className="wc-works-hero-media" aria-hidden>
          <img src={featured.image1} alt="" />
        </div>
        <div className="wc-works-hero-overlay" aria-hidden />

        <div className="wc-works-hero-ui">
          <div className="wc-container">
            <h1 className="wc-works-hero-title">
              Selected work.
              <br />
              Real outcomes.
            </h1>
            <p className="wc-works-hero-lede">
              Products, brands, and experiences shaped with clarity — from first sketch to launch.
            </p>
            <div className="wc-works-hero-actions">
              <a href="#index" className="wc-btn wc-btn-light">
                Explore projects
                <span aria-hidden>→</span>
              </a>
              <Link href="/contact" className="wc-btn wc-btn-light">
                Start a project
              </Link>
            </div>
          </div>
        </div>

        <a href="#index" className="wc-works-hero-scroll" aria-label="Scroll to projects">
          <span>Scroll</span>
          <span aria-hidden>↓</span>
        </a>
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

      <EnquireCta buttonLabel="Start a conversation" />
    </div>
  );
}
