import { CardRow, type CardItem } from "./CardRow";

const row1: CardItem[] = [
  { num: "01", tag: "Community", title: "Peer Support Space", body: "A moderated, safe community where teens talk to teens. No judgment. No clinical language. Just honest, human connection with people who actually understand.", link: { label: "Learn more", href: "/community" } },
  { num: "02", tag: "Tools", title: "Self-help Tools", body: "Mood trackers, daily check-ins, breathing exercises, journaling prompts — tools designed around how teens actually think and feel, not how textbooks say they should.", link: { label: "Learn more", href: "/support" } },
  { num: "03", tag: "Resources", title: "Resource Library", body: "Curated articles, guides, worksheets, and videos — all vetted for accuracy and written in a language that teenagers actually understand and connect with.", link: { label: "Learn more", href: "/resources" } },
];

const row2: CardItem[] = [
  { num: "04", tag: "Support", title: "Volunteer Helpline", body: "Trained teen volunteers available to listen — not diagnose, not lecture. Just be there. Plus connections to professional services for those who need more support.", link: { label: "Learn more", href: "/support" } },
  { num: "05", tag: "Growth", title: "Certification Program", body: "We train and certify teen peer supporters, giving young people real skills and recognized credentials to support others in their communities.", link: { label: "Learn more", href: "/get-involved" } },
  { num: "06", tag: "Awareness", title: "Global Campaigns", body: "Campaigns, events, and collaborations that push teen mental health into the conversation — locally and internationally — breaking the stigma one story at a time.", link: { label: "Learn more", href: "/community" } },
];

export const WhatWeDo = () => (
  <section className="ms-ab-wwd" id="whatwedo">
    <div className="ms-ab-inner">
      <div className="ms-ab-section-header ms-reveal">
        <div className="ms-ab-lbl">What we do</div>
        <h2 className="ms-ab-ttl" style={{ textAlign: "center" }}>
          More than a platform —<br />a <em>support system</em>
        </h2>
        <p className="ms-ab-body" style={{ textAlign: "center", margin: "0 auto", maxWidth: 500 }}>
          We built Mindsphere around one simple idea: teens need real tools, not corporate fluff.
        </p>
      </div>
      <CardRow items={row1} />
      <CardRow items={row2} />
    </div>
  </section>
);