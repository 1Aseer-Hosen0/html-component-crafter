import { testimonials, testimonialsRow2 } from "./data/testimonials";
import { TestimonialCard } from "./parts/TestimonialCard";

export const Testimonials = () => (
  <section className="ms-section ms-testimonials">
    <div className="ms-s-inner">
      <div className="ms-testimonials-header ms-reveal">
        <div className="ms-s-label">Community voices</div>
        <h2 className="ms-s-title">What teens are <em>saying</em></h2>
      </div>
    </div>

    <div className="ms-marquee-outer">
      <div className="ms-marquee-track">
        {[...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard key={`r1-${i}`} t={t} />
        ))}
      </div>
    </div>

    <div className="ms-marquee-outer ms-marquee-row2">
      <div className="ms-marquee-track">
        {[...testimonialsRow2, ...testimonialsRow2].map((t, i) => (
          <TestimonialCard key={`r2-${i}`} t={t} />
        ))}
      </div>
    </div>
  </section>
);
