"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/partner-with-us", label: "Partner with us" },
  { href: "/services/dedicated-team", label: "Hire dedicated team" },
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isSolutions = pathname === "/solutions";
  const isIndustries = pathname === "/industries";
  const isWorks = pathname === "/works" || pathname.startsWith("/works/");
  const isPartner = pathname === "/partner-with-us";
  const isAbout = pathname === "/about";
  const isDedicatedTeam = pathname === "/services/dedicated-team";
  const isContact = pathname === "/contact";
  const isBlogDetail = pathname.startsWith("/blog/");
  const isTechnology =
    pathname === "/services/technology" || pathname.startsWith("/services/technology/");
  const isDigitalMarketing = pathname === "/services/digital-marketing";
  const isBusinessSupport = pathname === "/services/business-support";
  const isFuture = pathname === "/future-woodenclouds";
  const isDarkPage =
    isHome ||
    pathname === "/services" ||
    isSolutions ||
    isIndustries ||
    isWorks ||
    isPartner ||
    isAbout ||
    isDedicatedTeam ||
    isContact ||
    isBlogDetail ||
    isDigitalMarketing ||
    isBusinessSupport ||
    isTechnology ||
    isFuture;
  /** Light content below hero — scrolled bar should be white */
  const lightOnScroll =
    isPartner ||
    isWorks ||
    isAbout ||
    isDedicatedTeam ||
    isContact ||
    isBlogDetail ||
    isDigitalMarketing ||
    isBusinessSupport ||
    isTechnology;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
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
  const lightNav = !isDarkPage || inverted;
  const shell = isFuture
    ? scrolled
      ? "border-b border-white/10 bg-transparent backdrop-blur-md"
      : "border-b border-transparent bg-transparent"
    : isSolutions || isIndustries
      ? "border-b border-white/10 bg-transparent"
      : isDarkPage
        ? scrolled
          ? inverted
            ? "border-b border-line-dark bg-white/95 backdrop-blur-md"
            : "border-b border-white/10 bg-black/90 backdrop-blur-md"
          : "border-b border-white/10 bg-transparent"
        : "border-b border-line-dark bg-white";

  const headerPos = (() => {
    if (isFuture) {
      return scrolled ? "fixed top-0" : "absolute top-0";
    }
    if (isSolutions || isIndustries) {
      return "absolute top-0";
    }
    if (isDarkPage) {
      return scrolled ? "fixed top-0" : "absolute top-0";
    }
    return "relative";
  })();

  const linkBase = isFuture
    ? "text-white/80 hover:text-white"
    : lightNav
      ? "text-ink/65 hover:text-ink"
      : "text-white/80 hover:text-white";
  const linkActive = isFuture || !lightNav ? "text-white" : "text-ink";
  const drawerDark = isFuture || !lightNav;
  const burgerColor = drawerDark ? "bg-white" : "bg-ink";
  const menuText = drawerDark ? "text-white" : "text-ink";
  const logoLight = drawerDark;

  return (
    <header className={`inset-x-0 z-50 w-full ${headerPos}`}>
      {/* Bar only — keep backdrop-blur here so it doesn't trap the drawer */}
      <div className={shell}>
        <div className="wc-container flex h-20 items-center justify-between gap-6">
          <Link href="/" className="relative z-50 flex shrink-0 items-center">
            <img
              src={logoLight ? "/brand/logo-light.png" : "/brand/logo-dark.png"}
              alt="Woodenclouds"
              width={200}
              height={12}
              className="wc-logo"
            />
          </Link>

          <button
            type="button"
            className={`relative z-50 inline-flex h-10 w-10 items-center justify-center lg:hidden ${menuText}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span
                className={`block h-px w-5 transition ${burgerColor} ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span className={`block h-px w-5 transition ${burgerColor} ${open ? "opacity-0" : ""}`} />
              <span
                className={`block h-px w-5 transition ${burgerColor} ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </span>
          </button>

          <nav className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end">
            <ul className="flex flex-row items-center gap-1 xl:gap-2">
              {links.map((link) => {
                const active =
                  pathname === link.href ||
                  (link.href !== "/services" && pathname.startsWith(`${link.href}/`));
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={[
                        "block whitespace-nowrap px-2.5 py-2 text-[13px] tracking-[0.02em] xl:px-3 xl:text-sm",
                        linkBase,
                        active ? linkActive : "",
                      ].join(" ")}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile: right-side drawer (sibling of blurred bar → fixed works vs viewport) */}
      <div
        className={`fixed inset-0 z-40 bg-black/55 transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />
      <nav
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(19.5rem,86vw)] flex-col border-l transition-transform duration-300 ease-out lg:hidden ${
          drawerDark
            ? "border-white/10 bg-[#07090d] text-white"
            : "border-black/10 bg-white text-ink"
        } ${open ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!open}
        aria-label="Mobile"
      >
        <div className="flex h-20 items-center justify-end px-5">
          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center ${menuText}`}
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <span className="sr-only">Close</span>
            <span className="flex flex-col gap-1.5">
              <span className={`block h-px w-5 translate-y-[3.5px] rotate-45 ${burgerColor}`} />
              <span className={`block h-px w-5 opacity-0 ${burgerColor}`} />
              <span className={`block h-px w-5 -translate-y-[3.5px] -rotate-45 ${burgerColor}`} />
            </span>
          </button>
        </div>
        <ul className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-4 pb-8">
          {links.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/services" && pathname.startsWith(`${link.href}/`));
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={[
                    "block rounded-lg px-3 py-3 text-base tracking-[0.02em]",
                    drawerDark
                      ? active
                        ? "bg-white/8 text-white"
                        : "text-white/75 hover:bg-white/5 hover:text-white"
                      : active
                        ? "bg-ink/5 text-ink"
                        : "text-ink/70 hover:bg-ink/5 hover:text-ink",
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
