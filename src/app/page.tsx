import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import {
  HomeWhatWeDo,
  HomeFeaturedWork,
  HomeClients,
  HomeIndustries,
  HomeWhy,
  HomeTestimonials,
  HomeInsights,
} from "@/components/home/HomeSections";
import { HomeProcess } from "@/components/home/HomeProcess";
import { HomeVisitNotice } from "@/components/home/HomeVisitNotice";
import { EnquireCta } from "@/components/shared/PageBits";
import { JsonLd } from "@/components/seo/JsonLd";
import { getFeaturedBlogs } from "@/data/blog";
import { fetchHomeTestimonials } from "@/data/testimonials";
import { DEFAULT_DESCRIPTION, pageMeta, reviewsJsonLd } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = pageMeta({
  description: DEFAULT_DESCRIPTION,
  path: "/",
});

export default async function HomePage() {
  const [featuredPosts, testimonials] = await Promise.all([
    getFeaturedBlogs(2),
    fetchHomeTestimonials(),
  ]);

  return (
    <>
      {testimonials.length > 0 ? (
        <JsonLd data={reviewsJsonLd(testimonials)} />
      ) : null}
      <HomeHero />
      <HomeProcess />
      <HomeWhatWeDo />
      <HomeFeaturedWork />
      <HomeClients />
      <HomeTestimonials items={testimonials} />
      <HomeIndustries />
      <HomeWhy />
      <HomeInsights posts={featuredPosts} />
      <EnquireCta variant="light" buttonLabel="Start a conversation" />
      <HomeVisitNotice />
    </>
  );
}
