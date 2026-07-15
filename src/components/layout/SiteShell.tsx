"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ProgressWrap } from "./ProgressWrap";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isServicesHub = pathname === "/services";
  const isIndustries = pathname === "/industries";
  const isLightShell = isHome || isServicesHub || isIndustries;
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
  const isSolutions = pathname === "/solutions";
  const isDarkPage =
    isSolutions ||
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

  useLayoutEffect(() => {
    document.body.classList.toggle("is-home", isLightShell);
    document.body.classList.toggle("is-dark-page", isDarkPage);
  }, [isLightShell, isDarkPage]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <ProgressWrap />
      <div
        className={
          isLightShell
            ? "min-h-screen bg-paper text-ink"
            : isDarkPage
              ? isSolutions
                ? "min-h-screen bg-[#0a1f38]"
                : isWorks ||
                    isPartner ||
                    isAbout ||
                    isDedicatedTeam ||
                    isContact ||
                    isBlogDetail ||
                    isDigitalMarketing ||
                    isBusinessSupport ||
                    isTechnology ||
                    isFuture
                  ? "min-h-screen bg-[#05070b] text-white"
                  : "min-h-screen bg-black text-white"
              : "min-h-screen bg-paper text-ink"
        }
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
