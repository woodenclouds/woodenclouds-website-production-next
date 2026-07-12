"use client";

import Link from "next/link";
import { brands } from "@/data/clients";
import { EnquireCta } from "@/components/shared/PageBits";

const values = [
  {
    title: "Innovation",
    body: "We thrive on fresh ideas and creative solutions, constantly seeking better ways to drive success in the digital world.",
  },
  {
    title: "Collaboration",
    body: "Teamwork is how we work. Together we achieve more — and create a lasting impact for every client we partner with.",
  },
  {
    title: "Integrity",
    body: "Honest, transparent, and ethical practices define our approach. We build relationships on trust in everything we do.",
  },
];

const milestones = [
  { label: "Since", value: "2020" },
  { label: "Clients worldwide", value: "50+" },
  { label: "Projects shipped", value: "100+" },
];

export function AboutView() {

  return (
    <div className="bg-[#05070b] text-white">
      <header className="wc-about-hero">
        <div className="wc-about-hero-media" aria-hidden>
          <img src="/team/team-work.jpg" alt="" />
        </div>
        <div className="wc-about-hero-overlay" aria-hidden />

        <div className="wc-about-hero-ui">
          <div className="wc-container">
            <h1 className="wc-about-hero-title">
              Your growth.
              <br />
              <span className="wc-gradient-text">Our expertise.</span>
            </h1>
            <p className="wc-about-hero-lede">
              Woodenclouds is a digital partner for products, brands, and teams that need clarity,
              craft, and outcomes that compound.
            </p>
            <div className="wc-about-hero-actions">
              <a href="#story" className="wc-btn wc-btn-light">
                Our story
                <span aria-hidden>→</span>
              </a>
              <Link href="/contact" className="wc-btn wc-btn-light">
                Work with us
              </Link>
            </div>
          </div>
        </div>

        <a href="#story" className="wc-about-hero-scroll" aria-label="Scroll to story">
          <span>Scroll</span>
          <span aria-hidden>↓</span>
        </a>
      </header>

      <section id="story" className="wc-about-story">
        <div className="wc-container">
          <div className="wc-about-story-grid">
            <div className="wc-about-story-visual">
              <div className="wc-about-story-mosaic">
                <img src="/about/about-img1.jpg" alt="" className="is-a" />
                <img src="/about/about-img2.jpg" alt="" className="is-b" />
                <img src="/about/about-img3.jpg" alt="" className="is-c" />
              </div>
            </div>
            <div className="wc-about-story-copy">
              <p className="wc-about-kicker">Who we are</p>
              <h2 className="wc-about-story-title">A digital partner built for lasting progress</h2>
              <p className="wc-about-story-body">
                We are a leading IT and digital partner. Our goal is to cover the full arc of a
                business — development, survival, progress, reputation, and the relationships that
                keep customers coming back.
              </p>
              <p className="wc-about-story-body">
                From product engineering to growth and brand systems, we work as an extension of
                your team — focused on clarity, speed, and work you can stand behind.
              </p>
              <ul className="wc-about-milestones">
                {milestones.map((item) => (
                  <li key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="wc-about-values">
        <div className="wc-container">
          <header className="wc-about-values-head">
            <div>
              <p className="wc-about-kicker is-light">What drives us</p>
              <h2 className="wc-about-values-title">
                Principles that shape{" "}
                <span className="wc-gradient-text">every engagement</span>
              </h2>
            </div>
          </header>

          <ol className="wc-about-values-list">
            {values.map((value, i) => (
              <li key={value.title}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="brands" className="wc-about-brands">
        <div className="wc-container">
          <header className="wc-about-brands-head">
            <div>
              <p className="wc-about-kicker is-light">Our brands</p>
              <h2 className="wc-about-brands-title">
                The Woodenclouds <span className="wc-gradient-text">family</span>
              </h2>
            </div>
            <p className="wc-about-brands-intro">
              Sister brands across creatives, education, production, and technology — built to serve
              different needs under one standard of craft.
            </p>
          </header>

          <ul className="wc-about-brands-grid">
            {brands.map((brand) => {
              const hasLink = Boolean(brand.href && brand.href !== "#");
              const external = hasLink && brand.href.startsWith("http");
              const inner = (
                <>
                  <span className="wc-about-brand-logo">
                    <img src={brand.logo} alt="" />
                  </span>
                  <span className="wc-about-brand-name">{brand.name}</span>
                </>
              );

              return (
                <li key={brand.name}>
                  {hasLink ? (
                    <a
                      href={brand.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                      className="wc-about-brand"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="wc-about-brand">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="wc-about-lens">
        <div className="wc-container">
          <div className="wc-about-lens-grid">
            <div className="wc-about-lens-copy">
              <p className="wc-about-kicker">Inside Woodenclouds</p>
              <h2 className="wc-about-lens-title">People, craft, and the work behind the work</h2>
              <p className="wc-about-lens-body">
                Join us if you want to build the next chapter with Woodenclouds — craft, clarity,
                and work that lasts.
              </p>
              <div className="wc-about-lens-actions">
                <Link href="/career" className="wc-btn wc-btn-dark">
                  Careers
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
            <div className="wc-about-lens-media">
              <img src="/about/img5.jpg" alt="" className="is-main" />
              <img src="/about/img1.jpg" alt="" className="is-side" />
            </div>
          </div>
        </div>
      </section>

      <EnquireCta buttonLabel="Start a conversation" />
    </div>
  );
}
