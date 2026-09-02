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
import GradientWaves from "@/components/solutions/GradientWaves";

import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Solutions",
  description:
    "Productized Woodenclouds solutions — WAI voice agents, commerce, custom platforms, mobile, AI, growth, and dedicated squads.",
  path: "/solutions",
});

export default function SolutionsPage() {
  const featured = getFeaturedWorks(2);
  const jumpItems = solutions.map(({ id, name }) => ({ id, name }));

  return (
    <>
      {/* Hero — centered composition on clean brand field */}
      <header className="solutions-hero relative flex min-h-[100svh] items-center justify-center overflow-hidden text-white">
        <div className="absolute inset-0 z-0 pointer-events-auto">
          <GradientWaves
            horizonColor="#3b82f6"
            waveColor="#7dd3fc"
            crestColor="#ffffff"
            speed={0.1}
            amplitude={1.35}
            waveScale={0.6}
            waveRatio={0.9}
            swell={35}
            turbulence={20}
            tilt={1.11}
            zoom={1}
            height={5.5}
            fogDepth={17}
            detail="medium"
            brightness={1}
            opacity={1}
            mouseInteraction
            parallaxStrength={0.5}
            grain
            grainIntensity={0.025}
          />
        </div>

        <div className="wc-container relative z-10 w-full py-28 text-center md:py-32 pointer-events-none">
          <p className="mb-6 text-xs font-light uppercase tracking-[0.18em] text-white/75">
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
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 pointer-events-auto">
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
        .wai-list-media {
          background:
            radial-gradient(ellipse 90% 65% at 50% 35%, #1e5fa8 0%, #123a6b 38%, #0a1f38 72%, #060d18 100%);
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
                    <div
                      className={[
                        "overflow-hidden rounded-2xl bg-ink/5",
                        solution.id === "wai" ? "wai-list-media" : "",
                      ].join(" ")}
                    >
                      <img
                        src={solution.image}
                        alt={solution.imageAlt}
                        className={[
                          "aspect-[4/3] w-full transition duration-700 hover:scale-[1.03]",
                          solution.id === "wai" ? "object-contain object-center p-6" : "object-cover",
                        ].join(" ")}
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
