import type { Metadata } from "next";
import { processSteps } from "@/data/content";
import { Breadcrumb, EnquireCta, ProcessSteps } from "@/components/shared/PageBits";

export const metadata: Metadata = { title: "Startup & Business Support" };

export default function BusinessSupportPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: "Startup & Business Support" },
        ]}
      />
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="fz-40 fw-300 mb-30">Startup & Business Support</h2>
              <img
                src="/assets/user/imgs/services/technology-bg.jpg"
                alt="Business support"
                className="radius-10"
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
      <ProcessSteps steps={processSteps} />
      <EnquireCta />
    </>
  );
}
