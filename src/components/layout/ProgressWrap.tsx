"use client";

import { useEffect, useState } from "react";
import "./site-chrome.css";

export function ProgressWrap() {
  const [active, setActive] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setActive(scrollTop > 100);
      setOffset(height > 0 ? 307.919 - (scrollTop * 307.919) / height : 307.919);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`progress-wrap cursor-pointer${active ? " active-progress" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{ strokeDasharray: "307.919, 307.919", strokeDashoffset: offset }}
        />
      </svg>
    </div>
  );
}
