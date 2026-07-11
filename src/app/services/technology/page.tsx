import type { Metadata } from "next";
import Link from "next/link";
import { technologyServices, processSteps } from "@/data/content";
import { Breadcrumb, EnquireCta, ProcessSteps } from "@/components/shared/PageBits";

export const metadata: Metadata = { title: "Technology" };

export default function TechnologyPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: "Technology" },
        ]}
      />
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="fz-40 fw-300 mb-30">Technology</h2>
              <img
                src="/assets/user/imgs/services/technology-bg.jpg"
                alt="Technology"
                className="radius-10 mb-30"
              />
            </div>
            <div className="col-lg-5 offset-lg-1 valign">
              <div>
                <h3 className="fw-300 mb-20">
                  Empower Your Business with Innovative Technology Solutions
                </h3>
                <p>
                  At Woodenclouds, we specialize in crafting bespoke technology solutions — from
                  website development and mobile app creation to custom software solutions and
                  e-commerce platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="serv-box section-padding pt-0">
        <div className="container">
          <div className="row">
            {technologyServices.map((card) => (
              <div className="col-lg-4 col-md-6" key={card.title}>
                <Link href={card.href}>
                  <div className="serv-item md-mb50 radius-10" style={{ marginBottom: 40 }}>
                    <div className="mb-20">
                      <img src={card.image} alt={card.title} />
                    </div>
                    <h5 className="fz-22 mb-10 fw-300">{card.title}</h5>
                    <p>{card.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps steps={processSteps} />
      <EnquireCta />
    </>
  );
}
