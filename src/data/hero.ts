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
    "We help brands build the digital tools",
    "they need to lead their industry.",
  ],
  actions: [
    { label: "See our work", href: "/works", variant: "solid" },
    { label: "Book a free call", href: "/contact", variant: "outline" },
  ],
};
