"use client";

import { useEffect, useState } from "react";
import { AboutProject } from "./AboutProject";
import { BusinessChallenge } from "./BusinessChallenge";
import { BusinessImpact } from "./BusinessImpact";
import { CaseStudyNav } from "./CaseStudyNav";
import { FeatureShowcase } from "./FeatureShowcase";
import { FinalOutcome } from "./FinalOutcome";
import { HeroSection } from "./HeroSection";
import { HorizontalShowcase } from "./HorizontalShowcase";
import { OurSolution } from "./OurSolution";
import { TechnologyStack } from "./TechnologyStack";
import { TheShift } from "./TheShift";

const SECTION_IDS = ["overview", "challenge", "technology", "solution", "showcase", "impact"];

export function HispanCaseStudy() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    document.documentElement.classList.add("is-hispan-case");
    document.body.classList.add("is-hispan-case");
    return () => {
      document.documentElement.classList.remove("is-hispan-case");
      document.body.classList.remove("is-hispan-case");
    };
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(id);
          });
        },
        { threshold: 0, rootMargin: "-40% 0px -40% 0px" },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FAFAFC] text-[#0F172A] selection:bg-emerald-100 selection:text-emerald-900">
      <CaseStudyNav activeSection={activeSection} />
      <HeroSection />
      <AboutProject />
      <BusinessChallenge />
      <TechnologyStack />
      <OurSolution />
      <TheShift />
      <FeatureShowcase />
      <BusinessImpact />
      <HorizontalShowcase />
      <FinalOutcome />
    </div>
  );
}
