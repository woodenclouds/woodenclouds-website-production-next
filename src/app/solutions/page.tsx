import type { Metadata } from "next";
import Link from "next/link";
import { EnquireCta } from "@/components/shared/PageBits";
import { SolutionsJumpNav } from "@/components/solutions/SolutionsJumpNav";
import {
  solutions,
  solutionsHero,
  solutionsStandards,
} from "@/data/solutions";
import { getFeaturedWorks } from "@/data/works";

import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Solutions",
  description:
    "Productized Woodenclouds solutions for commerce, custom platforms, mobile, AI, growth, and dedicated squads — engineered to scale.",
  path: "/solutions",
});

export default function SolutionsPage() {
  const featured = getFeaturedWorks(2);
  const jumpItems = solutions.map(({ id, name }) => ({ id, name }));

  return (
    <>
      {/* Hero — centered composition on clean brand field */}
      <header className="solutions-hero relative flex min-h-[88svh] items-center justify-center overflow-hidden text-white md:min-h-[92svh]">
        <div className="solutions-hero-bg" aria-hidden>
          <div className="solutions-hero-base" />
          <div className="solutions-hero-glow solutions-hero-glow--a" />
          <div className="solutions-hero-glow solutions-hero-glow--b" />
          <div className="solutions-hero-grid" />
          <div className="solutions-hero-frame solutions-hero-frame--tl" />
          <div className="solutions-hero-frame solutions-hero-frame--br" />
        </div>

        <div className="wc-container relative z-10 w-full py-28 text-center md:py-32">
          <p className="mb-6 inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-light uppercase tracking-[0.18em] text-white/75">
            {solutionsHero.kicker}
          </p>
          <h1 className="mx-auto max-w-4xl text-4xl font-light leading-[1.12] md:text-6xl">
            Solutions engineered to
            <br />
            <span className="wc-gradient-text">grow with you</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-white/70 md:text-lg">
            {solutionsHero.description}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {solutions.slice(0, 3).map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="wc-btn border-white/20 bg-white/5 text-white/90 hover:border-white/50 hover:bg-white/10"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </header>

      <style>{`
        .solutions-hero-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .solutions-hero-base {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 90% 65% at 50% 35%, #1e5fa8 0%, #123a6b 38%, #0a1f38 72%, #060d18 100%);
        }
        .solutions-hero-glow {
          position: absolute;
          border-radius: 9999px;
          filter: blur(80px);
          opacity: 0.45;
          animation: solutions-hero-drift 14s ease-in-out infinite alternate;
        }
        .solutions-hero-glow--a {
          width: min(52vw, 520px);
          height: min(52vw, 520px);
          left: -8%;
          bottom: -12%;
          background: radial-gradient(circle, rgba(91, 157, 232, 0.7) 0%, transparent 70%);
        }
        .solutions-hero-glow--b {
          width: min(42vw, 420px);
          height: min(42vw, 420px);
          right: -6%;
          top: 8%;
          background: radial-gradient(circle, rgba(41, 119, 212, 0.55) 0%, transparent 70%);
          animation-delay: -4s;
        }
        .solutions-hero-grid {
          position: absolute;
          inset: 0;
          opacity: 0.18;
          background-image:
            linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, #000 20%, transparent 80%);
        }
        .solutions-hero-frame {
          position: absolute;
          width: min(28vw, 280px);
          height: min(28vw, 280px);
          border: 1px solid rgba(168, 189, 234, 0.18);
          opacity: 0.7;
        }
        .solutions-hero-frame--tl {
          top: 12%;
          left: 6%;
          border-right: none;
          border-bottom: none;
        }
        .solutions-hero-frame--br {
          right: 6%;
          bottom: 14%;
          border-left: none;
          border-top: none;
        }
        @keyframes solutions-hero-drift {
          from { transform: translate3d(0, 0, 0) scale(1); }
          to { transform: translate3d(24px, -18px, 0) scale(1.08); }
        }
        @media (prefers-reduced-motion: reduce) {
          .solutions-hero-glow { animation: none; }
        }
      `}</style>

      <SolutionsJumpNav items={jumpItems} />

      {/* Product sections */}
      <div className="bg-paper text-ink">
        {solutions.map((solution, index) => {
          const reverse = index % 2 === 1;
          return (
            <section
              key={solution.id}
              id={solution.id}
              className="scroll-mt-20 border-b border-line-dark last:border-b-0"
            >
              <div className="wc-container py-16 md:py-24">
                <div
                  className={[
                    "grid items-center gap-10 lg:grid-cols-12 lg:gap-14",
                    reverse ? "lg:[&>*:first-child]:order-2" : "",
                  ].join(" ")}
                >
                  <div className="lg:col-span-6">
                    <div className="overflow-hidden rounded-2xl bg-ink/5">
                      <img
                        src={solution.image}
                        alt={solution.imageAlt}
                        className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-[1.03]"
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <p className="mb-3 text-sm font-light uppercase tracking-[0.18em] text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="text-3xl font-light tracking-tight text-ink md:text-4xl">
                      {solution.name}
                    </h2>
                    <p className="mt-3 text-lg font-light text-ink/80">{solution.tagline}</p>
                    <p className="mt-5 max-w-xl text-sm font-light leading-relaxed text-muted md:text-base">
                      {solution.description}
                    </p>

                    <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2">
                      {solution.features.map((feature) => (
                        <li
                          key={feature}
                          className="border-t border-line-dark py-3 text-sm font-light text-ink/80"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={solution.cta.href}
                      className="wc-btn wc-btn-dark mt-8"
                    >
                      {solution.cta.label}
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Standards */}
      <section className="bg-ink text-white">
        <div className="wc-container wc-section">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-light uppercase tracking-[0.18em] text-white/45">
              The Woodenclouds Standard
            </p>
            <h2 className="text-3xl font-light md:text-4xl">
              Technical excellence paired with{" "}
              <span className="wc-gradient-text">outcomes that matter</span>
            </h2>
          </div>

          <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {solutionsStandards.map((item, i) => (
              <li key={item.title} className="border-t border-white/15 pt-6">
                <span className="text-sm font-light text-white/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-light">{item.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-white/55">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Results */}
      <section className="wc-section bg-paper text-ink">
        <div className="wc-container">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-sm font-light uppercase tracking-[0.18em] text-muted">
                How strategy becomes results
              </p>
              <h2 className="text-3xl font-light text-ink md:text-4xl">Selected work</h2>
            </div>
            <Link href="/works" className="text-sm font-light text-muted hover:text-ink">
              View all works →
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {featured.map((work) => (
              <Link key={work.slug} href={`/works/${work.slug}`} className="group block">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={work.thumbnail}
                    alt={work.title}
                    className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-5 text-xs font-light uppercase tracking-[0.16em] text-muted">
                  {work.client} · {work.category}
                </p>
                <h3 className="mt-2 text-2xl font-light tracking-tight group-hover:text-accent-deep">
                  {work.title}
                </h3>
                <p className="mt-2 max-w-md text-sm font-light leading-relaxed text-muted">
                  {work.description1}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EnquireCta buttonLabel="Start a conversation" />
    </>
  );
}
