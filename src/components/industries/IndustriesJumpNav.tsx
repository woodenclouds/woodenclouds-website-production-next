"use client";

import { useEffect, useState } from "react";

type JumpItem = { id: string; name: string };

export function IndustriesJumpNav({ items }: { items: JumpItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -50% 0px", threshold: [0.15, 0.4, 0.7] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      className="sticky top-0 z-40 border-b border-line-dark bg-paper/95 backdrop-blur-md"
      aria-label="Industries"
    >
      <div className="wc-container">
        <ul className="flex gap-1 overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id} className="shrink-0">
                <a
                  href={`#${item.id}`}
                  className={[
                    "block whitespace-nowrap px-3 py-2 text-sm font-light tracking-wide transition",
                    isActive ? "text-ink" : "text-muted hover:text-ink",
                  ].join(" ")}
                  aria-current={isActive ? "true" : undefined}
                >
                  {item.name}
                  <span
                    className={[
                      "mt-1 block h-px w-full origin-left transition",
                      isActive ? "scale-x-100 bg-accent-deep" : "scale-x-0 bg-transparent",
                    ].join(" ")}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
