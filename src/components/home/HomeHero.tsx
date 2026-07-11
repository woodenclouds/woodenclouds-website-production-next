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
  const total = heroSlides.length;

  useEffect(() => {
    setProgressKey((k) => k + 1);
  }, [index]);

  return (
    <header className="wc-hero">
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
        }}
        onSlideChange={(swiper) => setIndex(swiper.realIndex)}
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.headline}>
            <div className="wc-hero-media">
              <img src={slide.image} alt={slide.alt} />
              <div className="wc-hero-overlay" />
            </div>
            <div className="container wc-hero-content">
              <div className="wc-hero-copy">
                <p className="wc-hero-brand">Woodenclouds</p>
                <h1>{slide.headline}</h1>
                <p className="wc-hero-lede">{slide.lede}</p>
                <Link href={slide.cta.href} className="wc-hero-cta">
                  {slide.cta.label}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="wc-hero-chrome">
        <div className="wc-hero-progress" aria-hidden="true">
          <span
            key={progressKey}
            className="wc-hero-progress-bar is-running"
            id="wcHeroProgressBar"
          />
        </div>
        <div className="wc-hero-chrome-row">
          <button
            type="button"
            className="wc-hero-nav wc-hero-prev"
            aria-label="Previous slide"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            ←
          </button>
          <span className="wc-hero-index" id="wcHeroIndex">
            {pad(index + 1)} / {pad(total)}
          </span>
          <button
            type="button"
            className="wc-hero-nav wc-hero-next"
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
              document.querySelector(".serv-box")?.scrollIntoView({
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
    </header>
  );
}
