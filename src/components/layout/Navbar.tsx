"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/partner-with-us", label: "Partner" },
  { href: "/services/dedicated-team", label: "Hire team" },
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
];

const cta = { href: "/contact", label: "Contact" };

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isServicesHub = pathname === "/services";
  const isIndustries = pathname === "/industries";
  const isWorksIndex = pathname === "/works";
  const isWorksDetail = pathname.startsWith("/works/");
  const isAbout = pathname === "/about";
  const isDedicatedTeam = pathname === "/services/dedicated-team";
  const isPartner = pathname === "/partner-with-us";
  const isContact = pathname === "/contact";
  const isLightShell =
    isHome ||
    isServicesHub ||
    isIndustries ||
    isWorksIndex ||
    isAbout ||
    isDedicatedTeam ||
    isPartner ||
    isContact;
  const isSolutions = pathname === "/solutions";
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
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const inverted = lightOnScroll && scrolled;
  const lightNav = isLightShell || !isDarkPage || inverted;
  const shell = [
    "wc-nav-bar",
    isLightShell
      ? scrolled
        ? "is-solid is-light"
        : "is-clear is-light"
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
    // Light hub pages: stay in document flow and scroll away with the page.
    if (
      isServicesHub ||
      isIndustries ||
      isWorksIndex ||
      isAbout ||
      isDedicatedTeam ||
      isPartner ||
      isContact
    )
      return "relative";
    if (isLightShell || isFuture || isSolutions || isDarkPage) {
      return scrolled && (isLightShell || isFuture || (isDarkPage && !isSolutions))
        ? "fixed top-0"
        : "absolute top-0";
    }
    return "relative";
  })();

  const drawerDark = isFuture || !lightNav;
  const logoLight = drawerDark;

  const isActive = (href: string) =>
    pathname === href || (href !== "/services" && pathname.startsWith(`${href}/`));

  return (
    <header className={`wc-nav inset-x-0 z-50 w-full ${headerPos}${scrolled ? " is-scrolled" : ""}`}>
      <div className={shell}>
        <div className="wc-container wc-nav-inner">
          <Link href="/" className="wc-nav-logo">
            <img
              src={logoLight ? "/brand/logo-light.png" : "/brand/logo-dark.png"}
              alt="Woodenclouds"
              width={220}
              height={14}
              className="wc-logo"
            />
          </Link>

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
