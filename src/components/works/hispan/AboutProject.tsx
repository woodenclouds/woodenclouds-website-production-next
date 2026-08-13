"use client";

import { Factory, LineChart, Package, PieChart, Settings, Zap } from "lucide-react";
import { hispan } from "./assets";

const pillars = [
  {
    icon: Factory,
    title: "MULTI-FACTORY OPERATIONS",
    desc: "Centralized management of multiple manufacturing facilities with clear visibility into factory-specific operations, costs, and performance.",
  },
  {
    icon: Zap,
    title: "UTILITY MONITORING",
    desc: "Detailed monitoring of electricity, diesel, water, gas, and solar consumption across factory operations.",
  },
  {
    icon: LineChart,
    title: "PRODUCTION & WASTAGE",
    desc: "Better visibility into mix production and product wastage through production tracking, performance monitoring, and threshold-based alerts.",
  },
  {
    icon: Settings,
    title: "MACHINE COMPLAINTS",
    desc: "A structured process for raising, assigning, tracking, and resolving machine-related complaints across factory operations.",
  },
  {
    icon: Package,
    title: "INVENTORY & SPARES",
    desc: "Centralized management of spare parts, purchase orders, stock availability, and inventory movement throughout the spares lifecycle.",
  },
  {
    icon: PieChart,
    title: "OPERATIONAL INSIGHTS",
    desc: "Role-specific dashboards, reports, and AI-powered analytics that turn factory data into clear and actionable operational insights.",
  },
];

export function AboutProject() {
  return (
    <>
      <section id="overview" className="overflow-hidden bg-white pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-0 grid w-full grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl leading-tight font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                The Thinking Behind{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text italic text-transparent">
                  Hispan
                </span>
              </h2>
            </div>
            <div className="text-base leading-relaxed font-normal text-slate-600 sm:text-lg lg:pt-2">
              <p>
                At its core, Hispan is about bringing every moving part of manufacturing into one
                place. From production and inventory to utilities, machine complaints, wastage, and
                reporting, the platform connects essential operations into a seamless
                experience—making complex processes easier to manage and giving teams a clearer
                picture of the bigger operation.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-24 grid max-w-6xl grid-cols-1 gap-x-12 gap-y-20 text-left md:mt-32 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-20">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group flex cursor-default flex-col items-start transition-all duration-300 hover:-translate-y-2"
                >
                  <Icon
                    className="mb-6 h-6 w-6 text-emerald-600 transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                  <h3 className="mb-4 text-[15px] font-bold tracking-tight text-slate-900 uppercase lg:text-base">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed font-normal text-slate-500 lg:text-[15px]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#FAFAFC] py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden bg-white">
              <img
                src={hispan.factoryWide}
                alt="HISPAN Multi-Factory Management View"
                className="h-[200px] w-full object-cover object-[center_38%] contrast-110 saturate-75 md:h-[300px] lg:h-[400px]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-x-0 -top-[2px] h-[calc(4rem+2px)] bg-gradient-to-b from-white/90 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
