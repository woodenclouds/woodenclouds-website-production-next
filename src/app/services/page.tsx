import type { Metadata } from "next";
import Link from "next/link";
import { homeServiceCards, servicesFaqs } from "@/data/content";
import { EnquireCta } from "@/components/shared/PageBits";
import { FaqList } from "@/components/shared/FaqList";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <header className="page-header section-padding pb-0">
        <div className="container mt-80">
          <div className="row">
            <div className="col-lg-8">
              <h6 className="sub-title">What We Do?</h6>
              <h1 className="fz-55">Empowering Your Business with Technology Solutions</h1>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-50">
          <video
            src="/assets/user/videos/video3.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{ width: "100%", maxHeight: 520, objectFit: "cover", borderRadius: 10 }}
          />
        </div>
      </header>

      <section className="serv-box section-padding">
        <div className="container">
          <div className="sec-lg-head mb-50">
            <h2 className="fz-40 fw-300">
              Featured <span className="wc-text-gradient">Services</span>
            </h2>
          </div>
          <div className="row">
            {homeServiceCards.map((card) => (
              <div className="col-lg-4" key={card.title}>
                <Link href={card.href}>
                  <div className="serv-item md-mb50 radius-10">
                    <div className="mb-20">
                      <img src={card.image} alt={card.title} />
                    </div>
                    <h5 className="fz-22 mb-10 pb-10 bord-thin-bottom fw-300">{card.title}</h5>
                    <p>{card.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqList faqs={servicesFaqs} />
      <EnquireCta />
    </>
  );
}
