export const Hero = () => (
  <section className="ms-hero" id="home">
    <div className="ms-hero-grid" />
    <div className="ms-hero-orb ms-hero-orb1" />
    <div className="ms-hero-orb ms-hero-orb2" />
    <div className="ms-hero-inner">
      <div className="ms-hero-eyebrow">
        <span>Mental wellness platform</span>
        <span>Teens for teens</span>
      </div>
      <div>
        <h1 className="ms-hero-h1">
          You Are<br /><em>Not Alone.</em>
        </h1>
      </div>
      <div className="ms-hero-sub-row">
        <span>Safe space for every teen</span>
        <div className="ms-divider" />
        <span>Peer-led support</span>
        <div className="ms-divider" />
        <span>Built with care</span>
      </div>
      <div className="ms-hero-bottom">
        <div className="ms-hero-cta-group">
          <p className="ms-hero-tagline">
            A platform where teenagers find tools, community, and support — built by teens who truly get it.
          </p>
          <div className="ms-hero-btns">
            <a href="/get-involved" className="ms-btn-primary">Join the community →</a>
            <a href="/about" className="ms-btn-outline">Learn more</a>
          </div>
        </div>
        <div className="ms-hero-stat ms-reveal right">
          <div className="ms-hero-stat-num">2.4k+</div>
          <div className="ms-hero-stat-label">
            teens in our community report feeling less alone after joining Mindsphere
          </div>
          <div className="ms-hero-stat-author">Teen community · Est. 2024</div>
        </div>
      </div>
    </div>
    <div className="ms-scroll-ind">
      <div className="ms-scroll-ind-line" />
      <span>Scroll</span>
    </div>
  </section>
);
