interface CardItem {
  num: string;
  tag: string;
  title: string;
  body: string;
  link?: { label: string; href: string };
  staticLabel?: string;
}

export const CardRow = ({ items }: { items: CardItem[] }) => (
  <div className="ms-ab-row">
    {items.map((it, i) => (
      <div key={it.num} className={`ms-ab-card ms-ab-reveal d${i + 1}`}>
        <div className="ms-ab-card-num">{it.num}</div>
        <span className="ms-ab-card-tag">{it.tag}</span>
        <div className="ms-ab-card-title">{it.title}</div>
        <div className="ms-ab-card-body">{it.body}</div>
        {it.link ? (
          <a href={it.link.href} className="ms-ab-card-link">
            {it.link.label} <span className="ms-ab-card-arrow">↗</span>
          </a>
        ) : (
          <div className="ms-ab-card-link">
            {it.staticLabel ?? "Core value"} <span className="ms-ab-card-arrow">→</span>
          </div>
        )}
      </div>
    ))}
  </div>
);

export type { CardItem };