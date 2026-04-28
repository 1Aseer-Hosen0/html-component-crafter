import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Background } from "@/components/mindsphere/notfound/Background";
import { NotFoundNav } from "@/components/mindsphere/notfound/NotFoundNav";
import { NumberDisplay } from "@/components/mindsphere/notfound/NumberDisplay";
import { QuickLinks } from "@/components/mindsphere/notfound/QuickLinks";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    const prev = document.title;
    document.title = "Page Not Found — Mindsphere";
    return () => {
      document.title = prev;
    };
  }, [location.pathname]);

  return (
    <div className="ms-nf-shell">
      <Background />
      <NotFoundNav />
      <main className="ms-nf-main">
        <div className="ms-nf-content">
          <div className="ms-nf-badge">
            <span className="ms-nf-badge-dot" />
            Error 404 · Page not found
          </div>
          <NumberDisplay />
          <h1 className="ms-nf-headline">
            Looks like you've <em>wandered off</em>
            <br />
            the beaten path.
          </h1>
          <p className="ms-nf-subtext">
            The page you're looking for doesn't exist — it may have been moved, deleted, or maybe it never existed in the first place. It happens to everyone.
          </p>
          <div className="ms-nf-actions">
            <a href="/" className="ms-nf-btn-p">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Take me home
            </a>
            <a href="/support" className="ms-nf-btn-o">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              Go to Support
            </a>
          </div>
          <QuickLinks />
        </div>
      </main>
      <div className="ms-nf-footer">
        © 2025 Mindsphere &nbsp;·&nbsp;
        <a href="/privacy">Privacy</a> &nbsp;·&nbsp;
        <a href="/terms">Terms</a> &nbsp;·&nbsp;
        <a href="/get-involved">Contact</a>
      </div>
    </div>
  );
};

export default NotFound;
