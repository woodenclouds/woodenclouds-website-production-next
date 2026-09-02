type IllustProps = {
  className?: string;
};

/** Shared palette — ink + Woodenclouds blue accents on paper tones */
const C = {
  ink: "#0a0a0a",
  inkMuted: "rgba(10,10,10,0.55)",
  inkSoft: "rgba(10,10,10,0.12)",
  paper: "#f8f8f8",
  paperDeep: "#ececec",
  white: "#ffffff",
  blue: "#5b9de8",
  blueDeep: "#2977d4",
  blueSoft: "#a8bdea",
  blueWash: "rgba(91,157,232,0.18)",
};

export function ServicesHeroArt({ className }: IllustProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 560 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="svcHeroWash" x1="80" y1="40" x2="520" y2="440" gradientUnits="userSpaceOnUse">
          <stop stopColor={C.blueSoft} stopOpacity="0.35" />
          <stop offset="0.55" stopColor={C.blue} stopOpacity="0.12" />
          <stop offset="1" stopColor={C.paperDeep} stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="svcHeroPanel" x1="180" y1="90" x2="420" y2="340" gradientUnits="userSpaceOnUse">
          <stop stopColor={C.white} />
          <stop offset="1" stopColor={C.paper} />
        </linearGradient>
        <linearGradient id="svcHeroAccent" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor={C.blueDeep} />
          <stop offset="1" stopColor={C.blue} />
        </linearGradient>
      </defs>

      {/* soft field */}
      <ellipse className="wc-svc-art-float" cx="300" cy="250" rx="220" ry="180" fill="url(#svcHeroWash)" />
      <circle className="wc-svc-art-drift" cx="110" cy="120" r="54" fill={C.blueWash} />
      <circle className="wc-svc-art-drift wc-svc-art-drift--slow" cx="470" cy="360" r="72" fill={C.inkSoft} />

      {/* main product board */}
      <g className="wc-svc-art-rise">
        <rect x="148" y="88" width="264" height="196" rx="18" fill="url(#svcHeroPanel)" stroke={C.ink} strokeOpacity="0.1" strokeWidth="1.5" />
        <rect x="148" y="88" width="264" height="36" rx="18" fill={C.ink} fillOpacity="0.04" />
        <circle cx="170" cy="106" r="5" fill={C.blue} />
        <circle cx="186" cy="106" r="5" fill={C.blueSoft} />
        <circle cx="202" cy="106" r="5" fill={C.inkSoft} />

        {/* chart bars */}
        <rect x="178" y="196" width="28" height="52" rx="6" fill={C.blueWash} />
        <rect x="218" y="168" width="28" height="80" rx="6" fill={C.blueSoft} fillOpacity="0.55" />
        <rect x="258" y="152" width="28" height="96" rx="6" fill={C.blue} fillOpacity="0.75" />
        <rect x="298" y="178" width="28" height="70" rx="6" fill={C.blueDeep} fillOpacity="0.85" />
        <rect x="338" y="140" width="28" height="108" rx="6" fill="url(#svcHeroAccent)" />

        {/* trend line */}
        <path
          d="M176 190 C210 186 230 150 262 158 C294 166 312 128 358 122"
          stroke={C.ink}
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity="0.55"
        />
        <circle cx="358" cy="122" r="6" fill={C.blueDeep} />
      </g>

      {/* floating node cards */}
      <g className="wc-svc-art-float">
        <rect x="52" y="168" width="118" height="72" rx="14" fill={C.white} stroke={C.ink} strokeOpacity="0.1" strokeWidth="1.5" />
        <rect x="68" y="186" width="36" height="36" rx="10" fill={C.blueWash} />
        <path d="M78 204h16M78 212h10" stroke={C.blueDeep} strokeWidth="2" strokeLinecap="round" />
        <rect x="112" y="190" width="42" height="8" rx="4" fill={C.ink} fillOpacity="0.12" />
        <rect x="112" y="206" width="28" height="6" rx="3" fill={C.ink} fillOpacity="0.08" />
      </g>

      <g className="wc-svc-art-float wc-svc-art-float--delay">
        <rect x="392" y="128" width="126" height="86" rx="14" fill={C.ink} />
        <rect x="408" y="146" width="48" height="8" rx="4" fill={C.blue} />
        <rect x="408" y="164" width="78" height="6" rx="3" fill="white" fillOpacity="0.25" />
        <rect x="408" y="178" width="58" height="6" rx="3" fill="white" fillOpacity="0.16" />
        <circle cx="492" cy="188" r="14" fill={C.blue} fillOpacity="0.9" />
        <path d="M486 188h12M492 182v12" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* satellite devices */}
      <g className="wc-svc-art-drift">
        <rect x="176" y="318" width="72" height="112" rx="14" fill={C.white} stroke={C.ink} strokeOpacity="0.12" strokeWidth="1.5" />
        <rect x="186" y="332" width="52" height="72" rx="6" fill={C.blueWash} />
        <rect x="200" y="412" width="24" height="4" rx="2" fill={C.ink} fillOpacity="0.2" />
      </g>

      <g className="wc-svc-art-float wc-svc-art-float--delay">
        <rect x="280" y="340" width="168" height="100" rx="14" fill={C.white} stroke={C.ink} strokeOpacity="0.1" strokeWidth="1.5" />
        <circle cx="316" cy="378" r="22" fill={C.blueWash} />
        <circle cx="316" cy="378" r="10" fill={C.blueDeep} />
        <rect x="352" y="360" width="72" height="8" rx="4" fill={C.ink} fillOpacity="0.12" />
        <rect x="352" y="378" width="56" height="6" rx="3" fill={C.ink} fillOpacity="0.08" />
        <rect x="352" y="396" width="64" height="6" rx="3" fill={C.blueSoft} fillOpacity="0.55" />
      </g>

      {/* connection paths */}
      <path
        className="wc-svc-art-draw"
        d="M170 204 C140 240 150 300 210 330"
        stroke={C.blue}
        strokeWidth="1.5"
        strokeDasharray="4 6"
        strokeOpacity="0.55"
      />
      <path
        className="wc-svc-art-draw"
        d="M412 214 C430 250 390 300 360 342"
        stroke={C.blueDeep}
        strokeWidth="1.5"
        strokeDasharray="4 6"
        strokeOpacity="0.45"
      />
    </svg>
  );
}

