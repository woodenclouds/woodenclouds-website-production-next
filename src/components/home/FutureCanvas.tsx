"use client";

export function FutureCanvas() {
  return (
    <div className="wc-future-stage" aria-hidden>
      <div className="wc-future-wash" />
      <div className="wc-future-wash-blur" />
      <div className="wc-future-horizon" />
      <div className="wc-future-beams">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="wc-future-arcs">
        <span className="wc-future-arc wc-future-arc--a" />
        <span className="wc-future-arc wc-future-arc--b" />
        <span className="wc-future-arc wc-future-arc--c" />
      </div>

      <div className="wc-future-badge">
        <svg viewBox="0 0 200 200" className="wc-future-badge__spin">
          <defs>
            <path
              id="wcFutureBadgeCircle"
              d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"
            />
          </defs>
          <circle cx="100" cy="100" r="88" className="wc-future-badge__ring" />
          <circle
            cx="100"
            cy="100"
            r="78"
            className="wc-future-badge__ring wc-future-badge__ring--inner"
          />
          <text className="wc-future-badge__text">
            <textPath href="#wcFutureBadgeCircle" startOffset="0%">
              Future Woodenclouds — Future Woodenclouds —
            </textPath>
          </text>
        </svg>
        <div className="wc-future-badge__core">
          <span>Future</span>
          <strong>Woodenclouds</strong>
        </div>
      </div>

      <p className="wc-future-year">20—30</p>
    </div>
  );
}
