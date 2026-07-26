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

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const featuredPosts = await getFeaturedBlogs(2);

  return (
    <>
      <HomeHero />
      <HomeProcess />
      <HomeWhatWeDo />
      <HomeFeaturedWork />
      <HomeClients />
      <HomeTestimonials />
      <HomeIndustries />
      <HomeWhy />
      <HomeInsights posts={featuredPosts} />
      <EnquireCta variant="light" buttonLabel="Start a conversation" />
      <HomeVisitNotice />
    </>
  );
}
