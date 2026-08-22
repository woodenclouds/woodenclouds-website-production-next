export type HeroContent = {
  statement: string;
  headline: string;
  prefix: string;
  cta: { label: string; href: string };
  ticks: string[];
};

export const heroContent: HeroContent = {
  statement:
    "We design and build websites, apps, and digital systems your customers can use — and your business can grow on.",
  headline: "From first sketch to a product in the market.",
  prefix: "We build",
  cta: { label: "See how we work", href: "#process" },
  ticks: ["Websites", "Apps", "Brands", "Teams"],
};
