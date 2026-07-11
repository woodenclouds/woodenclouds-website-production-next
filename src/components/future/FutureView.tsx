"use client";

import dynamic from "next/dynamic";
import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { site } from "@/data/content";

const GlobeCanvas = dynamic(
  () => import("@/components/home/GlobeCanvas").then((m) => m.GlobeCanvas),
  { ssr: false },
);

const meaning = [
  {
    num: "01",
    title: "The idea",
    body: "With internet and a laptop, skilled people can work from anywhere. Future Woodenclouds turns that into a real company system — not a loose marketplace.",
  },
  {
    num: "02",
    title: "The system",
    body: "We aggregate skilled manpower across every category into one connected pool. Woodenclouds manages matching, coordination, and delivery.",
  },
  {
    num: "03",
    title: "The need",
    body: "Talent should not be locked to one city. Companies need skilled remote teams — and people need a trusted path to work without borders.",
  },
];

const steps = [
  { num: "01", title: "Connect", body: "Skilled people join from anywhere." },
  { num: "02", title: "Aggregate", body: "All categories, one talent pool." },
  { num: "03", title: "Manage", body: "Woodenclouds runs the network." },
  { num: "04", title: "Deliver", body: "Companies get remote teams they can trust." },
];

const categories = [
  { title: "Technology", body: "Developers, engineers, QA, DevOps." },
  { title: "Design & creative", body: "UI/UX, brand, and digital craft." },
  { title: "Growth & business", body: "Marketing, BDE, sales, operations." },
  { title: "Specialists", body: "Any remote-ready skilled category." },
];

function clamp(n: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, n));
}

export function FutureView() {
  const [done, setDone] = useState(false);
  const scrollProgress = useRef(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      scrollProgress.current = 1;
      return;
    }

    let ticking = false;

    const update = () => {
      const scrollable = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      scrollProgress.current = clamp(window.scrollY / scrollable);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <div className="wc-fw-page">
      <div className="wc-fw-globe-bg">
        <GlobeCanvas scrollProgress={scrollProgress} showConnections />
      </div>

      <div className="wc-fw-content">
        <header className="wc-fw-hero" aria-label="Future Woodenclouds">
          <div className="wc-fw-hero-ui">
            <div className="wc-fw-stage">
              <p className="wc-fw-brand">
                Future <span>Woodenclouds</span>
              </p>
              <p className="wc-fw-eyebrow">Woodenclouds Connect</p>
              <h1 className="wc-fw-hero-title">
                Internet. A laptop.
                <br />
                <span className="wc-fw-hero-accent">Work from anywhere.</span>
              </h1>
              <p className="wc-fw-hero-lede">
                Building the world&apos;s #1 company-managed remote network — skilled people
                across every category, connected and ready to work from anywhere on earth.
              </p>
              <div className="wc-fw-hero-actions">
                <a href="#join" className="wc-btn wc-btn-light">
                  Join the network
                  <span aria-hidden>→</span>
                </a>
                <a href="#meaning" className="wc-btn wc-btn-light">
                  What we mean
                </a>
              </div>
            </div>
          </div>

          <div className="wc-fw-hero-scroll" aria-hidden>
            <span className="wc-fw-hero-scroll-pill">
              <span className="wc-scroll-dot" />
            </span>
          </div>
        </header>

        <section id="meaning" className="wc-fw-section">
          <div className="wc-fw-stage">
            <p className="wc-fw-kicker">What we mean</p>
            <h2 className="wc-fw-section-title">
              The world changed.
              <br />
              Work should too.
            </h2>
            <p className="wc-fw-section-lede">
              Geography no longer decides who gets to build. Future Woodenclouds makes that
              freedom real — structured, managed, and trusted at global scale.
            </p>

            <div className="wc-fw-stack">
              {meaning.map((item) => (
                <article key={item.title} className="wc-fw-stack-item">
                  <span className="wc-fw-stack-num">{item.num}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="wc-fw-section wc-fw-section--open">
          <div className="wc-fw-stage wc-fw-stage--wide">
            <p className="wc-fw-kicker">Our vision</p>
            <h2 className="wc-fw-section-title wc-fw-section-title--lg">
              Skill should travel
              <br />
              <span className="wc-gradient-text">as freely as the internet.</span>
            </h2>
            <p className="wc-fw-section-lede">
              Anyone with talent, a laptop, and connection should work with the best teams
              on earth — without leaving home, without borders in the way.
            </p>
            <p className="wc-fw-ambition">
              We are building Woodenclouds Connect to become the number one remote
              skilled-network company in the world.
            </p>
          </div>
        </section>

        <section className="wc-fw-section">
          <div className="wc-fw-stage wc-fw-stage--wide">
            <p className="wc-fw-kicker">The model</p>
            <h2 className="wc-fw-section-title">
              Four steps.
              <br />
              One network.
            </h2>
            <p className="wc-fw-section-lede">
              Not unmanaged freelancing — a company-run connect layer for global skilled
              manpower.
            </p>

            <div className="wc-fw-steps">
              {steps.map((step) => (
                <article key={step.title} className="wc-fw-step">
                  <span>{step.num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="wc-fw-section wc-fw-section--open">
          <div className="wc-fw-stage">
            <p className="wc-fw-kicker">Who we connect</p>
            <h2 className="wc-fw-section-title">
              All categories.
              <br />
              One network.
            </h2>
            <p className="wc-fw-section-lede">
              If you can do great work with a laptop and internet, you belong here.
            </p>

            <div className="wc-fw-cats">
              {categories.map((item) => (
                <article key={item.title} className="wc-fw-cat">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="join" className="wc-fw-section wc-fw-section--join">
          <div className="wc-fw-stage">
            <p className="wc-fw-kicker">Join the network</p>
            <h2 className="wc-fw-section-title">
              Be part of building
              <br />
              <span className="wc-gradient-text">the world&apos;s #1.</span>
            </h2>
            <p className="wc-fw-section-lede">
              Skilled talent ready to work from anywhere — or companies ready for managed
              remote teams. Tell us who you are.
            </p>
            <a href={`mailto:${site.careersEmail}`} className="wc-fw-join-mail">
              {site.careersEmail}
            </a>
            <p className="wc-fw-join-alt">
              Or explore open roles on our <Link href="/career">careers page</Link>.
            </p>

            <div className="wc-fw-join-panel">
              {done ? (
                <p className="wc-contact-success">
                  Thanks for reaching out — we&apos;ll be in touch soon.
                </p>
              ) : (
                <form onSubmit={onSubmit} className="wc-contact-form">
                  <div>
                    <label className="wc-contact-label" htmlFor="fw-name">
                      Full name
                    </label>
                    <input
                      className="wc-contact-input"
                      id="fw-name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="wc-contact-form-row">
                    <div>
                      <label className="wc-contact-label" htmlFor="fw-phone">
                        Phone
                      </label>
                      <input
                        className="wc-contact-input"
                        id="fw-phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="Phone"
                      />
                    </div>
                    <div>
                      <label className="wc-contact-label" htmlFor="fw-email">
                        Email
                      </label>
                      <input
                        className="wc-contact-input"
                        id="fw-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="wc-contact-label" htmlFor="fw-message">
                      Message
                    </label>
                    <textarea
                      className="wc-contact-input"
                      id="fw-message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Your skill, or how your company wants to connect"
                    />
                  </div>
                  <button type="submit" className="wc-btn wc-btn-light">
                    Connect with us
                    <span aria-hidden>→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