export function TechnologyArt({ className }: IllustProps) {
  return (
    <svg className={className} viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="techGrad" x1="60" y1="40" x2="420" y2="320" gradientUnits="userSpaceOnUse">
          <stop stopColor={C.blueSoft} stopOpacity="0.4" />
          <stop offset="1" stopColor={C.paperDeep} />
        </linearGradient>
      </defs>
      <rect width="480" height="360" rx="0" fill="url(#techGrad)" />
      <ellipse className="wc-svc-art-drift" cx="380" cy="80" rx="70" ry="50" fill={C.blueWash} />

      {/* desktop frame */}
      <rect x="72" y="58" width="260" height="178" rx="16" fill={C.white} stroke={C.ink} strokeOpacity="0.12" strokeWidth="1.5" />
      <rect x="72" y="58" width="260" height="30" fill={C.ink} fillOpacity="0.05" rx="16" />
      <circle cx="92" cy="73" r="4" fill={C.blue} />
      <circle cx="106" cy="73" r="4" fill={C.blueSoft} />
      <rect x="92" y="108" width="90" height="10" rx="5" fill={C.ink} fillOpacity="0.12" />
      <rect x="92" y="128" width="140" height="8" rx="4" fill={C.ink} fillOpacity="0.08" />
      <rect x="92" y="144" width="120" height="8" rx="4" fill={C.ink} fillOpacity="0.06" />
      <rect x="92" y="172" width="72" height="36" rx="8" fill={C.blueWash} />
      <rect x="176" y="172" width="72" height="36" rx="8" fill={C.blue} fillOpacity="0.35" />
      <rect x="260" y="172" width="48" height="36" rx="8" fill={C.blueDeep} fillOpacity="0.55" />

      {/* code chip */}
      <g className="wc-svc-art-float">
        <rect x="300" y="96" width="128" height="100" rx="14" fill={C.ink} />
        <text x="320" y="128" fill={C.blue} fontSize="14" fontFamily="ui-monospace, monospace">{`{ }`}</text>
        <rect x="320" y="142" width="68" height="6" rx="3" fill="white" fillOpacity="0.28" />
        <rect x="320" y="156" width="88" height="6" rx="3" fill="white" fillOpacity="0.16" />
        <rect x="320" y="170" width="48" height="6" rx="3" fill={C.blue} fillOpacity="0.8" />
      </g>

      {/* phone */}
      <g className="wc-svc-art-float wc-svc-art-float--delay">
        <rect x="118" y="220" width="70" height="112" rx="14" fill={C.white} stroke={C.ink} strokeOpacity="0.14" strokeWidth="1.5" />
        <rect x="128" y="236" width="50" height="72" rx="6" fill={C.blueWash} />
        <rect x="140" y="316" width="26" height="4" rx="2" fill={C.ink} fillOpacity="0.2" />
      </g>

      {/* nodes */}
      <circle cx="360" cy="268" r="28" fill={C.white} stroke={C.ink} strokeOpacity="0.1" strokeWidth="1.5" />
      <circle cx="360" cy="268" r="12" fill={C.blueDeep} />
      <path d="M332 248 C300 220 280 250 260 236" stroke={C.blue} strokeWidth="1.5" strokeDasharray="3 5" opacity="0.6" />
      <circle cx="416" cy="220" r="18" fill={C.blueSoft} fillOpacity="0.55" />
      <circle cx="416" cy="300" r="14" fill={C.ink} fillOpacity="0.08" />
    </svg>
  );
}

