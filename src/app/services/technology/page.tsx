import type { Metadata } from "next";
import Link from "next/link";
import { technologyServices, processSteps } from "@/data/content";
import { Breadcrumb, EnquireCta, ProcessSteps } from "@/components/shared/PageBits";

export const metadata: Metadata = { title: "Technology" };

export default function TechnologyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Technology" }]} />
      <section className="wc-section">
        <div className="wc-container grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-light">Technology</h2>
            <img
              src="/assets/user/imgs/services/technology-bg.jpg"
              alt="Technology"
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

      <section className="wc-section pt-0">
        <div className="wc-container grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {technologyServices.map((card) => (
            <Link key={card.title} href={card.href} className="group rounded-xl bg-white p-5">
              <img src={card.image} alt={card.title} className="mb-5 w-full rounded-lg object-contain" />
              <h5 className="mb-2 text-xl font-light">{card.title}</h5>
              <p className="text-sm font-light text-muted">{card.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <ProcessSteps steps={processSteps} />
      <EnquireCta />
    </>
  );
}
