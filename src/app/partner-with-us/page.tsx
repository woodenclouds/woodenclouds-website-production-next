import type { Metadata } from "next";
import { partnerPrograms, site } from "@/data/content";
import { PageHeader } from "@/components/shared/PageBits";

export const metadata: Metadata = { title: "Partner with us" };

export default function PartnerPage() {
  return (
    <>
      <PageHeader subtitle="Partnership Program" title="Partner with us" />
      <section className="wc-section pt-0">
        <div className="wc-container">
          <p className="mb-10 max-w-2xl text-sm font-light leading-relaxed text-muted">
            Unlock the power of collaboration with Woodenclouds. Our diverse partnership programs
            are built for growth and expansion in the digital landscape.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {partnerPrograms.map((program) => (
              <div key={program.title} className="rounded-xl bg-white p-7">
                <h5 className="mb-3 text-xl font-light">{program.title}</h5>
                <p className="text-sm font-light text-muted">{program.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <p className="mb-4 text-sm text-muted">
              For more details, contact us at{" "}
              <a href={`mailto:${site.email}`} className="text-ink underline">
                {site.email}
              </a>
            </p>
            <a href={`mailto:${site.email}`} className="wc-btn wc-btn-dark">
              Mail Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
