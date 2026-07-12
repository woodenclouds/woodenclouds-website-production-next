"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
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
  const isWorks = pathname === "/works" || pathname.startsWith("/works/");
  const isPartner = pathname === "/partner-with-us";
  const isAbout = pathname === "/about";
  const isDedicatedTeam = pathname === "/services/dedicated-team";
  const isContact = pathname === "/contact";
  const isBlogDetail = pathname.startsWith("/blog/");
  const isDigitalMarketing = pathname === "/services/digital-marketing";
  const isBusinessSupport = pathname === "/services/business-support";
  const isFuture = pathname === "/future-woodenclouds";
  const isDarkPage =
    isHome ||
    pathname === "/services" ||
    isSolutions ||
    isWorks ||
    isPartner ||
    isAbout ||
    isDedicatedTeam ||
    isContact ||
    isBlogDetail ||
    isDigitalMarketing ||
    isBusinessSupport ||
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
    isBusinessSupport;
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
      ? "fixed top-0 border-b border-white/10 bg-transparent backdrop-blur-md"
      : "absolute top-0 border-b border-transparent bg-transparent"
    : isSolutions
      ? "absolute top-0 border-b border-white/10 bg-transparent"
      : isDarkPage
        ? scrolled
          ? inverted
            ? "fixed top-0 border-b border-line-dark bg-white/95 backdrop-blur-md"
            : "fixed top-0 border-b border-white/10 bg-black/90 backdrop-blur-md"
          : "absolute top-0 border-b border-white/10 bg-transparent"
        : "relative border-b border-line-dark bg-white";

  const linkBase = isFuture
    ? "text-white/80 hover:text-white"
    : lightNav
      ? "text-ink/65 hover:text-ink"
      : "text-white/80 hover:text-white";
  const linkActive = isFuture || !lightNav ? "text-white" : "text-ink";
  const menuOpenBg =
    isFuture || !lightNav
      ? "fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md"
      : "fixed inset-0 z-40 flex flex-col items-center justify-center bg-white";
  const burgerColor = isFuture || !lightNav ? "bg-white" : "bg-ink";
  const menuText = isFuture || !lightNav ? "text-white" : "text-ink";
  const logoLight = isFuture || !lightNav;

  return (
    <header className={`inset-x-0 z-50 w-full ${shell}`}>
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

        <nav
          className={[
            "lg:flex lg:flex-1 lg:items-center lg:justify-end",
            open ? menuOpenBg : "hidden",
          ].join(" ")}
        >
          <ul className="flex flex-col items-center gap-1 lg:flex-row lg:items-center lg:gap-1 xl:gap-2">
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
                      open ? `py-3 text-xl ${menuText}` : "",
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
    </header>
  );
}
