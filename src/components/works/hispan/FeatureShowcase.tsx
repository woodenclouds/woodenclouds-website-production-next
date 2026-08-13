"use client";

import { useEffect, useRef, useState } from "react";
import { hispan } from "./assets";

const clamp = (val: number, min: number, max: number) => Math.max(min, Math.min(max, val));
const mapRange = (val: number, inMin: number, inMax: number, outMin: number, outMax: number) =>
  outMin + (outMax - outMin) * clamp((val - inMin) / (inMax - inMin), 0, 1);
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

type RGB = { r: number; g: number; b: number };
type Point = { x: number; y: number };

const THEME_COLORS: RGB[] = [{ r: 16, g: 185, b: 129 }];

const lerpColor = (c1: RGB, c2: RGB, t: number): RGB => ({
  r: Math.round(c1.r + (c2.r - c1.r) * t),
  g: Math.round(c1.g + (c2.g - c1.g) * t),
  b: Math.round(c1.b + (c2.b - c1.b) * t),
});

const getSubBezierPath = (p0: Point, p1: Point, p2: Point, p3: Point, t: number) => {
  if (t <= 0) return `M ${p0.x} ${p0.y}`;
  const clampedT = Math.min(1, Math.max(0, t));
  const p01 = {
    x: (1 - clampedT) * p0.x + clampedT * p1.x,
    y: (1 - clampedT) * p0.y + clampedT * p1.y,
  };
  const p12 = {
    x: (1 - clampedT) * p1.x + clampedT * p2.x,
    y: (1 - clampedT) * p1.y + clampedT * p2.y,
  };
  const p23 = {
    x: (1 - clampedT) * p2.x + clampedT * p3.x,
    y: (1 - clampedT) * p2.y + clampedT * p3.y,
  };
  const p012 = {
    x: (1 - clampedT) * p01.x + clampedT * p12.x,
    y: (1 - clampedT) * p01.y + clampedT * p12.y,
  };
  const p123 = {
    x: (1 - clampedT) * p12.x + clampedT * p23.x,
    y: (1 - clampedT) * p12.y + clampedT * p23.y,
  };
  const p0123 = {
    x: (1 - clampedT) * p012.x + clampedT * p123.x,
    y: (1 - clampedT) * p012.y + clampedT * p123.y,
  };
  return `M ${p0.x} ${p0.y} C ${p01.x} ${p01.y}, ${p012.x} ${p012.y}, ${p0123.x} ${p0123.y}`;
};

const colorToStr = (c: RGB) => `rgb(${c.r}, ${c.g}, ${c.b})`;
const colorToRgba = (c: RGB, a: number) => `rgba(${c.r}, ${c.g}, ${c.b}, ${a})`;

const showcaseItems = [
  {
    id: "01",
    title: "FACTORY MANAGEMENT",
    desc: "Command your industrial footprint from a single vantage point. Organize directories, allocate cost centers, and maintain real-time visibility over every operational asset.",
    image: hispan.screens.factory,
  },
  {
    id: "02",
    title: "INVENTORY & STORE",
    desc: "Track raw materials and finished goods in real-time. Automated reorder triggers and comprehensive logs work autonomously to eliminate production bottlenecks.",
    image: hispan.screens.inventory,
  },
  {
    id: "03",
    title: "WASTAGE ANALYSIS",
    desc: "Identify and eliminate production losses. Monitor damage percentages in real-time, pinpoint underperforming machines, and generate insights to maximize factory yield.",
    image: hispan.screens.wastage,
  },
  {
    id: "04",
    title: "UTILITY & CONSUMPTION",
    desc: "Gain complete visibility into power, water, and diesel consumption. Advanced analytics identify inefficiencies instantly, empowering you to optimize cost-per-unit metrics.",
    image: hispan.screens.utility,
  },
  {
    id: "05",
    title: "MACHINE COMPLAINTS",
    desc: "Modernize maintenance workflows with responsive ticketing. Instantly dispatch technicians and utilize analytics to shift from reactive repairs to predictive maintenance.",
    image: hispan.screens.complaints,
  },
];

