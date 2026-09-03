export type Client = {
  name: string;
  logo?: string;
  sector?: string;
};

const logo = (file: string) => `/Client Logos/${file}`;

export const clients: Client[] = [
  { name: "Lazza Ice Creams", logo: logo("1.png"), sector: "FMCG" },
  { name: "HISPAN", logo: logo("2.png"), sector: "Manufacturing" },
  { name: "koko", logo: logo("3.png"), sector: "Spices" },
  { name: "D2D Healthcare", logo: logo("4.png"), sector: "Healthcare" },
  { name: "Jeeva Milk", logo: logo("5.png"), sector: "Dairy" },
  { name: "Oxikart", logo: logo("6.png"), sector: "Retail" },
  { name: "Fabrizo", logo: logo("7.png"), sector: "Fashion" },
  { name: "FIMSIN Business Group", logo: logo("8.png"), sector: "Business" },
  { name: "Baniyas Spike", logo: logo("9.png"), sector: "Agriculture" },
  { name: "Mentors", logo: logo("10.png"), sector: "Education" },
];
