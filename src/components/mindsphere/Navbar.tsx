import { useState } from "react";
import { useNavbarScroll, useTheme } from "./hooks";

const links = [
  { href: "/", label: "Home" },
  { href: "/support", label: "Support" },
  { href: "/community", label: "Community" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export const Navbar = () => {
  const { scrolled, hide } = useNavbarScroll();
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };
  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  return (
    <>
      <nav className={`ms-nav${scrolled ? " scrolled" : ""}${hide ? " hide" : ""}`} id="navbar">
        <div className="ms-nav-inner">
          <a href="/" className="ms-nav-logo">
            Mind<span>sphere</span>
          </a>
          <ul className="ms-nav-links">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="ms-nav-right">
            <button className="ms-theme-btn" onClick={toggle} title="Toggle theme" aria-label="Toggle theme">
              {theme === "dark" ? "☾" : "☀"}
            </button>
            <a href="/get-involved" className="ms-btn-nav">Get Involved</a>
          </div>
          <button
            className={`ms-hamburger${menuOpen ? " open" : ""}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`ms-mobile-menu${menuOpen ? " open" : ""}`}>
        {links.map((l) => (
          <a key={l.label} href={l.href} onClick={closeMenu}>{l.label}</a>
        ))}
        <a href="/get-involved" className="ms-mob-btn" onClick={closeMenu}>Get Involved →</a>
      </div>
    </>
  );
};
