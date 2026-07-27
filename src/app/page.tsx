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
import { getFeaturedBlogs } from "@/data/blog";
import { fetchHomeTestimonials } from "@/data/testimonials";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [featuredPosts, testimonials] = await Promise.all([
    getFeaturedBlogs(2),
    fetchHomeTestimonials(),
  ]);

  return (
    <>
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
