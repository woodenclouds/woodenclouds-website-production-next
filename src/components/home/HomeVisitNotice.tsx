"use client";

import { useEffect, useRef, useState } from "react";

const ASSISTANT_URL = "https://woodenclouds.tech";
const STORAGE_KEY = "wc-visit-notice-dismissed";

function playNoticeChime(ctx: AudioContext) {
  const now = ctx.currentTime;

  const tone = (freq: number, start: number, duration: number) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, now + start);
    gain.gain.exponentialRampToValueAtTime(0.14, now + start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + start + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now + start);
    osc.stop(now + start + duration + 0.02);
  };

  tone(880, 0, 0.22);
  tone(1318.5, 0.14, 0.32);

  window.setTimeout(() => {
    void ctx.close();
  }, 700);
}

function wasDismissed() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function persistDismissed() {
  try {
    window.localStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // Ignore quota / private-mode errors
  }
}

export function HomeVisitNotice() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(true); // hide until we know storage state
  const playedSound = useRef(false);

  useEffect(() => {
    if (wasDismissed()) {
      setDismissed(true);
      return;
    }

    setDismissed(false);
    const id = window.setTimeout(() => setVisible(true), 5000);
    return () => window.clearTimeout(id);
  }, []);

  const dismiss = () => {
    persistDismissed();
    setDismissed(true);
    setVisible(false);
  };

  useEffect(() => {
    if (!visible || dismissed || playedSound.current) return;

    const AudioCtx =
      window.AudioContext ||
      (window as Window & { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioCtx) return;

    let ctx: AudioContext | null = null;
    let cleaned = false;

    const finish = () => {
      if (playedSound.current || cleaned || !ctx) return;
      playedSound.current = true;
      playNoticeChime(ctx);
      ctx = null;
      removeListeners();
    };

    const tryPlay = async () => {
      if (playedSound.current || cleaned) return;
      try {
        if (!ctx) ctx = new AudioCtx();
        if (ctx.state === "suspended") await ctx.resume();
        if (ctx.state === "running") finish();
      } catch {
        // Ignore autoplay / AudioContext errors
      }
    };

    const onInteract = () => {
      void tryPlay();
    };

    const removeListeners = () => {
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
      window.removeEventListener("scroll", onInteract);
    };

    void tryPlay();
    window.addEventListener("pointerdown", onInteract);
    window.addEventListener("keydown", onInteract);
    window.addEventListener("scroll", onInteract, { passive: true });

    return () => {
      cleaned = true;
      removeListeners();
      if (ctx && ctx.state !== "closed") void ctx.close();
    };
  }, [visible, dismissed]);

  if (dismissed || !visible) return null;

  return (
    <aside
      className="wc-visit-notice"
      role="dialog"
      aria-label="Website message"
    >
      <button
        type="button"
        className="wc-visit-notice-close"
        aria-label="Dismiss message"
        onClick={dismiss}
      >
        ×
      </button>
      <p className="wc-visit-notice-eyebrow">Hey — you have a message</p>
      <p className="wc-visit-notice-body">
        Thank you for visiting our website. Click to open our AI assistant at
        woodenclouds.tech.
      </p>
      <a
        href={ASSISTANT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="wc-visit-notice-cta"
        onClick={dismiss}
      >
        Open AI assistant
      </a>
    </aside>
  );
}
