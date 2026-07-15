"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/content";

export function Footer() {
  const pathname = usePathname();
  const isLightShell =
    pathname === "/" || pathname === "/services" || pathname === "/industries";

  return (
      <footer className={isLightShell ? "wc-footer wc-footer--light" : "wc-footer"}>
        <div className="wc-footer-bg" aria-hidden />

        <div className="wc-container relative z-10 py-16 md:py-20">
          <div className="wc-footer-grid">
            <div className="wc-footer-brand">
              <Link href="/" className="inline-block">
                <img
                  src={isLightShell ? "/brand/logo-dark.png" : "/brand/logo-light.png"}
                  alt="Woodenclouds"
                  width={180}
                  height={10}
                  className="wc-logo"
                />
              </Link>
              <p className="wc-footer-brand-copy">
                A digital product company shaping technology, brand, and growth — from Kochi to the
                world.
              </p>
              <div className="wc-footer-social">
                <a href={site.social.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={site.social.facebook} target="_blank" rel="noreferrer">
                  Facebook
                </a>
                <a href={site.social.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </div>
            </div>

            <div>
              <h6 className="wc-footer-label">Company</h6>
              <ul className="wc-footer-links">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/solutions">Solutions</Link>
                </li>
                <li>
                  <Link href="/industries">Industries</Link>
                </li>
                <li>
                  <Link href="/career">Career</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="wc-footer-label">Services</h6>
              <ul className="wc-footer-links">
                <li>
                  <Link href="/services/technology">Technology Services</Link>
                </li>
                <li>
                  <Link href="/services/business-support">Startup & Business Support</Link>
                </li>
                <li>
                  <Link href="/services/digital-marketing">Branding & Digital Marketing</Link>
                </li>
                <li>
                  <Link href="/services/dedicated-team">Hire Dedicated Team</Link>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="wc-footer-label">Useful Links</h6>
              <ul className="wc-footer-links">
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/partner-with-us">Partner with us</Link>
                </li>
                <li>
                  <Link href="/future-woodenclouds">Future Woodenclouds</Link>
                </li>
              </ul>
            </div>

            <div className="wc-footer-contact">
              <h6 className="wc-footer-label">Say Hello</h6>
              <p>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
              <p>
                <a href={site.phoneHref}>{site.phone}</a>
              </p>
              <h6 className="wc-footer-label wc-footer-label--spaced">Address</h6>
              <p className="wc-footer-address">{site.address}</p>
            </div>
          </div>
        </div>

        <div className="wc-footer-bar">
          <div className="wc-container wc-footer-bar-row">
            <p>Woodenclouds © {new Date().getFullYear()}. All rights reserved.</p>
            <p>
              <a href="#">Privacy Policy</a>
              <span aria-hidden> · </span>
              <a href="#">Terms & Conditions</a>
            </p>
          </div>
        </div>
      </footer>
  );
}
