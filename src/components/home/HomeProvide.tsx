"use client";

import Link from "next/link";
import { HomeReveal } from "./HomeReveal";
import "./home-provide.css";

const products = [
  {
    id: "wai",
    logo: "/WAI.png",
    logoAlt: "WAI",
    background: "/BG 1.png",
    titleLines: ["Give Your Business a Voice", "That Never Sleeps"],
    body: "Deploy AI voice agents that answer every call, support every customer, and help your business grow with intelligent.",
    explore: { label: "Explore WAI", href: "/solutions/wai" },
    connect: { label: "Connect Us Now", href: "/contact" },
  },
  {
    id: "wobcart",
    logo: "/Wobcart.png",
    logoAlt: "Wobcart",
    background: "/BG 2.png",
    titleLines: ["Complete eCommerce", "Growth Platform"],
    body: "An all-in-one eCommerce platform for building, launching, and growing online businesses.",
    explore: { label: "Explore Wobcart", href: "/solutions#commerce" },
    connect: { label: "Connect Us Now", href: "/contact" },
  },
] as const;

export function HomeProvide() {
  return (
    <section id="solutions-we-provide" className="wc-home-block wc-home-provide">
      <div className="wc-container">
        <HomeReveal as="header" className="wc-home-provide-head">
          <h2 className="wc-home-provide-heading">Solutions we provide.</h2>
          <Link href="/solutions" className="wc-home-provide-all">
            View All Solutions
            <span aria-hidden>→</span>
          </Link>
        </HomeReveal>

        <ul className="wc-home-provide-grid">
          {products.map((product, i) => (
            <HomeReveal key={product.id} as="li" delay={i * 80}>
              <article className={`wc-home-provide-card is-${product.id}`}>
                <span className="wc-home-provide-card-bg" aria-hidden>
                  <img src={product.background} alt="" draggable={false} />
                  <span className="wc-home-provide-card-motion" />
                </span>
                <div className="wc-home-provide-card-inner">
                  <img
                    className="wc-home-provide-logo"
                    src={product.logo}
                    alt={product.logoAlt}
                    draggable={false}
                  />
                  <h3>
                    {product.titleLines.map((line, lineIndex) => (
                      <span key={line}>
                        {lineIndex > 0 ? <br /> : null}
                        {line}
                      </span>
                    ))}
                  </h3>
                  <p>{product.body}</p>
                  <div className="wc-home-provide-actions">
                    <Link href={product.explore.href} className="wc-home-provide-btn is-light">
                      {product.explore.label}
                    </Link>
                    <Link href={product.connect.href} className="wc-home-provide-btn is-dark">
                      {product.connect.label}
                    </Link>
                  </div>
                </div>
              </article>
            </HomeReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
