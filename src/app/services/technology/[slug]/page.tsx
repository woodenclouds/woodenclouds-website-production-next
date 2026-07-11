import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTechPage, techPages } from "@/data/content";
import { Breadcrumb, EnquireCta } from "@/components/shared/PageBits";
import { FaqList } from "@/components/shared/FaqList";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return techPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getTechPage(slug);
  return { title: page?.title ?? "Technology" };
}

export default async function TechSubPage({ params }: Props) {
  const { slug } = await params;
  const page = getTechPage(slug);
  if (!page) notFound();

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: "Technology", href: "/services/technology" },
          { label: page.title },
        ]}
      />
      <section className="wc-section">
        <div className="wc-container">
          <h3 className="mb-4 text-3xl font-light md:text-4xl">{page.title}</h3>
          <p className="mb-12 max-w-3xl text-sm font-light leading-relaxed text-muted">
            {page.description}
          </p>

          {page.logos.length > 0 && (
            <>
              <h4 className="mb-6 text-xl font-light">Technologies we used</h4>
              <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {page.logos.map((logo) => (
                  <div
                    key={logo.alt}
                    className="flex aspect-[5/3] items-center justify-center rounded-xl bg-white p-5"
                  >
                    <img src={logo.src} alt={logo.alt} className="max-h-12 object-contain" />
                  </div>
                ))}
              </div>
            </>
          )}

          {page.platforms && (
            <>
              <h4 className="mb-6 text-xl font-light">Platforms</h4>
              <div className="mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {page.platforms.map((platform) => (
                  <div key={platform.title} className="rounded-xl bg-white p-6">
                    <img
                      src={platform.image}
                      alt={platform.title}
                      className="mb-4 max-h-10 object-contain"
                    />
                    <h6 className="mb-2 font-medium">{platform.title}</h6>
                    <p className="text-sm font-light text-muted">{platform.description}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      <FaqList faqs={page.faqs} />
      <EnquireCta />
    </>
  );
}
