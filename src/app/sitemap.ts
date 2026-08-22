import type { MetadataRoute } from "next";
import { fetchAllPosts } from "@/data/blog";
import { industries } from "@/data/industries";
import { techPages } from "@/data/technology";
import { works } from "@/data/works";
import { SITE_URL } from "@/lib/seo";

const staticRoutes: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/technology", changeFrequency: "monthly", priority: 0.85 },
  {
    path: "/services/business-support",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/digital-marketing",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { path: "/solutions", changeFrequency: "monthly", priority: 0.8 },
  { path: "/solutions/wai", changeFrequency: "monthly", priority: 0.85 },
  { path: "/industries", changeFrequency: "monthly", priority: 0.75 },
  { path: "/works", changeFrequency: "weekly", priority: 0.85 },
  { path: "/clients", changeFrequency: "monthly", priority: 0.6 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/career", changeFrequency: "weekly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.85 },
  {
    path: "/future-woodenclouds",
    changeFrequency: "monthly",
    priority: 0.65,
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const posts = await fetchAllPosts();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: route.path === "/" ? SITE_URL : `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const techEntries: MetadataRoute.Sitemap = techPages.map((page) => ({
    url: `${SITE_URL}/services/technology/${page.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const industryEntries: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${SITE_URL}/industries/${industry.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const workEntries: MetadataRoute.Sitemap = works.map((work) => ({
    url: `${SITE_URL}/works/${work.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : now,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...staticEntries, ...techEntries, ...industryEntries, ...workEntries, ...blogEntries];
}
