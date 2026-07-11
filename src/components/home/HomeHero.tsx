"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { heroSlides } from "@/data/hero";
import "swiper/css";
import "swiper/css/effect-fade";

function pad(n: number) {
  return n < 10 ? `0${n}` : String(n);
}

export function HomeHero() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [index, setIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const slide = heroSlides[index] ?? heroSlides[0];
  const total = heroSlides.length;

  useEffect(() => {
    setProgressKey((k) => k + 1);
  }, [index]);

  return (
    <header className="wc-hero">
      <div className="wc-hero-stage">
        <Swiper
          className="wc-hero-swiper"
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop
          speed={1100}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          allowTouchMove
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIndex(swiper.realIndex);
          }}
          onSlideChange={(swiper) => setIndex(swiper.realIndex)}
        >
          {heroSlides.map((item) => (
            <SwiperSlide key={item.image}>
              <div className="wc-hero-media">
                <img src={item.image} alt={item.alt} draggable={false} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="wc-hero-overlay" aria-hidden />
      </div>

      <div className="wc-hero-ui">
        <div className="wc-container wc-hero-content">
          <div className="wc-hero-copy" key={slide.headline}>
            <h1>{slide.headline}</h1>
            <p className="wc-hero-lede">{slide.lede}</p>
            <Link href={slide.cta.href} className="wc-hero-cta">
              {slide.cta.label}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="wc-hero-chrome">
          <div className="wc-container">
            <div className="wc-hero-progress" aria-hidden>
              <span key={progressKey} className="wc-hero-progress-bar is-running" />
            </div>
            <div className="wc-hero-chrome-row">
              <button
                type="button"
                className="wc-hero-nav"
                aria-label="Previous slide"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                ←
              </button>
              <span className="wc-hero-index">
                {pad(index + 1)} / {pad(total)}
              </span>
              <button
                type="button"
                className="wc-hero-nav"
                aria-label="Next slide"
                onClick={() => swiperRef.current?.slideNext()}
              >
                →
              </button>
              <button
                type="button"
                className="wc-hero-scroll"
                aria-label="Scroll to services"
                onClick={() => {
                  document.getElementById("digital-future")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                <span className="wc-hero-scroll-line" />
                Scroll
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
