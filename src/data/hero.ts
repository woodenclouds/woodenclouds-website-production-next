export type HeroContent = {
  statement: string;
  headline: string;
  cta: { label: string; href: string };
  ticks: string[];
};

export const heroContent: HeroContent = {
  statement:
    "Digital products that close the gap between how a brand sees itself and how the world experiences it.",
  headline: "Products that feel inevitable.",
  cta: { label: "Explore", href: "#what-we-do" },
  ticks: ["Technology", "Design", "Intelligence", "Growth"],
};
