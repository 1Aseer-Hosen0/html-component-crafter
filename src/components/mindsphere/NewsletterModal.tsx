import { useEffect, useState } from "react";

type Props = { open: boolean; onClose: () => void };

export const NewsletterModal = ({ open, onClose }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ name: false, email: false });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setName("");
        setEmail("");
        setErrors({ name: false, email: false });
        setSuccess(false);
      }, 400);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const submit = () => {
    const next = { name: !name.trim(), email: !email.trim() };
    setErrors(next);
    if (next.name || next.email) return;
    setSuccess(true);
    setTimeout(() => onClose(), 2800);
  };

  return (
    <div
      className={`ms-modal-overlay${open ? " open" : ""}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      aria-hidden={!open}
    >
      <div className="ms-modal" role="dialog" aria-modal="true">
        <button className="ms-modal-close" onClick={onClose} aria-label="Close">×</button>
        {success ? (
          <div className="ms-modal-success">
            <div className="ms-modal-success-icon">✦</div>
            <div className="ms-modal-success-title">You're in!</div>
            <div className="ms-modal-success-body">
              Welcome to Mindsphere. Your first newsletter is on its way soon.
            </div>
          </div>
        ) : (
          <>
            <div className="ms-modal-title">Stay connected 🌱</div>
            <div className="ms-modal-sub">
              Get mental health tips, Mindsphere updates, and community news — once a week, never more.
            </div>
            <div className="ms-modal-form">
              <input className={`ms-modal-input${errors.name ? " invalid" : ""}`} placeholder="Your first name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="given-name" />
              <input className={`ms-modal-input${errors.email ? " invalid" : ""}`} type="email" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
              <button className="ms-modal-submit" onClick={submit}>Subscribe →</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
