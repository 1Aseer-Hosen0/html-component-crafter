import { CardRow, type CardItem } from "./CardRow";

const row1: CardItem[] = [
  { num: "01", tag: "Access", title: "Accessibility For All", body: "Mental health support should not be a privilege. We are committed to keeping Mindsphere free and accessible to every teen, everywhere, regardless of background.", staticLabel: "Core value" },
  { num: "02", tag: "Leadership", title: "Teen-led Always", body: "Adults advise. Teens lead. Our decisions, design, and direction are driven by the people who actually live this experience every single day.", staticLabel: "Core value" },
  { num: "03", tag: "Culture", title: "Zero Stigma", body: "Every article, tool, and conversation we create moves the needle toward a world where asking for help is seen as strength, not weakness — for every teen.", staticLabel: "Core value" },
];

const row2: CardItem[] = [
  { num: "04", tag: "Trust", title: "Safe By Design", body: "Privacy-first, trauma-informed, and moderated with care. Safety is not a feature for us — it is the foundation that everything else is built upon.", staticLabel: "Core value" },
  { num: "05", tag: "Growth", title: "Radical Honesty", body: "We say what we mean. No corporate language, no empty promises. Teens deserve honesty — about mental health, about us, and about what we can actually offer.", staticLabel: "Core value" },
  { num: "06", tag: "People", title: "Community Over Clicks", body: "We measure success by real human connection, not engagement metrics. Mindsphere exists to serve teens — not to grow a product or satisfy investors.", staticLabel: "Core value" },
];

export const Vision = () => (
  <section className="ms-ab-vision" id="vision">
    <div className="ms-ab-inner">
      <div className="ms-ab-section-header ms-reveal">
        <div className="ms-ab-lbl">Our vision</div>
        <h2 className="ms-ab-ttl" style={{ textAlign: "center" }}>
          Where we're <em>headed</em>
        </h2>
        <p className="ms-ab-body" style={{ textAlign: "center", margin: "0 auto", maxWidth: 500 }}>
          We believe a world where every teenager has access to mental health support is not just possible — it's necessary.
        </p>
      </div>
      <CardRow items={row1} />
      <CardRow items={row2} />
    </div>
  </section>
);