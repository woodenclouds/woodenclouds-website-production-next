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
    "Building the digital foundation",
    "for brands ready to define their industry.",
  ],
  actions: [
    { label: "View Our Works", href: "/works", variant: "solid" },
    { label: "Book a Free Consultation", href: "/contact", variant: "outline" },
  ],
};
