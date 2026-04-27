export type FaqItemProps = {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
  delay?: 1 | 2 | 3 | 4;
};

export const FaqItem = ({ q, a, open, onToggle, delay }: FaqItemProps) => (
  <div className={`ms-faq-item ms-reveal${delay ? ` d${delay}` : ""}${open ? " open" : ""}`}>
    <button className="ms-faq-q" onClick={onToggle} aria-expanded={open}>
      {q}
      <span className="ms-faq-icon">+</span>
    </button>
    <div className="ms-faq-a">
      <div className="ms-faq-a-inner">
        <div className="ms-faq-a-avatar">M</div>
        <div className="ms-faq-a-text">{a}</div>
      </div>
    </div>
  </div>
);
