"use client";

import { useEffect, useState } from "react";

export function ProgressWrap() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 120;
      setActive((prev) => (prev === next ? prev : next));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`wc-progress ${active ? "is-active" : ""}`}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑
    </button>
  );
}
