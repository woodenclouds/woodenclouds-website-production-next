"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { heroContent } from "@/data/hero";
import { HeroStrings, heroStringsCanInteract } from "./HeroStrings";
import "./home-hero.css";
import { AnimatedHeroText } from "./AnimatedHeroText";

export function HomeHero() {
  const [ready, setReady] = useState(false);
  const [hint, setHint] = useState(false);
  const dismissed = useRef(false);
  const heroRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 40);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (heroStringsCanInteract()) setHint(true);
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    const label = labelRef.current;
    if (!hero || !label || !hint) return;

    const place = (e: PointerEvent) => {
      if (dismissed.current) return;
      const overLink = Boolean((e.target as Element | null)?.closest("a"));
      if (overLink) {
        label.classList.remove("is-visible");
        return;
      }
      const rect = hero.getBoundingClientRect();
      label.style.transform = `translate3d(${e.clientX - rect.left + 14}px, ${e.clientY - rect.top + 18}px, 0)`;
      label.classList.add("is-visible");
    };

    const hide = () => label.classList.remove("is-visible");

    hero.addEventListener("pointermove", place);
    hero.addEventListener("pointerleave", hide);
    return () => {
      hero.removeEventListener("pointermove", place);
      hero.removeEventListener("pointerleave", hide);
    };
  }, [hint]);

  const dismissHint = () => {
    if (dismissed.current) return;
    dismissed.current = true;
    setHint(false);
  };

  return (
    <header ref={heroRef} className={`wc-hero wc-hero-strings-stage${ready ? " is-ready" : ""}`}>
      <HeroStrings onFirstClick={dismissHint} />

      <div className="wc-container wc-hero-frame">
        <div className="wc-hero-top">
          <h1 className="wc-hero-statement">
            {heroContent.statementLines.map((line, i) => (
              <span key={line}>
                {i > 0 ? <br /> : null}
                {line}
              </span>
            ))}
          </h1>
          
          <AnimatedHeroText />

          <div className="wc-hero-actions">
            {heroContent.actions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className={`wc-hero-btn wc-hero-btn-${action.variant}`}
              >
                {action.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {hint ? (
        <span ref={labelRef} className="wc-hero-click-hint" aria-hidden>
          Click Anywhere
        </span>
      ) : null}
    </header>
  );
}
