import Link from "next/link";
import { EnquireCta } from "@/components/shared/PageBits";
import type { Industry } from "@/data/industries";
import { getRelatedIndustries, industriesApproach } from "@/data/industries";
import { getFeaturedWorks, works } from "@/data/works";

export function IndustryDetailView({ industry }: { industry: Industry }) {
  const related = getRelatedIndustries(industry.id, 3);
  const matchedWorks = works.filter(
    (work) => work.thumbnail === industry.image || work.image1 === industry.image,
  );
  const relatedWorks = (matchedWorks.length ? matchedWorks : getFeaturedWorks(2)).slice(0, 2);

  return (
    <div className="bg-paper text-ink">
      <header className="wc-ind-stage">
        <div className="wc-ind-stage-grain" aria-hidden />
        <div className="wc-ind-stage-orb wc-ind-stage-orb--a" aria-hidden />
        <div className="wc-ind-stage-orb wc-ind-stage-orb--b" aria-hidden />

        <div className="wc-container wc-ind-stage-frame">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm font-light text-muted">
            <Link href="/industries" className="transition hover:text-ink">
              Industries
            </Link>
            <span aria-hidden>/</span>
            <span className="text-ink">{industry.name}</span>
          </nav>

          <div className="wc-ind-stage-split">
            <div className="wc-ind-stage-main">
              <p className="mb-4 text-sm font-light uppercase tracking-[0.18em] text-muted">
                ({String(industry.projects).padStart(2, "0")}) projects
              </p>
              <h1 className="wc-ind-stage-title">{industry.name}</h1>
              <p className="wc-ind-stage-lede">{industry.tagline}</p>
              <p className="mt-5 max-w-xl text-sm font-light leading-relaxed text-muted md:text-base">
                {industry.description}
              </p>
              <div className="wc-ind-stage-actions">
                <Link href={industry.cta.href} className="wc-btn wc-btn-outline-accent">
                  {industry.cta.label}
                  <span aria-hidden>→</span>
                </Link>
                <a href="#focus" className="wc-btn wc-btn-dark">
                  What we build
                  <span aria-hidden>↓</span>
                </a>
              </div>
            </div>

            <div className="wc-ind-media overflow-hidden bg-ink/5">
              <img
                src={industry.image}
                alt={industry.imageAlt}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <section id="focus" className="border-t border-black/8">
        <div className="wc-container py-16 md:py-24">
          <p className="mb-3 text-sm font-light uppercase tracking-[0.18em] text-muted">
            Focus areas
          </p>
          <h2 className="max-w-2xl text-3xl font-light tracking-tight text-ink md:text-4xl">
            Built for how this market actually operates.
          </h2>
          <ul className="mt-10 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
            {industry.focus.map((item) => (
              <li
                key={item}
                className="border-t border-black/10 py-4 text-sm font-light text-ink/80 md:text-base"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

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

      {relatedWorks.length > 0 ? (
        <section className="wc-section bg-paper text-ink">
          <div className="wc-container">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mb-3 text-sm font-light uppercase tracking-[0.18em] text-muted">
                  Related work
                </p>
                <h2 className="text-3xl font-light text-ink md:text-4xl">Selected projects</h2>
              </div>
              <Link href="/works" className="wc-home-link">
                View all works
                <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {relatedWorks.map((work) => (
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
      ) : null}

      <section className="border-t border-black/8">
        <div className="wc-container py-16 md:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-sm font-light uppercase tracking-[0.18em] text-muted">
                More industries
              </p>
              <h2 className="text-3xl font-light text-ink md:text-4xl">Keep exploring</h2>
            </div>
            <Link href="/industries" className="wc-home-link">
              All industries
              <span aria-hidden>→</span>
            </Link>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <li key={item.id}>
                <Link href={`/industries/${item.id}`} className="group block">
                  <div className="wc-ind-media overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-light tracking-tight text-ink group-hover:opacity-70">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm font-light text-muted">{item.tagline}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <EnquireCta variant="light" buttonLabel="Start a conversation" />
    </div>
  );
}
