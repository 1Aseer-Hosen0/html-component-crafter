import { useTheme } from "@/components/mindsphere/hooks";
import { useEffect, useState } from "react";

export const NotFoundNav = () => {
  const { theme, toggle } = useTheme();
  const [tinted, setTinted] = useState(false);

  useEffect(() => {
    const onScroll = () => setTinted(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`ms-nf-nav${tinted ? " tinted" : ""}`}>
      <div className="ms-nf-nav-inner">
        <a href="/" className="ms-nf-logo">
          Mind<span>sphere</span>
        </a>
        <div className="ms-nf-nav-rx">
          <button className="ms-nf-tbtn" onClick={toggle} aria-label="Toggle theme">
            {theme === "dark" ? "☾" : "☀"}
          </button>
          <a href="/" className="ms-nf-btn-home">Go Home</a>
        </div>
      </div>
    </nav>
  );
};