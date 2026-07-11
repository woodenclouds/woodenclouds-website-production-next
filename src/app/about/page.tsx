import type { Metadata } from "next";
import { PageHeader, EnquireCta } from "@/components/shared/PageBits";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHeader subtitle="About Us" title="Your Growth, Our Expertise!" />
      <section className="wc-section pt-0">
        <div className="wc-container grid items-center gap-10 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <img src="/about/about-img1.jpg" alt="" className="rounded-xl object-cover" />
            <img src="/about/about-img2.jpg" alt="" className="mt-8 rounded-xl object-cover" />
          </div>
          <div>
            <p className="mb-3 text-sm uppercase tracking-wider text-muted">About</p>
            <p className="text-base font-light leading-relaxed text-ink/80">
              We are one of the leading IT service providers. Our goal is to incorporate all aspects
              of the business: its development, survival, progress and outlook, business reputation,
              and an increase in customer retention.
            </p>
          </div>
        </div>
      </section>
      <section className="wc-section pt-0">
        <div className="wc-container grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <img src="/about/img5.jpg" alt="" className="rounded-xl" />
            <img src="/about/img1.jpg" alt="" className="rounded-xl" />
          </div>
          <div>
            <h3 className="mb-8 text-3xl font-light">Driving Success:</h3>
            {[
              {
                title: "Innovation",
                body: "We thrive on fresh ideas and creative solutions, constantly seeking innovative ways to drive success in the digital world.",
              },
              {
                title: "Collaboration",
                body: "Teamwork is key at Woodenclouds. We believe that by working together, we achieve more and create a positive impact for our clients.",
              },
              {
                title: "Integrity",
                body: "Honest, transparent, and ethical practices define our approach. We build lasting relationships based on trust and integrity in everything we do.",
              },
            ].map((item) => (
              <div key={item.title} className="mb-8">
                <h5 className="mb-2 text-lg font-medium">{item.title}</h5>
                <p className="text-sm font-light leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EnquireCta />
    </>
  );
}
