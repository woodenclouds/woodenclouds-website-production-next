import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageBits";
import { EnquireCta } from "@/components/shared/PageBits";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHeader subtitle="About Us" title="Your Growth, Our Expertise!" />

      <section className="about section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="img-mons md-mb50">
                <div className="row">
                  <div className="col-md-5 commands">
                    <div className="img mb-20">
                      <img src="/assets/user/imgs/about/about-img1.jpg" alt="About Woodenclouds" />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="img">
                      <img src="/assets/user/imgs/about/about-img2.jpg" alt="Woodenclouds team" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 valign">
              <div className="text">
                <h6 className="sub-title mb-15">About</h6>
                <p>
                  We are one of the leading IT service providers. Our goal is to incorporate all
                  aspects of the business: its development, survival, progress and outlook, business
                  reputation, and an increase in customer retention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-corp section-padding pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="img md-mb50">
                <img src="/assets/user/imgs/img5.jpg" alt="" />
                <img src="/assets/user/imgs/img1.jpg" alt="" className="mt-30" />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <h3 className="fw-300 mb-40">Driving Success:</h3>
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
                <div key={item.title} className="mb-30">
                  <h5 className="fw-400 mb-10">{item.title}</h5>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EnquireCta />
    </>
  );
}
