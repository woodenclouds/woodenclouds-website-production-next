export type Client = {
  name: string;
  logo: string;
  sector?: string;
};

export const clients: Client[] = [
  { name: "WC Creatives", logo: "/clients/wc-creatives.png", sector: "Creative & Branding" },
  { name: "WC Frames", logo: "/clients/wc-frames.png", sector: "Production" },
  { name: "Zendots", logo: "/clients/zendots-logo.png", sector: "Technology" },
  { name: "Woodenclouds Academy", logo: "/clients/wca-logo-white.png", sector: "Education" },
];

export const brands = [
  {
    name: "WC Creatives",
    logo: "/clients/wc-creatives.png",
    href: "#",
  },
  {
    name: "Woodenclouds Academy",
    logo: "/clients/wca-logo-white.png",
    href: "https://woodencloudsacademy.com/",
  },
  {
    name: "WC Frames",
    logo: "/clients/wc-frames.png",
    href: "#",
  },
  {
    name: "Zendots",
    logo: "/clients/zendots-logo.png",
    href: "#",
  },
];
