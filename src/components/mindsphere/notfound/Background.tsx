import { useEffect, useRef } from "react";

export const Background = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const sizes = [3, 4, 5, 6, 8, 10];
    const count = 22;
    const nodes: HTMLDivElement[] = [];
    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      p.className = "ms-nf-particle";
      const size = sizes[Math.floor(Math.random() * sizes.length)];
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${5 + Math.random() * 90}%`;
      p.style.bottom = `${Math.random() * 60}%`;
      p.style.setProperty("--dur", `${6 + Math.random() * 8}s`);
      p.style.setProperty("--delay", `${Math.random() * 8}s`);
      container.appendChild(p);
      nodes.push(p);
    }
    return () => nodes.forEach((n) => n.remove());
  }, []);

  return (
    <div className="ms-nf-bg" aria-hidden>
      <div className="ms-nf-grid" />
      <div className="ms-nf-orb ms-nf-orb1" />
      <div className="ms-nf-orb ms-nf-orb2" />
      <div className="ms-nf-orb ms-nf-orb3" />
      <div className="ms-nf-particles" ref={ref} />
    </div>
  );
};