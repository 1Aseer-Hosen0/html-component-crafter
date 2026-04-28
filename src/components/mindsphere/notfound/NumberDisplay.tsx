import { useState } from "react";

const msgs = ["🧠", "🌱", "💙", "✨", "🤝", "💬", "🧘", "🌿", "😌"];

export const NumberDisplay = () => {
  const [idx, setIdx] = useState(0);
  const [pulse, setPulse] = useState(false);

  const onClick = () => {
    setIdx((i) => (i + 1) % msgs.length);
    setPulse(true);
    setTimeout(() => setPulse(false), 250);
  };

  return (
    <div className="ms-nf-num-wrap">
      <div className="ms-nf-num">
        4
        <span className="ms-nf-zero">
          0
          <span
            className={`ms-nf-zero-inner${pulse ? " pulse" : ""}`}
            onClick={onClick}
            role="button"
            tabIndex={0}
            aria-label="Easter egg"
          >
            {msgs[idx]}
          </span>
        </span>
        4
      </div>
      <div className="ms-nf-num-line" />
    </div>
  );
};