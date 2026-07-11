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
      <section className="wc-section pt-0">
        <div className="wc-container">
          <div className="mb-10 flex flex-wrap gap-4">
            {workCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`border-b-2 pb-1 text-sm transition ${
                  filter === cat
                    ? "border-ink text-ink"
                    : "border-transparent text-muted hover:text-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((work) => (
              <Link key={work.slug} href={`/works/${work.slug}`} className="group block">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={work.thumbnail}
                    alt={work.title}
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-xs uppercase tracking-wider text-muted">{work.category}</p>
                <h6 className="mt-1 text-lg font-light">{work.title}</h6>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <EnquireCta />
    </>
  );
}
