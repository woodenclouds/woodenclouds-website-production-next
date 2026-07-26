"use client";

import Link from "next/link";
import { getFeaturedWorks } from "@/data/works";
import { getFeaturedBlogs, formatBlogDate } from "@/data/blogs";
import { clients } from "@/data/clients";
import { homeServiceCards } from "@/data/content";
import { getHomeIndustries, industries } from "@/data/industries";
import { homeWhy, homeTestimonials } from "@/data/home";
import { HomeReveal } from "./HomeReveal";

export function HomeWhatWeDo() {
  return (
    <section id="what-we-do" className="wc-services wc-services--light">
      <div className="wc-services-bg" aria-hidden />
      <div className="wc-container relative z-10">
        <HomeReveal as="header" className="wc-services-head">
          <p className="wc-services-kicker">What we do</p>
          <div className="wc-services-head-row">
            <h2 className="wc-services-title">
              Services built to
              <br />
              ship and scale.
            </h2>
            <p className="wc-services-intro">
              Three ways we partner — product engineering, business support, and brand growth.
            </p>
          </div>
        </HomeReveal>

        <div className="wc-services-list">
          {homeServiceCards.map((card, i) => (
            <HomeReveal key={card.title} delay={i * 80}>
              <Link href={card.href} className="wc-services-row group">
                <span className="wc-services-index">{String(i + 1).padStart(2, "0")}</span>
                <div className="wc-services-copy">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
                <div className="wc-services-media">
                  <img src={card.image} alt="" draggable={false} />
                </div>
                <span className="wc-services-go" aria-hidden>
                  →
                </span>
              </Link>
            </HomeReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeFeaturedWork() {
  const studies = getFeaturedWorks(4);
  const [lead, ...rest] = studies;

  return (
    <section id="case-studies" className="wc-home-block wc-home-cases">
      <div className="wc-container">
        <HomeReveal as="header" className="wc-home-cases-head">
          <p className="wc-home-kicker">Case studies</p>
          <div className="wc-home-cases-head-row">
            <h2 className="wc-home-title">
              Work that moved
              <br />
              the needle.
            </h2>
            <p className="wc-home-lede">
              Selected product, commerce, and brand engagements — each tied to a measurable result.
            </p>
          </div>
        </HomeReveal>

        {lead ? (
          <HomeReveal>
            <Link href={`/works/${lead.slug}`} className="wc-home-case wc-home-case--lead group">
              <span className="wc-home-case-media">
                <img src={lead.thumbnail} alt={lead.title} draggable={false} />
              </span>
              <span className="wc-home-case-copy">
                <span className="wc-home-case-meta">
                  <span>{lead.category}</span>
                  <span aria-hidden>·</span>
                  <span>{lead.client}</span>
                </span>
                <h3>{lead.title}</h3>
                <p>{lead.description1}</p>
                {lead.result ? <span className="wc-home-case-result">{lead.result}</span> : null}
              </span>
            </Link>
          </HomeReveal>
        ) : null}

        <ul className="wc-home-cases-grid">
          {rest.map((work, i) => (
            <HomeReveal key={work.slug} as="li" delay={i * 80}>
              <Link href={`/works/${work.slug}`} className="wc-home-case group">
                <span className="wc-home-case-media">
                  <img src={work.thumbnail} alt={work.title} draggable={false} />
                </span>
                <span className="wc-home-case-copy">
                  <span className="wc-home-case-meta">
                    <span>{work.category}</span>
                    <span aria-hidden>·</span>
                    <span>{work.client}</span>
                  </span>
                  <h3>{work.title}</h3>
                  <p>{work.title1}</p>
                  {work.result ? <span className="wc-home-case-result">{work.result}</span> : null}
                </span>
              </Link>
            </HomeReveal>
          ))}
        </ul>

        <HomeReveal className="mt-10">
          <Link href="/works" className="wc-home-link">
            View all case studies
            <span aria-hidden>→</span>
          </Link>
        </HomeReveal>
      </div>
    </section>
  );
}

export function HomeClients() {
  return (
    <section id="clients" className="wc-clients wc-section text-ink">
      <div className="wc-clients-bg" aria-hidden />

      <div className="wc-container relative z-10 grid items-center gap-12 lg:grid-cols-2">
        <HomeReveal>
          <p className="wc-home-kicker">Previous clients</p>
          <h2 className="wc-home-title">
            Teams we&apos;ve
            <br />
            built with.
          </h2>
          <p className="wc-home-lede mt-5">
            Product and brand teams we&apos;ve shipped with across markets and stages.
          </p>
          <div className="mt-8">
            <Link href="/clients" className="wc-home-link">
              View all clients
              <span aria-hidden>→</span>
            </Link>
          </div>
        </HomeReveal>

        <ul className="wc-clients-grid">
          {clients.map((client, i) => (
            <HomeReveal key={client.name} as="li" delay={i * 60}>
              <div className="wc-clients-tile">
                <img src={client.logo} alt={client.name} draggable={false} />
              </div>
            </HomeReveal>
          ))}
          <HomeReveal as="li" delay={clients.length * 60}>
            <Link href="/clients" className="wc-clients-more">
              View more
              <span aria-hidden>→</span>
            </Link>
          </HomeReveal>
        </ul>
      </div>
    </section>
  );
}

export function HomeIndustries() {
  const items = getHomeIndustries();

  return (
    <section id="industries" className="wc-home-block wc-home-industries">
      <div className="wc-container">
        <HomeReveal as="header" className="wc-home-industries-head">
          <p className="wc-home-kicker">Industries we serve</p>
          <div className="wc-home-industries-head-row">
            <h2 className="wc-home-title">
              Built for how
              <br />
              your market moves.
            </h2>
            <p className="wc-home-lede">
              Healthcare, finance, agriculture, construction, commerce, and more — sector-aware work,
              not generic playbooks.
            </p>
          </div>
        </HomeReveal>

        <ul className="wc-home-industries-mosaic">
          {items.map((item, i) => (
            <HomeReveal key={item.id} as="li" delay={Math.min(i, 8) * 50}>
              <Link href={`/industries#${item.id}`} className="wc-home-industry-card">
                <span className="wc-home-industry-card-media" aria-hidden>
                  <img src={item.image} alt="" draggable={false} />
                </span>
                <span className="wc-home-industry-card-shade" aria-hidden />
                <span className="wc-home-industry-card-top">
                  <span className="wc-home-industry-card-index">
                    ({String(item.projects).padStart(2, "0")})
                  </span>
                </span>
                <span className="wc-home-industry-card-body">
                  <h3>{item.name}</h3>
                  <p>{item.tagline}</p>
                  <span className="wc-home-industry-card-go">
                    Explore more
                    <span aria-hidden>→</span>
                  </span>
                </span>
              </Link>
            </HomeReveal>
          ))}
        </ul>

        <HomeReveal className="wc-home-industries-foot">
          <p className="wc-home-industries-count">
            {industries.length} industries · agriculture, construction, energy & more
          </p>
          <Link href="/industries" className="wc-home-link">
            View all industries
            <span aria-hidden>→</span>
          </Link>
        </HomeReveal>
      </div>
    </section>
  );
}

export function HomeWhy() {
  return (
    <section id="why" className="wc-home-block wc-home-why">
      <div className="wc-container">
        <HomeReveal as="header" className="wc-home-why-head">
          <p className="wc-home-kicker">Why Woodenclouds</p>
          <div className="wc-home-why-head-row">
            <h2 className="wc-home-title">
              A partner built
              <br />
              for lasting progress.
            </h2>
            <p className="wc-home-lede">
              One accountable team, clear decisions, and systems that hold as you grow.
            </p>
          </div>
        </HomeReveal>

        <ul className="wc-home-why-grid">
          {homeWhy.map((item, i) => (
            <HomeReveal key={item.title} as="li" delay={i * 70} className="wc-home-why-card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </HomeReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HomeTestimonials() {
  return (
    <section id="testimonials" className="wc-home-block wc-home-testimonials">
      <div className="wc-container">
        <HomeReveal as="header" className="mb-10 md:mb-14">
          <p className="wc-home-kicker">Testimonials</p>
          <h2 className="wc-home-title">What partners say.</h2>
        </HomeReveal>

        <ul className="wc-home-testimonials-grid">
          {homeTestimonials.map((item, i) => (
            <HomeReveal key={item.name} as="li" delay={i * 80} className="wc-home-quote">
              <blockquote>
                <p>“{item.quote}”</p>
                <footer>
                  <strong>{item.name}</strong>
                  <span>
                    {item.role} · {item.company}
                  </span>
                </footer>
              </blockquote>
            </HomeReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HomeInsights() {
  const blogs = getFeaturedBlogs(2);

  return (
    <section id="insights" className="wc-insights wc-section text-ink">
      <div className="wc-insights-bg" aria-hidden />
      <div className="wc-container relative z-10">
        <HomeReveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="wc-home-kicker">Insights</p>
            <h2 className="wc-home-title">Notes from the studio</h2>
          </div>
          <Link href="/blog" className="text-sm text-ink/60 hover:text-ink">
            View all →
          </Link>
        </HomeReveal>

        <div className="grid gap-8 md:grid-cols-2">
          {blogs.map((blog, i) => (
            <HomeReveal key={blog.slug} delay={i * 100}>
              <Link href={`/blog/${blog.slug}`} className="group grid gap-5 sm:grid-cols-2">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs uppercase tracking-wider text-ink/45">
                    {formatBlogDate(blog.createdAt)}
                  </span>
                  <h3 className="mt-3 text-xl font-light leading-snug group-hover:text-ink/80">
                    {blog.title}
                  </h3>
                  <span className="mt-4 text-sm text-ink/55">Read article</span>
                </div>
              </Link>
            </HomeReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
