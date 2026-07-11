import type { Metadata } from "next";
import { site } from "@/data/content";
import { PageHeader } from "@/components/shared/PageBits";

export const metadata: Metadata = { title: "Career" };

export default function CareerPage() {
  return (
    <>
      <PageHeader title="Send your resume at" />
      <section className="section-padding pt-0">
        <div className="container">
          <h3 className="fw-300 mb-50">
            <a href={`mailto:${site.careersEmail}`}>{site.careersEmail}</a>
          </h3>
          <div className="row">
            <div className="col-lg-6">
              <img src="/assets/user/imgs/team.jpg" alt="Join Woodenclouds" className="radius-10" />
            </div>
            <div className="col-lg-5 offset-lg-1 valign">
              <div>
                <h4 className="fw-300 mb-20">
                  Join the Woodenclouds Team: Where Innovation Meets Opportunity
                </h4>
                <p>
                  At Woodenclouds, we are more than just an IT service provider; we are a community
                  of passionate professionals driving innovation and excellence in the world of
                  technology. As an integral part of our team, you&apos;ll have the opportunity to
                  contribute to cutting-edge IT solutions and be at the forefront of industry
                  advancements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
