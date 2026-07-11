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
      <section className="section-padding">
        <div className="container">
          <h3 className="fw-300 mb-20">{page.title}</h3>
          <p className="mb-50" style={{ maxWidth: 780 }}>
            {page.description}
          </p>

          {page.logos.length > 0 && (
            <>
              <h4 className="fw-300 mb-30">Technologies we used</h4>
              <div className="row mb-50">
                {page.logos.map((logo) => (
                  <div className="col-md-3 col-6" key={logo.alt}>
                    <div
                      className="item mb-30 text-center"
                      style={{ background: "#fff", padding: 20, borderRadius: 10 }}
                    >
                      <img src={logo.src} alt={logo.alt} style={{ maxHeight: 56, objectFit: "contain" }} />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {page.platforms && (
            <>
              <h4 className="fw-300 mb-30">Platforms</h4>
              <div className="row mb-50">
                {page.platforms.map((platform) => (
                  <div className="col-lg-3 col-md-6" key={platform.title}>
                    <div className="item mb-30" style={{ background: "#fff", padding: 24, borderRadius: 10 }}>
                      <img
                        src={platform.image}
                        alt={platform.title}
                        style={{ maxHeight: 48, marginBottom: 16, objectFit: "contain" }}
                      />
                      <h6 className="fw-400 mb-10">{platform.title}</h6>
                      <p className="fz-14">{platform.description}</p>
                    </div>
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
