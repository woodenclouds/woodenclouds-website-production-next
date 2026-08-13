"use client";

import { useEffect, useRef, useState } from "react";

const stack = [
  {
    layer: "UI/UX Design",
    techs: ["Figma", "Interactive Prototypes", "Design System"],
  },
  {
    layer: "Frontend",
    techs: ["React 18", "Vite", "Tailwind CSS", "Ant Design", "Chart.js"],
  },
  {
    layer: "Backend",
    techs: ["Django REST", "PostgreSQL", "Celery", "Redis Queue", "WebSockets"],
  },
  {
    layer: "AI Integration",
    techs: ["OpenAI GPT-4 API", "LangChain", "Vector Indexing", "Prompt Guard"],
  },
  {
    layer: "Cloud & Infrastructure",
    techs: ["AWS ECS", "S3 Storage", "CloudFront CDN", "Firebase Cloud"],
  },
];

const scatteredPositions = [
  { x: -35, y: -10 },
  { x: 35, y: -10 },
  { x: 15, y: -25 },
  { x: -25, y: 25 },
  { x: 25, y: 25 },
];

export function TechnologyStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { offsetTop, scrollHeight } = containerRef.current;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const maxScroll = scrollHeight - windowHeight;
      const currentScroll = scrollY - offsetTop;
      let progress = currentScroll / maxScroll;
      progress = Math.max(-0.25, Math.min(1.25, progress));

      setScrollProgress(progress);

      const isDark = progress > -0.05 && progress < 1.05;
      window.dispatchEvent(new CustomEvent("sync-header-theme", { detail: { isDark } }));
      document.documentElement.style.colorScheme = isDark ? "dark" : "light";
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      document.documentElement.style.colorScheme = "light";
      window.dispatchEvent(new CustomEvent("sync-header-theme", { detail: { isDark: false } }));
    };
  }, []);

  let bgOpacity = 0;
  const maxBgOpacity = 0.04;
  if (scrollProgress <= 0.35) bgOpacity = Math.max(0, (scrollProgress / 0.35) * maxBgOpacity);
  else if (scrollProgress <= 0.65) bgOpacity = maxBgOpacity;
  else bgOpacity = Math.max(0, maxBgOpacity * (1 - (scrollProgress - 0.65) / 0.35));

  let bgBlur = 5;
  if (scrollProgress > 0.65) bgBlur = 5 + ((scrollProgress - 0.65) / 0.35) * 20;

  const spotlightOpacity = (bgOpacity / maxBgOpacity) * 0.15;
  const spotlightBlur = Math.max(2, bgBlur - 3);
  const servicesTranslate = -100 + scrollProgress * 200;
  const deliveredTranslate = 100 - scrollProgress * 200;

  return (
    <div id="technology" className="relative h-[500vh] bg-emerald-950" ref={containerRef}>
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-emerald-950">
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
          <div className="relative h-full w-full">
            <div className="absolute inset-0 flex h-full w-full flex-col justify-between pt-[5vh] pb-0">
              <h2
                className="m-0 w-full p-0 text-center text-[24vw] leading-none font-black tracking-widest text-white uppercase md:text-[18vw] lg:text-[14vw]"
                style={{
                  opacity: bgOpacity,
                  filter: `blur(${bgBlur}px)`,
                  transform: `translate3d(${servicesTranslate}%, 0, 0) scale(${1 + scrollProgress * 0.1})`,
                  transformOrigin: "center center",
                }}
              >
                SERVICES
              </h2>
              <h2
                className="m-0 w-full p-0 text-center text-[24vw] leading-none font-black tracking-widest text-white uppercase md:text-[18vw] lg:text-[14vw]"
                style={{
                  opacity: bgOpacity,
                  filter: `blur(${bgBlur}px)`,
                  transform: `translate3d(${deliveredTranslate}%, 0, 0) scale(${1 + scrollProgress * 0.1})`,
                  transformOrigin: "center center",
                }}
              >
                DELIVERED
              </h2>
            </div>

            <div
              className="absolute inset-0 flex h-full w-full flex-col justify-between pt-[5vh] pb-0"
              style={{
                maskImage: "linear-gradient(to right, transparent 35%, black 50%, transparent 65%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 35%, black 50%, transparent 65%)",
              }}
            >
              <h2
                className="m-0 w-full p-0 text-center text-[24vw] leading-none font-black tracking-widest text-white uppercase md:text-[18vw] lg:text-[14vw]"
                style={{
                  opacity: spotlightOpacity,
                  filter: `blur(${spotlightBlur}px)`,
                  transform: `translate3d(${servicesTranslate}%, 0, 0) scale(${1 + scrollProgress * 0.1})`,
                  transformOrigin: "center center",
                }}
              >
                SERVICES
              </h2>
              <h2
                className="m-0 w-full p-0 text-center text-[24vw] leading-none font-black tracking-widest text-white uppercase md:text-[18vw] lg:text-[14vw]"
                style={{
                  opacity: spotlightOpacity,
                  filter: `blur(${spotlightBlur}px)`,
                  transform: `translate3d(${deliveredTranslate}%, 0, 0) scale(${1 + scrollProgress * 0.1})`,
                  transformOrigin: "center center",
                }}
              >
                DELIVERED
              </h2>
            </div>

            <div className="pointer-events-auto absolute inset-0 z-10">
              <div className="relative h-full w-full">
                {stack.map((group, idx) => {
                  const localValue = scrollProgress * (stack.length - 1);
                  const dist = Math.abs(localValue - idx);

                  let headingProgress = 0;
                  if (dist <= 0.15) headingProgress = 1;
                  else if (dist <= 1.1) headingProgress = 1 - (dist - 0.15) / 0.95;

                  let listProgress = 0;
                  if (dist <= 0.15) listProgress = 1;
                  else if (dist <= 0.35) listProgress = 1 - (dist - 0.15) / 0.2;

                  const easeInOut = (t: number) =>
                    t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                  const slideProgress = easeInOut(headingProgress);
                  const listFade = easeInOut(listProgress);
                  const isActive = headingProgress > 0.5;
                  const pos = scatteredPositions[idx] ?? { x: 0, y: 0 };
                  const translateX = pos.x * (1 - slideProgress);
                  const translateY = pos.y * (1 - slideProgress);
                  const scale = 0.7 + slideProgress * 0.6;

                  return (
                    <div
                      key={group.layer}
                      className="absolute top-1/2 left-1/2 flex flex-col items-center gap-6 text-center will-change-transform"
                      style={{
                        transform: `translate3d(calc(-50% + ${translateX}vw), calc(-50% + ${translateY}vh), 0) scale(${scale})`,
                        transformOrigin: "center center",
                        zIndex: isActive ? 20 : 10,
                      }}
                    >
                      <h3
                        className={`text-xl font-bold tracking-widest whitespace-nowrap uppercase transition-all duration-500 md:text-2xl lg:text-3xl ${isActive ? "text-white opacity-100 drop-shadow-xl" : "cursor-default text-slate-500 opacity-10"}`}
                      >
                        {group.layer}
                      </h3>

                      <div
                        className="max-w-md -m-4 flex flex-col items-start gap-y-2 p-4 text-left text-base leading-relaxed font-normal text-slate-400 md:text-lg lg:gap-y-3 lg:text-xl"
                        style={{
                          opacity: listFade,
                          transform: `translate3d(0, ${(1 - listFade) * 20}px, 0)`,
                          transition: "opacity 0.2s ease-out, transform 0.3s ease-out",
                          pointerEvents: isActive ? "auto" : "none",
                          maxHeight: `${listFade * 300}px`,
                          overflow: "hidden",
                        }}
                      >
                        {group.techs.map((t) => (
                          <span key={t} className="flex items-center gap-3 font-medium text-slate-300">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
