"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/content";
import { PageHeader } from "@/components/shared/PageBits";

export default function ContactPage() {
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <>
      <PageHeader subtitle="Get In Touch" title="Let's get in touch with us." />
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <p className="mb-40">
                If you would like to work with us or just want to get in touch, we’d love to hear
                from you!
              </p>
              <div className="mb-30">
                <h6 className="mb-10">General Enquiry</h6>
                <a href={site.phoneHref}>{site.phone}</a>
              </div>
              <div className="mb-30">
                <h6 className="mb-10">Email</h6>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
              <div className="mb-30">
                <h6 className="mb-10">HR Enquiry</h6>
                <a href={`mailto:${site.careersEmail}`}>{site.careersEmail}</a>
              </div>
              <div className="social mt-40">
                <a href={site.social.linkedin} target="_blank" rel="noreferrer" className="me-3">
                  LinkedIn
                </a>
                <a href={site.social.facebook} target="_blank" rel="noreferrer" className="me-3">
                  Facebook
                </a>
                <a href={site.social.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              {done ? (
                <div className="alert alert-success">
                  Thanks! Your message was received. (Demo mode — API coming soon.)
                </div>
              ) : (
                <form onSubmit={onSubmit} className="wc-quote-form">
                  <div className="form-group mb-30">
                    <label htmlFor="name">Full Name*</label>
                    <input id="name" name="name" required placeholder="Name" />
                  </div>
                  <div className="form-group mb-30">
                    <label htmlFor="phone">Phone*</label>
                    <input id="phone" name="phone" required placeholder="Phone" />
                  </div>
                  <div className="form-group mb-30">
                    <label htmlFor="email">Email*</label>
                    <input id="email" name="email" type="email" required placeholder="Email" />
                  </div>
                  <div className="form-group mb-30">
                    <label htmlFor="message">Message*</label>
                    <textarea id="message" name="message" rows={5} required placeholder="Message" />
                  </div>
                  <button type="submit" className="butn butn-md butn-bord radius-30">
                    <span className="text">Let&apos;s Talk</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
