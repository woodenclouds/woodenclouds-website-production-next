import type { Metadata } from "next";
import Link from "next/link";
import { EnquireCta } from "@/components/shared/PageBits";
import MoltenMetal from "@/components/shared/MoltenMetal";
import { IndustriesJumpNav } from "@/components/industries/IndustriesJumpNav";
import { industries, industriesApproach, industriesHero } from "@/data/industries";
import { getFeaturedWorks } from "@/data/works";

import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Industries",
  description:
    "Woodenclouds builds digital products and growth systems for healthcare, finance, retail, agriculture, construction, energy, education, hospitality, and more.",
  path: "/industries",
});

export default function IndustriesPage() {
  const featured = getFeaturedWorks(2);
  const jumpItems = industries.map(({ id, name }) => ({ id, name }));
  const firstIndustry = industries[0]?.id ?? "healthcare";

  return (
    <div className="bg-paper text-ink">
      <header className="wc-ind-stage h-[100svh] relative overflow-hidden !bg-none bg-white">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            maskImage: "radial-gradient(ellipse at center, transparent 25%, black 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, transparent 25%, black 75%)",
          }}
        >
          <MoltenMetal
            color1="#579cb9"
            color2="#006b7d"
            color3="#000000"
            speed={0.15}
            scale={3.6}
            detail={2}
            glow={1.25}
            coreSize={0.09}
            swirl={1.45}
            fold={-0.17}
            blackPoint={0.24}
            brightness={1.05}
            colorMode="molten"
            grain={true}
            grainIntensity={0.05}
            mouseInteraction={true}
            mouseStrength={0.2}
            opacity={1}
            lightMode
            backgroundColor="#ffffff"
          />
        </div>

        <div className="wc-container wc-ind-stage-frame relative z-10 !pt-0 !pb-0 !min-h-[100svh] flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl w-full">
            <div className="flex flex-col items-center">
              <h1 className="wc-ind-stage-title !max-w-none text-center">
                {industriesHero.titleLine1}
                <br />
                {industriesHero.titleLine2}
              </h1>
              <p className="wc-ind-stage-lede text-center mx-auto mt-6">{industriesHero.description}</p>
              <div className="wc-ind-stage-actions justify-center mt-8">
                <Link href="/contact" className="wc-btn wc-btn-solid">
                  {industriesHero.primaryCta}
                  <span aria-hidden>→</span>
                </Link>
                <a href={`#${firstIndustry}`} className="wc-btn wc-btn-dark">
                  {industriesHero.secondaryCta}
                  <span aria-hidden>↓</span>
                </a>
              </div>
            </div>
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
                    <Link href={`/industries/${industry.id}`} className="group block">
                      <div className={`wc-ind-media overflow-hidden bg-ink/5 is-${industry.id}`}>
                        <img
                          src={industry.image}
                          alt={industry.imageAlt}
                          className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                        />
                      </div>
                    </Link>
                  </div>

                  <div className="lg:col-span-6">
                    <p className="mb-3 text-sm font-light uppercase tracking-[0.18em] text-muted">
                      ({String(industry.projects).padStart(2, "0")}) projects
                    </p>
                    <h2 className="text-3xl font-light tracking-tight text-ink md:text-4xl">
                      <Link href={`/industries/${industry.id}`} className="hover:opacity-70">
                        {industry.name}
                      </Link>
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

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link href={`/industries/${industry.id}`} className="wc-btn wc-btn-dark">
                        Explore more
                        <span aria-hidden>→</span>
                      </Link>
                      <Link href={industry.cta.href} className="wc-btn wc-btn-outline-accent">
                        {industry.cta.label}
                      </Link>
                    </div>
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
