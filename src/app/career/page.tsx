import type { Metadata } from "next";
import { site } from "@/data/content";
import { PageHeader } from "@/components/shared/PageBits";

export const metadata: Metadata = { title: "Career" };

export default function CareerPage() {
  return (
    <>
      <PageHeader title="Send your resume at" />
      <section className="wc-section pt-0">
        <div className="wc-container">
          <a
            href={`mailto:${site.careersEmail}`}
            className="mb-12 block text-2xl font-light text-accent-deep hover:underline md:text-3xl"
          >
            {site.careersEmail}
          </a>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <img src="/assets/user/imgs/team.jpg" alt="Join Woodenclouds" className="rounded-xl" />
            <div>
              <h4 className="mb-4 text-2xl font-light">
                Join the Woodenclouds Team: Where Innovation Meets Opportunity
              </h4>
              <p className="text-sm font-light leading-relaxed text-muted">
                At Woodenclouds, we are more than just an IT service provider; we are a community of
                passionate professionals driving innovation and excellence in the world of
                technology. As an integral part of our team, you&apos;ll have the opportunity to
                contribute to cutting-edge IT solutions and be at the forefront of industry
                advancements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
