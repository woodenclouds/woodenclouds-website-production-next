export type HeroAction = {
  label: string;
  href: string;
  variant: "solid" | "outline";
};

export type HeroContent = {
  statementLines: string[];
  actions: HeroAction[];
};

export const heroContent: HeroContent = {
  statementLines: [
    "Digital Products That Close The Gap",
    "Between How A Brand Sees Itself",
    "And How The World",
    "Experiences It.",
  ],
  actions: [
    { label: "View Our Works", href: "/works", variant: "solid" },
    { label: "Book a Free Consultation", href: "/contact", variant: "outline" },
  ],
};
