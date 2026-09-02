"use client";

import { useLayoutEffect, useRef } from "react";
import { playPianoNote } from "@/lib/pianoAudio";

const ZONE = 36;
const MAX_DISP = 10;
const SIGMA = 64;
const WAVELENGTH = 42;
const OSC_HZ = 5.2;
const DECAY = 4.2;
const NEIGHBOR = 0.16;
const COOLDOWN_MS = 140;
const LINE = "rgba(10, 10, 10, 0.18)";
const HOVER = [27, 110, 255];
const REST = [10, 10, 10];
const REST_A = 0.18;
const TARGET_GAP = 68;

type StringState = {
  x: number;
  t0: number;
  a0: number;
  hold: number;
  dir: number;
  inside: boolean;
  lastNote: number;
};

function stringOsc(s: StringState, now: number) {
  const elapsed = (now - s.t0) / 1000;
  if (s.t0 <= 0 || elapsed > 1.15) return 0;
  return s.a0 * Math.exp(-DECAY * elapsed) * Math.cos(Math.PI * 2 * OSC_HZ * elapsed);
}

function stringAmp(s: StringState, now: number) {
  const amp = s.dir * s.hold + stringOsc(s, now);
  return Math.max(-MAX_DISP, Math.min(MAX_DISP, amp));
}

function buildPath(height: number, restX: number, cy: number, amp: number, phase: number) {
  if (Math.abs(amp) < 0.04) {
    return `M ${restX.toFixed(2)} 0 L ${restX.toFixed(2)} ${height.toFixed(2)}`;
  }

  const steps = Math.max(56, Math.ceil(height / 6));
  const twoSig = 2 * SIGMA * SIGMA;
  let d = `M ${restX.toFixed(2)} 0`;

  for (let i = 1; i <= steps; i++) {
    const y = (i / steps) * height;
    const dy = y - cy;
    const env = Math.exp(-(dy * dy) / twoSig);
    const x = restX + amp * env * Math.sin((dy / WAVELENGTH) * Math.PI * 2 + phase);
    d += ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
  }

  return d;
}

