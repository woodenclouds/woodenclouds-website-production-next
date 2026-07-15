"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { getFeaturedWorks } from "@/data/works";
import { getFeaturedBlogs, formatBlogDate } from "@/data/blogs";
import { clients } from "@/data/clients";
import { homeServiceCards } from "@/data/content";
import { solutions } from "@/data/solutions";
import { HomeReveal } from "./HomeReveal";
import "swiper/css";

const FutureCanvas = dynamic(
  () => import("./FutureCanvas").then((m) => m.FutureCanvas),
  { ssr: false },
);

const homeSolutions = solutions.slice(0, 4);

export function HomeServices() {
  return (
    <section id="services" className="wc-services wc-services--light">
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
              Technology, growth support, and brand systems — shaped around outcomes, not feature
              lists.
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

export function HomeSolutions() {
  return (
    <section id="solutions" className="wc-home-solutions">
      <div className="wc-home-solutions-bg" aria-hidden />
      <div className="wc-container relative z-10">
        <HomeReveal as="header" className="wc-home-solutions-head">
          <p className="wc-home-solutions-kicker">Solutions</p>
          <div className="wc-home-solutions-head-row">
            <h2 className="wc-home-solutions-title">
              Platforms and models
              <br />
              built to scale.
            </h2>
            <p className="wc-home-solutions-intro">
              Productized delivery for commerce, custom software, mobile, AI, growth, and dedicated
              squads — clear outcomes, not endless scope.
            </p>
          </div>
        </HomeReveal>

        <ul className="wc-home-solutions-list">
          {homeSolutions.map((item, i) => (
            <HomeReveal key={item.id} as="li" delay={i * 70}>
              <Link href={`/solutions#${item.id}`} className="wc-home-solutions-row group">
                <span className="wc-home-solutions-index">{String(i + 1).padStart(2, "0")}</span>
                <div className="wc-home-solutions-copy">
                  <h3>{item.name}</h3>
                  <p>{item.tagline}</p>
                </div>
                <div className="wc-home-solutions-media">
                  <img src={item.image} alt="" draggable={false} />
                </div>
                <span className="wc-home-solutions-go" aria-hidden>
                  →
                </span>
              </Link>
            </HomeReveal>
          ))}
        </ul>

        <HomeReveal className="wc-home-solutions-foot" delay={200}>
          <Link href="/solutions" className="wc-home-link">
            Explore all solutions
            <span aria-hidden>→</span>
          </Link>
        </HomeReveal>
      </div>
    </section>
  );
}

export function HomeWorks() {
  const works = getFeaturedWorks();
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="wc-section wc-home-works overflow-hidden bg-paper text-ink">
      <HomeReveal className="wc-container mb-8 flex items-end justify-between gap-4">
        <h3 className="text-3xl font-light md:text-4xl">Recent Projects.</h3>
        <div className="flex gap-3">
          <button
            type="button"
            className="wc-hero-nav"
            aria-label="Previous"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            ←
          </button>
          <button
            type="button"
            className="wc-hero-nav"
            aria-label="Next"
            onClick={() => swiperRef.current?.slideNext()}
          >
            →
          </button>
        </div>
      </HomeReveal>
      <div className="px-4 md:px-6">
        <Swiper
          onSwiper={(s) => {
            swiperRef.current = s;
          }}
          loop
          spaceBetween={24}
          speed={800}
          centeredSlides
          grabCursor
          breakpoints={{
            0: { slidesPerView: 1.15 },
            768: { slidesPerView: 2.2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {works.map((work) => (
            <SwiperSlide key={work.slug}>
              <Link
                href={`/works/${work.slug}`}
                className="wc-home-work group relative block overflow-hidden rounded-xl"
              >
                <img
                  src={work.thumbnail}
                  alt={work.title}
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                  <span className="text-xs uppercase tracking-wider text-white/70">{work.category}</span>
                  <h6 className="mt-1 text-lg font-light">{work.title}</h6>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export function HomeClients() {
  return (
    <section className="wc-clients wc-section text-ink">
      <div className="wc-clients-bg" aria-hidden />

      <div className="wc-container relative z-10 grid items-center gap-12 lg:grid-cols-2">
        <HomeReveal>
          <p className="mb-3 text-sm uppercase tracking-wider text-ink/55">Since From 2020</p>
          <h3 className="text-3xl font-medium">Our Clients</h3>
          <p className="mt-4 max-w-md border-b border-black/10 pb-8 text-sm font-light leading-relaxed text-ink/65">
            Explore our clients&apos; experiences and discover our trusted support every step of the
            way.
          </p>
          <div className="mt-8 flex flex-wrap gap-10">
            <div>
              <p className="text-4xl font-medium">50+</p>
              <p className="mt-1 text-xs text-ink/55">
                Happy Clients
                <br />
                Around the World
              </p>
            </div>
            <div>
              <p className="text-4xl font-medium">100+</p>
              <p className="mt-1 text-xs text-ink/55">
                Projects
                <br />
                Already Completed
              </p>
            </div>
          </div>
        </HomeReveal>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {clients.map((client, i) => (
            <HomeReveal key={client.name} delay={i * 60}>
              <div className="wc-clients-tile flex aspect-square items-center justify-center rounded-xl p-6">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 object-contain opacity-80 brightness-0"
                />
              </div>
            </HomeReveal>
          ))}
          <HomeReveal delay={clients.length * 60}>
            <Link
              href="/clients"
              className="wc-clients-more flex aspect-square items-center justify-center rounded-xl text-sm text-ink/70"
            >
              View More
            </Link>
          </HomeReveal>
        </div>
      </div>
    </section>
  );
}

export function HomeAbout() {
  return (
    <section id="about" className="wc-home-about">
      <div className="wc-home-about-bg" aria-hidden />
      <div className="wc-container relative z-10">
        <div className="wc-home-about-grid">
          <HomeReveal className="wc-home-about-visual">
            <div className="wc-home-about-mosaic" aria-hidden>
              <img src="/about/about-img1.jpg" alt="" className="is-a" />
              <img src="/about/about-img2.jpg" alt="" className="is-b" />
              <img src="/about/about-img3.jpg" alt="" className="is-c" />
            </div>
          </HomeReveal>

          <HomeReveal className="wc-home-about-copy" delay={120}>
            <p className="wc-home-about-kicker">Who we are</p>
            <h2 className="wc-home-about-title">
              A digital partner built for
              <br />
              lasting progress.
            </h2>
            <p className="wc-home-about-lede">
              From product engineering to growth and brand systems, we work as an extension of your
              team — focused on clarity, speed, and work you can stand behind.
            </p>
            <div className="wc-home-about-actions">
              <Link href="/about" className="wc-home-link">
                About Woodenclouds
                <span aria-hidden>→</span>
              </Link>
              <Link href="/career" className="wc-home-link is-muted">
                Careers
                <span aria-hidden>→</span>
              </Link>
            </div>
          </HomeReveal>
        </div>
      </div>
    </section>
  );
}

export function HomeFuture() {
  return (
    <section className="wc-future" id="future">
      <FutureCanvas />

      <div className="wc-container wc-future-layout">
        <HomeReveal className="wc-future-copy-block">
          <p className="wc-future-kicker">Future Woodenclouds</p>
          <h2 className="wc-future-title">
            Internet. A laptop.
            <br />
            Work from anywhere.
          </h2>
          <p className="wc-future-lede">
            Woodenclouds Connect — a company-managed remote network aggregating skilled people
            worldwide. Built to become the number one of its kind.
          </p>
          <Link href="/future-woodenclouds" className="wc-future-cta">
            Enter Future Woodenclouds
            <span aria-hidden>→</span>
          </Link>
        </HomeReveal>

        <HomeReveal as="aside" className="wc-future-aside" delay={140}>
          <div className="wc-future-stat">
            <span>01</span>
            <p>Work anywhere</p>
          </div>
          <div className="wc-future-stat">
            <span>02</span>
            <p>All categories</p>
          </div>
          <div className="wc-future-stat">
            <span>03</span>
            <p>World #1 aim</p>
          </div>
        </HomeReveal>
      </div>
    </section>
  );
}

export function HomePartner() {
  return (
    <section id="partner" className="wc-home-partner">
      <div className="wc-home-partner-media" aria-hidden>
        <img src="/hero/hero-collab.jpg" alt="" />
      </div>
      <div className="wc-home-partner-overlay" aria-hidden />

      <div className="wc-home-partner-ui">
        <HomeReveal className="wc-container">
          <p className="wc-home-partner-kicker">Partner with us</p>
          <h2 className="wc-home-partner-title">
            Grow together.
            <br />
            Build the next chapter.
          </h2>
          <p className="wc-home-partner-lede">
            Outsourcing, affiliate, and business partnerships — collaboration that compounds across
            technology, marketing, and shared markets.
          </p>
          <Link href="/partner-with-us" className="wc-future-cta">
            Explore partnerships
            <span aria-hidden>→</span>
          </Link>
        </HomeReveal>
      </div>
    </section>
  );
}

export function HomeBlogs() {
  const blogs = getFeaturedBlogs(2);

  return (
    <section className="wc-insights wc-section text-ink">
      <div className="wc-insights-bg" aria-hidden />
      <div className="wc-container relative z-10">
        <HomeReveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-light md:text-4xl">Insights from Woodenclouds</h2>
          <Link href="/blog" className="text-sm text-ink/60 hover:text-ink">
            View All →
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
                  <h5 className="mt-3 text-xl font-light leading-snug group-hover:text-ink/80">
                    {blog.title}
                  </h5>
                  <span className="mt-4 text-sm text-ink/55">View Details</span>
                </div>
              </Link>
            </HomeReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
