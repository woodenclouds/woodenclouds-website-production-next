"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/content";

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

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <div className="wc-contact-page bg-[#05070b] text-white">
      <header className="wc-partner-hero">
        <div className="wc-partner-hero-media" aria-hidden>
          <img src="/hero/hero-lead.jpg" alt="" />
        </div>
        <div className="wc-partner-hero-overlay" aria-hidden />

        <div className="wc-partner-hero-ui">
          <div className="wc-container">
            <p className="wc-team-hero-brand">Woodenclouds</p>
            <h1 className="wc-partner-hero-title">
              Let&apos;s talk.
              <br />
              <span className="wc-gradient-text">Get in touch.</span>
            </h1>
            <p className="wc-partner-hero-lede">
              Whether you want to start a project or just say hello — we&apos;d love to hear from
              you.
            </p>
            <div className="wc-partner-hero-actions">
              <a href="#message" className="wc-btn wc-btn-light">
                Send a message
                <span aria-hidden>→</span>
              </a>
              <a href={site.phoneHref} className="wc-btn wc-btn-light">
                Call us
              </a>
            </div>
          </div>
        </div>

        <a href="#reach" className="wc-partner-hero-scroll" aria-label="Scroll to contact">
          <span>Scroll</span>
          <span aria-hidden>↓</span>
        </a>
      </header>

      <section id="reach" className="wc-partner-programs">
        <div className="wc-container">
          <header className="wc-partner-programs-head">
            <div>
              <p className="wc-partner-kicker">Reach us</p>
              <h2 className="wc-partner-programs-title">Direct lines to Woodenclouds</h2>
            </div>
            <p className="wc-partner-programs-intro">
              Prefer a call, email, or careers note? Pick the channel that fits — we reply from
              Kochi.
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
              <p className="wc-partner-kicker">Write to us</p>
              <h2 className="wc-contact-form-title">
                Tell us what you&apos;re{" "}
                <span className="wc-gradient-text">building</span>
              </h2>
              <p className="wc-contact-form-copy">
                Share a bit about your project or question. We&apos;ll get back with the right next
                step.
              </p>
              <a href={`mailto:${site.email}`} className="wc-contact-form-mail">
                {site.email}
              </a>
            </div>

            <div className="wc-contact-form-panel">
              {done ? (
                <p className="wc-contact-success">
                  Thanks — your message was received. We&apos;ll be in touch soon.
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
                  <button type="submit" className="wc-btn wc-btn-dark">
                    Let&apos;s talk
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
