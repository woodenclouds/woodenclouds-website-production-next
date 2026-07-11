"use client";

import { FormEvent, useState } from "react";
import { quoteBudgets, quoteSubjects } from "@/data/content";

type QuoteModalProps = {
  open: boolean;
  onClose: () => void;
};

export function QuoteModal({ open, onClose }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (!open) return null;

  return (
    <div
      className="modal fade show"
      id="getAQuote"
      style={{ display: "block", background: "rgba(0,0,0,0.55)" }}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-black">Get a Quote</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
            />
          </div>
          <div className="contact-crev wc-quote-form" style={{ padding: "25px 10px" }}>
            <div className="container text-black">
              <div className="row">
                <div className="col-lg-12">
                  <div className="full-width">
                    {submitted ? (
                      <div className="messages">
                        <div className="alert alert-success">
                          Thanks! Your quote request has been received. (Demo mode — API coming soon.)
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit}>
                        <div className="controls row pt-10">
                          <div className="col-lg-12">
                            <div className="form-group mb-30 text-black">
                              <label htmlFor="quote-name">Full Name*</label>
                              <input type="text" name="name" placeholder="Name" id="quote-name" required />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mb-30">
                              <label htmlFor="quote-phone">Phone*</label>
                              <input type="tel" name="phone" placeholder="Phone" id="quote-phone" required />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mb-30">
                              <label htmlFor="quote-email">Email*</label>
                              <input type="email" name="email" placeholder="Email" id="quote-email" required />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mb-30">
                              <label htmlFor="quote-subject">Subject*</label>
                              <select name="subject" id="quote-subject" required defaultValue="">
                                <option value="" disabled>
                                  --SELECT--
                                </option>
                                {quoteSubjects.map((s) => (
                                  <option key={s} value={s}>
                                    {s}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mb-30">
                              <label htmlFor="quote-budget">Budget*</label>
                              <select name="budget" id="quote-budget" required defaultValue="">
                                <option value="" disabled>
                                  --SELECT--
                                </option>
                                {quoteBudgets.map((b) => (
                                  <option key={b} value={b}>
                                    {b}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label htmlFor="quote-message">Message*</label>
                              <textarea
                                name="message"
                                placeholder="Message"
                                rows={4}
                                id="quote-message"
                                required
                              />
                            </div>
                            <div className="mt-30">
                              <button type="submit" className="butn butn-md butn-bord radius-30 float-end">
                                <span className="text">Submit</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
