import { HomeHero } from "@/components/home/HomeHero";
import { HomeDigitalFuture } from "@/components/home/HomeDigitalFuture";
import {
  HomeServices,
  HomeSolutions,
  HomeWorks,
  HomeClients,
  HomeAbout,
  HomeFuture,
  HomeBlogs,
} from "@/components/home/HomeSections";
import { EnquireCta } from "@/components/shared/PageBits";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeDigitalFuture />
      <HomeServices />
      <HomeSolutions />
      <HomeWorks />
      <HomeClients />
      <HomeAbout />
      <HomeFuture />
      <HomeBlogs />
      <EnquireCta variant="light" buttonLabel="Start a conversation" />
    </>
  );
}
