type NewsletterProps = { onOpen: () => void };

export const Newsletter = ({ onOpen }: NewsletterProps) => (
  <section className="ms-newsletter">
    <div className="ms-s-inner">
      <div className="ms-newsletter-inner ms-reveal">
        <div className="ms-s-label">Stay connected</div>
        <h2 className="ms-s-title">Stay in the <em>loop</em></h2>
        <p className="ms-newsletter-body">
          Get weekly mental health tips, Mindsphere updates, community highlights, and event announcements — delivered to your inbox. No spam, ever.
        </p>
        <button className="ms-newsletter-btn" onClick={onOpen}>
          <svg viewBox="0 0 24 24">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          Subscribe to newsletter
        </button>
        <div className="ms-newsletter-note">No spam. Unsubscribe anytime.</div>
      </div>
    </div>
  </section>
);