export function FeatureShowcase() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 1440, height: 1000 });
  const [isMobile, setIsMobile] = useState(false);
  const [cardW, setCardW] = useState(0);
  const [cardH, setCardH] = useState(480);
  const sectionRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
      setIsMobile(window.innerWidth < 1024);
      if (measureRef.current) {
        setCardW(measureRef.current.offsetWidth);
        setCardH(measureRef.current.offsetHeight);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    const timer = window.setTimeout(handleResize, 100);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const target = { current: 0 };
    const displayed = { current: 0 };
    let raf = 0;
    let running = false;

    const sample = () => {
      if (!sectionRef.current) return 0;
      const rect = sectionRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      if (totalScrollable <= 0) return 0;
      if (scrolled <= 0) return 0;
      if (scrolled >= totalScrollable) return showcaseItems.length - 1;
      return (scrolled / totalScrollable) * (showcaseItems.length - 1);
    };

    const tick = () => {
      displayed.current += (target.current - displayed.current) * 0.14;
      if (Math.abs(target.current - displayed.current) < 0.0006) {
        displayed.current = target.current;
        running = false;
      }
      setScrollProgress(displayed.current);
      if (running) raf = requestAnimationFrame(tick);
    };

    const kick = () => {
      target.current = sample();
      if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick);
    kick();
    return () => {
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
      cancelAnimationFrame(raf);
    };
  }, []);

  const activeIndex = Math.floor(scrollProgress);
  const localProgress = scrollProgress % 1;
  const isLast = activeIndex === showcaseItems.length - 1;
  const SPACING_Y = isMobile ? dimensions.height : Math.max(dimensions.height * 0.65, 600);

  const panProgress = mapRange(localProgress, 0.35, 0.85, 0, 1);
  const easedPan = easeInOutCubic(panProgress);
  const cameraY = (activeIndex + easedPan) * SPACING_Y;

  let textWidth = 400;
  let gap = 96;
  let shiftMag = (textWidth + gap) / 2;

  if (!isMobile && dimensions.width < 1280) {
    textWidth = 320;
    gap = 48;
    shiftMag = (textWidth + gap) / 2;
  }

  const getCardCenterX = (idx: number) => {
    const isEven = idx % 2 === 0;
    const shift = isMobile ? 0 : isEven ? -shiftMag : shiftMag;
    return dimensions.width / 2 + shift;
  };

  const startX = getCardCenterX(activeIndex);
  const endX = getCardCenterX(activeIndex + 1);
  const borderHeight = cardH;
  const startY = activeIndex * SPACING_Y + dimensions.height / 2 + borderHeight / 2 + 2;
  const endY = (activeIndex + 1) * SPACING_Y + dimensions.height / 2 - borderHeight / 2 - 2;

  let pDotX = startX;
  let pDotY = startY;
  let pDotOpacity = 0;
  let showPulse = false;
  let lineDrawProgress = 0;
  let lineOpacity = 0;
  let lineShrinkOffset = 0;
  let activeColorObj = THEME_COLORS[activeIndex % THEME_COLORS.length];
  const cy1 = startY + 100;
  const cy2 = endY - 100;

  if (!isLast) {
    if (localProgress >= 0.0 && localProgress <= 0.35) {
      pDotOpacity = easeInOutCubic(mapRange(localProgress, 0.34, 0.35, 0, 1));
      pDotX = startX;
      pDotY = startY;
      showPulse = true;
      lineOpacity = 0;
      lineDrawProgress = 0;
      lineShrinkOffset = 0;
    } else if (localProgress > 0.35 && localProgress <= 0.85) {
      pDotOpacity = 1;
      const p = easeInOutCubic(mapRange(localProgress, 0.35, 0.85, 0, 1));
      lineDrawProgress = p;
      lineOpacity = 1;
      lineShrinkOffset = 0;
      activeColorObj = lerpColor(
        THEME_COLORS[activeIndex % THEME_COLORS.length],
        THEME_COLORS[(activeIndex + 1) % THEME_COLORS.length],
        p,
      );
      const u = 1 - p;
      pDotX = u * u * u * startX + 3 * u * u * p * startX + 3 * u * p * p * endX + p * p * p * endX;
      pDotY = u * u * u * startY + 3 * u * u * p * cy1 + 3 * u * p * p * cy2 + p * p * p * endY;
      showPulse = true;
    } else if (localProgress > 0.85 && localProgress <= 0.98) {
      pDotOpacity = 0;
      pDotX = endX;
      pDotY = endY;
      showPulse = false;
      activeColorObj = THEME_COLORS[(activeIndex + 1) % THEME_COLORS.length];
      lineOpacity = 1;
      lineDrawProgress = 1;
      const p = easeInOutCubic(mapRange(localProgress, 0.85, 0.98, 0, 1));
      lineShrinkOffset = p * -100;
    } else if (localProgress > 0.98) {
      lineOpacity = 0;
      showPulse = false;
    }
  }

  const globalColorStr = colorToStr(activeColorObj);
  const w = cardW;
  const h = cardH;
  const r = 24;
  const rightPath = `M ${w / 2} 0 L ${w - r} 0 A ${r} ${r} 0 0 1 ${w} ${r} L ${w} ${h - r} A ${r} ${r} 0 0 1 ${w - r} ${h} L ${w / 2} ${h}`;
  const leftPath = `M ${w / 2} 0 L ${r} 0 A ${r} ${r} 0 0 0 0 ${r} L 0 ${h - r} A ${r} ${r} 0 0 0 ${r} ${h} L ${w / 2} ${h}`;

  return (
    <section id="showcase" className="bg-[#FAFAFC]">
      <div
        ref={sectionRef}
        className="relative w-full"
        style={{ height: `${(showcaseItems.length - 1) * 70 + 100}vh` }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#FAFAFC]">
          <div
            className="absolute top-0 left-0 w-full will-change-transform"
            style={{
              height: `${(showcaseItems.length - 1) * SPACING_Y + dimensions.height}px`,
              transform: `translate3d(0, -${cameraY}px, 0)`,
            }}
          >
            {!isLast && lineOpacity > 0 && (
              <svg
                className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full"
                style={{ opacity: lineOpacity }}
              >
                <path
                  d={
                    lineDrawProgress < 1
                      ? getSubBezierPath(
                          { x: startX, y: startY },
                          { x: startX, y: cy1 },
                          { x: endX, y: cy2 },
                          { x: endX, y: endY },
                          lineDrawProgress,
                        )
                      : `M ${startX} ${startY} C ${startX} ${cy1}, ${endX} ${cy2}, ${endX} ${endY}`
                  }
                  fill="none"
                  stroke={globalColorStr}
                  strokeWidth="2.5"
                  pathLength={lineDrawProgress === 1 ? "100" : undefined}
                  strokeDasharray={lineDrawProgress === 1 ? "100 100" : "none"}
                  strokeDashoffset={lineDrawProgress === 1 ? lineShrinkOffset : 0}
                  strokeLinecap="butt"
                  style={{ filter: `drop-shadow(0px 0px 10px ${colorToRgba(activeColorObj, 0.8)})` }}
                />
              </svg>
            )}

            {showPulse && (
              <div
                className="pointer-events-none absolute z-0 will-change-transform"
                style={{
                  width: "4px",
                  height: "4px",
                  left: `${pDotX}px`,
                  top: `${pDotY}px`,
                  opacity: pDotOpacity,
                  transform: "translate(-50%, -50%)",
                  borderRadius: "50%",
                  background: colorToRgba(activeColorObj, 0.8),
                  boxShadow: `0 0 8px 2px ${colorToRgba(activeColorObj, 0.5)}, 0 0 15px 4px ${colorToRgba(activeColorObj, 0.3)}`,
                }}
              />
            )}

            {showcaseItems.map((item, idx) => {
              const dist = scrollProgress - idx;
              const cardColorObj = THEME_COLORS[idx % THEME_COLORS.length];
              const cardColorStr = colorToStr(cardColorObj);

              let contentOpacity = 1;
              let borderOffset = 0;

              if (dist > 0) {
                contentOpacity = easeInOutCubic(mapRange(dist, 0.5, 0.4, 0, 1));
                const border_p = easeInOutCubic(mapRange(dist, 0.35, 0.65, 0, 1));
                borderOffset = border_p * -100;
              } else if (dist < 0) {
                contentOpacity = easeInOutCubic(mapRange(dist, -0.05, -0.15, 1, 0));
                const pulse_p = easeInOutCubic(mapRange(dist, -0.2, -0.02, 0, 1));
                borderOffset = (1 - pulse_p) * 100;
              }

              const isFullyCovered = Math.abs(borderOffset) < 0.1;
              const isCompletelyGone = Math.abs(borderOffset) > 99;
              const borderOpacity = isCompletelyGone ? 0 : isFullyCovered ? 0.75 : 1;
              const isEven = idx % 2 === 0;
              const translateX = isMobile ? "0px" : isEven ? `-${shiftMag}px` : `${shiftMag}px`;

              return (
                <div
                  key={item.id}
                  className="pointer-events-none absolute left-0 z-10 flex w-full items-center justify-center will-change-transform"
                  style={{
                    top: `${idx * SPACING_Y}px`,
                    height: `${dimensions.height}px`,
                  }}
                >
                  <div
                    className="pointer-events-auto relative flex w-full max-w-4xl justify-center px-4 md:px-8"
                    style={{ transform: `translateX(${translateX})` }}
                  >
                    {cardW > 0 && (
                      <svg
                        className="pointer-events-none absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 overflow-visible"
                        width={w}
                        height={h}
                        viewBox={`0 0 ${w} ${h}`}
                        style={{
                          opacity: borderOpacity,
                          transition: "opacity 0.5s ease-in-out",
                        }}
                      >
                        <path
                          d={rightPath}
                          fill="none"
                          stroke={cardColorStr}
                          strokeWidth="3"
                          pathLength="100"
                          strokeDasharray="100 100"
                          strokeDashoffset={borderOffset}
                          strokeLinecap="round"
                          style={{
                            filter: `drop-shadow(0px 0px 15px ${colorToRgba(cardColorObj, 0.8)})`,
                          }}
                        />
                        <path
                          d={leftPath}
                          fill="none"
                          stroke={cardColorStr}
                          strokeWidth="3"
                          pathLength="100"
                          strokeDasharray="100 100"
                          strokeDashoffset={borderOffset}
                          strokeLinecap="round"
                          style={{
                            filter: `drop-shadow(0px 0px 15px ${colorToRgba(cardColorObj, 0.8)})`,
                          }}
                        />
                      </svg>
                    )}

                    <div
                      ref={idx === 0 ? measureRef : null}
                      className="relative z-10 flex h-[280px] w-[92vw] flex-shrink-0 items-center justify-center rounded-3xl bg-white p-4 md:h-[420px] md:w-[680px]"
                      style={{ opacity: contentOpacity }}
                    >
                      <img src={item.image} alt={item.title} className="h-full w-full object-contain" />

                      <div
                        className={`absolute w-[90vw] text-center top-[100%] left-1/2 -translate-x-1/2 md:top-1/2 md:-translate-y-1/2 ${
                          isEven
                            ? "md:left-full md:-translate-x-0 md:text-left"
                            : "md:right-full md:left-auto md:translate-x-0 md:text-right"
                        }`}
                        style={{
                          maxWidth: isMobile ? "400px" : `${textWidth}px`,
                          marginTop: isMobile ? "32px" : "0px",
                          marginLeft: !isMobile && isEven ? `${gap}px` : "0px",
                          marginRight: !isMobile && !isEven ? `${gap}px` : "0px",
                        }}
                      >
                        <h3 className="mb-3 text-2xl leading-tight font-medium tracking-tight text-slate-800 md:text-3xl">
                          {item.title}
                        </h3>
                        <p className="text-base leading-relaxed font-medium text-slate-600 opacity-80 drop-shadow-sm md:text-lg">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
