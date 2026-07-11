"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ProgressWrap } from "./ProgressWrap";
import { QuoteProvider } from "./QuoteProvider";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    document.body.classList.toggle("is-home", isHome);
  }, [isHome]);

  return (
    <QuoteProvider>
      <ProgressWrap />
      <div className={isHome ? "bg-ink text-white" : "bg-paper text-ink"}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </QuoteProvider>
  );
}