export function BusinessSupportArt({ className }: IllustProps) {
  return (
    <svg className={className} viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="bizGrad" x1="40" y1="20" x2="440" y2="340" gradientUnits="userSpaceOnUse">
          <stop stopColor={C.paperDeep} />
          <stop offset="1" stopColor={C.blueWash} />
        </linearGradient>
      </defs>
      <rect width="480" height="360" fill="url(#bizGrad)" />

      {/* board */}
      <rect x="90" y="52" width="300" height="220" rx="18" fill={C.white} stroke={C.ink} strokeOpacity="0.1" strokeWidth="1.5" />
      <rect x="112" y="76" width="110" height="12" rx="6" fill={C.ink} fillOpacity="0.12" />
      <rect x="112" y="98" width="70" height="8" rx="4" fill={C.ink} fillOpacity="0.07" />

      {/* compass / target */}
      <g className="wc-svc-art-drift">
        <circle cx="320" cy="150" r="58" fill={C.blueWash} />
        <circle cx="320" cy="150" r="40" fill="none" stroke={C.blueDeep} strokeWidth="2" strokeOpacity="0.55" />
        <circle cx="320" cy="150" r="22" fill="none" stroke={C.blue} strokeWidth="2" />
        <circle cx="320" cy="150" r="7" fill={C.blueDeep} />
        <path d="M320 98v20M320 182v20M268 150h20M372 150h20" stroke={C.ink} strokeOpacity="0.25" strokeWidth="1.5" />
      </g>

      {/* sticky notes */}
      <g className="wc-svc-art-float">
        <rect x="112" y="128" width="88" height="72" rx="10" fill="#fff8e8" stroke={C.ink} strokeOpacity="0.08" />
        <rect x="124" y="144" width="54" height="6" rx="3" fill={C.ink} fillOpacity="0.15" />
        <rect x="124" y="158" width="64" height="5" rx="2.5" fill={C.ink} fillOpacity="0.08" />
        <rect x="124" y="170" width="40" height="5" rx="2.5" fill={C.ink} fillOpacity="0.08" />
      </g>
      <g className="wc-svc-art-float wc-svc-art-float--delay">
        <rect x="212" y="140" width="72" height="64" rx="10" fill={C.blueWash} />
        <rect x="224" y="156" width="42" height="6" rx="3" fill={C.blueDeep} fillOpacity="0.55" />
        <rect x="224" y="170" width="48" height="5" rx="2.5" fill={C.ink} fillOpacity="0.12" />
      </g>

      {/* bottom cards */}
      <rect x="68" y="256" width="110" height="58" rx="12" fill={C.ink} />
      <rect x="84" y="274" width="48" height="6" rx="3" fill={C.blue} />
      <rect x="84" y="288" width="70" height="5" rx="2.5" fill="white" fillOpacity="0.2" />
      <rect x="200" y="256" width="110" height="58" rx="12" fill={C.white} stroke={C.ink} strokeOpacity="0.1" />
      <rect x="216" y="274" width="48" height="6" rx="3" fill={C.ink} fillOpacity="0.15" />
      <rect x="216" y="288" width="60" height="5" rx="2.5" fill={C.ink} fillOpacity="0.08" />
      <rect x="332" y="256" width="80" height="58" rx="12" fill={C.blueDeep} />
      <path d="M356 286l12 12 22-28" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BrandGrowthArt({ className }: IllustProps) {
  return (
    <svg className={className} viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="brandGrad" x1="40" y1="300" x2="440" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor={C.blueWash} />
          <stop offset="0.5" stopColor={C.paper} />
          <stop offset="1" stopColor={C.paperDeep} />
        </linearGradient>
      </defs>
      <rect width="480" height="360" fill="url(#brandGrad)" />

      {/* brand mark */}
      <g className="wc-svc-art-rise">
        <rect x="68" y="72" width="140" height="140" rx="28" fill={C.ink} />
        <circle cx="138" cy="142" r="38" fill="none" stroke={C.blue} strokeWidth="8" />
        <circle cx="138" cy="142" r="14" fill={C.blueSoft} />
      </g>

      {/* megaphone / broadcast */}
      <g className="wc-svc-art-float">
        <path
          d="M250 118 L330 88 V196 L250 166 Z"
          fill={C.blue}
          fillOpacity="0.85"
        />
        <rect x="214" y="126" width="42" height="32" rx="8" fill={C.blueDeep} />
        <path d="M214 158 L198 188 H230 L224 158 Z" fill={C.ink} fillOpacity="0.85" />
        <path className="wc-svc-art-pulse" d="M348 110c18 14 18 56 0 70" stroke={C.blueDeep} strokeWidth="3" strokeLinecap="round" opacity="0.55" />
        <path className="wc-svc-art-pulse wc-svc-art-pulse--delay" d="M366 94c28 22 28 90 0 112" stroke={C.blue} strokeWidth="2.5" strokeLinecap="round" opacity="0.35" />
      </g>

      {/* channel tiles */}
      <g className="wc-svc-art-float wc-svc-art-float--delay">
        <rect x="84" y="248" width="92" height="64" rx="14" fill={C.white} stroke={C.ink} strokeOpacity="0.1" />
        <rect x="100" y="268" width="36" height="8" rx="4" fill={C.blueDeep} fillOpacity="0.7" />
        <rect x="100" y="284" width="52" height="6" rx="3" fill={C.ink} fillOpacity="0.1" />
        <rect x="196" y="248" width="92" height="64" rx="14" fill={C.white} stroke={C.ink} strokeOpacity="0.1" />
        <rect x="212" y="268" width="36" height="8" rx="4" fill={C.blue} fillOpacity="0.7" />
        <rect x="212" y="284" width="52" height="6" rx="3" fill={C.ink} fillOpacity="0.1" />
        <rect x="308" y="248" width="92" height="64" rx="14" fill={C.ink} />
        <rect x="324" y="268" width="36" height="8" rx="4" fill={C.blueSoft} />
        <rect x="324" y="284" width="52" height="6" rx="3" fill="white" fillOpacity="0.2" />
      </g>
    </svg>
  );
}

export const practiceArts = {
  technology: TechnologyArt,
  "business-support": BusinessSupportArt,
  "digital-marketing": BrandGrowthArt,
} as const;
