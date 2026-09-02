
import type { Metadata } from "next";
import { VqBuildwareCaseStudy } from "@/components/works/vq-buildware/VqBuildwareCaseStudy";
import { getWorkBySlug } from "@/data/works";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

const work = getWorkBySlug("vq-buildware");

export const metadata: Metadata = pageMeta({
  title: work?.title ?? "VQ Buildware",
  description: work?.description1 ?? "A digital construction commerce platform case study.",
  path: "/works/vq-buildware",
  image: work?.thumbnail,
});

export default function VqBuildwarePage() {
  if (!work) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Works", path: "/works" },
          { name: work.title, path: `/works/${work.slug}` },
        ])}
      />
      <VqBuildwareCaseStudy />
    </>
  );
}
