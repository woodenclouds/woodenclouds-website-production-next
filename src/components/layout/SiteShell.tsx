"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ProgressWrap } from "./ProgressWrap";
import { QuoteProvider } from "./QuoteProvider";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isWorks = pathname === "/works" || pathname.startsWith("/works/");
  const isPartner = pathname === "/partner-with-us";
  const isAbout = pathname === "/about";
  const isDedicatedTeam = pathname === "/services/dedicated-team";
  const isContact = pathname === "/contact";
  const isBlogDetail = pathname.startsWith("/blog/");
  const isTechnology =
    pathname === "/services/technology" || pathname.startsWith("/services/technology/");
  const isDarkPage =
    isHome ||
    pathname === "/services" ||
    pathname === "/solutions" ||
    isWorks ||
    isPartner ||
    isAbout ||
    isDedicatedTeam ||
    isContact ||
    isBlogDetail;

  useLayoutEffect(() => {
    document.body.classList.toggle("is-home", isHome);
    document.body.classList.toggle("is-dark-page", isDarkPage);
  }, [isHome, isDarkPage]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <QuoteProvider>
      <ProgressWrap />
      <div
        className={
          isDarkPage
            ? pathname === "/solutions"
              ? "min-h-screen bg-[#0a1f38]"
              : isWorks ||
                  isPartner ||
                  isAbout ||
                  isDedicatedTeam ||
                  isContact ||
                  isBlogDetail
                ? "min-h-screen bg-[#05070b] text-white"
                : "min-h-screen bg-black text-white"
            : isTechnology
              ? "min-h-screen bg-white text-ink"
              : "min-h-screen bg-paper text-ink"
        }
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </QuoteProvider>
  );
}
