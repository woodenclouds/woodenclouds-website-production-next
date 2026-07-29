import { fetchTestimonialsList, type ApiTestimonial } from "@/lib/api";

export type HomeTestimonial = {
  id?: string;
  quote: string;
  name: string;
  role: string;
  company: string;
};

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
    return items;
  } catch {
    return [];
  }
}
