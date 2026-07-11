import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs, formatBlogDate, getBlogBySlug } from "@/data/blogs";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  return { title: blog?.title ?? "Blog" };
}

export default async function BlogDetailsPage({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();

  const index = blogs.findIndex((b) => b.slug === slug);
  const prev = index > 0 ? blogs[index - 1] : null;
  const next = index < blogs.length - 1 ? blogs[index + 1] : null;
  const recent = blogs.filter((b) => b.slug !== slug).slice(0, 2);

  return (
    <section className="blog-details section-padding">
      <div className="container mt-80">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="fz-40 fw-300 mb-20">{blog.title}</h1>
            <div className="info mb-30" style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              <div>
                <span className="fz-12 opacity-7">Author</span>
                <p>Woodenclouds</p>
              </div>
              <div>
                <span className="fz-12 opacity-7">Published</span>
                <p>{formatBlogDate(blog.createdAt)}</p>
              </div>
              <div>
                <span className="fz-12 opacity-7">Last Updated</span>
                <p>{formatBlogDate(blog.updatedAt)}</p>
              </div>
            </div>
            <img src={blog.image} alt={blog.title} className="radius-10 mb-40 w-100" />
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: blog.description }}
            />
            <div className="tags mt-40 mb-40">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    display: "inline-block",
                    marginRight: 10,
                    padding: "6px 12px",
                    border: "1px solid rgba(0,0,0,0.15)",
                    borderRadius: 20,
                    fontSize: 13,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="next-prv-post d-flex" style={{ justifyContent: "space-between", gap: 20 }}>
              {prev ? (
                <Link href={`/blog/${prev.slug}`}>
                  <span className="fz-12 opacity-7">Previous</span>
                  <h6 className="fw-300">{prev.title}</h6>
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link href={`/blog/${next.slug}`} style={{ textAlign: "right" }}>
                  <span className="fz-12 opacity-7">Next</span>
                  <h6 className="fw-300">{next.title}</h6>
                </Link>
              )}
            </div>
          </div>
          <div className="col-lg-3 offset-lg-1">
            <h5 className="fw-300 mb-30">Recent Posts</h5>
            {recent.map((item) => (
              <div className="mb-30" key={item.slug}>
                <Link href={`/blog/${item.slug}`}>
                  <img src={item.image} alt={item.title} className="radius-10 mb-10 w-100" />
                  <h6 className="fw-300">{item.title}</h6>
                  <span className="fz-12 opacity-7">{formatBlogDate(item.createdAt)}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
