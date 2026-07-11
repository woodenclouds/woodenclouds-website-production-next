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
      <PageHeader title="Your Comprehensive Business Solution: Dedicated Teams for Product Development, Design, Implementation, and Marketing" />
      <section className="wc-section pt-0">
        <div className="wc-container space-y-16">
          {blocks.map((block, i) => (
            <div
              key={block.title}
              className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <img src={block.image} alt={block.title} className="rounded-xl" />
              <div>
                <h3 className="mb-4 text-2xl font-light">{block.title}</h3>
                <p className="text-sm font-light leading-relaxed text-muted">{block.body}</p>
              </div>
            </div>
          ))}

          <div>
            <h3 className="mb-6 text-2xl font-light">The Dedicated Team Advantage</h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {["End-to-End Solutions", "Holistic Approach", "Flexible Scaling", "Cost-Effective"].map(
                (item) => (
                  <div key={item} className="rounded-xl bg-white p-5 text-sm font-medium">
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
      <EnquireCta background="/assets/user/imgs/team-01.jpg" />
    </>
  );
}
