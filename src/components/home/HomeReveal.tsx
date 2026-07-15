"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

export function HomeReveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "header" | "li" | "section" | "aside";
}) {
  const ref = useReveal<HTMLElement>();

  return (
    <Tag
      ref={ref as never}
      className={`wc-reveal ${className}`.trim()}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
