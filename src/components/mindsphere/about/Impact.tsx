const stats = [
  { num: "2.4k+", label: "Community members" },
  { num: "180+", label: "Resources in library" },
  { num: "50+", label: "Volunteer supporters" },
  { num: "12+", label: "Countries reached" },
];

export const Impact = () => (
  <div className="ms-ab-impact">
    <div className="ms-ab-impact-orb" />
    <div className="ms-ab-impact-inner">
      <div className="ms-ab-impact-top ms-reveal">
        <div>
          <div className="ms-ab-impact-title">
            Small team.<br />
            <em>Real impact.</em>
          </div>
        </div>
        <div className="ms-ab-impact-body">
          Every number here represents a real teen who found something they were looking for — a tool, a word, a community, a moment of quiet clarity.
        </div>
      </div>
      <div className="ms-ab-impact-grid ms-reveal">
        {stats.map((s) => (
          <div key={s.label} className="ms-ab-impact-card">
            <div className="ms-ab-impact-num">{s.num}</div>
            <div className="ms-ab-impact-lbl">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);