"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { isWorksCaseStudyPath } from "@/data/works";

const links = [
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
];

const cta = { href: "/contact", label: "Contact" };

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isServicesHub = pathname === "/services";
  const isIndustries = pathname === "/industries" || pathname.startsWith("/industries/");
  const isWorksIndex = pathname === "/works";
  const isWorksCaseStudy = isWorksCaseStudyPath(pathname);
  const isWorksDetail = pathname.startsWith("/works/") && !isWorksCaseStudy;
  const isAbout = pathname === "/about";
  const isContact = pathname === "/contact";
  const isBlogIndex = pathname === "/blog";
  const isLightShell =
    isHome ||
    isServicesHub ||
    isIndustries ||
    isWorksIndex ||
    isAbout ||
    isContact ||
    isBlogIndex;
  const isSolutions = pathname === "/solutions" || pathname.startsWith("/solutions/");
  const isBlogDetail = pathname.startsWith("/blog/");
  const isTechnology =
    pathname === "/services/technology" || pathname.startsWith("/services/technology/");
  const isDigitalMarketing = pathname === "/services/digital-marketing";
  const isBusinessSupport = pathname === "/services/business-support";
  const isFuture = pathname === "/future-woodenclouds";
  const isDarkPage =
    isSolutions ||
    isWorksDetail ||
    isBlogDetail ||
    isDigitalMarketing ||
    isBusinessSupport ||
    isTechnology ||
    isFuture;
  const lightOnScroll =
    isWorksDetail ||
    isBlogDetail ||
    isDigitalMarketing ||
    isBusinessSupport ||
    isTechnology;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 48;
      setScrolled(next);
      if (isWorksCaseStudy && next) setOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isWorksCaseStudy]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const showSiteNavOnCase = isWorksCaseStudy && (!scrolled || open);
  const inverted = lightOnScroll && scrolled;
  const lightNav = isWorksCaseStudy
    ? false
    : isLightShell || !isDarkPage || inverted;
  const shell = [
    "wc-nav-bar",
    isWorksCaseStudy
      ? "is-clear is-dark"
      : isLightShell
        ? "is-solid is-light"
        : isFuture
          ? scrolled
            ? "is-blur is-dark"
            : "is-clear is-dark"
          : isSolutions || isIndustries
            ? "is-clear is-dark"
            : isDarkPage
              ? scrolled
                ? inverted
                  ? "is-solid is-light"
                  : "is-blur is-dark"
                : "is-clear is-dark"
              : "is-solid is-light",
  ].join(" ");

  const headerPos = (() => {
    if (isHome) return "fixed top-0";
    if (isWorksCaseStudy) return "fixed top-0";
    if (isLightShell) return "relative";
    if (isFuture || isSolutions || isDarkPage) return "absolute top-0";
    return "relative";
  })();

  const drawerDark = isWorksCaseStudy ? true : isFuture || !lightNav;
  const logoLight = drawerDark;

  const isActive = (href: string) =>
    pathname === href || (href !== "/services" && pathname.startsWith(`${href}/`));

  return (
    <header
      className={`wc-nav inset-x-0 z-50 w-full ${headerPos}${lightNav ? " is-light" : ""}${scrolled ? " is-scrolled" : ""}${
        isWorksCaseStudy
          ? showSiteNavOnCase
            ? " opacity-100"
            : " pointer-events-none opacity-0"
          : ""
      }`}
      style={isWorksCaseStudy ? { transition: "opacity 0.45s ease" } : undefined}
      aria-hidden={isWorksCaseStudy && !showSiteNavOnCase}
    >
      <div className={shell}>
        <div className="wc-nav-inner">
          <Link href="/" className="wc-nav-logo">
            <img
              src={logoLight ? "/brand/logo-light.png" : "/brand/logo-dark.png"}
              alt="Woodenclouds"
              width={220}
              height={14}
              className="wc-logo"
            />
          </Link>

          <nav className="wc-nav-desktop" aria-label="Primary">
            <ul className="wc-nav-list">
              {links.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={[
                        "wc-nav-link",
                        lightNav ? "is-light" : "is-dark",
                        active ? "is-active" : "",
                      ].join(" ")}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href={cta.href}
              className={["wc-nav-cta", lightNav ? "is-light" : "is-dark"].join(" ")}
            >
              {cta.label}
            </Link>
          </nav>

          <div className="wc-nav-end">
            <button
              type="button"
              className={`wc-nav-burger ${drawerDark ? "is-dark" : "is-light"}`}
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <span className="wc-nav-burger-lines" aria-hidden>
                <span className={open ? "is-open" : ""} />
                <span className={open ? "is-open" : ""} />
                <span className={open ? "is-open" : ""} />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`wc-nav-scrim ${open ? "is-open" : ""}`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />
      <nav
        className={`wc-nav-drawer ${drawerDark ? "is-dark" : "is-light"} ${open ? "is-open" : ""}`}
        aria-hidden={!open}
        aria-label="Mobile"
      >
        <div className="wc-nav-drawer-head">
          <button
            type="button"
            className={`wc-nav-burger ${drawerDark ? "is-dark" : "is-light"}`}
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <span className="sr-only">Close</span>
            <span className="wc-nav-burger-lines" aria-hidden>
              <span className="is-open" />
              <span className="is-open" />
              <span className="is-open" />
            </span>
          </button>
        </div>
        <ul className="wc-nav-drawer-list">
          {[...links, cta].map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={[
                    "wc-nav-drawer-link",
                    link.href === cta.href ? "is-cta" : "",
                    active ? "is-active" : "",
                  ].join(" ")}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
