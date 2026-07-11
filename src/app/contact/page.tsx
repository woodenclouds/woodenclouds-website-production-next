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
      <section className="wc-section pt-0">
        <div className="wc-container grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-8 max-w-md text-sm font-light leading-relaxed text-muted">
              If you would like to work with us or just want to get in touch, we’d love to hear from
              you!
            </p>
            <div className="space-y-6 text-sm">
              <div>
                <h6 className="mb-1 font-medium">General Enquiry</h6>
                <a href={site.phoneHref} className="text-muted hover:text-ink">
                  {site.phone}
                </a>
              </div>
              <div>
                <h6 className="mb-1 font-medium">Email</h6>
                <a href={`mailto:${site.email}`} className="text-muted hover:text-ink">
                  {site.email}
                </a>
              </div>
              <div>
                <h6 className="mb-1 font-medium">HR Enquiry</h6>
                <a href={`mailto:${site.careersEmail}`} className="text-muted hover:text-ink">
                  {site.careersEmail}
                </a>
              </div>
            </div>
            <div className="mt-10 flex gap-5 text-sm">
              <a href={site.social.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                LinkedIn
              </a>
              <a href={site.social.facebook} target="_blank" rel="noreferrer" className="hover:underline">
                Facebook
              </a>
              <a href={site.social.instagram} target="_blank" rel="noreferrer" className="hover:underline">
                Instagram
              </a>
            </div>
          </div>
          <div>
            {done ? (
              <p className="rounded-xl bg-green-50 px-4 py-3 text-sm text-green-800">
                Thanks! Your message was received. (Demo mode — API coming soon.)
              </p>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4 rounded-2xl bg-white p-6 md:p-8">
                <div>
                  <label className="wc-label" htmlFor="name">
                    Full Name*
                  </label>
                  <input className="wc-input" id="name" name="name" required placeholder="Name" />
                </div>
                <div>
                  <label className="wc-label" htmlFor="phone">
                    Phone*
                  </label>
                  <input className="wc-input" id="phone" name="phone" required placeholder="Phone" />
                </div>
                <div>
                  <label className="wc-label" htmlFor="email">
                    Email*
                  </label>
                  <input
                    className="wc-input"
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label className="wc-label" htmlFor="message">
                    Message*
                  </label>
                  <textarea
                    className="wc-input"
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Message"
                  />
                </div>
                <button type="submit" className="wc-btn wc-btn-solid">
                  Let&apos;s Talk
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
