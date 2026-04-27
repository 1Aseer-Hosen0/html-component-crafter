import aboutTeam from "@/assets/about-team.jpg";

const features = [
  { icon: "🧑‍🤝‍🧑", title: "Community Driven", body: "Every feature, tool, and decision is shaped by the teens who use it — not a boardroom." },
  { icon: "🎯", title: "Goal Oriented", body: "We build with purpose — every resource, check-in, and tool is designed to create real impact." },
  { icon: "💡", title: "Innovation Hub", body: "Peer support meets modern technology — we're redefining what mental wellness looks like for Gen Z." },
];

export const About = () => (
  <section className="ms-section ms-about">
    <div className="ms-s-inner">
      <div className="ms-about-grid">
        <div className="ms-about-img-wrap ms-reveal left">
          <div className="ms-about-img">
            <img src={aboutTeam} alt="Mindsphere community of teens together" loading="lazy" width={1024} height={768} />
          </div>
          <div className="ms-about-float">
            <div className="ms-about-float-icon">
              <svg viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <div className="ms-about-float-num">500+</div>
              <div className="ms-about-float-label">Active members</div>
            </div>
          </div>
        </div>

        <div className="ms-reveal right">
          <div className="ms-about-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4l3 3" />
            </svg>
            About our organization
          </div>
          <div className="ms-s-label">Who we are</div>
          <h2 className="ms-s-title">Teens For <em>Teens</em></h2>
          <p className="ms-s-body">
            Mindsphere was built by teenagers who understood that mental health needed a different kind of space — one without clinical jargon, without judgment, and without adults speaking for the people who actually live this experience every day. We are that space.
          </p>
          <div className="ms-feature-cards">
            {features.map((f, i) => (
              <div key={f.title} className={`ms-feature-card ms-reveal d${i + 1}`}>
                <div className="ms-fc-icon">{f.icon}</div>
                <div>
                  <div className="ms-fc-title">{f.title}</div>
                  <div className="ms-fc-body">{f.body}</div>
                </div>
              </div>
            ))}
          </div>
          <a href="/about" className="ms-btn-primary" style={{ display: "inline-flex" }}>Know More →</a>
        </div>
      </div>
    </div>
  </section>
);
