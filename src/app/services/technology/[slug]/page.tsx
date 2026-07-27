import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTechPage, techPages } from "@/data/technology";
import { TechnologyDetailView } from "@/components/services/TechnologyDetailView";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return techPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getTechPage(slug);
  return pageMeta({
    title: page?.title ?? "Technology",
    description:
      page?.description ??
      "Woodenclouds technology services engineered to ship and scale.",
    path: `/services/technology/${slug}`,
    image: page?.image,
  });
}

export default async function TechSubPage({ params }: Props) {
  const { slug } = await params;
  const page = getTechPage(slug);
  if (!page) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Technology", path: "/services/technology" },
            { name: page.title, path: `/services/technology/${page.slug}` },
          ]),
          ...(page.faqs.length ? [faqJsonLd(page.faqs)] : []),
        ]}
      />
      <TechnologyDetailView page={page} />
    </>
  );
}
