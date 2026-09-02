"use client";

type ProcessMissionProps = {
  /** Overall 0–1 scroll/scrub progress across all steps */
  progress: number;
  activeStep: number;
  stepCount: number;
};

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

function ease(t: number) {
  const x = clamp01(t);
  return x * x * (3 - 2 * x);
}

/** How far into a given stage we are (0–1). */
function stageAmount(progress: number, step: number, stepCount: number) {
  const scaled = progress * Math.max(stepCount - 1, 1);
  return ease(clamp01(1.15 - Math.abs(scaled - step) * 1.05));
}

/** Whether a stage has been reached (for cumulative assembly). */
function reached(progress: number, step: number, stepCount: number) {
  const scaled = progress * Math.max(stepCount - 1, 1);
  return clamp01((scaled - (step - 0.15)) / 0.85);
}

const ORBIT_NODES = [
  { label: "Analytics", x: 372, y: 118 },
  { label: "Growth", x: 398, y: 210 },
  { label: "Users", x: 378, y: 318 },
  { label: "Revenue", x: 92, y: 128 },
  { label: "AI", x: 78, y: 240 },
  { label: "Cloud", x: 98, y: 340 },
] as const;

export function ProcessMission({ progress, activeStep, stepCount }: ProcessMissionProps) {
  const p = clamp01(progress);
  const discover = stageAmount(p, 0, stepCount);
  const define = stageAmount(p, 1, stepCount);
  const design = stageAmount(p, 2, stepCount);
  const build = stageAmount(p, 3, stepCount);
  const launch = stageAmount(p, 4, stepCount);
  const evolve = stageAmount(p, 5, stepCount);

  const defineOn = reached(p, 1, stepCount);
  const designOn = reached(p, 2, stepCount);
  const buildOn = reached(p, 3, stepCount);
  const launchOn = reached(p, 4, stepCount);
  const evolveOn = reached(p, 5, stepCount);

  // Soft lift during launch → orbit
  const lift = ease(Math.max(0, (p * (stepCount - 1) - 3.6) / 1.8)) * -72;
  const rocketScale = 1 - evolveOn * 0.12;

  const missionLabel =
    ["Mission Brief", "Blueprint", "Product Assembly", "Systems Check", "Lift Off", "Orbit & Growth"][
      activeStep
    ] ?? "Mission Control";

  return (
    <div className="wc-mission" data-step={activeStep} aria-hidden>


      <svg
        className="wc-mission-svg"
        viewBox="0 0 480 520"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="missionGlow" x1="240" y1="348" x2="240" y2="455" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff6d6" stopOpacity="0.95" />
            <stop offset="0.22" stopColor="#ffdd55" stopOpacity="0.85" />
            <stop offset="0.55" stopColor="#ffb020" stopOpacity="0.45" />
            <stop offset="1" stopColor="#ff8a00" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="missionFlameCore" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(240 358) scale(14 22)">
            <stop stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="0.35" stopColor="#fff1a8" stopOpacity="0.8" />
            <stop offset="1" stopColor="#ffcc33" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="missionFill" x1="210" y1="120" x2="270" y2="360" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0a0a0a" stopOpacity="0.06" />
            <stop offset="1" stopColor="#3b5bdb" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="missionSmoke" x1="240" y1="400" x2="240" y2="500" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0a0a0a" stopOpacity="0.16" />
            <stop offset="0.45" stopColor="#c4a574" stopOpacity="0.08" />
            <stop offset="1" stopColor="#0a0a0a" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="missionRadar" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(240 250) scale(150)">
            <stop stopColor="#3b5bdb" stopOpacity="0.22" />
            <stop offset="1" stopColor="#3b5bdb" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g className="wc-mission-grid" opacity={0.35 + discover * 0.25}>
          {Array.from({ length: 11 }, (_, i) => (
            <line key={`v${i}`} x1={40 + i * 40} y1={40} x2={40 + i * 40} y2={480} stroke="currentColor" strokeWidth="0.6" />
          ))}
          {Array.from({ length: 12 }, (_, i) => (
            <line key={`h${i}`} x1={40} y1={40 + i * 40} x2={440} y2={40 + i * 40} stroke="currentColor" strokeWidth="0.6" />
          ))}
          <rect x="40" y="40" width="400" height="440" stroke="currentColor" strokeWidth="1" opacity="0.35" />
        </g>

        {/* Radar — Discover */}
        <g style={{ opacity: discover * (1 - launchOn * 0.85) }}>
          <circle cx="240" cy="250" r="118" stroke="currentColor" strokeWidth="0.8" opacity="0.25" />
          <circle cx="240" cy="250" r="78" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />
          <circle cx="240" cy="250" r="38" stroke="#3b5bdb" strokeWidth="1" opacity="0.35" />
          <g className="wc-mission-radar-sweep">
            <path d="M240 250 L240 132 A118 118 0 0 1 340 200 Z" fill="url(#missionRadar)" />
          </g>
          <circle cx="240" cy="250" r="3" fill="#3b5bdb" className="wc-mission-pulse" />
        </g>

        {/* Blueprint sheet — Discover/Define */}
        <g
          style={{
            opacity: Math.max(discover, define) * (1 - launchOn * 0.7),
            transform: `translate(${(1 - defineOn) * -8}px, ${(1 - defineOn) * 6}px)`,
          }}
        >
          <rect x="318" y="72" width="92" height="118" rx="2" stroke="currentColor" strokeWidth="1" fill="rgba(249,247,244,0.72)" />
          <path
            className="wc-mission-draw"
            style={{ opacity: discover, strokeDashoffset: 1 - discover }}
            pathLength={1}
            d="M332 96 H396 M332 112 H384 M332 128 H390 M332 144 H370"
            stroke="currentColor"
            strokeWidth="1"
          />
          <text x="332" y="174" className="mc-label" fill="currentColor">
            BRIEF
          </text>
        </g>

        {/* Floating UI chip — Design+ */}
        <g style={{ opacity: designOn * (1 - evolveOn * 0.4), transform: `translateY(${(1 - design) * 12}px)` }}>
          <text x="56" y="78" className="mc-label" fill="currentColor">
            WIREFRAME
          </text>
          <rect x="56" y="86" width="108" height="54" rx="4" stroke="currentColor" strokeWidth="1" fill="rgba(249,247,244,0.8)" />
          <rect x="68" y="100" width="42" height="6" rx="1" fill="#3b5bdb" opacity="0.55" />
          <rect x="68" y="114" width="72" height="4" rx="1" fill="currentColor" opacity="0.2" />
          <rect x="68" y="124" width="54" height="4" rx="1" fill="currentColor" opacity="0.15" />
        </g>

        {/* Rocket stack */}
        <g
          className="wc-mission-rocket"
          transform={`translate(240 ${250 + lift}) scale(${rocketScale})`}
        >
          <g transform="translate(-240 -250)">
            {/* Outline draw — Discover */}
            <path
              className="wc-mission-draw"
              pathLength={1}
              style={{ strokeDashoffset: 1 - discover }}
              d="M240 120 L268 190 V320 L254 348 H226 L212 320 V190 Z"
              stroke="currentColor"
              strokeWidth="1.4"
              fill="none"
            />

            {/* Detailed body — Define */}
            <g style={{ opacity: defineOn }}>
              <path
                d="M240 128 L262 188 V310 L250 332 H230 L218 310 V188 Z"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="url(#missionFill)"
              />
              <line x1="240" y1="150" x2="240" y2="320" stroke="currentColor" strokeWidth="0.7" opacity="0.35" />
              <line x1="226" y1="210" x2="254" y2="210" stroke="currentColor" strokeWidth="0.7" opacity="0.3" />
              <line x1="226" y1="250" x2="254" y2="250" stroke="currentColor" strokeWidth="0.7" opacity="0.3" />
              <line x1="226" y1="290" x2="254" y2="290" stroke="currentColor" strokeWidth="0.7" opacity="0.3" />
            </g>

            {/* Panels / windows / fins — Design */}
            <g style={{ opacity: designOn }}>
              <rect
                x="232"
                y="198"
                width="16"
                height="16"
                rx="2"
                stroke="#3b5bdb"
                strokeWidth="1.2"
                fill="rgba(59,91,219,0.12)"
                style={{ transform: `translateY(${(1 - design) * 10}px)`, transformOrigin: "240px 206px" }}
              />
              <rect
                x="232"
                y="240"
                width="16"
                height="16"
                rx="2"
                stroke="currentColor"
                strokeWidth="1"
                fill="rgba(10,10,10,0.04)"
                style={{ transform: `translateY(${(1 - design) * 14}px)` }}
              />
              {/* Fins */}
              <path
                d="M218 300 L196 340 L218 322 Z"
                stroke="currentColor"
                strokeWidth="1.1"
                fill="rgba(10,10,10,0.05)"
                style={{
                  transform: `translate(${(1 - designOn) * -18}px, ${(1 - designOn) * 8}px)`,
                  opacity: designOn,
                }}
              />
              <path
                d="M262 300 L284 340 L262 322 Z"
                stroke="currentColor"
                strokeWidth="1.1"
                fill="rgba(10,10,10,0.05)"
                style={{
                  transform: `translate(${(1 - designOn) * 18}px, ${(1 - designOn) * 8}px)`,
                  opacity: designOn,
                }}
              />
              {/* Nose accent */}
              <path d="M240 128 L252 168 H228 Z" fill="#3b5bdb" opacity={0.18 * designOn} />
            </g>

            {/* Engine / systems — Build */}
            <g style={{ opacity: buildOn }}>
              <rect x="228" y="332" width="24" height="16" rx="1" stroke="currentColor" strokeWidth="1.1" fill="rgba(10,10,10,0.06)" />
              <circle cx="240" cy="340" r="4" stroke="#3b5bdb" strokeWidth="1" fill="none" className="wc-mission-pulse" />
              {/* Progress ticks */}
              <g opacity={0.7}>
                <rect x="292" y="210" width="54" height="3" rx="1" fill="currentColor" opacity="0.12" />
                <rect x="292" y="210" width={54 * build} height="3" rx="1" fill="#3b5bdb" opacity="0.7" />
                <rect x="292" y="222" width="54" height="3" rx="1" fill="currentColor" opacity="0.12" />
                <rect x="292" y="222" width={54 * clamp01(build * 1.2)} height="3" rx="1" fill="#3b5bdb" opacity="0.5" />
                <rect x="292" y="234" width="54" height="3" rx="1" fill="currentColor" opacity="0.12" />
                <rect x="292" y="234" width={54 * clamp01(build * 0.85)} height="3" rx="1" fill="currentColor" opacity="0.35" />
              </g>
              {/* Bolts */}
              <circle cx="224" cy="270" r="2.2" stroke="currentColor" strokeWidth="0.8" />
              <circle cx="256" cy="270" r="2.2" stroke="currentColor" strokeWidth="0.8" />
              <circle cx="224" cy="300" r="2.2" stroke="currentColor" strokeWidth="0.8" />
              <circle cx="256" cy="300" r="2.2" stroke="currentColor" strokeWidth="0.8" />
              {/* Sparks */}
              <g className="wc-mission-sparks" style={{ opacity: build * 0.85 }}>
                <circle cx="270" cy="336" r="1.2" fill="#3b5bdb" />
                <circle cx="278" cy="328" r="0.9" fill="currentColor" />
                <circle cx="210" cy="334" r="1" fill="#3b5bdb" />
              </g>
            </g>

            {/* Engine glow — Launch (warm fire) */}
            <g style={{ opacity: launchOn }}>
              <ellipse
                cx="240"
                cy="372"
                rx="26"
                ry="48"
                fill="url(#missionGlow)"
                className="wc-mission-engine"
                opacity={0.9 * Math.max(launch, 0.35)}
              />
              <ellipse
                cx="240"
                cy="358"
                rx="10"
                ry="18"
                fill="url(#missionFlameCore)"
                className="wc-mission-engine-core"
              />
              <ellipse
                cx="232"
                cy="378"
                rx="8"
                ry="20"
                fill="#ffc933"
                opacity={0.35 * launch}
                className="wc-mission-engine-lick"
              />
              <ellipse
                cx="248"
                cy="380"
                rx="7"
                ry="18"
                fill="#ffb000"
                opacity={0.28 * launch}
                className="wc-mission-engine-lick wc-mission-engine-lick--alt"
              />
              <ellipse cx="240" cy="400" rx="22" ry="40" fill="url(#missionSmoke)" opacity={0.65 * launch} />
              <ellipse cx="228" cy="410" rx="14" ry="26" fill="url(#missionSmoke)" opacity={0.35 * launch} />
              <ellipse cx="254" cy="412" rx="14" ry="26" fill="url(#missionSmoke)" opacity={0.35 * launch} />
            </g>
          </g>
        </g>

        {/* Code / cloud chip — Build → Launch */}
        <g className="mc-code-chip" style={{ opacity: Math.max(build, launch) * (1 - evolveOn * 0.35) }}>
          <rect x="56" y="360" width="120" height="64" rx="4" stroke="currentColor" strokeWidth="1" fill="rgba(249,247,244,0.82)" />
          <text x="70" y="384" className="mc-code" fill="currentColor">
            {"const ship = true"}
          </text>
          <text x="70" y="402" className="mc-code" fill="#3b5bdb">
            {"await launch()"}
          </text>
        </g>

        {/* Orbit network — Evolve */}
        <g style={{ opacity: evolveOn }}>
          <circle
            cx="240"
            cy="220"
            r="150"
            stroke="#3b5bdb"
            strokeWidth="1"
            strokeDasharray="3 6"
            opacity="0.35"
            className="wc-mission-orbit-ring"
          />
          <circle cx="240" cy="220" r="104" stroke="currentColor" strokeWidth="0.8" opacity="0.2" className="wc-mission-orbit-ring wc-mission-orbit-ring--alt" />
          {ORBIT_NODES.map((node, i) => (
            <g key={node.label} style={{ opacity: ease(clamp01(evolve * 1.4 - i * 0.08)) }}>
              <line
                x1="240"
                y1="220"
                x2={node.x}
                y2={node.y}
                stroke="currentColor"
                strokeWidth="0.8"
                opacity="0.28"
              />
              <circle cx={node.x} cy={node.y} r="3" fill="#3b5bdb" />
              <rect
                className="mc-node-chip"
                x={node.x - 34}
                y={node.y - 22}
                width="68"
                height="18"
                rx="9"
                fill="rgba(249,247,244,0.92)"
                stroke="currentColor"
                strokeWidth="0.8"
              />
              <text x={node.x} y={node.y - 9} textAnchor="middle" className="mc-label" fill="currentColor">
                {node.label}
              </text>
            </g>
          ))}
          {/* Miniature product dashboard */}
          <g transform="translate(196 198)">
            <rect width="88" height="56" rx="4" fill="rgba(249,247,244,0.95)" stroke="currentColor" strokeWidth="1" />
            <rect x="10" y="12" width="28" height="4" rx="1" fill="#3b5bdb" opacity="0.65" />
            <rect x="10" y="22" width="68" height="3" rx="1" fill="currentColor" opacity="0.15" />
            <rect x="10" y="30" width="52" height="3" rx="1" fill="currentColor" opacity="0.12" />
            <polyline
              points="10,46 24,40 38,43 54,34 78,36"
              stroke="#3b5bdb"
              strokeWidth="1.2"
              fill="none"
              opacity="0.75"
            />
          </g>
        </g>

        {/* Corner marks */}
        <path d="M48 56 H64 M48 56 V72" stroke="currentColor" strokeWidth="1" opacity="0.35" />
        <path d="M432 56 H416 M432 56 V72" stroke="currentColor" strokeWidth="1" opacity="0.35" />
        <path d="M48 464 H64 M48 464 V448" stroke="currentColor" strokeWidth="1" opacity="0.35" />
        <path d="M432 464 H416 M432 464 V448" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      </svg>
    </div>
  );
}
