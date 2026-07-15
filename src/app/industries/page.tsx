import type { Metadata } from "next";
import Link from "next/link";
import { EnquireCta } from "@/components/shared/PageBits";
import { IndustriesJumpNav } from "@/components/industries/IndustriesJumpNav";
import {
  industries,
  industriesApproach,
  industriesHero,
} from "@/data/industries";
import { getFeaturedWorks } from "@/data/works";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Woodenclouds builds digital products and growth systems for healthcare, finance, retail, agriculture, construction, energy, education, hospitality, and more.",
};

export default function IndustriesPage() {
  const featured = getFeaturedWorks(2);
  const jumpItems = industries.map(({ id, name }) => ({ id, name }));
  const spotlight = industries.slice(0, 4);

  return (
    <div className="bg-paper text-ink">
      <header className="wc-ind-stage">
        <div className="wc-ind-stage-grain" aria-hidden />
        <div className="wc-ind-stage-orb wc-ind-stage-orb--a" aria-hidden />
        <div className="wc-ind-stage-orb wc-ind-stage-orb--b" aria-hidden />
        <div className="wc-ind-stage-orb wc-ind-stage-orb--c" aria-hidden />

        <div className="wc-container wc-ind-stage-frame">
          <span className="wc-ind-stage-corner wc-ind-stage-corner--tl" aria-hidden />
          <span className="wc-ind-stage-corner wc-ind-stage-corner--tr" aria-hidden />
          <span className="wc-ind-stage-corner wc-ind-stage-corner--bl" aria-hidden />
          <span className="wc-ind-stage-corner wc-ind-stage-corner--br" aria-hidden />

          <div className="wc-ind-stage-main">
            <p className="wc-ind-stage-kicker">{industriesHero.kicker}</p>
            <h1 className="wc-ind-stage-title">
              Boosting growth
              <br />
              across industries.
            </h1>
            <p className="wc-ind-stage-lede">{industriesHero.description}</p>
            <div className="wc-ind-stage-actions">
              <a href={`#${spotlight[0]?.id ?? "healthcare"}`} className="wc-btn wc-btn-solid">
                Explore industries
                <span aria-hidden>↓</span>
              </a>
              <Link href="/contact" className="wc-btn wc-btn-dark">
                Talk to us
              </Link>
            </div>
          </div>

          <div className="wc-ind-stage-foot">
            <ol className="wc-ind-stage-rail" aria-label="Featured industries">
              {spotlight.map((item, i) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ol>
            <p className="wc-ind-stage-count">{industries.length} sectors</p>
          </div>
        </div>
      </header>

      <IndustriesJumpNav items={jumpItems} />

      <div className="bg-paper text-ink">
        {industries.map((industry, index) => {
          const reverse = index % 2 === 1;
          return (
            <section
              key={industry.id}
              id={industry.id}
              className="wc-ind-block scroll-mt-28 border-b border-black/8 last:border-b-0"
            >
              <div className="wc-container py-16 md:py-24">
                <div
                  className={[
                    "grid items-center gap-10 lg:grid-cols-12 lg:gap-14",
                    reverse ? "lg:[&>*:first-child]:order-2" : "",
                  ].join(" ")}
                >
                  <div className="lg:col-span-6">
                    <div className="wc-ind-media overflow-hidden bg-ink/5">
                      <img
                        src={industry.image}
                        alt={industry.imageAlt}
                        className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-[1.03]"
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <p className="mb-3 text-sm font-light uppercase tracking-[0.18em] text-muted">
                      ({String(industry.projects).padStart(2, "0")}) projects
                    </p>
                    <h2 className="text-3xl font-light tracking-tight text-ink md:text-4xl">
                      {industry.name}
                    </h2>
                    <p className="mt-3 text-lg font-light text-ink/80">{industry.tagline}</p>
                    <p className="mt-5 max-w-xl text-sm font-light leading-relaxed text-muted md:text-base">
                      {industry.description}
                    </p>

                    <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2">
                      {industry.focus.map((item) => (
                        <li
                          key={item}
                          className="border-t border-black/10 py-3 text-sm font-light text-ink/80"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>

                    <Link href={industry.cta.href} className="wc-btn wc-btn-dark mt-8">
                      {industry.cta.label}
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="wc-ind-approach">
        <div className="wc-container wc-section">
          <div className="max-w-2xl">
            <p className="wc-ind-approach-kicker">How we engage</p>
            <h2 className="wc-ind-approach-title">
              Sector fluency paired with delivery that ships.
            </h2>
          </div>

          <ol className="wc-ind-approach-list">
            {industriesApproach.map((item, i) => (
              <li key={item.title}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wc-section bg-paper text-ink">
        <div className="wc-container">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-sm font-light uppercase tracking-[0.18em] text-muted">
                Across markets
              </p>
              <h2 className="text-3xl font-light text-ink md:text-4xl">Selected work</h2>
            </div>
            <Link href="/works" className="wc-home-link">
              View all works
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {featured.map((work) => (
              <Link key={work.slug} href={`/works/${work.slug}`} className="group block">
                <div className="wc-ind-media overflow-hidden">
                  <img
                    src={work.thumbnail}
                    alt={work.title}
                    className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-5 text-xs font-light uppercase tracking-[0.16em] text-muted">
                  {work.client} · {work.category}
                </p>
                <h3 className="mt-2 text-2xl font-light tracking-tight text-ink group-hover:opacity-70">
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

      <EnquireCta variant="light" buttonLabel="Start a conversation" />
    </div>
  );
}
