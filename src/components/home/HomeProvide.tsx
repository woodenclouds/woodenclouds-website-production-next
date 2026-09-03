"use client";

import Link from "next/link";
import { Phone, ShoppingCart, Sparkles, TrendingUp } from "lucide-react";
import { HomeReveal } from "./HomeReveal";
import "./home-provide.css";

const products = [
  {
    id: "wai",
    logo: "/WAI.png",
    logoAlt: "WAI",
    titleLines: ["Give Your Business a Voice", "That Never Sleeps"],
    body: "Deploy AI voice agents that answer every call, support every customer, and help your business grow with intelligent.",
    explore: { label: "Learn more", href: "/solutions/wai", Icon: Sparkles },
    connect: { label: "Talk to us", href: "/contact", Icon: Phone },
  },
  {
    id: "wobcart",
    logo: "/Wobcart.png",
    logoAlt: "Wobcart",
    titleLines: ["Complete eCommerce", "Growth Platform"],
    body: "An all-in-one eCommerce platform for building, launching, and growing online businesses.",
    explore: { label: "Learn more", href: "/solutions#commerce", Icon: ShoppingCart },
    connect: { label: "Talk to us", href: "/contact", Icon: TrendingUp },
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
                <span className="wc-home-provide-deco" aria-hidden>
                  <span className="wc-home-provide-deco-pattern" />
                  <span className="wc-home-provide-deco-wave wc-home-provide-deco-wave--a" />
                  <span className="wc-home-provide-deco-wave wc-home-provide-deco-wave--b" />
                  <span className="wc-home-provide-deco-wave wc-home-provide-deco-wave--c" />
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
                  <span className="wc-home-provide-rule" />
                  <p>{product.body}</p>
                  <div className="wc-home-provide-actions">
                    <Link href={product.explore.href} className="wc-home-provide-btn is-outline">
                      <product.explore.Icon size={15} strokeWidth={2} aria-hidden />
                      {product.explore.label}
                    </Link>
                    <Link href={product.connect.href} className="wc-home-provide-btn is-fill">
                      <product.connect.Icon size={15} strokeWidth={2} aria-hidden />
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
