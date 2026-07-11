"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { getFeaturedWorks } from "@/data/works";
import { getFeaturedBlogs, formatBlogDate } from "@/data/blogs";
import { clients, brands } from "@/data/clients";
import { homeServiceCards } from "@/data/content";
import "swiper/css";

const FutureCanvas = dynamic(
  () => import("./FutureCanvas").then((m) => m.FutureCanvas),
  { ssr: false },
);

export function HomeServices() {
  return (
    <section id="services" className="wc-services">
      <div className="wc-services-bg" aria-hidden />

      <div className="wc-container relative z-10">
        <header className="wc-services-head">
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
        </header>

        <div className="wc-services-list">
          {homeServiceCards.map((card, i) => (
            <Link key={card.title} href={card.href} className="wc-services-row group">
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
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeWorks() {
  const works = getFeaturedWorks();
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="wc-section overflow-hidden bg-black text-white">
      <div className="wc-container mb-8 flex items-end justify-between gap-4">
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
      </div>
      <div className="px-4 md:px-6">
        <Swiper
          onSwiper={(s) => {
            swiperRef.current = s;
          }}
          loop
          spaceBetween={24}
          speed={800}
          centeredSlides
          breakpoints={{
            0: { slidesPerView: 1.15 },
            768: { slidesPerView: 2.2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {works.map((work) => (
            <SwiperSlide key={work.slug}>
              <Link href={`/works/${work.slug}`} className="group relative block overflow-hidden rounded-xl">
                <img
                  src={work.thumbnail}
                  alt={work.title}
                  className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
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
    <section className="wc-clients wc-section text-white">
      <div className="wc-clients-bg" aria-hidden />

      <div className="wc-container relative z-10 grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm uppercase tracking-wider text-white/60">Since From 2020</p>
          <h3 className="text-3xl font-medium">Our Clients</h3>
          <p className="mt-4 max-w-md border-b border-white/15 pb-8 text-sm font-light leading-relaxed text-white/70">
            Explore our clients&apos; experiences and discover our trusted support every step of the
            way.
          </p>
          <div className="mt-8 flex flex-wrap gap-10">
            <div>
              <p className="text-4xl font-medium">50+</p>
              <p className="mt-1 text-xs text-white/60">
                Happy Clients
                <br />
                Around the World
              </p>
            </div>
            <div>
              <p className="text-4xl font-medium">100+</p>
              <p className="mt-1 text-xs text-white/60">
                Projects
                <br />
                Already Completed
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {clients.map((client) => (
            <div
              key={client.name}
              className="wc-clients-tile flex aspect-square items-center justify-center rounded-xl p-6"
            >
              <img src={client.logo} alt={client.name} className="max-h-12 object-contain opacity-80" />
            </div>
          ))}
          <Link
            href="/clients"
            className="wc-clients-more flex aspect-square items-center justify-center rounded-xl text-sm text-white/80"
          >
            View More
          </Link>
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
        <div className="wc-future-copy-block">
          <p className="wc-future-kicker">Future Woodenclouds</p>
          <h2 className="wc-future-title">
            A studio built
            <br />
            for what&apos;s next.
          </h2>
          <p className="wc-future-lede">
            We gather developers, designers, and creative minds to invent products that feel
            inevitable — and push the digital world further.
          </p>
          <Link href="/future-woodenclouds" className="wc-future-cta">
            Enter Future Woodenclouds
            <span aria-hidden>→</span>
          </Link>
        </div>

        <aside className="wc-future-aside">
          <div className="wc-future-stat">
            <span>01</span>
            <p>Talent network</p>
          </div>
          <div className="wc-future-stat">
            <span>02</span>
            <p>Product craft</p>
          </div>
          <div className="wc-future-stat">
            <span>03</span>
            <p>Long horizon</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export function HomeBlogs() {
  const blogs = getFeaturedBlogs(2);

  return (
    <section className="wc-insights wc-section text-white">
      <div className="wc-insights-bg" aria-hidden />
      <div className="wc-container relative z-10">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-light md:text-4xl">Insights from Woodenclouds</h2>
          <Link href="/blog" className="text-sm text-white/70 hover:text-white">
            View All →
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {blogs.map((blog) => (
            <Link key={blog.slug} href={`/blog/${blog.slug}`} className="group grid gap-5 sm:grid-cols-2">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xs uppercase tracking-wider text-white/50">
                  {formatBlogDate(blog.createdAt)}
                </span>
                <h5 className="mt-3 text-xl font-light leading-snug group-hover:text-white/90">
                  {blog.title}
                </h5>
                <span className="mt-4 text-sm text-white/60">View Details</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeBrands() {
  return (
    <section className="wc-section bg-black text-white">
      <div className="wc-container">
        <h3 className="mb-8 text-3xl font-light">Our Brands</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {brands.map((brand, i) => (
            <a
              key={`${brand.name}-${i}`}
              href={brand.href}
              target="_blank"
              rel="noreferrer"
              className="flex aspect-[5/3] items-center justify-center rounded-xl bg-white/5 p-6"
            >
              <img src={brand.logo} alt={brand.name} className="max-h-10 object-contain opacity-80" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
