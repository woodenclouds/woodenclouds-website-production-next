import { HomeHero } from "@/components/home/HomeHero";
import {
  HomeServices,
  HomeWorks,
  HomeClients,
  HomeFuture,
  HomeBlogs,
  HomeBrands,
} from "@/components/home/HomeSections";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeServices />
      <HomeWorks />
      <HomeClients />
      <HomeFuture />
      <HomeBlogs />
      <HomeBrands />
    </>
  );
}
