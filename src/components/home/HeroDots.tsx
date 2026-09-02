"use client";

import { useEffect, useRef } from "react";

const GAP = 28;
const BASE_R = 0.85;
const MAX_R = 1.45;
const INFLUENCE = 150;
const PUSH = 8;

export function HeroDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const pointer = { x: -9999, y: -9999 };
    const smooth = { x: -9999, y: -9999 };
    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let running = false;

    const resize = () => {
      cancelAnimationFrame(raf);
      running = false;
      const rect = parent.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };

    const draw = () => {
      smooth.x += (pointer.x - smooth.x) * 0.14;
      smooth.y += (pointer.y - smooth.y) * 0.14;
      const settling =
        Math.abs(pointer.x - smooth.x) < 0.2 && Math.abs(pointer.y - smooth.y) < 0.2;

      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / GAP) + 1;
      const rows = Math.ceil(height / GAP) + 1;
      const ox = ((width % GAP) + GAP) / 2;
      const oy = ((height % GAP) + GAP) / 2;

      for (let row = 0; row < rows; row++) {
        const y = oy + row * GAP;
        for (let col = 0; col < cols; col++) {
          const x = ox + col * GAP;
          const dx = x - smooth.x;
          const dy = y - smooth.y;
          const dist = Math.hypot(dx, dy);
          const t = Math.max(0, 1 - dist / INFLUENCE);
          const ease = t * t * (3 - 2 * t);
          const r = BASE_R + (MAX_R - BASE_R) * ease;
          const push = ease * PUSH;
          const nx = dist > 0.001 ? x + (dx / dist) * push : x;
          const ny = dist > 0.001 ? y + (dy / dist) * push : y;
          const alpha = 0.14 + 0.42 * ease;
          const cr = Math.round(10 + (27 - 10) * ease);
          const cg = Math.round(10 + (110 - 10) * ease);
          const cb = Math.round(10 + (255 - 10) * ease);

          ctx.beginPath();
          ctx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, ${alpha})`;
          ctx.arc(nx, ny, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      canvas.classList.add("is-live");

      if (!settling) {
        running = true;
        raf = requestAnimationFrame(draw);
      } else {
        running = false;
      }
    };

    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      const rect = parent.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      start();
    };

    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
      start();
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    parent.addEventListener("pointermove", onMove, { passive: true });
    parent.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <>
      <div className="wc-hero-dots-static" aria-hidden />
      <canvas ref={canvasRef} className="wc-hero-dots" aria-hidden />
    </>
  );
}
