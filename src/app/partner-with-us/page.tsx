import type { Metadata } from "next";
import { partnerPrograms, site } from "@/data/content";

export const metadata: Metadata = { title: "Partner with us" };

export default function PartnerPage() {
  return (
    <div className="bg-white text-ink">
      <header className="relative overflow-hidden border-b border-line-dark pb-14 pt-16 md:pb-20 md:pt-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.45]"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 100% 0%, rgba(91, 157, 232, 0.14), transparent 55%), radial-gradient(ellipse 50% 40% at 0% 100%, rgba(168, 189, 234, 0.12), transparent 50%)",
          }}
        />
        <div className="wc-container relative">
          <p className="mb-4 text-sm uppercase tracking-[0.18em] text-muted">Partnership Program</p>
          <h1 className="max-w-3xl text-4xl font-light leading-[1.1] tracking-tight md:text-6xl">
            Partner with{" "}
            <span className="wc-gradient-text">Woodenclouds</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-muted md:text-lg">
            Collaboration that drives growth. Join our partnership programs and unlock new
            opportunities across technology, marketing, and business.
          </p>
        </div>
      </header>

      <section className="wc-section">
        <div className="wc-container">
          <div className="mb-12 flex flex-col gap-3 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-sm uppercase tracking-[0.18em] text-muted">How we partner</p>
              <h2 className="text-3xl font-light md:text-4xl">Three ways to grow together</h2>
            </div>
            <p className="max-w-md text-sm font-light leading-relaxed text-muted">
              Whether you need delivery capacity, referral income, or a strategic alliance — there
              is a path that fits.
            </p>
          </div>

          <ul className="divide-y divide-line-dark border-y border-line-dark">
            {partnerPrograms.map((program, i) => (
              <li
                key={program.title}
                className="group grid gap-4 py-10 transition-colors md:grid-cols-[5rem_1fr] md:gap-10 md:py-12"
              >
                <span className="text-3xl font-light text-ink/15 transition-colors group-hover:text-accent md:text-4xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="mb-3 text-xl font-light md:text-2xl">{program.title}</h3>
                  <p className="max-w-2xl text-sm font-light leading-relaxed text-muted md:text-base">
                    {program.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line-dark bg-[#fafbfc]">
        <div className="wc-container flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.18em] text-muted">Next step</p>
            <h2 className="mb-3 text-3xl font-light md:text-4xl">Ready to partner?</h2>
            <p className="max-w-md text-sm font-light leading-relaxed text-muted">
              Tell us how you want to collaborate. We&apos;ll reply with the right program details
              and next steps.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block text-sm text-accent-deep underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
          </div>
          <a href={`mailto:${site.email}`} className="wc-btn wc-btn-solid shrink-0">
            Mail Us
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden>
              <path
                d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
