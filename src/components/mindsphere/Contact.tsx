import { useState } from "react";

const socials = [
  { cls: "ms-si-ig", abbr: "ig", name: "Instagram", handle: "@mindsphere.org" },
  { cls: "ms-si-fb", abbr: "f", name: "Facebook", handle: "Mindsphere Community" },
  { cls: "ms-si-li", abbr: "in", name: "LinkedIn", handle: "Mindsphere Organization" },
  { cls: "ms-si-dc", abbr: "dc", name: "Discord", handle: "Mindsphere Server" },
  { cls: "ms-si-tw", abbr: "x", name: "Twitter / X", handle: "@mindsphere_org" },
];

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [sent, setSent] = useState(false);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [k]: e.target.value });
    if (errors[k]) setErrors({ ...errors, [k]: false });
  };

  const submit = () => {
    const next: Record<string, boolean> = {};
    (Object.keys(form) as (keyof typeof form)[]).forEach((k) => {
      if (!form[k].trim()) next[k] = true;
    });
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }
    setSent(true);
  };

  return (
    <section className="ms-contact-section" id="contact">
      <div className="ms-contact-inner">
        <div className="ms-contact-header ms-reveal">
          <div className="ms-s-label">Contact Us</div>
          <h2 className="ms-contact-title">Let's <em>Talk</em></h2>
          <p className="ms-contact-sub">Have a question, idea, or just want to say hello? We read every message.</p>
        </div>

        <div className="ms-contact-grid">
          <div className="ms-contact-form ms-reveal left">
            {sent ? (
              <div className="ms-form-success">
                <div className="ms-form-success-icon">✦</div>
                <div className="ms-form-success-title">Message sent!</div>
                <div className="ms-form-success-body">
                  Thank you for reaching out. We'll get back to you within 48 hours. In the meantime, feel free to explore the Mindsphere community.
                </div>
              </div>
            ) : (
              <div>
                <div className="ms-form-row">
                  <div className="ms-form-group">
                    <label className="ms-form-label" htmlFor="cf-name">Your Name</label>
                    <input id="cf-name" className={`ms-form-input${errors.name ? " invalid" : ""}`} value={form.name} onChange={update("name")} placeholder="e.g. Rania Islam" autoComplete="given-name" />
                  </div>
                  <div className="ms-form-group">
                    <label className="ms-form-label" htmlFor="cf-email">Email Address</label>
                    <input id="cf-email" type="email" className={`ms-form-input${errors.email ? " invalid" : ""}`} value={form.email} onChange={update("email")} placeholder="your@email.com" autoComplete="email" />
                  </div>
                </div>
                <div className="ms-form-group">
                  <label className="ms-form-label" htmlFor="cf-subject">Subject</label>
                  <input id="cf-subject" className={`ms-form-input${errors.subject ? " invalid" : ""}`} value={form.subject} onChange={update("subject")} placeholder="What's this about?" />
                </div>
                <div className="ms-form-group">
                  <label className="ms-form-label" htmlFor="cf-message">Message</label>
                  <textarea id="cf-message" className={`ms-form-textarea${errors.message ? " invalid" : ""}`} value={form.message} onChange={update("message")} placeholder="Share your thoughts, questions, or feedback…" />
                </div>
                <button className="ms-form-submit" onClick={submit}>
                  Send Message
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          <div className="ms-contact-info ms-reveal right">
            <div>
              <div className="ms-s-label">Find Us Online</div>
              <div className="ms-contact-info-tagline">"Every great conversation starts with a single message."</div>
            </div>
            <div className="ms-contact-divider" />
            <div>
              <div className="ms-contact-social-label">Social Channels</div>
              <div className="ms-social-list">
                {socials.map((s) => (
                  <a key={s.name} href="#" className="ms-social-item">
                    <div className={`ms-social-icon ${s.cls}`}>{s.abbr}</div>
                    <div>
                      <div className="ms-social-name">{s.name}</div>
                      <div className="ms-social-handle">{s.handle}</div>
                    </div>
                    <span className="ms-social-arrow">→</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="ms-contact-direct">
              <div className="ms-contact-direct-label">Direct Email</div>
              <div className="ms-contact-direct-email">hello@mindsphere.org</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
