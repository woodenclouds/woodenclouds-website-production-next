export type Client = {
  name: string;
  sector?: string;
};

export const clients: Client[] = [
  { name: "WC Creatives", sector: "Creative & Branding" },
  { name: "WC Frames", sector: "Production" },
  { name: "Zendots", sector: "Technology" },
  { name: "Woodenclouds Academy", sector: "Education" },
];
