export type HeroContent = {
  image: string;
  alt: string;
  headline: string;
  lede: string;
  cta: { label: string; href: string };
};

export const hero: HeroContent = {
  image: "/hero/hero-1.jpg",
  alt: "Woodenclouds experiences",
  headline: "Experiences powered by intelligence.",
  lede: "We design and build digital products that feel inevitable.",
  cta: { label: "Watch the Future", href: "/future-woodenclouds" },
};
