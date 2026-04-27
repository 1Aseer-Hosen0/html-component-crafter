const partners = [
  "Youth Mental Health Foundation",
  "Teen Minds Collective",
  "Wellbeing Alliance",
  "Safe Space Network",
  "MindBridge Initiative",
  "The Resilience Project",
  "OpenHeart NGO",
  "Global Youth Voices",
];

export const Collab = () => (
  <div className="ms-collab">
    <div className="ms-collab-label">Organizations & partners who believe in our mission</div>
    <div className="ms-collab-marquee">
      <div className="ms-collab-track">
        {[...partners, ...partners].map((p, i) => (
          <span key={i} className="ms-collab-item">
            {p}
            <span className="ms-collab-sep" />
          </span>
        ))}
      </div>
    </div>
  </div>
);
