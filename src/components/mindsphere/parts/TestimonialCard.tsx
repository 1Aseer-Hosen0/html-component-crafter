import type { Testimonial } from "../data/testimonials";

export const TestimonialCard = ({ t }: { t: Testimonial }) => (
  <div className="ms-tcard">
    <div className="ms-tcard-stars">
      {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
    </div>
    <p className="ms-tcard-quote">{t.quote}</p>
    <div className="ms-tcard-author">
      <div className="ms-tcard-avatar" style={{ background: t.bg }}>{t.initials}</div>
      <div>
        <div className="ms-tcard-name">{t.name}</div>
        <div className="ms-tcard-role">{t.role}</div>
      </div>
    </div>
  </div>
);
