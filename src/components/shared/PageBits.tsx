"use client";

import Link from "next/link";
import { useQuote } from "@/components/layout/QuoteProvider";

export function EnquireCta({
  background = "/backgrounds/1.jpg",
  buttonLabel = "Enquire Now",
}: {
  background?: string;
  buttonLabel?: string;
}) {
  const { openQuote } = useQuote();

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-20 text-white md:py-28"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="wc-container relative text-center">
        <h3 className="text-3xl font-light md:text-4xl">
          Have a project in mind?
          <br />
          Let’s get to work.
        </h3>
        <button type="button" className="wc-btn wc-btn-light mt-8" onClick={openQuote}>
          {buttonLabel}
        </button>
      </div>
    </section>
  );
}

export function PageHeader({
  subtitle,
  title,
  light = true,
}: {
  subtitle?: string;
  title: string;
  light?: boolean;
}) {
  return (
    <header className={`pb-8 pt-16 md:pb-12 md:pt-24 ${light ? "bg-paper text-ink" : "bg-ink text-white"}`}>
      <div className="wc-container">
        {subtitle && (
          <p className={`mb-3 text-sm uppercase tracking-wider ${light ? "text-muted" : "text-white/60"}`}>
            {subtitle}
          </p>
        )}
        <h1 className="max-w-4xl text-4xl font-light leading-tight md:text-5xl">{title}</h1>
      </div>
    </header>
  );
}

export function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <div className="wc-container pt-8">
      <nav className="flex flex-wrap items-center gap-2 text-sm text-muted">
        {items.map((item, i) => (
          <span key={item.label} className="inline-flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="hover:text-ink">
                {item.label}
              </Link>
            ) : (
              <span className="text-ink">{item.label}</span>
            )}
            {i < items.length - 1 && <span>/</span>}
          </span>
        ))}
      </nav>
    </div>
  );
}

export function ProcessSteps({ steps }: { steps: string[] }) {
  return (
    <section className="wc-section bg-paper">
      <div className="wc-container">
        <p className="mb-3 text-sm uppercase tracking-wider text-muted">how we do it</p>
        <h3 className="mb-10 text-3xl font-light">Simple Steps to Success</h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step} className="rounded-xl bg-white p-7">
              <span className="text-4xl font-light text-ink/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h5 className="mt-4 text-lg font-light">{step}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
