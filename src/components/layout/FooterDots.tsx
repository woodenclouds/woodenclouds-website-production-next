"use client";

import { useEffect, useRef } from "react";

const GAP = 28;
const BASE_R = 0.75;
const MAX_R = 1.7;
const INFLUENCE = 160;
const PUSH = 10;
const MAX_DIM = 4000;

export function FooterDots() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const stage = wrap.parentElement;
    if (!stage) return;

    const pointer = { x: -9999, y: -9999 };
    const smooth = { x: -9999, y: -9999 };
    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let running = false;

    const resize = () => {
      const rect = stage.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const nextWidth = Math.max(1, Math.min(MAX_DIM, Math.round(rect.width)));
      const nextHeight = Math.max(1, Math.min(MAX_DIM, Math.round(rect.height)));
      if (nextWidth === width && nextHeight === height && canvas.style.width) return;
      cancelAnimationFrame(raf);
      running = false;
      width = nextWidth;
      height = nextHeight;
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
          const alpha = 0.12 + 0.544 * ease;

          ctx.beginPath();
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
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
      const rect = stage.getBoundingClientRect();
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
    ro.observe(stage);
    stage.addEventListener("pointermove", onMove, { passive: true });
    stage.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="wc-footer-dots-wrap pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="wc-footer-dots-static pointer-events-none absolute inset-0 z-0" />
      <canvas ref={canvasRef} className="wc-footer-dots pointer-events-none absolute inset-0 z-0 block h-full w-full" />
    </div>
  );
}
