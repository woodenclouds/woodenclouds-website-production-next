import type { Metadata } from "next";
import Link from "next/link";
import { digitalMarketingServices } from "@/data/content";
import { Breadcrumb, EnquireCta } from "@/components/shared/PageBits";

export const metadata: Metadata = { title: "Branding & Digital Marketing" };

export default function DigitalMarketingPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: "Branding & Digital Marketing" },
        ]}
      />
      <section className="section-padding">
        <div className="container">
          <div className="row mb-50">
            <div className="col-lg-6">
              <video
                src="/assets/user/videos/video2.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{ width: "100%", borderRadius: 10 }}
              />
            </div>
            <div className="col-lg-5 offset-lg-1 valign">
              <div>
                <h3 className="fw-300 mb-20">Crafting Your Brand&apos;s Success</h3>
                <p>
                  Every business is unique. With a deep understanding of clients&apos; goals, we
                  create tailored solutions that resonate with your audience and elevate your brand.
                </p>
              </div>
            </div>
          </div>

          <div className="sec-lg-head mb-40">
            <h3 className="fw-300">Our Approach</h3>
          </div>
          <div className="row mb-50">
            {["Understanding Your Needs", "Thorough Research", "Actionable Strategies"].map(
              (step, i) => (
                <div className="col-lg-4" key={step}>
                  <div
                    className="item mb-30"
                    style={{ background: "#f1f3f5", padding: 30, borderRadius: 10 }}
                  >
                    <span className="fz-40 fw-300 opacity-4">{String(i + 1).padStart(2, "0")}</span>
                    <h5 className="fw-300 mt-20">{step}</h5>
                  </div>
                </div>
              ),
            )}
          </div>

          <div className="row">
            {digitalMarketingServices.map((card) => (
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
      <EnquireCta />
    </>
  );
}
