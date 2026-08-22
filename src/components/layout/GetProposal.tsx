"use client";

import { FormEvent, useEffect, useId, useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/data/content";

const WHATSAPP_HREF = `https://wa.me/918921708606?text=${encodeURIComponent(
  "Hi Woodenclouds — I'd like a project proposal.",
)}`;

export function GetProposal() {
  const pathname = usePathname();
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setOpen(false);
    setDone(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (pathname === "/contact") return null;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const subject = encodeURIComponent("Proposal request");
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\n\nI'd like a project proposal.`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setDone(true);
  }

  return (
    <>
      {open ? null : (
        <div className="wc-proposal-dock">
          <button
            type="button"
            className="wc-proposal-tab"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={false}
          >
            <span>Get Proposal</span>
          </button>
        </div>
      )}

      {open ? (
        <div className="wc-proposal-layer">
          <button
            type="button"
            className="wc-proposal-backdrop"
            aria-label="Close proposal"
            onClick={() => setOpen(false)}
          />
          <div
            className="wc-proposal-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <div className="wc-proposal-panel-top">
              <span className="wc-proposal-badge">Let’s talk</span>
              <button
                type="button"
                className="wc-proposal-close"
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <h2 id={titleId} className="wc-proposal-title">
              Speak with our team
            </h2>
            <p className="wc-proposal-lede">
              Tell us a little about the work — we’ll come back with a clear next step.
            </p>

            <div className="wc-proposal-actions">
              <a href={site.phoneHref} className="wc-proposal-action">
                Call now
              </a>
              <a
                href={WHATSAPP_HREF}
                className="wc-proposal-action is-wa"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>

            {done ? (
              <p className="wc-proposal-done">Thanks — send the email that just opened, or wait for us to call.</p>
            ) : (
              <form className="wc-proposal-form" onSubmit={onSubmit}>
                <p className="wc-proposal-form-kicker">Let’s get your project started.</p>
                <label className="sr-only" htmlFor="proposal-phone">
                  Phone number
                </label>
                <input
                  id="proposal-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="Phone number"
                />
                <label className="sr-only" htmlFor="proposal-name">
                  Your name
                </label>
                <input
                  id="proposal-name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                />
                <button type="submit">Submit</button>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
