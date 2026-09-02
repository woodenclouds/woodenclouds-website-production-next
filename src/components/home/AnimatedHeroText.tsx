"use client";

import { useEffect, useState } from "react";

const words = ["TECHNOLOGY", "DESIGN", "INTELLIGENCE", "GROWTH"];

export function AnimatedHeroText() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((current) => (current + 1) % words.length);
        setIsVisible(true);
      }, 300); // 300ms for smooth exit before changing
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-baseline w-full max-w-lg mx-auto mt-6 mb-8 text-base sm:text-lg font-medium tracking-tight">
      <div className="w-1/2 flex justify-end pr-1.5">
        <span className="text-ink border-b-[2px] border-ink">
          We shape
        </span>
      </div>
      <div className="w-1/2 flex justify-start pl-1.5">
        <span
          className={`inline-block text-gray-400 uppercase tracking-[0.2em] font-light transition-all duration-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
        {words[index]}
        </span>
      </div>
    </div>
  );
}
