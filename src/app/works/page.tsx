"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { works, workCategories } from "@/data/works";
import { PageHeader, EnquireCta } from "@/components/shared/PageBits";

export default function WorksPage() {
  const [filter, setFilter] = useState<(typeof workCategories)[number]>("All");

  const filtered = useMemo(
    () => (filter === "All" ? works : works.filter((w) => w.category === filter)),
    [filter],
  );

  return (
    <>
      <PageHeader subtitle="Our Works" title="Portfolio" />
      <section className="portfolio section-padding">
        <div className="container">
          <div className="filtering mb-50">
            <div className="filter" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {workCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  className={filter === cat ? "active" : ""}
                  style={{
                    background: "transparent",
                    border: "none",
                    borderBottom: filter === cat ? "2px solid currentColor" : "2px solid transparent",
                    padding: "6px 0",
                    cursor: "pointer",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="row">
            {filtered.map((work) => (
              <div className="col-lg-4 col-md-6" key={work.slug}>
                <Link href={`/works/${work.slug}`}>
                  <div className="item mb-40">
                    <div className="img">
                      <img src={work.thumbnail} alt={work.title} className="radius-10" />
                    </div>
                    <div className="cont mt-20">
                      <span className="fz-13 opacity-7">{work.category}</span>
                      <h6 className="fw-300 mt-5">{work.title}</h6>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EnquireCta />
    </>
  );
}
