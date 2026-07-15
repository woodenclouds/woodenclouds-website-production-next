import { HomeHero } from "@/components/home/HomeHero";
import {
  HomeWhatWeDo,
  HomeFeaturedWork,
  HomeIndustries,
  HomeWhy,
  HomeTestimonials,
  HomeInsights,
} from "@/components/home/HomeSections";
import { HomeProcess } from "@/components/home/HomeProcess";
import { EnquireCta } from "@/components/shared/PageBits";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeWhatWeDo />
      <HomeFeaturedWork />
      <HomeIndustries />
      <HomeProcess />
      <HomeWhy />
      <HomeTestimonials />
      <HomeInsights />
      <EnquireCta variant="light" buttonLabel="Start a conversation" />
    </>
  );
}
