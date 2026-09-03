import type { Metadata } from "next";
import { clients } from "@/data/clients";
import { EnquireCta } from "@/components/shared/PageBits";
import { HomeReveal } from "@/components/home/HomeReveal";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Clients",
  description:
    "Companies that trust Woodenclouds for digital products, technology delivery, branding, and growth.",
  path: "/clients",
});

const disciplines = ["Product", "Brand", "Technology", "Growth"];

const partnership = [
  {
    title: "Start by understanding",
    copy: "We learn the problem and the goal before we design or code.",
  },
  {
    title: "Build in the open",
    copy: "Shared boards, regular demos, and direct access to the people actually doing the work.",
  },
  {
    title: "Stay past launch",
    copy: "Measuring, iterating, and growing with you once the product is live and in real hands.",
  },
];

export default function ClientsPage() {
  return (
    <>
      <section className="wc-clientspage-hero">
        <div className="wc-clientspage-hero-bg" aria-hidden />
        <div className="wc-container wc-clientspage-hero-inner">
          <HomeReveal>
            <p className="wc-clientspage-kicker">Clients</p>
            <h1 className="wc-clientspage-title">Our Clients</h1>
            <p className="wc-clientspage-lede">
              From first ideas to live products — the brands we design, build, and grow with.
            </p>
            <ul className="wc-clientspage-tags">
              {disciplines.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </HomeReveal>
        </div>
      </section>

      <section className="wc-clientspage-wall">
        <div className="wc-container">
          <HomeReveal as="header" className="wc-clientspage-wall-head">
            <h2 className="wc-clientspage-wall-title">Selected clients</h2>
            <p className="wc-clientspage-wall-note">
              Brands and businesses we design, build, and grow with — from product to brand and
              technology.
            </p>
          </HomeReveal>

          <ul className="wc-clientspage-grid min-[900px]:grid-cols-5">
            {clients.map((client, i) => (
              <HomeReveal as="li" key={client.name} delay={i * 70}>
                <div className="wc-clientspage-cell">
                  {client.logo && (
                    <span className="wc-clientspage-logo">
                      <img
                        src={encodeURI(client.logo)}
                        alt=""
                        draggable={false}
                        className="!filter-none"
                      />
                    </span>
                  )}
                  <span className="wc-clientspage-meta">
                    <span className="wc-clientspage-name">{client.name}</span>
                    {client.sector && (
                      <span className="wc-clientspage-sector">{client.sector}</span>
                    )}
                  </span>
                </div>
              </HomeReveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="wc-clientspage-band">
        <div className="wc-container">
          <HomeReveal>
            <p className="wc-clientspage-kicker">How we work together</p>
            <h2 className="wc-clientspage-wall-title">What a partnership looks like</h2>
          </HomeReveal>

          <div className="wc-clientspage-band-grid">
            {partnership.map((step, i) => (
              <HomeReveal key={step.title} className="wc-clientspage-step" delay={i * 80}>
                <span className="wc-clientspage-step-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </HomeReveal>
            ))}
          </div>
        </div>
      </section>

      <EnquireCta buttonLabel="Get In Touch" />
    </>
  );
}
