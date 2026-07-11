"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/content";
import { useQuote } from "./QuoteProvider";

export function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const lightFab = pathname === "/services/dedicated-team";
  const { openQuote } = useQuote();

  return (
    <>
      <button
        type="button"
        onClick={openQuote}
        className={`wc-quote-fab ${lightFab ? "wc-quote-fab--light" : "wc-quote-fab--dark"}`}
        aria-label="Get a Quote"
      >
        <span className="inline-flex items-center gap-2 text-[15px]">
          <span aria-hidden>✉</span>
          <span className="text-sm">Get a Quote</span>
        </span>
      </button>

      <footer className="bg-black text-white">
        <div className="wc-container py-16 md:py-20">
          {isHome && (
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-light md:text-4xl">
                Designing your <span className="wc-gradient-text">Digital Future</span>
                <img
                  src="/brand/rocket.png"
                  alt=""
                  className="ml-3 inline-block w-16 align-middle md:w-20"
                />
              </h2>
            </div>
          )}

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
            <div className="lg:col-span-2">
              <h6 className="mb-4 text-sm font-medium">Company</h6>
              <ul className="space-y-2 text-sm font-light text-white/75">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/career" className="hover:text-white">
                    Career
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h6 className="mb-4 text-sm font-medium">Services</h6>
              <ul className="space-y-2 text-sm font-light text-white/75">
                <li>
                  <Link href="/services/technology" className="hover:text-white">
                    Technology Services
                  </Link>
                </li>
                <li>
                  <Link href="/services/business-support" className="hover:text-white">
                    Startup & Business Support
                  </Link>
                </li>
                <li>
                  <Link href="/services/digital-marketing" className="hover:text-white">
                    Branding & Digital Marketing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h6 className="mb-4 text-sm font-medium">Useful Links</h6>
              <ul className="space-y-2 text-sm font-light text-white/75">
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/partner-with-us" className="hover:text-white">
                    Partner with us
                  </Link>
                </li>
                <li>
                  <Link href="/behind-woodenclouds" className="hover:text-white">
                    Behind Woodenclouds
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h6 className="mb-4 text-sm font-medium">Social</h6>
              <ul className="space-y-2 text-sm font-light text-white/75">
                <li>
                  <a href={site.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={site.social.facebook} target="_blank" rel="noreferrer" className="hover:text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href={site.social.instagram} target="_blank" rel="noreferrer" className="hover:text-white">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-4">
              <h6 className="mb-4 text-sm font-medium">Say Hello</h6>
              <p className="mb-2 text-sm font-light">
                <a href={`mailto:${site.email}`} className="text-white/80 hover:text-white">
                  {site.email}
                </a>
              </p>
              <p className="mb-6 text-sm font-light">
                <a href={site.phoneHref} className="text-white/80 hover:text-white">
                  {site.phone}
                </a>
              </p>
              <h6 className="mb-3 text-sm font-medium">Address</h6>
              <p className="text-sm font-light leading-relaxed text-white/75">{site.address}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="wc-container grid gap-4 py-8 text-center text-xs text-white/60 md:grid-cols-3 md:items-center">
            <Link href="/" className="mx-auto block w-36 md:mx-0">
              <img src="/brand/logo-light.png" alt="Woodenclouds" />
            </Link>
            <p>
              <a href="#" className="underline-offset-2 hover:text-white hover:underline">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="#" className="underline-offset-2 hover:text-white hover:underline">
                Terms & Condition
              </a>
            </p>
            <p className="md:text-right">Woodenclouds © 2024. All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}
