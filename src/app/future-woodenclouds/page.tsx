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
      <section className="section-padding">
        <div className="container">
          <div className="row mb-80">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-6">
                  <img src="/assets/user/imgs/about/about-img1.jpg" alt="" className="radius-10 mb-20" />
                </div>
                <div className="col-6">
                  <img src="/assets/user/imgs/team-work.jpg" alt="" className="radius-10 mb-20" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 valign">
              <p>
                At Future Woodenclouds, we&apos;re not just an IT service company; we&apos;re
                architects of innovation. We unite developers, designers, marketers, and creative
                thinkers to shape what comes next.
              </p>
            </div>
          </div>

          <div className="mb-80">
            <h3 className="fw-300 mb-20">Our Vision</h3>
            <p style={{ maxWidth: 780 }}>
              Imagine a world where creativity and technology converge — where the brightest minds
              in India come together to revolutionize the IT industry.
            </p>
          </div>

          <div className="row mb-80">
            <div className="col-lg-6">
              <h3 className="fw-300 mb-20">Phase 01 — Building the Foundation</h3>
              <p>
                We are assembling a team of 10,000 passionate individuals — from freelancers to
                BDEs, sales and marketing talent, and designers — to build the foundation of Future
                Woodenclouds.
              </p>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="row">
                <div className="col-6">
                  <img src="/assets/user/imgs/img1.jpg" alt="" className="radius-10" />
                </div>
                <div className="col-6">
                  <img src="/assets/user/imgs/img2.jpg" alt="" className="radius-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h3 className="fw-300 mb-30">Join the Revolution</h3>
              {done ? (
                <div className="alert alert-success">
                  Thanks for joining! (Demo mode — API coming soon.)
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
                    <textarea id="message" name="message" rows={4} required placeholder="Message" />
                  </div>
                  <button type="submit" className="butn butn-md butn-bord radius-30">
                    <span className="text">Submit</span>
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
