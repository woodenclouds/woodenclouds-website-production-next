"use client";

import Link from "next/link";

export function EnquireCta({
  background = "/backgrounds/1.jpg",
  buttonLabel = "Get in touch",
  variant = "photo",
}: {
  background?: string;
  buttonLabel?: string;
  variant?: "photo" | "light";
}) {
  if (variant === "light") {
    return (
      <section className="relative overflow-hidden bg-paper py-20 text-ink md:py-28">
        <div className="wc-container relative text-center">
          <h3 className="mx-auto max-w-3xl text-3xl font-light tracking-tight md:text-4xl">
            Ready to build what’s next?
          </h3>
          <p className="mx-auto mt-4 max-w-md text-base font-light text-muted">
            Tell us where you are. We&apos;ll help with the product, the brand, and how you grow.
          </p>
          <Link href="/contact" className="wc-btn wc-btn-solid mt-8">
            {buttonLabel}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-20 text-white md:py-28"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="wc-container relative text-center">
        <h3 className="mx-auto max-w-3xl text-3xl font-light tracking-tight md:text-4xl">
          Ready to build what’s next?
        </h3>
        <p className="mx-auto mt-4 max-w-md text-base font-light text-white/65">
            Tell us where you are. We&apos;ll help with the product, the brand, and how you grow.
        </p>
        <Link href="/contact" className="wc-btn wc-btn-light mt-8">
          {buttonLabel}
        </Link>
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
