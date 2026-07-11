export type HeroSlide = {
  image: string;
  alt: string;
  headline: string;
  lede: string;
  cta: { label: string; href: string };
};

export const heroSlides: HeroSlide[] = [
  {
    image: "/hero/hero-1.jpg",
    alt: "Woodenclouds experiences",
    headline: "Experiences powered by intelligence.",
    lede: "We design and build digital products that feel inevitable.",
    cta: { label: "Watch the Future", href: "/future-woodenclouds" },
  },
  {
    image: "/hero/hero-2.jpg",
    alt: "AI and insight",
    headline: "AI and insight for real growth.",
    lede: "Technology shaped around outcomes, not features.",
    cta: { label: "Explore Technology", href: "/services/technology" },
  },
  {
    image: "/hero/hero-4.jpg",
    alt: "Digital future",
    headline: "Designing your digital future.",
    lede: "From first sketch to shipped product, with clarity at every step.",
    cta: { label: "View Our Works", href: "/works" },
  },
  {
    image: "/hero/hero-3.jpg",
    alt: "Secure digital systems",
    headline: "Secure systems. Scalable products.",
    lede: "Architecture that holds up as your business grows.",
    cta: { label: "See Services", href: "/services" },
  },
  {
    image: "/hero/hero-collab.jpg",
    alt: "Dedicated teams",
    headline: "Teams built to ship faster.",
    lede: "Dedicated talent that plugs into your product and moves with you.",
    cta: { label: "Hire Dedicated Team", href: "/services/dedicated-team" },
  },
];
