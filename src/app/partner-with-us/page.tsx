import type { Metadata } from "next";
import { partnerPrograms, site } from "@/data/content";
import { PageHeader } from "@/components/shared/PageBits";

export const metadata: Metadata = { title: "Partner with us" };

export default function PartnerPage() {
  return (
    <>
      <PageHeader subtitle="Partnership Program" title="Partner with us" />
      <section className="section-padding">
        <div className="container">
          <p className="mb-50" style={{ maxWidth: 720 }}>
            Unlock the power of collaboration with Woodenclouds. Our diverse partnership programs
            are built for growth and expansion in the digital landscape.
          </p>
          <div className="row">
            {partnerPrograms.map((program) => (
              <div className="col-lg-4" key={program.title}>
                <div
                  className="item md-mb50"
                  style={{ background: "#fff", padding: 30, borderRadius: 10, marginBottom: 30 }}
                >
                  <h5 className="fw-300 mb-15">{program.title}</h5>
                  <p>{program.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-50">
            <p className="mb-20">
              For more details, contact us at{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <a href={`mailto:${site.email}`} className="butn butn-md butn-bord radius-30">
              <span className="text">Mail Us</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
