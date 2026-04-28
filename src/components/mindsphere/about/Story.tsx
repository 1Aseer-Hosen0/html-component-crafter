import aboutTeam from "@/assets/about-team.jpg";

export const Story = () => (
  <section className="ms-ab-story" id="story">
    <div className="ms-ab-inner">
      <div className="ms-ab-story-grid">
        <div className="ms-ab-story-img ms-reveal left">
          <div className="ms-ab-story-img-card">
            <img src={aboutTeam} alt="Mindsphere team" loading="lazy" width={1024} height={768} />
          </div>
          <div className="ms-ab-story-float">
            <div className="ms-ab-sf-icon">
              <svg viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <div className="ms-ab-sf-num">500+</div>
              <div className="ms-ab-sf-lbl">Active members</div>
            </div>
          </div>
        </div>

        <div className="ms-ab-story-text ms-reveal right d1">
          <div className="ms-ab-story-badge">✦ About our organization</div>
          <div className="ms-ab-lbl">Our story</div>
          <h2 className="ms-ab-ttl">
            Born from a<br />
            <em>real conversation</em>
          </h2>
          <p className="ms-ab-body">
            It started simply — a few teens talking about the things nobody wanted to talk about. Anxiety before exams. Loneliness in crowded hallways. The weight of pretending everything was fine. We looked for a space that felt like us, and we couldn't find one.
          </p>
          <p className="ms-ab-body">
            So we built Mindsphere. Not as a product. As a promise — that no teenager should have to navigate their mental health alone, without tools, without community, without someone who genuinely gets it.
          </p>
          <div className="ms-ab-story-btns">
            <a href="#vision" className="ms-ab-btn-p">Our Vision ↓</a>
            <a href="#team" className="ms-ab-btn-o">Meet the team</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);