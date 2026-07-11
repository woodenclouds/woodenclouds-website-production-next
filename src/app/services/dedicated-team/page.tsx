import type { Metadata } from "next";
import { PageHeader, EnquireCta } from "@/components/shared/PageBits";

export const metadata: Metadata = { title: "Dedicated Team" };

const blocks = [
  {
    title: "Dedicated Marketing Team",
    image: "/assets/user/imgs/team-01.jpg",
    body: "Brand architects, storytellers, and growth strategists who build campaigns that move the needle.",
  },
  {
    title: "Dedicated Tech Team",
    image: "/assets/user/imgs/team-02.jpg",
    body: "From software development to technical support — engineers who plug into your product and ship with you.",
  },
  {
    title: "Dedicated Product Development Support",
    image: "/assets/user/imgs/team-01.jpg",
    body: "End-to-end product support across Ideation, Design, Development, and Implementation.",
  },
  {
    title: "Dedicated Technical Support Team",
    image: "/assets/user/imgs/team-04.jpg",
    body: "Outsourced IT support that keeps systems healthy without the overhead of a full in-house team.",
  },
];

export default function DedicatedTeamPage() {
  return (
    <>
      <PageHeader
        title='Your Comprehensive Business Solution: Dedicated Teams for Product Development, Design, Implementation, and Marketing'
      />

      <section className="section-padding">
        <div className="container">
          {blocks.map((block, i) => (
            <div className="row mb-80 align-items-center" key={block.title}>
              <div className={`col-lg-6 ${i % 2 === 1 ? "order-lg-2" : ""}`}>
                <img src={block.image} alt={block.title} className="radius-10" />
              </div>
              <div className={`col-lg-5 ${i % 2 === 1 ? "order-lg-1" : "offset-lg-1"} valign`}>
                <div>
                  <h3 className="fw-300 mb-20">{block.title}</h3>
                  <p>{block.body}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="sec-lg-head mb-40">
            <h3 className="fw-300">The Dedicated Team Advantage</h3>
          </div>
          <div className="row">
            {["End-to-End Solutions", "Holistic Approach", "Flexible Scaling", "Cost-Effective"].map(
              (item) => (
                <div className="col-md-3 col-6" key={item}>
                  <div
                    className="item mb-30"
                    style={{ background: "#f1f3f5", padding: 24, borderRadius: 10 }}
                  >
                    <h6 className="fw-400">{item}</h6>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <EnquireCta background="/assets/user/imgs/team-01.jpg" />
    </>
  );
}
