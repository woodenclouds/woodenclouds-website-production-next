import type { Metadata } from "next";
import Link from "next/link";
import { EnquireCta } from "@/components/shared/PageBits";
import { SolutionsJumpNav } from "@/components/solutions/SolutionsJumpNav";
import { QuoteLink } from "@/components/solutions/QuoteLink";
import {
  solutions,
  solutionsHero,
  solutionsStandards,
} from "@/data/solutions";
import { getFeaturedWorks } from "@/data/works";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Productized Woodenclouds solutions for commerce, custom platforms, mobile, AI, growth, and dedicated squads — engineered to scale.",
};

export default function SolutionsPage() {
  const featured = getFeaturedWorks(2);
  const jumpItems = solutions.map(({ id, name }) => ({ id, name }));

  return (
    <>
      {/* Hero — one composition: brand, headline, line, CTA, full-bleed media */}
      <header className="relative flex min-h-[88svh] items-end overflow-hidden bg-ink text-white md:min-h-[92svh]">
        <video
          src="/videos/ai-solutions.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/35"
          aria-hidden
        />
        <div className="wc-container relative z-10 w-full pb-16 pt-32 md:pb-24 md:pt-40">
          <p className="mb-4 text-sm font-light uppercase tracking-[0.2em] text-white/55">
            {solutionsHero.kicker}
          </p>
          <p className="mb-5 text-2xl font-light tracking-tight text-white md:text-3xl">
            {solutionsHero.brand}
          </p>
          <h1 className="max-w-3xl text-4xl font-light leading-[1.1] md:text-6xl">
            Solutions engineered to{" "}
            <span className="wc-gradient-text">grow with you</span>
          </h1>
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/70 md:text-lg">
            {solutionsHero.description}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href={solutionsHero.cta.href} className="wc-btn wc-btn-light">
              {solutionsHero.cta.label}
            </a>
            <QuoteLink className="wc-btn border-white/25 text-white/80 hover:border-white hover:text-white">
              Talk to us
            </QuoteLink>
          </div>
        </div>
      </header>

      <SolutionsJumpNav items={jumpItems} />

      {/* Product sections */}
      <div className="bg-paper">
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
                    <h2 className="text-3xl font-light tracking-tight md:text-4xl">
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
      <section className="wc-section bg-paper">
        <div className="wc-container">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-sm font-light uppercase tracking-[0.18em] text-muted">
                How strategy becomes results
              </p>
              <h2 className="text-3xl font-light md:text-4xl">Selected work</h2>
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
