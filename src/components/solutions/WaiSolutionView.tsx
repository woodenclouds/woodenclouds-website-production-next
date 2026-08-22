import Link from "next/link";
import { site } from "@/data/content";
import {
  waiCallNote,
  waiCallTiers,
  waiCapabilities,
  waiPillars,
  waiProduct,
  waiReasons,
  waiStrengths,
} from "@/data/wai";

const accentStyle = {
  violet: { border: "border-[#7c5cff]/40", badge: "bg-[#7c5cff]" },
  blue: { border: "border-[#3b82f6]/45", badge: "bg-[#3b82f6]" },
  cyan: { border: "border-[#22d3ee]/35", badge: "bg-[#0891b2]" },
  amber: { border: "border-[#f59e0b]/40", badge: "bg-[#d97706]" },
} as const;

export function WaiSolutionView() {
  return (
    <article className="wai-page">
      <header className="relative overflow-hidden">
        <div className="wai-hero-bg" aria-hidden />
        <div className="wai-hero-grid" aria-hidden />
        <div className="wai-orb wai-orb--a" aria-hidden />
        <div className="wai-orb wai-orb--b" aria-hidden />

        <div className="wc-container relative z-10 grid min-h-[min(92svh,920px)] items-center gap-8 pb-16 pt-28 lg:grid-cols-[0.92fr_1.08fr] lg:gap-4 lg:pb-20 lg:pt-32">
          <div className="wai-rise relative z-20">
            <nav className="mb-7 flex items-center gap-2 text-[13px] font-light text-white/40">
              <Link href="/solutions" className="hover:text-white">
                Solutions
              </Link>
              <span className="text-white/20">/</span>
              <span className="text-[#9ad4ff]">WAI</span>
            </nav>

            <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-white/50">
              {waiProduct.brand}
            </p>
            <h1 className="sr-only">{waiProduct.fullName}</h1>
            <img
              src={waiProduct.logo}
              alt="WAI"
              className="mt-3 h-auto w-[min(100%,280px)] object-contain object-left drop-shadow-[0_0_36px_rgba(94,183,255,0.28)] lg:w-[320px]"
            />
            <p className="mt-6 max-w-[20ch] text-[clamp(1.6rem,3.4vw,2.35rem)] font-light leading-[1.12] tracking-tight text-white">
              Smarter conversations.{" "}
              <span className="text-[#5eb7ff]">Better</span> business.
            </p>
            <p className="mt-4 max-w-md text-[15px] font-light leading-relaxed text-white/65">
              {waiProduct.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={waiProduct.demoHref} className="wai-btn wai-btn--primary">
                Book a free demo
              </Link>
              <a href="#pricing" className="wai-btn wai-btn--ghost">
                See pricing
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5 text-sm font-light text-white/45">
              <span className="inline-flex items-center gap-2">
                <span className="wai-live-dot" />
                Live in production
              </span>
              <span className="hidden h-3 w-px bg-white/15 sm:block" />
              <span className="hidden sm:inline">English · Malayalam</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[720px] lg:max-w-none lg:translate-x-6 lg:scale-[1.08]">
            <div className="wai-stage">
              <div className="wai-stage-glow" aria-hidden />
              <div className="wai-stage-ring" aria-hidden />
              <img
                src={waiProduct.image}
                alt="Woodenclouds AI WAI voice agent"
                className="wai-stage-img relative z-10 h-auto w-full bg-transparent"
              />
              <div className="wai-float-card wai-float-card--a">
                <p className="text-[10px] uppercase tracking-[0.16em] text-[#7eb8ff]">Inbound</p>
                <p className="mt-1 text-sm text-white">Reception · Malayalam</p>
                <div className="wai-wave" aria-hidden>
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span key={i} style={{ animationDelay: `${i * 0.08}s` }} />
                  ))}
                </div>
              </div>
              <div className="wai-float-card wai-float-card--b">
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/40">Latency</p>
                <p className="mt-1 text-lg font-light text-white">&lt; 500ms</p>
                <p className="text-xs text-white/45">India hosted</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="wai-band">
        <div className="wc-container py-4 md:py-5">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {waiStrengths.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-[13px] font-light text-white/75">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5eb7ff] shadow-[0_0_10px_#5eb7ff]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wai-surface">
        <div className="wc-container py-16 md:py-24">
          <p className="wai-label">What WAI does</p>
          <h2 className="wai-title max-w-[16ch]">Your 24/7 AI employee for calls.</h2>
          <p className="mt-4 max-w-2xl text-[15px] font-light leading-relaxed text-white/58">
            {waiProduct.valueProp} Handle sales, support, reception, and appointments with
            natural voice — then hand off to a person when it matters.
          </p>

          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {waiCapabilities.map((item) => (
              <li key={item.id} className="wai-card group">
                <span className="text-[11px] font-medium tracking-wider text-[#5eb7ff]">{item.id}</span>
                <h3 className="mt-3 text-[15px] font-medium leading-snug text-white">{item.title}</h3>
                <p className="mt-2 text-[13px] font-light leading-relaxed text-white/50">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="pricing" className="wai-pricing scroll-mt-24">
        <div className="wc-container py-16 md:py-24">
          <p className="wai-label">Pricing</p>
          <h2 className="wai-title max-w-[14ch]">Transparent. Pay only for what you use.</h2>
          <p className="mt-4 max-w-2xl text-[15px] font-light leading-relaxed text-white/58">
            Voice setup, chat assistant, platform, and usage. No prepaid packs. No hidden fees.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {waiPillars.map((pillar) => {
              const tone = accentStyle[pillar.accent];
              return (
                <article
                  key={pillar.id}
                  className={`relative flex flex-col rounded-2xl border bg-white/[0.035] p-5 pt-7 ${tone.border}`}
                >
                  <span
                    className={`absolute -top-2.5 left-5 rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white ${tone.badge}`}
                  >
                    {pillar.label}
                  </span>
                  <h3 className="text-lg font-medium tracking-tight text-white">{pillar.title}</h3>
                  <p className="mt-2 text-[13px] font-light leading-relaxed text-white/50">
                    {pillar.description}
                  </p>
                  <p className="mt-5 text-[1.65rem] font-light tracking-tight text-white">
                    {pillar.unit === "starting from" ? (
                      <span className="mb-1 block text-[11px] uppercase tracking-[0.12em] text-white/40">
                        Starting from
                      </span>
                    ) : null}
                    {pillar.price}
                    {pillar.unit && pillar.unit !== "starting from" ? (
                      <span className="ml-1 text-sm text-white/40">{pillar.unit}</span>
                    ) : null}
                  </p>
                  <ul className="mt-5 space-y-2 text-[13px] font-light text-white/70">
                    {pillar.features.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5eb7ff]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {pillar.note ? (
                    <p className="mt-auto pt-4 text-xs font-light leading-relaxed text-[#9ad4ff]/80">
                      {pillar.note}
                    </p>
                  ) : null}
                </article>
              );
            })}
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
            <div className="flex flex-wrap items-end justify-between gap-3 border-b border-white/10 px-6 py-5">
              <div>
                <h3 className="text-lg font-medium text-white">AI calling rates</h3>
                <p className="mt-1 text-sm font-light text-white/45">
                  Higher usage unlocks a lower per-minute rate.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3">
              {waiCallTiers.map((tier, i) => (
                <div
                  key={tier.range}
                  className={`px-6 py-7 ${i > 0 ? "border-t border-white/10 md:border-l md:border-t-0" : ""} ${
                    i === 2 ? "bg-[linear-gradient(180deg,rgba(94,183,255,0.08),transparent)]" : ""
                  }`}
                >
                  <p className="text-[11px] uppercase tracking-[0.14em] text-white/40">{tier.range}</p>
                  <p className="mt-2 text-[1.75rem] font-light text-white">{tier.rate}</p>
                  {tier.savings ? (
                    <p className="mt-1 text-sm text-[#7eb8ff]">{tier.savings}</p>
                  ) : (
                    <p className="mt-1 text-sm text-white/30">Base rate</p>
                  )}
                  <p className="mt-3 text-sm font-light text-white/50">{tier.bestFor}</p>
                </div>
              ))}
            </div>
            <p className="border-t border-white/10 px-6 py-4 text-xs font-light text-white/35">
              {waiCallNote}
            </p>
          </div>
        </div>
      </section>

      <section className="wai-surface">
        <div className="wc-container py-16 md:pb-20 md:pt-10">
          <p className="wai-label">Why businesses choose WAI</p>
          <h2 className="wai-title">Built to scale with you.</h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {waiReasons.map((item) => (
              <li key={item.title} className="wai-card">
                <h3 className="text-base font-medium text-white">{item.title}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-white/50">{item.detail}</p>
              </li>
            ))}
          </ul>

          <div className="wai-cta mt-14 flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#5eb7ff]">
                {waiProduct.slogan}
              </p>
              <h2 className="mt-3 text-[clamp(1.6rem,3.4vw,2.3rem)] font-light tracking-tight text-white">
                Ready for smarter conversations?
              </h2>
              <p className="mt-2 max-w-lg text-sm font-light leading-relaxed text-white/55">
                Book a demo and hear Woodenclouds AI take a real call for your business.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link href={waiProduct.demoHref} className="wai-btn wai-btn--primary">
                Book a free demo
              </Link>
              <a href={site.phoneHref} className="wai-btn wai-btn--ghost">
                Call us
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .wai-page {
          background: #040b14;
          color: #e8f1fb;
        }
        .wai-hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 55% at 72% 42%, rgba(37, 120, 255, 0.3), transparent 55%),
            radial-gradient(ellipse 50% 40% at 12% 82%, rgba(56, 189, 248, 0.14), transparent 50%),
            linear-gradient(160deg, #02060d 0%, #071422 42%, #0a1a30 100%);
        }
        .wai-hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, rgba(94, 183, 255, 0.055) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(94, 183, 255, 0.055) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(ellipse at 62% 48%, #000 18%, transparent 72%);
          opacity: 0.75;
        }
        .wai-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(42px);
          pointer-events: none;
          animation: wai-float 8s ease-in-out infinite;
        }
        .wai-orb--a {
          width: min(420px, 55vw);
          height: min(420px, 55vw);
          top: 8%;
          right: 6%;
          background: rgba(37, 120, 255, 0.36);
        }
        .wai-orb--b {
          width: min(260px, 38vw);
          height: min(260px, 38vw);
          bottom: 10%;
          left: 4%;
          background: rgba(56, 189, 248, 0.22);
          animation-delay: -3s;
        }
        .wai-stage {
          position: relative;
          width: 100%;
          perspective: 1200px;
        }
        .wai-stage-glow {
          position: absolute;
          left: 50%;
          top: 48%;
          width: 70%;
          height: 55%;
          translate: -50% -50%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(64, 160, 255, 0.55) 0%, rgba(37, 120, 255, 0.2) 42%, transparent 72%);
          filter: blur(36px);
          animation: wai-pulse 4.5s ease-in-out infinite;
          pointer-events: none;
        }
        .wai-stage-ring {
          position: absolute;
          left: 50%;
          bottom: 12%;
          width: 56%;
          aspect-ratio: 1;
          translate: -50% 0;
          border-radius: 50%;
          border: 1px solid rgba(94, 183, 255, 0.3);
          box-shadow: 0 0 40px rgba(59, 157, 255, 0.25), inset 0 0 30px rgba(59, 157, 255, 0.12);
          animation: wai-ring 6s ease-in-out infinite;
          pointer-events: none;
        }
        .wai-stage-img {
          display: block;
          transform-origin: 50% 60%;
          animation: wai-agent 6.5s ease-in-out infinite;
        }
        .wai-float-card {
          position: absolute;
          z-index: 20;
          min-width: 168px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(6, 16, 32, 0.72);
          padding: 12px 14px;
          backdrop-filter: blur(16px);
          box-shadow: 0 18px 40px rgba(0,0,0,0.28);
        }
        .wai-float-card--a {
          left: 0;
          top: 18%;
          animation: wai-card 7s ease-in-out infinite;
        }
        .wai-float-card--b {
          right: 2%;
          bottom: 18%;
          animation: wai-card 8s ease-in-out infinite reverse;
        }
        .wai-wave {
          display: flex;
          align-items: flex-end;
          gap: 3px;
          height: 22px;
          margin-top: 10px;
        }
        .wai-wave span {
          width: 3px;
          height: 40%;
          border-radius: 99px;
          background: #5eb7ff;
          animation: wai-bar 1s ease-in-out infinite;
        }
        .wai-live-dot {
          width: 7px;
          height: 7px;
          border-radius: 99px;
          background: #34d399;
          box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.6);
          animation: wai-ping 1.8s ease-out infinite;
        }
        .wai-band {
          border-block: 1px solid rgba(94, 183, 255, 0.12);
          background: linear-gradient(90deg, rgba(8, 24, 48, 0.95), rgba(10, 30, 58, 0.98));
        }
        .wai-surface {
          background:
            radial-gradient(ellipse 50% 40% at 100% 0%, rgba(37, 120, 255, 0.14), transparent 55%),
            linear-gradient(180deg, #050d18 0%, #071422 100%);
        }
        .wai-pricing {
          background: #071422;
        }
        .wai-label {
          display: inline-block;
          margin-bottom: 0.85rem;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #5eb7ff;
        }
        .wai-title {
          max-width: 16ch;
          font-size: clamp(1.85rem, 4vw, 2.7rem);
          font-weight: 400;
          letter-spacing: -0.035em;
          line-height: 1.08;
          color: #f2f7fc;
        }
        .wai-card {
          border-radius: 1.15rem;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.035);
          padding: 1.2rem 1.15rem;
          transition: border-color 0.25s ease, transform 0.25s ease, background 0.25s ease;
        }
        .wai-card:hover {
          border-color: rgba(94, 183, 255, 0.42);
          background: rgba(94, 183, 255, 0.07);
          transform: translateY(-3px);
        }
        .wai-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          border-radius: 999px;
          border: 1px solid transparent;
          padding: 0.8rem 1.35rem;
          font-size: 0.9rem;
          letter-spacing: 0.01em;
          transition: 0.2s ease;
        }
        .wai-btn--primary {
          background: linear-gradient(135deg, #1d6fff 0%, #3b9dff 100%);
          color: #fff;
          box-shadow: 0 10px 28px rgba(29, 111, 255, 0.35);
        }
        .wai-btn--primary:hover {
          background: linear-gradient(135deg, #1558d6 0%, #2b8aef 100%);
          box-shadow: 0 14px 34px rgba(29, 111, 255, 0.45);
        }
        .wai-btn--ghost {
          border-color: rgba(255,255,255,0.22);
          background: rgba(255,255,255,0.06);
          color: #fff;
        }
        .wai-btn--ghost:hover {
          border-color: rgba(94, 183, 255, 0.45);
          background: rgba(255,255,255,0.12);
        }
        .wai-cta {
          border-radius: 1.6rem;
          border: 1px solid rgba(255,255,255,0.1);
          background:
            radial-gradient(ellipse 60% 80% at 100% 50%, rgba(37, 120, 255, 0.22), transparent 55%),
            linear-gradient(135deg, #0a1a2e 0%, #071018 55%, #0c2240 100%);
        }
        .wai-rise {
          animation: wai-rise 0.8s ease both;
        }
        @keyframes wai-rise {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: none; }
        }
        @keyframes wai-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        @keyframes wai-pulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.06); }
        }
        @keyframes wai-ring {
          0%, 100% { opacity: 0.45; transform: scale(1); }
          50% { opacity: 0.85; transform: scale(1.06); }
        }
        @keyframes wai-agent {
          0%, 100% { transform: translateY(0) rotateX(2deg) rotateY(-4deg) scale(1); }
          50% { transform: translateY(-16px) rotateX(0deg) rotateY(4deg) scale(1.02); }
        }
        @keyframes wai-card {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes wai-bar {
          0%, 100% { height: 30%; }
          50% { height: 100%; }
        }
        @keyframes wai-ping {
          0% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.55); }
          100% { box-shadow: 0 0 0 8px rgba(52, 211, 153, 0); }
        }
        @media (max-width: 767px) {
          .wai-float-card { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .wai-orb, .wai-stage-glow, .wai-stage-ring, .wai-stage-img,
          .wai-float-card, .wai-wave span, .wai-live-dot, .wai-rise {
            animation: none;
          }
        }
      `}</style>
    </article>
  );
}
