type Props = {
  count: number;
  label?: string;
};

/** Large mark for the industries hero — bold like WAC, WC blues only. */
export function IndustriesHeroFigure({ count, label = "projects" }: Props) {
  return (
    <div className="wc-ind-stage-figure" aria-hidden>
      <div className="wc-ind-stage-figure-glow" />
      <div className="wc-ind-stage-figure-ring wc-ind-stage-figure-ring--a" />
      <div className="wc-ind-stage-figure-ring wc-ind-stage-figure-ring--b" />
      <ul className="wc-ind-stage-figure-dots">
        {Array.from({ length: 8 }, (_, i) => (
          <li key={i} style={{ ["--i" as string]: i }} />
        ))}
      </ul>
      <p className="wc-ind-stage-stat">
        <span className="wc-ind-stage-stat-num">{count}</span>
        <span className="wc-ind-stage-stat-plus">+</span>
      </p>
      <p className="wc-ind-stage-stat-label">{label}</p>
    </div>
  );
}
