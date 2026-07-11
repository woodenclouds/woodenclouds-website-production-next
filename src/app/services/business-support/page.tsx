import type { Metadata } from "next";
import { processSteps } from "@/data/content";
import { Breadcrumb, EnquireCta, ProcessSteps } from "@/components/shared/PageBits";

export const metadata: Metadata = { title: "Startup & Business Support" };

export default function BusinessSupportPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Services", href: "/services" }, { label: "Startup & Business Support" }]}
      />
      <section className="wc-section">
        <div className="wc-container grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-light">Startup & Business Support</h2>
            <img
              src="/services/technology-bg.jpg"
              alt="Business support"
              className="rounded-xl"
            />
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-light">
              Empower Your Business with Innovative Technology Solutions
            </h3>
            <p className="text-sm font-light leading-relaxed text-muted">
              At Woodenclouds, we specialize in crafting bespoke technology solutions — from website
              development and mobile app creation to custom software solutions and e-commerce
              platforms.
            </p>
          </div>
        </div>
      </section>
      <ProcessSteps steps={processSteps} />
      <EnquireCta />
    </>
  );
}
