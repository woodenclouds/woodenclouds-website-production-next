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
    <section id="services" className="wc-section bg-black text-white">
      <div className="wc-container">
        <h2 className="mb-10 text-3xl font-light md:text-4xl">
          Our <span className="wc-gradient-text">Services</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {homeServiceCards.map((card) => (
            <Link key={card.title} href={card.href} className="group block">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={card.image}
                  alt={card.title}
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <h5 className="wc-gradient-text mt-5 border-b border-white/15 pb-3 text-xl font-light">
                {card.title}
              </h5>
              <p className="mt-3 text-sm font-light leading-relaxed text-white/70">{card.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm text-white/80 group-hover:text-white">
                Read More <span aria-hidden>→</span>
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
    <section className="wc-section bg-[#111] text-white">
      <div className="wc-container grid items-center gap-12 lg:grid-cols-2">
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
              className="flex aspect-square items-center justify-center rounded-xl bg-white/5 p-6"
            >
              <img src={client.logo} alt={client.name} className="max-h-12 object-contain opacity-80" />
            </div>
          ))}
          <Link
            href="/clients"
            className="flex aspect-square items-center justify-center rounded-xl border border-white/15 text-sm text-white/80 hover:bg-white/5"
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
    <section className="relative min-h-[100svh] overflow-hidden bg-[#02040a] py-20 text-white md:py-28">
      <FutureCanvas />

      <div className="wc-container relative z-10 grid min-h-[70vh] items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="relative aspect-square max-w-md border border-white p-8 shadow-[0_0_60px_rgba(91,157,232,0.08)] md:p-10">
            <p className="text-xs uppercase tracking-[0.22em]">Woodenclouds</p>
            <p className="mt-6 text-sm font-light leading-snug text-white/80">
              Designing your
              <br />
              digital future
            </p>
            <div className="absolute bottom-8 left-8 right-8 flex items-end">
              <span className="relative text-[clamp(5rem,14vw,8.5rem)] font-light leading-none tracking-tight">
                W
                <span className="relative inline-block">
                  C
                  <span
                    aria-hidden
                    className="absolute -right-3 top-1/2 h-[0.72em] w-[0.72em] -translate-y-1/2 rounded-full bg-white/20 backdrop-blur-[1px]"
                  />
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-6">
          <h3 className="text-3xl font-light uppercase tracking-wide md:text-5xl">
            Future <span className="wc-gradient-text">Woodenclouds</span>
          </h3>
          <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-white/80 md:text-base">
            Future Woodenclouds: We&apos;re not just a tech company. We bring together smart people
            from all fields to use technology to make big changes. Our goal is to build a team of
            talented developers, designers, marketers, and creative thinkers. Together, we&apos;ll
            make the digital world even better.
          </p>

          <Link href="/future-woodenclouds" className="wc-explore-orbit mt-14 inline-flex">
            <span className="wc-explore-orbit__ring" aria-hidden>
              <svg viewBox="0 0 200 200" className="h-full w-full">
                <defs>
                  <path
                    id="wcExploreCircle"
                    d="M100,100 m-68,0 a68,68 0 1,1 136,0 a68,68 0 1,1 -136,0"
                  />
                </defs>
                <text className="fill-white text-[11px] uppercase tracking-[0.35em]">
                  <textPath href="#wcExploreCircle" startOffset="0%">
                    Explore More — Explore More —
                  </textPath>
                </text>
              </svg>
            </span>
            <span className="wc-explore-orbit__arrow" aria-hidden>
              →
            </span>
            <span className="sr-only">Explore More</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HomeBlogs() {
  const blogs = getFeaturedBlogs(2);

  return (
    <section className="wc-section bg-black text-white">
      <div className="wc-container">
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
