const FREQS = [130.81, 146.83, 164.81, 174.61, 196.0, 220.0, 246.94, 261.63, 293.66, 329.63, 392.0, 440.0];
const SAMPLE_ID = "pitch-v6";
const PLAYBACK_RATE = 0.82;

let pending: number | null = null;
let html: HTMLAudioElement[] = [];
let gate: HTMLAudioElement | null = null;
let installed = false;
let unlocking = false;

function wavUrl(freq: number, seconds = 0.62, gain = 0.26) {
  const sr = 22050;
  const n = Math.floor(sr * seconds);
  const pcm = new Int16Array(n);
  for (let i = 0; i < n; i++) {
    const t = i / sr;
    const env = Math.exp(-4.8 * t);
    const sample =
      Math.sin(2 * Math.PI * freq * t) * 0.72 +
      Math.sin(2 * Math.PI * freq * 2.003 * t) * 0.22 +
      Math.sin(2 * Math.PI * freq * 3.01 * t) * 0.08;
    pcm[i] = Math.max(-1, Math.min(1, sample * env * gain)) * 32767;
  }

  const bytes = pcm.byteLength;
  const buffer = new ArrayBuffer(44 + bytes);
  const view = new DataView(buffer);
  const ascii = (offset: number, value: string) => {
    for (let i = 0; i < value.length; i++) view.setUint8(offset + i, value.charCodeAt(i));
  };

  ascii(0, "RIFF");
  view.setUint32(4, 36 + bytes, true);
  ascii(8, "WAVE");
  ascii(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sr, true);
  view.setUint32(28, sr * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  ascii(36, "data");
  view.setUint32(40, bytes, true);
  new Uint8Array(buffer, 44).set(new Uint8Array(pcm.buffer, pcm.byteOffset, bytes));
  return URL.createObjectURL(new Blob([buffer], { type: "audio/wav" }));
}

function ensureHtml() {
  if (html.length && html[0]?.dataset.sample === SAMPLE_ID) return;
  html.forEach((node) => {
    node.pause();
    node.removeAttribute("src");
  });
  html = FREQS.map((freq) => {
    const node = new Audio(wavUrl(freq));
    node.preload = "auto";
    node.volume = 0.55;
    node.preservesPitch = false;
    node.playbackRate = PLAYBACK_RATE;
    node.dataset.sample = SAMPLE_ID;
    return node;
  });
  gate = new Audio(wavUrl(220.0, 0.08, 0.0008));
  gate.preload = "auto";
  gate.volume = 0.02;
  gate.preservesPitch = false;
  gate.playbackRate = PLAYBACK_RATE;
}

function playHtml(index: number) {
  const node = html[index % html.length];
  if (!node) return;
  try {
    node.preservesPitch = false;
    node.playbackRate = PLAYBACK_RATE;
    node.pause();
    node.currentTime = 0;
    void node
      .play()
      .then(() => {
        if (pending === index) pending = null;
      })
      .catch(() => {
        // Autoplay lock — a later click/key will flush this note.
      });
  } catch {
    // Ignore.
  }
}

function flushPending() {
  if (pending === null) return;
  playHtml(pending);
}

export function unlockPianoAudio() {
  if (unlocking) return;
  unlocking = true;
  ensureHtml();
  if (gate) void gate.play().catch(() => {});
  flushPending();
  unlocking = false;
}

export function playPianoNote(index: number) {
  pending = index;
  ensureHtml();
  playHtml(index);
}

export function installPianoAudio() {
  if (installed || typeof window === "undefined") return;
  installed = true;

  const onGesture = () => unlockPianoAudio();
  window.addEventListener("pointerdown", onGesture, { capture: true });
  window.addEventListener("keydown", onGesture, { capture: true });
  window.addEventListener("touchstart", onGesture, { capture: true, passive: true });
}

if (typeof window !== "undefined") installPianoAudio();
