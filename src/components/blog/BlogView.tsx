"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { formatBlogDate, type BlogPost } from "@/data/blog";
import { EnquireCta } from "@/components/shared/PageBits";

type Props = {
  posts: BlogPost[];
};

export function BlogView({ posts }: Props) {
  const [ready, setReady] = useState(false);
  const featured = posts[0] ?? null;

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 40);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div className="wc-blog-page bg-paper text-ink">
      <header className={`wc-blog-stage${ready ? " is-ready" : ""}`}>
        <div className="wc-blog-stage-grain" aria-hidden />
        <div className="wc-blog-stage-orb wc-blog-stage-orb--a" aria-hidden />
        <div className="wc-blog-stage-orb wc-blog-stage-orb--b" aria-hidden />
        <div className="wc-blog-stage-orb wc-blog-stage-orb--c" aria-hidden />

        <div className="wc-container wc-blog-stage-frame">
          <div className="wc-blog-stage-split">
            <div className="wc-blog-stage-main">
              <h1 className="wc-blog-stage-title">
                Ideas that
                <br />
                ship with us.
              </h1>
              <p className="wc-blog-stage-lede">
                Notes on product, teams, brand, and AI — practical writing from how we design, build,
                and deliver.
              </p>
              <div className="wc-blog-stage-actions">
                <a href="#reading" className="wc-btn wc-btn-solid">
                  Browse essays
                  <span aria-hidden>↓</span>
                </a>
                <Link href="/contact" className="wc-btn wc-btn-dark">
                  Start a conversation
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>

            {featured ? (
              <Link
                href={`/blog/${featured.slug}`}
                className="wc-blog-stage-visual group"
                aria-label={`${featured.title} — read essay`}
              >
                <div className="wc-blog-stage-visual-media">
                  <img src={featured.cover} alt="" />
                </div>
                <div className="wc-blog-stage-visual-shade" aria-hidden />
                <div className="wc-blog-stage-visual-meta">
                  <span>
                    Featured · {formatBlogDate(featured.date)} · {featured.readTime}
                  </span>
                  <strong>{featured.title}</strong>
                  <em>
                    {(featured.tags.length ? featured.tags : [featured.category])
                      .filter(Boolean)
                      .join(" · ")}
                  </em>
                </div>
              </Link>
            ) : null}
          </div>
        </div>
      </header>

      <section id="reading" className="wc-blog-index">
        <div className="wc-container">
          <header className="wc-blog-index-head">
            <div>
              <p className="wc-blog-kicker">Reading list</p>
              <h2 className="wc-blog-index-title">All essays</h2>
            </div>
            <p className="wc-blog-index-count">
              {posts.length} {posts.length === 1 ? "essay" : "essays"}
            </p>
          </header>

          {posts.length === 0 ? (
            <p className="wc-blog-empty">No essays yet.</p>
          ) : (
            <ul className="wc-blog-list">
              {posts.map((blog, i) => (
                <li key={blog.slug}>
                  <Link href={`/blog/${blog.slug}`} className="wc-blog-row">
                    <span className="wc-blog-row-index">{String(i + 1).padStart(2, "0")}</span>
                    <div className="wc-blog-row-media" aria-hidden>
                      <img src={blog.cover} alt="" />
                    </div>
                    <div className="wc-blog-row-body">
                      <p className="wc-blog-meta">
                        <time dateTime={blog.date}>{formatBlogDate(blog.date)}</time>
                        <span aria-hidden>·</span>
                        <span>{blog.readTime}</span>
                        {(blog.tags.length ? blog.tags : [blog.category])
                          .filter(Boolean)
                          .map((tag) => (
                            <span key={tag}>
                              <span aria-hidden>·</span>
                              <span>{tag}</span>
                            </span>
                          ))}
                      </p>
                      <h3 className="wc-blog-row-title">{blog.title}</h3>
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
        </div>
      </section>

      <EnquireCta variant="light" buttonLabel="Start a conversation" />
    </div>
  );
}
