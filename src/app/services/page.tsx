import type { Metadata } from "next";
import Link from "next/link";
import { homeServiceCards, servicesFaqs } from "@/data/content";
import { EnquireCta } from "@/components/shared/PageBits";
import { FaqList } from "@/components/shared/FaqList";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <header className="bg-paper pb-0 pt-16 md:pt-24">
        <div className="wc-container">
          <p className="mb-3 text-sm uppercase tracking-wider text-muted">What We Do?</p>
          <h1 className="max-w-3xl text-4xl font-light md:text-5xl">
            Empowering Your Business with Technology Solutions
          </h1>
        </div>
        <div className="mt-10 px-0 md:px-8">
          <video
            src="/assets/user/videos/video3.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="max-h-[520px] w-full object-cover md:rounded-xl"
          />
        </div>
      </header>

      <section className="wc-section">
        <div className="wc-container">
          <h2 className="mb-10 text-3xl font-light md:text-4xl">
            Featured <span className="wc-gradient-text">Services</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {homeServiceCards.map((card) => (
              <Link key={card.title} href={card.href} className="group block">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h5 className="mt-5 border-b border-line-dark pb-3 text-xl font-light">{card.title}</h5>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted">{card.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqList faqs={servicesFaqs} />
      <EnquireCta />
    </>
  );
}
