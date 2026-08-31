"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { servicesFaqs } from "@/data/content";
import {
  serviceCatalog,
  servicesApproach,
  servicesHero,
} from "@/data/services";
import { getFeaturedWorks } from "@/data/works";
import { EnquireCta } from "@/components/shared/PageBits";
import { IndustriesJumpNav } from "@/components/industries/IndustriesJumpNav";
import { ServicesHeroArt } from "@/components/services/ServiceIllustrations";

export function ServicesView() {
  const [openFaq, setOpenFaq] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const smooth = useRef({ x: 0, y: 0 });
  const raf = useRef(0);
  const featured = getFeaturedWorks(2);
  const jumpItems = serviceCatalog.map(({ id, name }) => ({ id, name }));

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onScroll = () => {
      const rect = hero.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -rect.top / Math.max(rect.height * 0.65, 1)));
      hero.style.setProperty("--svc-scroll", p.toFixed(4));
    };

    const onMove = (e: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      pointer.current = {
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
      };
    };

    const loop = () => {
      smooth.current.x += (pointer.current.x - smooth.current.x) * 0.06;
      smooth.current.y += (pointer.current.y - smooth.current.y) * 0.06;
      hero.style.setProperty("--hx", smooth.current.x.toFixed(4));
      hero.style.setProperty("--hy", smooth.current.y.toFixed(4));
      raf.current = requestAnimationFrame(loop);
    };

    onScroll();
    hero.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    raf.current = requestAnimationFrame(loop);

    return () => {
      hero.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div className="bg-paper text-ink">
      <header ref={heroRef} className="wc-svc-stage">
        <div className="wc-svc-stage-grain" aria-hidden />
        <div className="wc-svc-stage-mesh" aria-hidden />
        <div className="wc-svc-stage-orb wc-svc-stage-orb--a" aria-hidden />
        <div className="wc-svc-stage-orb wc-svc-stage-orb--b" aria-hidden />
        <div className="wc-svc-stage-orb wc-svc-stage-orb--c" aria-hidden />

        <div className="wc-container wc-svc-stage-frame">
          <div className="wc-svc-stage-split">
            <div className="wc-svc-stage-main">
              <p className="wc-svc-stage-kicker">{servicesHero.kicker}</p>
              <h1 className="wc-svc-stage-title">
                {servicesHero.titleLine1}
                <br />
                {servicesHero.titleLine2}
              </h1>
              <p className="wc-svc-stage-lede">{servicesHero.description}</p>
              <div className="wc-svc-stage-actions">
                <a href={`#${jumpItems[0]?.id ?? "branding"}`} className="wc-btn wc-btn-solid">
                  Explore services
                  <span aria-hidden>↓</span>
                </a>
                <Link href="/contact" className="wc-btn wc-btn-dark">
                  Enquire now
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>

            <div className="wc-svc-stage-visual" aria-hidden>
              <div className="wc-svc-stage-visual-glow" />
              <ServicesHeroArt className="wc-svc-stage-art" />
            </div>
          </div>
        </div>
      </header>

      <IndustriesJumpNav items={jumpItems} label="Services" />

      {serviceCatalog.map((group, index) => (
        <section
          key={group.id}
          id={group.id}
          className="scroll-mt-28 border-b border-black/8 bg-paper last:border-b-0"
        >
          <div className="wc-container py-16 md:py-24">
            <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="mb-3 text-sm font-light uppercase tracking-[0.18em] text-muted">
                  ({String(index + 1).padStart(2, "0")}) {group.name}
                </p>
                <h2 className="text-3xl font-light tracking-tight text-ink md:text-4xl">
                  {group.tagline}
                </h2>
                <p className="mt-5 max-w-xl text-sm font-light leading-relaxed text-muted md:text-base">
                  {group.description}
                </p>
                <Link href={group.href} className="wc-btn wc-btn-dark mt-8">
                  {group.cta}
                  <span aria-hidden>→</span>
                </Link>
              </div>
              <ol className="lg:col-span-7">
                {group.items.map((item, itemIndex) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-4 border-t border-black/10 py-4 last:border-b"
                  >
                    <span className="w-8 shrink-0 pt-1 text-xs font-light tracking-[0.12em] text-muted">
                      {String(itemIndex + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <strong className="block text-base font-normal tracking-tight text-ink">
                        {item.title}
                      </strong>
                      <p className="mt-1 text-sm font-light leading-relaxed text-muted">
                        {item.note}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      ))}

      <section className="wc-svc-approach wc-svc-approach--light">
        <div className="wc-svc-approach-bg" aria-hidden />
        <div className="wc-container relative z-10 wc-section">
          <header className="max-w-2xl">
            <p className="wc-svc-approach-kicker">How we work</p>
            <h2 className="wc-svc-approach-title">A clear path from idea to impact.</h2>
          </header>
          <ol className="wc-svc-approach-grid">
            {servicesApproach.map((step, i) => (
              <li key={step.title}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wc-section bg-paper text-ink">
        <div className="wc-container">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-sm font-light uppercase tracking-[0.18em] text-muted">
                Across engagements
              </p>
              <h2 className="text-3xl font-light text-ink md:text-4xl">Selected work</h2>
            </div>
            <Link href="/works" className="wc-home-link">
              View all works
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {featured.map((work) => (
              <Link key={work.slug} href={`/works/${work.slug}`} className="group block">
                <div className="wc-svc-media overflow-hidden">
                  <img
                    src={work.thumbnail}
                    alt={work.title}
                    className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-5 text-xs font-light uppercase tracking-[0.16em] text-muted">
                  {work.client} · {work.category}
                </p>
                <h3 className="mt-2 text-2xl font-light tracking-tight text-ink group-hover:opacity-70">
                  {work.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="wc-svc-faq wc-svc-faq--light">
        <div className="wc-container max-w-4xl">
          <p className="mb-3 text-sm font-light uppercase tracking-[0.18em] text-muted">
            Common questions
          </p>
          <h2 className="wc-svc-faq-title">FAQs</h2>
          <div className="wc-svc-faq-list">
            {servicesFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question} className="wc-svc-faq-item">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span aria-hidden>{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen ? <div className="wc-svc-faq-answer">{faq.answer}</div> : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <EnquireCta variant="light" buttonLabel="Start a conversation" />
    </div>
  );
}
