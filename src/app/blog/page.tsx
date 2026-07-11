import type { Metadata } from "next";
import Link from "next/link";
import { blogs, formatBlogDate } from "@/data/blogs";
import { PageHeader } from "@/components/shared/PageBits";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <>
      <PageHeader subtitle="Our Blog" title="Blog" />
      <section className="blog-list section-padding">
        <div className="container">
          <div className="row">
            {blogs.map((blog) => (
              <div className="col-lg-4 col-md-6" key={blog.slug}>
                <div className="item mb-50">
                  <Link href={`/blog/${blog.slug}`}>
                    <div className="img">
                      <img src={blog.image} alt={blog.title} className="radius-10" />
                    </div>
                  </Link>
                  <div className="cont mt-20">
                    <span className="date fz-12 opacity-7">{formatBlogDate(blog.createdAt)}</span>
                    <h5 className="fw-300 mt-10">
                      <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                    </h5>
                    <p className="mt-10">{blog.excerpt}</p>
                    <Link href={`/blog/${blog.slug}`} className="mt-15 d-inline-block">
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
