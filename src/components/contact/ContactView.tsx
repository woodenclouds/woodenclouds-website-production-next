"use client";

import { FormEvent, useEffect, useState } from "react";
import { site, whatsappHref } from "@/data/content";
import "./contact-hero.css";

const channels = [
  {
    label: "General enquiry",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    label: "HR enquiry",
    value: site.careersEmail,
    href: `mailto:${site.careersEmail}`,
  },
];

const social = [
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "Facebook", href: site.social.facebook },
  { label: "Instagram", href: site.social.instagram },
];

export function ContactView() {
  const [done, setDone] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 40);
    return () => window.clearTimeout(id);
  }, []);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const text = [
      "Hi Woodenclouds — I'd like to get in touch.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n");
    window.open(whatsappHref(text), "_blank", "noopener,noreferrer");
    setDone(true);
  }

  return (
    <div className="wc-contact-page bg-paper text-ink">
      <header className={`wc-contact-stage${ready ? " is-ready" : ""}`}>
        <div className="wc-contact-stage-grain" aria-hidden />
        <div className="wc-contact-stage-mesh" aria-hidden />
        <div className="wc-contact-stage-orb wc-contact-stage-orb--a" aria-hidden />
        <div className="wc-contact-stage-orb wc-contact-stage-orb--b" aria-hidden />
        <div className="wc-contact-stage-orb wc-contact-stage-orb--c" aria-hidden />

        <div className="wc-container wc-contact-stage-frame">
          <div className="wc-contact-stage-split">
            <div className="wc-contact-stage-main">
              <h1 className="wc-contact-stage-title">
                Let&apos;s talk.
                <br />
                Start here.
              </h1>
              <p className="wc-contact-stage-lede">
                Tell us about a project, a partnership, or a job. We&apos;ll reply with a clear next
                step.
              </p>
              <div className="wc-contact-stage-actions">
                <a href="#message" className="wc-btn wc-btn-solid">
                  Send a message
                  <span aria-hidden>↓</span>
                </a>
                <a href={site.phoneHref} className="wc-btn wc-btn-dark">
                  Call us
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>

            <div className="wc-contact-stage-visual !bg-transparent overflow-visible">
              <div className="wc-contact-stage-visual-media">
                <img
                  src="/contact/pair-programming.svg"
                  alt="Two people collaborating at a computer"
                  className="!filter-none"
                  style={{ filter: "none" }}
                />
              </div>
              <div className="wc-contact-stage-visual-meta">
                <span>Based in Kochi</span>
                <strong>We reply clearly</strong>
                <em>{site.email}</em>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="reach" className="wc-contact-reach">
        <div className="wc-container">
          <header className="wc-contact-reach-head">
            <div>
              <p className="wc-contact-kicker">Reach us</p>
              <h2 className="wc-contact-reach-title">Call or email us</h2>
            </div>
            <p className="wc-contact-reach-intro">
              Prefer a call, email, or careers note? Pick the channel that fits.
            </p>
          </header>

          <ul className="wc-contact-channels">
            {channels.map((channel) => (
              <li key={channel.label}>
                <span>{channel.label}</span>
                <a href={channel.href}>{channel.value}</a>
              </li>
            ))}
            <li>
              <span>Office</span>
              <p>{site.address}</p>
            </li>
          </ul>

          <div className="wc-contact-social">
            {social.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="message" className="wc-contact-form-section">
        <div className="wc-container">
          <div className="wc-contact-form-layout">
            <div>
              <p className="wc-contact-kicker">Write to us</p>
              <h2 className="wc-contact-form-title">Tell us what you&apos;re building</h2>
              <p className="wc-contact-form-copy">
                A few lines about your project or question is enough. We&apos;ll take it from there.
              </p>
              <a href={`mailto:${site.email}`} className="wc-contact-form-mail">
                {site.email}
              </a>
            </div>

            <div className="wc-contact-form-panel">
              {done ? (
                <p className="wc-contact-success">
                  Thanks — WhatsApp should open with your message. Send it there and we&apos;ll get
                  back to you.
                </p>
              ) : (
                <form onSubmit={onSubmit} className="wc-contact-form">
                  <div>
                    <label className="wc-contact-label" htmlFor="contact-name">
                      Full name
                    </label>
                    <input
                      className="wc-contact-input"
                      id="contact-name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="wc-contact-form-row">
                    <div>
                      <label className="wc-contact-label" htmlFor="contact-phone">
                        Phone
                      </label>
                      <input
                        className="wc-contact-input"
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="Phone"
                      />
                    </div>
                    <div>
                      <label className="wc-contact-label" htmlFor="contact-email">
                        Email
                      </label>
                      <input
                        className="wc-contact-input"
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="wc-contact-label" htmlFor="contact-message">
                      Message
                    </label>
                    <textarea
                      className="wc-contact-input"
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      placeholder="What can we help with?"
                    />
                  </div>
                  <button type="submit" className="wc-btn wc-btn-solid">
                    Send message
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
