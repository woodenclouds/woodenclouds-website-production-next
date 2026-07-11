"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { FutureCanvas } from "@/components/home/FutureCanvas";
import { site } from "@/data/content";

const disciplines = [
  {
    title: "Builders",
    body: "Developers and freelancers who ship products with clarity and craft.",
  },
  {
    title: "Growth minds",
    body: "BDEs, sales, and marketing talent who turn ideas into demand.",
  },
  {
    title: "Creative thinkers",
    body: "Designers and makers who give technology a human face.",
  },
];

export function FutureView() {
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <div className="wc-fw-page">
      <header className="wc-fw-hero">
        <FutureCanvas />

        <div className="wc-fw-hero-ui">
          <div className="wc-container">
            <p className="wc-fw-brand">
              Future <span>Woodenclouds</span>
            </p>
            <h1 className="wc-fw-hero-title">
              A team built
              <br />
              for what&apos;s next.
            </h1>
            <p className="wc-fw-hero-lede">
              We unite developers, designers, marketers, and creative minds to invent products that
              feel inevitable — and push the digital world further.
            </p>
            <div className="wc-fw-hero-actions">
              <a href="#join" className="wc-btn wc-btn-light">
                Join the revolution
                <span aria-hidden>→</span>
              </a>
              <a href="#mission" className="wc-btn wc-btn-light">
                Our mission
              </a>
            </div>
          </div>
        </div>

        <a href="#mission" className="wc-fw-hero-scroll" aria-label="Scroll to mission">
          <span>Scroll</span>
          <span aria-hidden>↓</span>
        </a>
      </header>

      <section id="mission" className="wc-fw-mission">
        <div className="wc-container">
          <div className="wc-fw-mission-grid">
            <div className="wc-fw-mission-visual">
              <div className="wc-fw-mission-mosaic">
                <img src="/about/about-img1.jpg" alt="" className="is-a" />
                <img src="/team/team-work.jpg" alt="" className="is-b" />
                <img src="/about/about-img2.jpg" alt="" className="is-c" />
              </div>
            </div>
            <div className="wc-fw-mission-copy">
              <p className="wc-fw-kicker">The mission</p>
              <h2 className="wc-fw-mission-title">Architects of innovation</h2>
              <p className="wc-fw-mission-body">
                Future Woodenclouds is not just another IT company. We connect the brightest minds
                across disciplines to transform the world through technology — paving a new era of
                digital excellence.
              </p>
              <p className="wc-fw-mission-body">
                Our work is to gather talent, sharpen craft, and build products that move industries
                forward — together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="wc-fw-vision">
        <div className="wc-container">
          <p className="wc-fw-kicker is-light">Our vision</p>
          <h2 className="wc-fw-vision-title">
            Creativity and technology,{" "}
            <span className="wc-gradient-text">converging without limits.</span>
          </h2>
          <p className="wc-fw-vision-body">
            Imagine a world where boundaries fall away and possibility expands. By fostering
            collaboration among India&apos;s most talented people, we are building a powerhouse of
            innovation that will reshape the IT industry — and everything beyond it.
          </p>
        </div>
      </section>

      <section className="wc-fw-phase">
        <div className="wc-container">
          <div className="wc-fw-phase-grid">
            <div className="wc-fw-phase-copy">
              <p className="wc-fw-kicker">Phase 01</p>
              <h2 className="wc-fw-phase-title">Building the foundation</h2>
              <p className="wc-fw-phase-body">
                We are assembling a team of 10,000 passionate individuals across disciplines — from
                freelancers to BDEs, from sales and marketing experts to visionary designers — to
                drive progress and change.
              </p>
              <ol className="wc-fw-disciplines">
                {disciplines.map((item, i) => (
                  <li key={item.title}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="wc-fw-phase-visual">
              <img src="/about/img1.jpg" alt="" className="is-main" />
              <img src="/about/img2.jpg" alt="" className="is-accent" />
            </div>
          </div>
        </div>
      </section>

      <section id="join" className="wc-fw-join">
        <div className="wc-container">
          <div className="wc-fw-join-layout">
            <div>
              <p className="wc-fw-kicker">Join the revolution</p>
              <h2 className="wc-fw-join-title">
                Ready to shape{" "}
                <span className="wc-gradient-text">what comes next?</span>
              </h2>
              <p className="wc-fw-join-copy">
                Whether you&apos;re a developer, marketer, designer, or creative thinker — Future
                Woodenclouds welcomes you. Let&apos;s redefine what&apos;s possible.
              </p>
              <a href={`mailto:${site.careersEmail}`} className="wc-fw-join-mail">
                {site.careersEmail}
              </a>
              <p className="wc-fw-join-alt">
                Or explore open roles on our{" "}
                <Link href="/career">careers page</Link>.
              </p>
            </div>

            <div className="wc-fw-join-panel">
              {done ? (
                <p className="wc-contact-success">
                  Thanks for joining — we&apos;ll be in touch soon.
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
                      rows={5}
                      required
                      placeholder="Tell us who you are and how you want to contribute"
                    />
                  </div>
                  <button type="submit" className="wc-btn wc-btn-dark">
                    Join Future Woodenclouds
                    <span aria-hidden>→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
