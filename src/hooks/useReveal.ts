"use client";

import { useEffect, useRef } from "react";

type RevealOptions = {
  rootMargin?: string;
  threshold?: number;
  once?: boolean;
};

export function useReveal<T extends HTMLElement>(options: RevealOptions = {}) {
  const ref = useRef<T | null>(null);
  const { rootMargin = "0px 0px -8% 0px", threshold = 0.12, once = true } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        el.classList.add("is-in");
        if (once) io.disconnect();
      },
      { rootMargin, threshold },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once, rootMargin, threshold]);

  return ref;
}
