import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getWorkBySlug, works } from "@/data/works";
import { EnquireCta } from "@/components/shared/PageBits";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  return { title: work?.title ?? "Work" };
}

export default async function WorkDetailsPage({ params }: Props) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  return (
    <>
      <header className="page-header section-padding pb-0">
        <div className="container mt-80">
          <h1 className="fz-55 mb-30">{work.title}</h1>
          <div className="row">
            <div className="col-md-3">
              <h6 className="sub-title mb-10">Client</h6>
              <p>{work.client}</p>
            </div>
            <div className="col-md-3">
              <h6 className="sub-title mb-10">Location</h6>
              <p>{work.location}</p>
            </div>
            <div className="col-md-3">
              <h6 className="sub-title mb-10">Category</h6>
              <p>{work.category}</p>
            </div>
            {work.technology && (
              <div className="col-md-3">
                <h6 className="sub-title mb-10">Technology</h6>
                <p>{work.technology}</p>
              </div>
            )}
          </div>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <img src={work.image1} alt={work.title} className="radius-10 mb-50 w-100" />
          <h3 className="fw-300 mb-20">{work.title1}</h3>
          <p className="mb-40" style={{ maxWidth: 780 }}>
            {work.description1}
          </p>

          {(work.image2 || work.image3 || work.image4) && (
            <div className="row mb-50">
              {[work.image2, work.image3, work.image4].filter(Boolean).map((src) => (
                <div className="col-md-4" key={src}>
                  <img src={src!} alt="" className="radius-10 mb-30 w-100" />
                </div>
              ))}
            </div>
          )}

          <p className="text-center mb-50" style={{ maxWidth: 720, margin: "0 auto 50px" }}>
            {work.description2}
          </p>

          {work.image5 && (
            <img src={work.image5} alt="" className="radius-10 mb-50 w-100" />
          )}

          <div className="row align-items-center">
            {work.image6 && (
              <div className="col-lg-6">
                <img src={work.image6} alt="" className="radius-10" />
              </div>
            )}
            <div className={`col-lg-5 ${work.image6 ? "offset-lg-1" : ""}`}>
              <p>{work.description3}</p>
            </div>
          </div>
        </div>
      </section>

      <EnquireCta />
    </>
  );
}
