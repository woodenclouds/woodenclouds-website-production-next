"use client";

import Link from "next/link";
import { useQuote } from "@/components/layout/QuoteProvider";

type EnquireCtaProps = {
  background?: string;
  buttonLabel?: string;
};

export function EnquireCta({
  background = "/assets/user/imgs/background/1.jpg",
  buttonLabel = "Enquire Now",
}: EnquireCtaProps) {
  const { openQuote } = useQuote();

  return (
    <section
      className="call-action-center section-padding bg-img"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="text">
              <h3 className="fw-300">
                Have a project in mind?
                <br />
                Let’s get to work.
              </h3>
              <button
                type="button"
                className="butn butn-md butn-bord radius-30 mt-30"
                onClick={openQuote}
              >
                <span className="text">{buttonLabel}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageHeader({
  subtitle,
  title,
}: {
  subtitle?: string;
  title: string;
}) {
  return (
    <header className="page-header section-padding pb-0">
      <div className="container mt-80">
        <div className="row">
          <div className="col-lg-12">
            <div className="caption">
              {subtitle && <h6 className="sub-title">{subtitle}</h6>}
              <h1 className="fz-55">{title}</h1>
            </div>
          </div>
        </div>
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
    <div className="container pt-30">
      <ul className="rest" style={{ display: "flex", gap: 8, flexWrap: "wrap", listStyle: "none", padding: 0 }}>
        {items.map((item, i) => (
          <li key={item.label}>
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
            {i < items.length - 1 ? <span style={{ margin: "0 8px" }}>/</span> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProcessSteps({ steps }: { steps: string[] }) {
  return (
    <section className="services section-padding">
      <div className="container">
        <div className="sec-lg-head mb-50">
          <h6 className="sub-title mb-15">how we do it</h6>
          <h3 className="fw-300">Simple Steps to Success</h3>
        </div>
        <div className="row">
          {steps.map((step, i) => (
            <div className="col-lg-4 col-md-6" key={step}>
              <div
                className="item md-mb50"
                style={{ background: "#f1f3f5", padding: 30, borderRadius: 10, marginBottom: 30 }}
              >
                <span className="fz-40 fw-300 opacity-4">{String(i + 1).padStart(2, "0")}</span>
                <h5 className="fw-300 mt-20">{step}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
