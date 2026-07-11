import type { Metadata } from "next";
import Link from "next/link";
import { digitalMarketingServices } from "@/data/content";
import { Breadcrumb, EnquireCta } from "@/components/shared/PageBits";

export const metadata: Metadata = { title: "Branding & Digital Marketing" };

export default function DigitalMarketingPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: "Branding & Digital Marketing" },
        ]}
      />
      <section className="wc-section">
        <div className="wc-container">
          <div className="mb-14 grid items-center gap-10 lg:grid-cols-2">
            <video
              src="/videos/video2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full rounded-xl"
            />
            <div>
              <h3 className="mb-4 text-2xl font-light">Crafting Your Brand&apos;s Success</h3>
              <p className="text-sm font-light leading-relaxed text-muted">
                Every business is unique. With a deep understanding of clients&apos; goals, we create
                tailored solutions that resonate with your audience and elevate your brand.
              </p>
            </div>
          </div>

          <h3 className="mb-6 text-2xl font-light">Our Approach</h3>
          <div className="mb-14 grid gap-5 md:grid-cols-3">
            {["Understanding Your Needs", "Thorough Research", "Actionable Strategies"].map(
              (step, i) => (
                <div key={step} className="rounded-xl bg-white p-7">
                  <span className="text-4xl font-light text-ink/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h5 className="mt-4 text-lg font-light">{step}</h5>
                </div>
              ),
            )}
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {digitalMarketingServices.map((card) => (
              <Link key={card.title} href={card.href} className="group block">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h5 className="mt-4 text-xl font-light">{card.title}</h5>
                <p className="mt-2 text-sm font-light text-muted">{card.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <EnquireCta />
    </>
  );
}
