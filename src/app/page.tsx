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

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeWhatWeDo />
      <HomeFeaturedWork />
      <HomeClients />
      <HomeIndustries />
      <HomeProcess />
      <HomeWhy />
      <HomeTestimonials />
      <HomeInsights />
      <EnquireCta variant="light" buttonLabel="Start a conversation" />
      <HomeVisitNotice />
    </>
  );
}
