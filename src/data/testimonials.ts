import { fetchTestimonialsList, type ApiTestimonial } from "@/lib/api";

export type HomeTestimonial = {
  id?: string;
  quote: string;
  name: string;
  role: string;
  company: string;
};

/** Offline fallback when the API is unreachable during local migrate. */
export const FALLBACK_TESTIMONIALS: HomeTestimonial[] = [
  {
    quote:
      "Woodenclouds gave us a product that finally matched how we talk about the brand — clear, fast, and easy for the team to own.",
    name: "Ananya R.",
    role: "Head of Product",
    company: "Growth-stage SaaS",
  },
  {
    quote:
      "From discovery to launch, every decision felt intentional. We shipped on schedule without sacrificing quality.",
    name: "Michael K.",
    role: "Founder",
    company: "Retail ecommerce",
  },
  {
    quote:
      "They don’t just build screens — they build the system underneath. That difference shows in how calm ops feel now.",
    name: "Priya S.",
    role: "Operations Lead",
    company: "Healthcare platform",
  },
];

function mapApiTestimonial(item: ApiTestimonial): HomeTestimonial {
  return {
    id: item.id,
    quote: item.quote,
    name: item.name,
    role: item.role || "",
    company: item.company || "",
  };
}

export async function fetchHomeTestimonials(): Promise<HomeTestimonial[]> {
  try {
    const app = await fetchTestimonialsList();
    const items = ((app.data as ApiTestimonial[]) || []).map(mapApiTestimonial);
    return items.length ? items : FALLBACK_TESTIMONIALS;
  } catch {
    return FALLBACK_TESTIMONIALS;
  }
}
