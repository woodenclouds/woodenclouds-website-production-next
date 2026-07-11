import { HomeHero } from "@/components/home/HomeHero";
import { HomeDigitalFuture } from "@/components/home/HomeDigitalFuture";
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
      <HomeDigitalFuture />
      <HomeServices />
      <HomeWorks />
      <HomeClients />
      <HomeFuture />
      <HomeBlogs />
      <HomeBrands />
    </>
  );
}
