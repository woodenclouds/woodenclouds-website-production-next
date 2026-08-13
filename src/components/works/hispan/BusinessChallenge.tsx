"use client";

import { useEffect, useRef, useState } from "react";

const challenges = [
  {
    num: "01",
    title: "DISCONNECTED FACTORY OPERATIONS",
    desc: "Managing multiple facilities through separate processes made it difficult to maintain a consistent view of overall operations.",
  },
  {
    num: "02",
    title: "LIMITED PRODUCTION VISIBILITY",
    desc: "Teams lacked a centralized way to monitor production activity, identify bottlenecks, and track performance across facilities.",
  },
  {
    num: "03",
    title: "MANUAL OPERATIONAL REPORTING",
    desc: "Information had to be gathered and compiled manually, making reporting time-consuming and delaying access to important insights.",
  },
  {
    num: "04",
    title: "COMPLEX MAINTENANCE & INVENTORY WORKFLOWS",
    desc: "Machine complaints, spare parts, and inventory activities required better coordination to avoid delays and operational disruptions.",
  },
];

export function BusinessChallenge() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const getAnimClass = (delayMs: string) =>
    `transition-all duration-700 ease-out transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"} ${delayMs}`;

  return (
    <section
      id="challenge"
      ref={sectionRef}
      className="overflow-hidden bg-white pt-24 pb-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-20 grid w-full grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3
              className={`text-3xl leading-snug font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl ${getAnimClass("delay-[100ms]")}`}
            >
              When the Factory Grows,
              <br />
              <span className="text-emerald-500 italic">So Does the Complexity.</span>
            </h3>
          </div>

          <div
            className={`text-lg leading-relaxed font-normal text-slate-600 sm:text-xl lg:pt-2 ${getAnimClass("delay-[200ms]")}`}
          >
            <p>
              As Lazza&apos;s manufacturing operations expanded across multiple facilities, managing
              day-to-day activities became increasingly complex. Teams needed better visibility
              across factories, while critical operational information remained spread across
              different processes.
            </p>
          </div>
        </div>

        <div
          className={`relative border-t border-b border-slate-200/80 pt-12 pb-12 transition-all delay-[300ms] duration-1000 ease-out ${isVisible ? "border-opacity-100" : "border-opacity-0"}`}
        >
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {challenges.map((item, idx) => {
              const delays = ["delay-[400ms]", "delay-[500ms]", "delay-[600ms]", "delay-[700ms]"];
              return (
              <div
                key={item.num}
                className={`group flex cursor-default flex-col hover:-translate-y-1.5 hover:opacity-90 ${getAnimClass(delays[idx] ?? "delay-[400ms]")}`}
              >
                <div className="mb-6">
                  <span className="text-[15px] font-extrabold text-emerald-500 transition-colors duration-300">
                    {item.num}
                  </span>
                </div>
                <h4 className="mb-4 pr-2 text-[15px] leading-snug font-extrabold tracking-tight text-slate-900 transition-colors duration-300 lg:text-base">
                  {item.title}
                </h4>
                <p className="text-[14px] leading-relaxed text-slate-500 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
