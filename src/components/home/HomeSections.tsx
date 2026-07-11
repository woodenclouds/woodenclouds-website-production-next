"use client";

import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { getFeaturedWorks } from "@/data/works";
import { getFeaturedBlogs, formatBlogDate } from "@/data/blogs";
import { clients, brands } from "@/data/clients";
import { homeServiceCards } from "@/data/content";
import "swiper/css";
import "swiper/css/navigation";

export function HomeServices() {
  return (
    <section className="serv-box section-padding" style={{ paddingTop: 100 }}>
      <div className="container">
        <div className="sec-lg-head mb-30">
          <div className="row">
            <div className="col-lg-12">
              <div className="position-re">
                <h2 className="fz-40 fw-300">
                  Our <span className="wc-text-gradient">Services</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {homeServiceCards.map((card, i) => (
            <div className="col-lg-4" key={card.title}>
              <Link href={card.href}>
                <div className={`serv-item radius-10${i < 2 ? " md-mb50" : ""}`}>
                  <div className="mb-20" style={{ width: "100%" }}>
                    <img src={card.image} alt={card.title} />
                  </div>
                  <h5 className="fz-22 mb-10 pb-10 bord-thin-bottom fw-300 wc-text-gradient">
                    {card.title}
                  </h5>
                  <p>{card.description}</p>
                  <span className="mt-30" style={{ display: "inline-block" }}>
                    <span className="mr-15">Read More</span>
                    <i className="fas fa-long-arrow-alt-right" />
                  </span>
                </div>
              </Link>
            </div>
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
    <section className="work-carsouel section-padding position-re o-hidden">
      <div className="container">
        <div className="sec-lg-head mb-30">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="fz-40 fw-300">
                <span className="sideup-text">
                  <span className="up-text">Recent Projects.</span>
                </span>
              </h3>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="full-width">
                <div className="d-flex justify-content-end justify-end">
                  <div className="swiper-controls arrow-out d-flex">
                    <button
                      type="button"
                      className="swiper-button-prev"
                      aria-label="Previous slide"
                      onClick={() => swiperRef.current?.slidePrev()}
                      style={{ position: "static", margin: 0 }}
                    >
                      <span className="left">←</span>
                    </button>
                    <button
                      type="button"
                      className="swiper-button-next ml-50"
                      aria-label="Next slide"
                      onClick={() => swiperRef.current?.slideNext()}
                      style={{ position: "static", marginLeft: 50 }}
                    >
                      <span className="right">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid rest">
        <Swiper
          modules={[Navigation]}
          onSwiper={(s) => {
            swiperRef.current = s;
          }}
          loop
          spaceBetween={40}
          speed={1000}
          centeredSlides
          breakpoints={{
            0: { slidesPerView: 1.15 },
            768: { slidesPerView: 2.2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {works.map((work) => (
            <SwiperSlide key={work.slug}>
              <div className="item">
                <div className="img">
                  <img src={work.thumbnail} alt={work.title} />
                  <div className="cont">
                    <span className="mb-5">{work.category}</span>
                    <h6 className="fz-18">{work.title}</h6>
                  </div>
                  <Link href={`/works/${work.slug}`} className="plink" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export function HomeClients() {
  return (
    <section className="testim-vrt sub-bg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="cont">
              <div>
                <h6 className="sub-title mb-15">Since From 2020</h6>
                <h3 className="fw-500">Our Clients</h3>
                <div className="text mt-10 pb-30 bord-thin-bottom">
                  <p>
                    Explore our clients&apos; experiences and discover our trusted support every step
                    of the way.
                  </p>
                </div>
                <div className="stauts d-flex mt-20">
                  <div className="item d-flex align-items-center mt-30">
                    <h2 className="mr-20 fw-500">50+</h2>
                    <p className="fz-14">
                      Happy Clients <br /> Around the World
                    </p>
                  </div>
                  <div className="item d-flex align-items-center ml-auto mt-30">
                    <h2 className="mr-20 fw-500">100+</h2>
                    <p className="fz-14">
                      Projects <br /> Already Completed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block-sec col-lg-6 offset-lg-1">
            <div className="clients md-mb50">
              <div className="row">
                {clients.map((client) => (
                  <div className="col-md-4 col-6" key={client.name}>
                    <div className="item mt-30">
                      <div className="img">
                        <a href="#">
                          <img src={client.logo} alt={client.name} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="col-md-4 col-6">
                  <div className="item mt-30">
                    <div className="img">
                      <Link href="/clients">View More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeFuture() {
  return (
    <section
      className="sec-img section-padding bg-img"
      style={{
        overflow: "hidden",
        backgroundImage: "url(/assets/user/imgs/background/1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="expr-box md-mb50">
              <h6 className="text-u fz-16 mb-40">Woodenclouds</h6>
              <div>
                <p className="fz-14 fw-300 line-height-1 mb-15">
                  Desiging your <br /> digital future
                </p>
                <h2 className="fz-80 line-height-1">WC</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cont">
              <h3 className="fw-300 text-u">
                Future <span className="wc-text-gradient">Woodenclouds</span>
              </h3>
              <p>
                Future Woodenclouds: We&apos;re not just a tech company. We bring together smart
                people from all fields to use technology to make big changes. Our goal is to build a
                team of talented developers, designers, marketers, and creative thinkers. Together,
                we&apos;ll make the digital world even better.
              </p>
            </div>
            <div className="offset-lg-1 valign">
              <div className="ml-auto explore">
                <Link href="/future-woodenclouds">
                  <div className="circle-button">
                    <div className="rotate-circle fz-30 text-u">
                      <svg className="textcircle" viewBox="0 0 500 500">
                        <defs>
                          <path
                            id="textcircle1"
                            d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                          />
                        </defs>
                        <text>
                          <textPath xlinkHref="#textcircle1" textLength="900">
                            Explore More - Explore More -
                          </textPath>
                        </text>
                      </svg>
                    </div>
                    <div className="arrow">→</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeBlogs() {
  const blogs = getFeaturedBlogs(2);

  return (
    <section className="blog-list-half crev section-padding" style={{ padding: "120px 0" }}>
      <div className="container">
        <div className="sec-lg-head mb-30">
          <div className="row">
            <div className="col-lg-8">
              <h2>
                <span className="rotate-text fw-300">Insights from Woodenclouds</span>
              </h2>
            </div>
            <div className="col-lg-4 d-flex align-items-center">
              <div className="full-width d-flex justify-content-end justify-end">
                <div className="vew-all">
                  <Link href="/blog">
                    View All <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {blogs.map((blog) => (
            <div className="col-lg-6" key={blog.slug}>
              <div className="item md-mb80">
                <div className="row rest">
                  <div className="col-md-6">
                    <Link href={`/blog/${blog.slug}`}>
                      <div className="img">
                        <img src={blog.image} alt={blog.title} />
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-6 valign">
                    <Link href={`/blog/${blog.slug}`}>
                      <div className="cont">
                        <span className="date fz-12 ls1 text-u opacity-7 mb-15">
                          {formatBlogDate(blog.createdAt)}
                        </span>
                        <h5 className="fw-300">{blog.title}</h5>
                        <div className="tags colorbg mt-15">
                          <span>View Details</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeBrands() {
  return (
    <section className="block-sec section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="clients md-mb50">
              <div className="mb-20">
                <h3 className="fw-300">Our Brands</h3>
              </div>
              <div className="row">
                {brands.map((brand, i) => (
                  <div className="col-md-3 col-6" key={`${brand.name}-${i}`}>
                    <div className="item mt-30">
                      <div className="img">
                        <a href={brand.href} target="_blank" rel="noreferrer">
                          <img src={brand.logo} alt={brand.name} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
