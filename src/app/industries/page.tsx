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
}

export default function IndustriesPage() {
  const featured = getFeaturedWorks(2);
  const jumpItems = industries.map(({ id, name }) => ({ id, name }));

  return (
    <>
      <header className="industries-hero relative flex min-h-[88svh] items-center justify-center overflow-hidden text-white md:min-h-[92svh]">
        <div className="industries-hero-bg" aria-hidden>
          <div className="industries-hero-base" />
          <div className="industries-hero-glow industries-hero-glow--a" />
          <div className="industries-hero-glow industries-hero-glow--b" />
          <div className="industries-hero-mesh" />
          <div className="industries-hero-frame industries-hero-frame--tl" />
          <div className="industries-hero-frame industries-hero-frame--br" />
        </div>

        <div className="wc-container relative z-10 w-full py-28 text-center md:py-32">
          <p className="mb-6 inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-light uppercase tracking-[0.18em] text-white/75">
            {industriesHero.kicker}
          </p>
          <h1 className="mx-auto max-w-4xl text-4xl font-light leading-[1.12] md:text-6xl">
            {industriesHero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-white/70 md:text-lg">
            {industriesHero.description}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {industries.slice(0, 4).map((item) => (
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
        .industries-hero-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .industries-hero-base {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 85% 60% at 50% 30%, #16324f 0%, #0c1a2a 42%, #070e16 78%, #04080d 100%);
        }
        .industries-hero-glow {
          position: absolute;
          border-radius: 9999px;
          filter: blur(90px);
          opacity: 0.42;
          animation: industries-hero-drift 16s ease-in-out infinite alternate;
        }
        .industries-hero-glow--a {
          width: min(55vw, 540px);
          height: min(55vw, 540px);
          left: -10%;
          top: 18%;
          background: radial-gradient(circle, rgba(41, 119, 212, 0.65) 0%, transparent 70%);
        }
        .industries-hero-glow--b {
          width: min(40vw, 400px);
          height: min(40vw, 400px);
          right: -4%;
          bottom: 8%;
          background: radial-gradient(circle, rgba(91, 157, 232, 0.45) 0%, transparent 70%);
          animation-delay: -5s;
        }
        .industries-hero-mesh {
          position: absolute;
          inset: 0;
          opacity: 0.22;
          background-image:
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(ellipse 72% 58% at 50% 38%, #000 18%, transparent 78%);
        }
        .industries-hero-frame {
          position: absolute;
          width: min(26vw, 260px);
          height: min(26vw, 260px);
          border: 1px solid rgba(168, 189, 234, 0.16);
          opacity: 0.75;
        }
        .industries-hero-frame--tl {
          top: 14%;
          left: 7%;
          border-right: none;
          border-bottom: none;
        }
        .industries-hero-frame--br {
          right: 7%;
          bottom: 16%;
          border-left: none;
          border-top: none;
        }
        @keyframes industries-hero-drift {
          from { transform: translate3d(0, 0, 0) scale(1); }
          to { transform: translate3d(-20px, 16px, 0) scale(1.06); }
        }
        @media (prefers-reduced-motion: reduce) {
          .industries-hero-glow { animation: none; }
        }
      `}</style>

      <IndustriesJumpNav items={jumpItems} />

      <div className="bg-paper text-ink">
        {industries.map((industry, index) => {
          const reverse = index % 2 === 1;
          return (
            <section
              key={industry.id}
              id={industry.id}
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
                          className="border-t border-line-dark py-3 text-sm font-light text-ink/80"
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

      <section className="bg-ink text-white">
        <div className="wc-container wc-section">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-light uppercase tracking-[0.18em] text-white/45">
              How we engage
            </p>
            <h2 className="text-3xl font-light md:text-4xl">
              Sector fluency paired with{" "}
              <span className="wc-gradient-text">delivery that ships</span>
            </h2>
          </div>

          <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {industriesApproach.map((item, i) => (
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

      <section className="wc-section bg-paper text-ink">
        <div className="wc-container">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-sm font-light uppercase tracking-[0.18em] text-muted">
                Across markets
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
