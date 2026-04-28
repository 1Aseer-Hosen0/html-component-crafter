import { useState } from "react";

type Member = { name: string; role: string; dept: string };

const MEMBERS: Member[] = [
  { name: "Arjun Singh", role: "Founder & CEO", dept: "core" },
  { name: "Riya Patel", role: "Co-founder & COO", dept: "core" },
  { name: "Lena Marcus", role: "Head of Design", dept: "core" },
  { name: "Sam Torres", role: "Head of Content", dept: "core" },
  { name: "Priya Nair", role: "Chief Advisor", dept: "administration" },
  { name: "Omar Bakr", role: "Operations Manager", dept: "administration" },
  { name: "Anika Sharma", role: "HR Lead", dept: "hr" },
  { name: "Jin Park", role: "People Partner", dept: "hr" },
  { name: "Mia Chen", role: "Lead Writer", dept: "writing" },
  { name: "Leo Rivera", role: "Blog Editor", dept: "writing" },
  { name: "Zara Ahmed", role: "Community Manager", dept: "communication" },
  { name: "Eli Johnson", role: "Outreach Lead", dept: "communication" },
  { name: "Tara Singh", role: "Video Creator", dept: "content" },
  { name: "Noa Kim", role: "Content Strategist", dept: "content" },
  { name: "Isla Davis", role: "UI Designer", dept: "design" },
  { name: "Marco Rossi", role: "Brand Designer", dept: "design" },
  { name: "Jess Wu", role: "Marketing Lead", dept: "marketing" },
  { name: "Dani Cruz", role: "Growth Analyst", dept: "marketing" },
  { name: "Ray Okonkwo", role: "Media Producer", dept: "media" },
  { name: "Sofia Molina", role: "Photographer", dept: "media" },
  { name: "Kai Tanaka", role: "Events Manager", dept: "events" },
  { name: "Nia Osei", role: "Event Coordinator", dept: "events" },
  { name: "Dev Sharma", role: "Lead Developer", dept: "it" },
  { name: "Alex Petrov", role: "Backend Engineer", dept: "it" },
];

const TABS: { id: string; label: string }[] = [
  { id: "core", label: "Core" },
  { id: "administration", label: "Administration" },
  { id: "hr", label: "HR" },
  { id: "writing", label: "Writing" },
  { id: "communication", label: "Communication" },
  { id: "content", label: "Content Creation" },
  { id: "design", label: "Visual Design" },
  { id: "marketing", label: "Marketing" },
  { id: "media", label: "Media" },
  { id: "events", label: "Events" },
  { id: "it", label: "IT" },
];

const initials = (name: string) =>
  name.split(" ").map((n) => n[0]).join("").slice(0, 2);

export const Team = () => {
  const [active, setActive] = useState("core");
  const filtered = MEMBERS.filter((m) => m.dept === active);

  return (
    <section className="ms-ab-team" id="team">
      <div className="ms-ab-inner">
        <div className="ms-ab-team-header ms-reveal">
          <div>
            <div className="ms-ab-lbl">The people</div>
            <h2 className="ms-ab-ttl" style={{ marginBottom: 0 }}>
              Built by teens, <em>for every teen</em>
            </h2>
          </div>
          <a href="/get-involved" className="ms-ab-btn-o">Join our team →</a>
        </div>

        <div className="ms-ab-panel-bar ms-reveal" role="tablist">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={active === t.id}
              className={`ms-ab-panel-tab${active === t.id ? " active" : ""}`}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="ms-ab-team-grid">
          {filtered.length === 0 ? (
            <div className="ms-ab-team-empty">No members in this department yet.</div>
          ) : (
            filtered.map((m) => (
              <div key={m.name} className="ms-ab-team-card">
                <div className="ms-ab-team-photo">
                  <div className="ms-ab-team-initials">{initials(m.name)}</div>
                </div>
                <div className="ms-ab-team-info">
                  <div className="ms-ab-team-name">{m.name}</div>
                  <div className="ms-ab-team-role">{m.role}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};