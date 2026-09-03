"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { EnquireCta } from "@/components/shared/PageBits";

const values = [
  {
    title: "Innovation",
    body: "We like fresh ideas. We keep looking for better ways to help you succeed online.",
  },
  {
    title: "Collaboration",
    body: "We work as a team — with you and with each other — so the work lasts.",
  },
  {
    title: "Integrity",
    body: "We tell the truth. We build relationships on trust in everything we do.",
  },
];

const milestones = [
  { label: "Since", value: "2020" },
  { label: "Clients worldwide", value: "50+" },
  { label: "Projects delivered", value: "100+" },
];

export function AboutView() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 40);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div className="wc-about-page bg-paper text-ink">
      <header className={`wc-about-stage${ready ? " is-ready" : ""}`}>
        <div className="wc-about-stage-grain" aria-hidden />
        <div className="wc-about-stage-mesh" aria-hidden />
        <div className="wc-about-stage-orb wc-about-stage-orb--a" aria-hidden />
        <div className="wc-about-stage-orb wc-about-stage-orb--b" aria-hidden />
        <div className="wc-about-stage-orb wc-about-stage-orb--c" aria-hidden />

        <div className="wc-container wc-about-stage-frame">
          <div className="wc-about-stage-split">
            <div className="wc-about-stage-main">
              <h1 className="wc-about-stage-title">
                Your growth.
                <br />
                Our expertise.
              </h1>
              <p className="wc-about-stage-lede">
                We help companies with products, brands, and teams. We keep things clear, do careful
                work, and aim for results that last.
              </p>
              <div className="wc-about-stage-actions">
                <a href="#story" className="wc-btn wc-btn-solid">
                  Our story
                  <span aria-hidden>↓</span>
                </a>
                <Link href="/contact" className="wc-btn wc-btn-dark">
                  Work with us
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>

            <div className="wc-about-stage-figure" aria-hidden>
              <div className="wc-about-stage-figure-glow" />
              <div className="wc-about-stage-figure-ring wc-about-stage-figure-ring--a" />
              <div className="wc-about-stage-figure-ring wc-about-stage-figure-ring--b" />
              <ul className="wc-about-stage-figure-dots">
                {Array.from({ length: 8 }, (_, i) => (
                  <li key={i} style={{ ["--i" as string]: i }} />
                ))}
              </ul>
              <p className="wc-about-stage-figure-label">Since</p>
              <p className="wc-about-stage-figure-year">2020</p>
              <p className="wc-about-stage-figure-note">Building with clarity</p>
            </div>
          </div>
        </div>
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
              <h2 className="wc-about-story-title">A partner you can grow with</h2>
              <p className="wc-about-story-body">
                We started in 2020 in Kochi. We design, build, and grow digital products — websites,
                apps, brands, and the work that helps customers come back.
              </p>
              <p className="wc-about-story-body">
                From product building to growth and brand, we work like part of your team — focused
                on clarity, speed, and work you can stand behind.
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
              <p className="wc-about-kicker">What drives us</p>
              <h2 className="wc-about-values-title">What we believe</h2>
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

      <section className="wc-about-lens">
        <div className="wc-container">
          <div className="wc-about-lens-grid">
            <div className="wc-about-lens-copy">
              <p className="wc-about-kicker">Inside Woodenclouds</p>
              <h2 className="wc-about-lens-title">People, and the work behind the work</h2>
              <p className="wc-about-lens-body">
                Want to build the next chapter with us? Come work here.
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

      <EnquireCta variant="light" buttonLabel="Start a conversation" />
    </div>
  );
}