function canInteract() {
  return (
    window.matchMedia("(pointer: fine)").matches &&
    window.matchMedia("(hover: hover)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function heroStringsCanInteract() {
  return typeof window !== "undefined" && canInteract();
}

function crossed(prevX: number, currX: number, stringX: number) {
  const a = prevX - stringX;
  const b = currX - stringX;
  return a !== b && a * b <= 0;
}

function countForWidth(width: number) {
  return Math.max(12, Math.min(28, Math.round(width / TARGET_GAP)));
}

function lineStroke(t: number) {
  const u = Math.max(0, Math.min(1, t));
  const r = Math.round(REST[0] + (HOVER[0] - REST[0]) * u);
  const g = Math.round(REST[1] + (HOVER[1] - REST[1]) * u);
  const b = Math.round(REST[2] + (HOVER[2] - REST[2]) * u);
  const a = REST_A + (1 - REST_A) * u;
  return `rgba(${r}, ${g}, ${b}, ${a.toFixed(3)})`;
}

export function HeroStrings({ onFirstClick }: { onFirstClick?: () => void }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const onFirstClickRef = useRef(onFirstClick);
  onFirstClickRef.current = onFirstClick;

  useLayoutEffect(() => {
    const svg = svgRef.current;
    const stage = svg?.parentElement;
    if (!svg || !stage) return;

    const pointer = { x: 0, y: 0, prevX: 0, over: false, known: false };
    let width = 0;
    let height = 0;
    let raf = 0;
    let interactive = canInteract();
    let strings: StringState[] = [];
    let paths: SVGPathElement[] = [];

    const syncPaths = (count: number) => {
      while (svg.childElementCount > count) svg.lastElementChild?.remove();
      while (svg.childElementCount < count) {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("fill", "none");
        path.setAttribute("stroke", LINE);
        path.setAttribute("stroke-width", "1");
        svg.appendChild(path);
      }
      paths = Array.from(svg.querySelectorAll("path"));
    };

    const layout = () => {
      const rect = stage.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
      svg.style.width = `${width}px`;
      svg.style.height = `${height}px`;

      const count = countForWidth(width);
      syncPaths(count);
      const gap = width / count;
      strings = Array.from({ length: count }, (_, i) => {
        const prev = strings[i];
        return {
          x: gap * (i + 0.5),
          t0: prev?.t0 ?? 0,
          a0: prev?.a0 ?? 0,
          hold: prev?.hold ?? 0,
          dir: prev?.dir ?? 1,
          inside: prev?.inside ?? false,
          lastNote: prev?.lastNote ?? 0,
        };
      });
    };

    const draw = (now: number) => {
      const cy = pointer.y;
      strings.forEach((s, i) => {
        const path = paths[i];
        if (!path) return;
        const amp = stringAmp(s, now);
        const elapsed = s.t0 > 0 ? (now - s.t0) / 1000 : 0;
        const energy = Math.min(1, Math.abs(amp) / MAX_DISP);
        path.setAttribute("d", buildPath(height, s.x, cy, amp, elapsed * 16));
        path.setAttribute("stroke", lineStroke(s.inside ? Math.max(energy, 0.92) : energy));
      });
    };

    const oscillating = (now: number) => strings.some((s) => Math.abs(stringAmp(s, now)) > 0.04);

    const excite = (i: number, amount: number, dir: number, note: boolean) => {
      const s = strings[i];
      if (!s) return;
      const now = performance.now();
      s.t0 = now;
      s.a0 = amount * dir;
      s.dir = dir;
      if (note && now - s.lastNote > COOLDOWN_MS) {
        s.lastNote = now;
        playPianoNote(i);
      }
    };

    const pluck = (i: number, dir: number, amount: number, note: boolean) => {
      excite(i, amount, dir, note);
      if (note) {
        if (strings[i - 1]) excite(i - 1, amount * NEIGHBOR, dir, false);
        if (strings[i + 1]) excite(i + 1, amount * NEIGHBOR, dir, false);
      }
    };

    const sample = () => {
      if (!interactive || !pointer.known) return;

      let closest = 0;
      let closestDist = Infinity;
      strings.forEach((s, i) => {
        const d = Math.abs(pointer.x - s.x);
        if (d < closestDist) {
          closestDist = d;
          closest = i;
        }
      });

      strings.forEach((s, i) => {
        const dist = Math.abs(pointer.x - s.x);
        const closeness = Math.max(0, 1 - dist / ZONE);
        const inZone = dist < ZONE;
        const isNeighbor = Math.abs(i - closest) === 1;
        const strength = i === closest ? 1 : isNeighbor ? NEIGHBOR : 0;
        const didCross = pointer.over && crossed(pointer.prevX, pointer.x, s.x);

        if (pointer.over && closeness > 0 && strength > 0) {
          s.hold = MAX_DISP * closeness * strength;
          s.dir = pointer.x >= s.x ? 1 : -1;
        } else if (!inZone) {
          s.hold = 0;
        }

        if (didCross) {
          const dir = pointer.x >= s.x ? 1 : -1;
          pluck(i, dir, MAX_DISP, true);
          s.inside = inZone && i === closest;
          return;
        }

        if (pointer.over && inZone && i === closest && !s.inside) {
          pluck(i, pointer.x >= s.x ? 1 : -1, MAX_DISP, true);
        }

        s.inside = pointer.over && inZone && i === closest;
      });
    };

    const tick = (now: number) => {
      sample();
      if (!pointer.over) {
        strings.forEach((s) => {
          s.hold *= 0.82;
          if (s.hold < 0.04) s.hold = 0;
        });
      }
      draw(now);
      raf = pointer.over || oscillating(now) ? requestAnimationFrame(tick) : 0;
    };

    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      if (!interactive) return;
      const rect = stage.getBoundingClientRect();
      pointer.prevX = pointer.known ? pointer.x : e.clientX - rect.left;
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.over = true;
      pointer.known = true;
      kick();
    };

    const onLeave = () => {
      pointer.over = false;
      strings.forEach((s) => {
        s.inside = false;
      });
      kick();
    };

    let firstClick = false;
    const finishFirstClick = () => {
      if (firstClick) return;
      firstClick = true;
      onFirstClickRef.current?.();
    };

    const onDown = (e: PointerEvent) => {
      if (!interactive || e.pointerType === "touch") return;
      const target = e.target as Element | null;
      if (target?.closest("a")) {
        finishFirstClick();
        return;
      }

      const rect = stage.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      pointer.prevX = pointer.known ? pointer.x : x;
      pointer.x = x;
      pointer.y = y;
      pointer.over = true;
      pointer.known = true;

      let closest = 0;
      let closestDist = Infinity;
      strings.forEach((s, i) => {
        const d = Math.abs(x - s.x);
        if (d < closestDist) {
          closestDist = d;
          closest = i;
        }
      });

      const nearest = strings[closest];
      if (nearest) {
        pluck(closest, x >= nearest.x ? 1 : -1, MAX_DISP, true);
        kick();
      }

      finishFirstClick();
    };

    layout();
    draw(performance.now());

    const ro = new ResizeObserver(() => {
      layout();
      draw(performance.now());
    });
    ro.observe(stage);

    const mq = window.matchMedia("(pointer: fine)");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMode = () => {
      interactive = canInteract();
      if (!interactive) {
        strings.forEach((s) => {
          s.t0 = 0;
          s.a0 = 0;
          s.hold = 0;
          s.inside = false;
        });
        draw(performance.now());
      }
    };

    stage.addEventListener("pointermove", onMove, { passive: true });
    stage.addEventListener("pointerdown", onDown);
    stage.addEventListener("pointerleave", onLeave);
    mq.addEventListener("change", syncMode);
    motion.addEventListener("change", syncMode);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerdown", onDown);
      stage.removeEventListener("pointerleave", onLeave);
      mq.removeEventListener("change", syncMode);
      motion.removeEventListener("change", syncMode);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="wc-hero-strings"
      aria-hidden
      focusable="false"
      preserveAspectRatio="none"
    />
  );
}
