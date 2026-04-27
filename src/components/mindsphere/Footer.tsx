const cols = [
  {
    label: "Platform",
    links: [
      ["Support Tools", "/support"],
      ["Mood Tracker", "/support#mood"],
      ["Initial Screening", "/support#screening"],
      ["Helpline", "/support#helpline"],
      ["Resources", "/resources"],
    ],
  },
  {
    label: "Community",
    links: [
      ["Community Hub", "/community"],
      ["Blog", "/blog"],
      ["Events", "/events"],
      ["Discord", "/community#discord"],
      ["Facebook Group", "/community#facebook"],
    ],
  },
  {
    label: "Organization",
    links: [
      ["About Us", "/about"],
      ["Our Team", "/about#team"],
      ["Get Involved", "/get-involved"],
      ["Verify Certificate", "/get-involved#cert"],
      ["Contact", "/get-involved#contact"],
    ],
  },
];

export const Footer = () => (
  <footer className="ms-footer">
    <div className="ms-footer-grid">
      <div>
        <div className="ms-footer-logo">Mind<span>sphere</span></div>
        <div className="ms-footer-tagline">
          Teens for teens — you are not alone. A mental wellness platform built with genuine care.
        </div>
        <div className="ms-footer-social">
          {["ig", "tw", "in", "dc", "fb"].map((s) => (
            <a key={s} href="#" title={s.toUpperCase()}>{s}</a>
          ))}
        </div>
      </div>
      {cols.map((c) => (
        <div key={c.label}>
          <div className="ms-footer-col-label">{c.label}</div>
          <div className="ms-footer-links">
            {c.links.map(([label, href]) => (
              <a key={label} href={href}>{label}</a>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="ms-footer-bottom">
      <div className="ms-footer-copy">© 2025 Mindsphere. All rights reserved.</div>
      <div className="ms-footer-legal">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
        <a href="/cookies">Cookies</a>
      </div>
    </div>
  </footer>
);
