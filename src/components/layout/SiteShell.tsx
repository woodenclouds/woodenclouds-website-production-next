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

  useLayoutEffect(() => {
    document.body.classList.toggle("is-home", isHome);
  }, [isHome]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <QuoteProvider>
      <ProgressWrap />
      <div className={isHome ? "min-h-screen bg-black text-white" : "min-h-screen bg-paper text-ink"}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </QuoteProvider>
  );
}
