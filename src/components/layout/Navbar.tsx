"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./navbar.css";

const links = [
  { href: "/services", label: "Services" },
  { href: "/partner-with-us", label: "Partner with us" },
  { href: "/services/dedicated-team", label: "Hire dedicated team" },
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
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

  const navClass = [
    "navbar",
    "bord",
    "wc-navbar",
    isHome ? "wc-nav-hero" : "main-bg",
    isHome && scrolled ? "nav-scroll" : "",
    open ? "is-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <nav className={navClass}>
      <div className="container wc-navbar-inner">
        <Link className="logo icon-img-100" href="/" style={{ width: 250 }}>
          <img src="/assets/user/imgs/logo-light.png" alt="Woodenclouds" />
        </Link>

        <button
          className="wc-navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="icon-bar">
            <i className={`fas ${open ? "fa-times" : "fa-bars"}`} />
          </span>
        </button>

        <div
          className={`wc-navbar-menu${open ? " is-open" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="wc-navbar-links">
            {links.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/services" && pathname.startsWith(`${link.href}/`));
              return (
                <li key={link.href}>
                  <Link className={`nav-link${active ? " active" : ""}`} href={link.href}>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
