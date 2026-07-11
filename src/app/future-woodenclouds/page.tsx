"use client";

import { FormEvent, useState } from "react";
import { PageHeader } from "@/components/shared/PageBits";

export default function FutureWoodencloudsPage() {
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <>
      <PageHeader title="Future Woodenclouds" />
      <section className="wc-section pt-0">
        <div className="wc-container space-y-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="grid grid-cols-2 gap-4">
              <img src="/about/about-img1.jpg" alt="" className="rounded-xl" />
              <img src="/team/team-work.jpg" alt="" className="mt-8 rounded-xl" />
            </div>
            <p className="text-sm font-light leading-relaxed text-muted">
              At Future Woodenclouds, we&apos;re not just an IT service company; we&apos;re
              architects of innovation. We unite developers, designers, marketers, and creative
              thinkers to shape what comes next.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-light">Our Vision</h3>
            <p className="max-w-3xl text-sm font-light leading-relaxed text-muted">
              Imagine a world where creativity and technology converge — where the brightest minds
              in India come together to revolutionize the IT industry.
            </p>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-light">Phase 01 — Building the Foundation</h3>
              <p className="text-sm font-light leading-relaxed text-muted">
                We are assembling a team of 10,000 passionate individuals — from freelancers to
                BDEs, sales and marketing talent, and designers — to build the foundation of Future
                Woodenclouds.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/about/img1.jpg" alt="" className="rounded-xl" />
              <img src="/about/img2.jpg" alt="" className="rounded-xl" />
            </div>
          </div>

          <div className="max-w-xl">
            <h3 className="mb-6 text-2xl font-light">Join the Revolution</h3>
            {done ? (
              <p className="rounded-xl bg-green-50 px-4 py-3 text-sm text-green-800">
                Thanks for joining! (Demo mode — API coming soon.)
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
                    rows={4}
                    required
                    placeholder="Message"
                  />
                </div>
                <button type="submit" className="wc-btn wc-btn-solid">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
