export type AppData<T = unknown> = {
  StatusCode: number;
  title?: string;
  message?: string | Record<string, unknown>;
  data?: T;
};

const API_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ||
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ||
  "http://localhost:8000";

export function getApiBase() {
  return API_URL;
}

export class ApiError extends Error {
  status: number;
  payload: AppData | null;

  constructor(message: string, status: number, payload: AppData | null = null) {
    super(message);
    this.status = status;
    this.payload = payload;
  }
}

function messageFromAppData(app: AppData | undefined): string {
  if (!app) return "Request failed";
  const msg = app.message;
  if (typeof msg === "string" && msg.trim()) return msg;
  if (msg && typeof msg === "object") {
    const parts = Object.entries(msg).flatMap(([k, v]) => {
      if (Array.isArray(v)) return [`${k}: ${v.join(", ")}`];
      return [`${k}: ${String(v)}`];
    });
    if (parts.length) return parts.join("; ");
  }
  return app.title || "Request failed";
}

export async function apiFetch<T = unknown>(
  path: string,
  options: RequestInit = {},
): Promise<AppData<T>> {
  const { headers, ...rest } = options;
  const h = new Headers(headers);
  if (!h.has("Content-Type") && rest.body) {
    h.set("Content-Type", "application/json");
  }

  const res = await fetch(`${API_URL}${path.startsWith("/") ? path : `/${path}`}`, {
    ...rest,
    headers: h,
  });

  let json: { app_data?: AppData<T> } | null = null;
  try {
    json = await res.json();
  } catch {
    json = null;
  }

  const app = json?.app_data;
  if (!res.ok || !app || app.StatusCode !== 6000) {
    throw new ApiError(messageFromAppData(app), res.status, app ?? null);
  }
  return app;
}

export type ApiBlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags?: string[];
  date: string | null;
  readTime: string;
  cover: string;
  coverAlt: string;
  content: string | string[];
  status?: string;
  sort_order?: number;
  is_active?: boolean;
};

export async function fetchBlogPostsList() {
  return apiFetch<ApiBlogPost[]>("/api/v1/woodenclouds/blog/", {
    cache: "no-store",
  });
}

export async function fetchBlogPostDetail(slug: string) {
  return apiFetch<ApiBlogPost>(
    `/api/v1/woodenclouds/blog/${encodeURIComponent(slug)}/`,
    { cache: "no-store" },
  );
}
