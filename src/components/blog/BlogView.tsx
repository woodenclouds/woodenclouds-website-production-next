"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { blogs, formatBlogDate } from "@/data/blogs";
import { EnquireCta } from "@/components/shared/PageBits";

const allTags = Array.from(new Set(blogs.flatMap((b) => b.tags))).sort();
const filters = ["All", ...allTags] as const;

export function BlogView() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const filtered = useMemo(
    () => (filter === "All" ? blogs : blogs.filter((b) => b.tags.includes(filter))),
    [filter],
  );

  const featured = filter === "All" ? filtered[0] : null;
  const list = featured ? filtered.slice(1) : filtered;

  return (
    <div className="wc-blog-page">
      <section id="reading" className="wc-blog-index">
        <div className="wc-container">
          <header className="wc-blog-index-head">
            <div>
              <p className="wc-blog-kicker">Woodenclouds</p>
              <h1 className="wc-blog-index-title">Blog</h1>
              <p className="wc-blog-index-lede">
                Product, teams, brand, and AI — practical writing from how we design, build, and
                ship.
              </p>
            </div>
            <p className="wc-blog-index-count">
              {filtered.length} {filtered.length === 1 ? "essay" : "essays"}
            </p>
          </header>

          <div className="wc-blog-filters" role="tablist" aria-label="Filter by topic">
            {filters.map((tag) => (
              <button
                key={tag}
                type="button"
                role="tab"
                aria-selected={filter === tag}
                onClick={() => setFilter(tag)}
                className={`wc-blog-filter ${filter === tag ? "is-active" : ""}`}
              >
                {tag}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="wc-blog-empty">No essays in this topic yet.</p>
          ) : (
            <>
              {featured && (
                <article className="wc-blog-featured">
                  <Link href={`/blog/${featured.slug}`} className="wc-blog-featured-media">
                    <img src={featured.image} alt="" />
                  </Link>
                  <div className="wc-blog-featured-body">
                    <p className="wc-blog-meta">
                      <span>Featured</span>
                      <span aria-hidden>·</span>
                      <time dateTime={featured.createdAt}>{formatBlogDate(featured.createdAt)}</time>
                      <span aria-hidden>·</span>
                      <span>{featured.readMinutes} min read</span>
                    </p>
                    <h2 className="wc-blog-featured-title">
                      <Link href={`/blog/${featured.slug}`}>{featured.title}</Link>
                    </h2>
                    <p className="wc-blog-featured-excerpt">{featured.excerpt}</p>
                    <p className="wc-blog-tags">{featured.tags.join(" · ")}</p>
                    <Link href={`/blog/${featured.slug}`} className="wc-blog-read">
                      Read essay
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </article>
              )}

              {list.length > 0 && (
                <ul className="wc-blog-list">
                  {list.map((blog, i) => (
                    <li key={blog.slug}>
                      <Link href={`/blog/${blog.slug}`} className="wc-blog-row">
                        <span className="wc-blog-row-index">
                          {String(featured ? i + 2 : i + 1).padStart(2, "0")}
                        </span>
                        <div className="wc-blog-row-media" aria-hidden>
                          <img src={blog.image} alt="" />
                        </div>
                        <div className="wc-blog-row-body">
                          <p className="wc-blog-meta">
                            <time dateTime={blog.createdAt}>{formatBlogDate(blog.createdAt)}</time>
                            <span aria-hidden>·</span>
                            <span>{blog.readMinutes} min</span>
                            <span aria-hidden>·</span>
                            <span>{blog.tags.join(" · ")}</span>
                          </p>
                          <h2 className="wc-blog-row-title">{blog.title}</h2>
                          <p className="wc-blog-row-excerpt">{blog.excerpt}</p>
                        </div>
                        <span className="wc-blog-row-link">
                          Read
                          <span aria-hidden>→</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      </section>

      <EnquireCta buttonLabel="Start a conversation" />
    </div>
  );
}
