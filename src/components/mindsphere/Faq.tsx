import { useState } from "react";
import { faqs } from "./data/faqs";
import { FaqItem } from "./parts/FaqItem";

export const Faq = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="ms-section ms-faq">
      <div className="ms-s-inner">
        <div className="ms-faq-inner-wrap">
          <div className="ms-faq-header ms-reveal">
            <h2 className="ms-s-title" style={{ fontSize: "2rem", fontWeight: 400 }}>FAQ</h2>
            <p>Get quick answers to your questions.<br />To understand more, contact us.</p>
          </div>
          <div className="ms-faq-list">
            {faqs.map((f, i) => (
              <FaqItem
                key={f.q}
                q={f.q}
                a={f.a}
                open={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
                delay={i === 0 ? undefined : (i as 1 | 2 | 3 | 4)}
              />
            ))}
          </div>
          <div className="ms-faq-footer ms-reveal">
            <a href="/get-involved" className="ms-btn-faq-filled">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};
