"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ProgressWrap } from "./ProgressWrap";
import { QuoteProvider } from "./QuoteProvider";
import "./site-chrome.css";

const STYLE_IDS = {
  plugins: "wc-css-plugins",
  theme: "wc-css-theme",
  hero: "wc-css-hero",
};

function ensureStylesheet(id: string, href: string) {
  let el = document.getElementById(id) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.id = id;
    el.rel = "stylesheet";
    document.head.appendChild(el);
  }
  if (el.href !== new URL(href, window.location.origin).href) {
    el.href = href;
  }
}

function removeStylesheet(id: string) {
  document.getElementById(id)?.remove();
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    document.body.className = isHome ? "home-main-crev main-bg" : "main-bg";
    ensureStylesheet(STYLE_IDS.plugins, "/assets/user/css/plugins.css");
    if (isHome) {
      ensureStylesheet(STYLE_IDS.theme, "/assets/user/css/style.css");
      ensureStylesheet(STYLE_IDS.hero, "/assets/user/css/home-hero.css");
    } else {
      ensureStylesheet(STYLE_IDS.theme, "/assets/user/css/light/style.css");
      removeStylesheet(STYLE_IDS.hero);
    }
  }, [isHome]);

  return (
    <QuoteProvider>
      <ProgressWrap />
      <div id="smooth-wrapper">
        <Navbar />
        <div id="smooth-content">
          <main className="main-bg">{children}</main>
          <Footer />
        </div>
      </div>
    </QuoteProvider>
  );
}
