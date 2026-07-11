"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/content";
import { useQuote } from "./QuoteProvider";
import "./site-chrome.css";

export function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isLightQuick = pathname === "/" || pathname === "/services/dedicated-team";
  const noTopPad = ["/contact", "/behind-woodenclouds", "/future-woodenclouds", "/about"].includes(
    pathname,
  );
  const { openQuote } = useQuote();

  return (
    <>
      <div className={`quick_call ${isLightQuick ? "quick_call--light" : "quick_call--dark"}`}>
        <a
          href="#getAQuote"
          onClick={(e) => {
            e.preventDefault();
            openQuote();
          }}
        >
          <i className="fas fa-envelope" /> <small>Get a Quote</small>
        </a>
      </div>

      <footer className={isHome ? "sub-bg" : noTopPad ? "pt-0" : "pt-80"}>
        <div
          className={noTopPad ? "" : "footer-container"}
          style={{ background: "#000", color: "#fff" }}
        >
          <div className="container pb-80 pt-80 ontop">
            {isHome && (
              <div className="call-box text-center mb-80 fw-300">
                <h2 className="fw-300 fz-40">
                  Designing your <span className="wc-text-gradient"> Digital Future</span>
                  <span className="arrow">
                    <img src="/assets/user/imgs/rocket.png" alt="" style={{ width: 80 }} />
                  </span>
                </h2>
              </div>
            )}
            <div className="row">
              <div className="col-lg-2 col-6">
                <div className="tit mb-20">
                  <h6>Company</h6>
                </div>
                <ul className="rest social-text">
                  <li>
                    <Link href="/about" className="fw-300">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="fw-300">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/career" className="fw-300">
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="fw-300">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-6 md-mb50">
                <div className="tit mb-20">
                  <h6>Services</h6>
                </div>
                <ul className="rest social-text">
                  <li>
                    <Link href="/services/technology" className="fw-300">
                      Technology Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/business-support" className="fw-300">
                      Startup & Business Support
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/digital-marketing" className="fw-300">
                      Branding & Digital Marketing
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-6 md-mb50">
                <div className="tit mb-20">
                  <h6>Useful Links</h6>
                </div>
                <ul className="rest social-text">
                  <li>
                    <Link href="/blog" className="fw-300">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/partner-with-us" className="fw-300">
                      Partner with us
                    </Link>
                  </li>
                  <li>
                    <Link href="/behind-woodenclouds" className="fw-300">
                      Behind Woodenclouds
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-6 md-mb50">
                <div className="tit mb-20">
                  <h6>Social</h6>
                </div>
                <ul className="rest social-text">
                  <li>
                    <a href={site.social.linkedin} className="fw-300" target="_blank" rel="noreferrer">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href={site.social.facebook} className="fw-300" target="_blank" rel="noreferrer">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href={site.social.instagram} className="fw-300" target="_blank" rel="noreferrer">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <div className="colum md-mb50">
                  <div className="tit mb-20">
                    <h6>Say Hello</h6>
                  </div>
                  <div className="text">
                    <p className="mb-10 text-white">
                      <a href={`mailto:${site.email}`} className="fw-300">
                        {site.email}
                      </a>
                    </p>
                    <p className="mb-10 text-white">
                      <a href={site.phoneHref} className="fw-300">
                        {site.phone}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="colum md-mb50">
                  <div className="tit mb-20">
                    <h6>Address</h6>
                  </div>
                  <div className="text">
                    <p className="text-white fw-300">{site.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sub-footer pt-40 pb-40 bord-thin-top ontop">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 pt-3">
                  <div className="logo text-center">
                    <Link href="/">
                      <img src="/assets/user/imgs/logo-light.png" alt="Woodenclouds" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 pt-3">
                  <div className="text-center">
                    <p className="fz-13">
                      <span className="underline">
                        <a href="#">Privacy Policy</a>
                      </span>{" "}
                      |{" "}
                      <span className="underline">
                        <a href="#">Terms & Condition</a>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 pt-3">
                  <div className="copyright">
                    <div className="text-center">
                      <p className="fz-13">Woodenclouds © 2024. All rights reserved</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
