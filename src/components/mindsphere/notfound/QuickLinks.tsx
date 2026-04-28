const links = [
  { href: "/support", label: "Support", path: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" },
  { href: "/community", label: "Community", path: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75" },
  { href: "/resources", label: "Resources", path: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" },
  { href: "/blog", label: "Blog", path: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6" },
  { href: "/about", label: "About", path: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M12 8v4 M12 16h.01" },
  { href: "/get-involved", label: "Get Involved", path: "M12 5v14 M5 12h14" },
];

export const QuickLinks = () => (
  <>
    <div className="ms-nf-links-label">Or jump to</div>
    <div className="ms-nf-links-grid">
      {links.map((l) => (
        <a key={l.href} href={l.href} className="ms-nf-quick-link">
          <span className="ms-nf-ql-icon">
            <svg viewBox="0 0 24 24">
              <path d={l.path} />
            </svg>
          </span>
          {l.label}
        </a>
      ))}
    </div>
  </>
);