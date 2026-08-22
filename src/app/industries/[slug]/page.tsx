import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryDetailView } from "@/components/industries/IndustryDetailView";
import { getIndustryById, industries } from "@/data/industries";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryById(slug);
  return pageMeta({
    title: industry?.name ?? "Industry",
    description: industry?.description ?? "Industries Woodenclouds serves.",
    path: `/industries/${slug}`,
    image: industry?.image,
  });
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryById(slug);
  if (!industry) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${industry.id}` },
        ])}
      />
      <IndustryDetailView industry={industry} />
    </>
  );
}
