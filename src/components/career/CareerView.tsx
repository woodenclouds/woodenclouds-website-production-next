"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { careerOpenings } from "@/data/careers";
import { site } from "@/data/content";

const GENERAL_ROLE = "general";
const PAGE_SIZE = 3;

export function CareerView() {
  const [done, setDone] = useState(false);
  const [selectedRole, setSelectedRole] = useState(GENERAL_ROLE);
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(careerOpenings.length / PAGE_SIZE));

  const pageOpenings = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return careerOpenings.slice(start, start + PAGE_SIZE);
  }, [page]);

  function goToPage(next: number) {
    const clamped = Math.min(totalPages, Math.max(1, next));
    setPage(clamped);
    document.getElementById("openings")?.scrollIntoView({ behavior: "smooth" });
  }

  function applyTo(roleId: string) {
    setDone(false);
    setSelectedRole(roleId);
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <div className="bg-paper text-ink">
      <section id="openings" className="wc-section bg-white pt-24 md:pt-28">
        <div className="wc-container">
          <header className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.18em] text-muted">Open roles</p>
            <h1 className="text-3xl font-light tracking-tight md:text-4xl">Current openings</h1>
            <p className="mt-3 text-sm font-light leading-relaxed text-muted md:text-base">
              {careerOpenings.length} open{" "}
              {careerOpenings.length === 1 ? "role" : "roles"} — pick one or send a general
              application below.
            </p>
          </header>

          <ul className="divide-y divide-black/10 border-y border-black/10">
            {pageOpenings.map((opening, i) => {
              const index = (page - 1) * PAGE_SIZE + i + 1;
              return (
                <li
                  key={opening.id}
                  id={opening.id}
                  className="flex flex-col gap-4 py-7 sm:flex-row sm:items-start sm:justify-between sm:gap-8"
                >
                  <div className="flex min-w-0 gap-4">
                    <span className="shrink-0 pt-1 text-sm font-light text-ink/30">
                      {String(index).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <h2 className="text-xl font-light tracking-tight md:text-2xl">
                        {opening.title}
                      </h2>
                      <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-light uppercase tracking-wider text-muted">
                        <span>{opening.department}</span>
                        <span aria-hidden>·</span>
                        <span>{opening.location}</span>
                        <span aria-hidden>·</span>
                        <span>{opening.type}</span>
                      </p>
                      <p className="mt-3 max-w-xl text-sm font-light leading-relaxed text-muted">
                        {opening.summary}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="wc-btn wc-btn-solid shrink-0 self-start"
                    onClick={() => applyTo(opening.id)}
                  >
                    Apply
                    <span aria-hidden>→</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {totalPages > 1 && (
            <nav
              className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-6"
              aria-label="Openings pagination"
            >
              <p className="text-sm font-light text-muted">
                Page {page} of {totalPages}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  className="wc-btn wc-btn-dark disabled:pointer-events-none disabled:opacity-35"
                  onClick={() => goToPage(page - 1)}
                  disabled={page <= 1}
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    type="button"
                    aria-current={n === page ? "page" : undefined}
                    className={
                      n === page
                        ? "wc-btn wc-btn-solid min-w-11 justify-center px-0"
                        : "wc-btn wc-btn-dark min-w-11 justify-center px-0"
                    }
                    onClick={() => goToPage(n)}
                  >
                    {n}
                  </button>
                ))}
                <button
                  type="button"
                  className="wc-btn wc-btn-dark disabled:pointer-events-none disabled:opacity-35"
                  onClick={() => goToPage(page + 1)}
                  disabled={page >= totalPages}
                >
                  Next
                </button>
              </div>
            </nav>
          )}
        </div>
      </section>

      <section id="apply" className="wc-section bg-paper">
        <div className="wc-container">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.18em] text-muted">Apply</p>
              <h2 className="text-3xl font-light tracking-tight md:text-4xl">
                Tell us what you want to build
              </h2>
              <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-muted">
                Share a short note and how to reach you. We&apos;ll follow up for your resume or
                portfolio — usually within a few days.
              </p>
              <a
                href={`mailto:${site.careersEmail}`}
                className="mt-5 inline-block text-lg font-light text-accent-deep hover:underline"
              >
                {site.careersEmail}
              </a>
              <p className="mt-3 max-w-sm text-sm font-light leading-relaxed text-muted">
                Prefer email? Send your resume with the role in the subject line.
              </p>
              <Link
                href="/behind-woodenclouds"
                className="mt-8 inline-flex items-center gap-2 text-sm font-light text-ink/70 hover:text-ink"
              >
                Meet the team
                <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="rounded-none border border-black/10 bg-white p-6 md:p-8">
              {done ? (
                <p className="border-y border-black/10 py-6 text-base font-light leading-relaxed">
                  Thanks — your application was received. We&apos;ll be in touch soon.
                </p>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-5">
                  <div className="grid gap-2">
                    <label className="wc-label" htmlFor="career-role">
                      Role
                    </label>
                    <select
                      className="wc-input"
                      id="career-role"
                      name="role"
                      required
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.target.value)}
                    >
                      <option value={GENERAL_ROLE}>General application</option>
                      {careerOpenings.map((opening) => (
                        <option key={opening.id} value={opening.id}>
                          {opening.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid gap-2">
                    <label className="wc-label" htmlFor="career-name">
                      Full name
                    </label>
                    <input
                      className="wc-input"
                      id="career-name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <label className="wc-label" htmlFor="career-email">
                        Email
                      </label>
                      <input
                        className="wc-input"
                        id="career-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label className="wc-label" htmlFor="career-phone">
                        Phone
                      </label>
                      <input
                        className="wc-input"
                        id="career-phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="+91 …"
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <label className="wc-label" htmlFor="career-portfolio">
                      Portfolio or LinkedIn
                    </label>
                    <input
                      className="wc-input"
                      id="career-portfolio"
                      name="portfolio"
                      type="url"
                      autoComplete="url"
                      placeholder="https://"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label className="wc-label" htmlFor="career-message">
                      Cover note
                    </label>
                    <textarea
                      className="wc-input min-h-28"
                      id="career-message"
                      name="message"
                      rows={5}
                      required
                      placeholder="A few lines on your experience and what you want to work on"
                    />
                  </div>

                  <button type="submit" className="wc-btn wc-btn-solid justify-self-start">
                    Submit application
                    <span aria-hidden>→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
