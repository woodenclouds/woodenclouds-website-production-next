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
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 text-ink shadow-2xl md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-center justify-between">
          <h5 className="text-xl font-medium">Get a Quote</h5>
          <button
            type="button"
            className="text-2xl leading-none text-ink/50 hover:text-ink"
            aria-label="Close"
            onClick={() => {
              setSubmitted(false);
              onClose();
            }}
          >
            ×
          </button>
        </div>

        {submitted ? (
          <p className="rounded-xl bg-green-50 px-4 py-3 text-sm text-green-800">
            Thanks! Your quote request has been received. (Demo mode — API coming soon.)
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="wc-label" htmlFor="quote-name">
                Full Name*
              </label>
              <input className="wc-input" id="quote-name" name="name" required placeholder="Name" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="wc-label" htmlFor="quote-phone">
                  Phone*
                </label>
                <input className="wc-input" id="quote-phone" name="phone" required placeholder="Phone" />
              </div>
              <div>
                <label className="wc-label" htmlFor="quote-email">
                  Email*
                </label>
                <input
                  className="wc-input"
                  id="quote-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="wc-label" htmlFor="quote-subject">
                  Subject*
                </label>
                <select className="wc-input" id="quote-subject" name="subject" required defaultValue="">
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
              <div>
                <label className="wc-label" htmlFor="quote-budget">
                  Budget*
                </label>
                <select className="wc-input" id="quote-budget" name="budget" required defaultValue="">
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
            <div>
              <label className="wc-label" htmlFor="quote-message">
                Message*
              </label>
              <textarea
                className="wc-input"
                id="quote-message"
                name="message"
                rows={4}
                required
                placeholder="Message"
              />
            </div>
            <div className="flex justify-end pt-2">
              <button type="submit" className="wc-btn wc-btn-solid">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
