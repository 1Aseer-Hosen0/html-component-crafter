import eventFeatured from "@/assets/event-featured.jpg";
import { EventRow, type EventRowData } from "./parts/EventRow";

const peopleIcon = (
  <svg viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
  </svg>
);
const shieldIcon = (
  <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
);
const starIcon = (
  <svg viewBox="0 0 24 24">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const events: EventRowData[] = [
  { icon: peopleIcon, title: "Open Mic: Mental Health Stories", desc: "Teens shared their personal journeys in a safe, supportive environment.", date: "March 2025", location: "Virtual" },
  { icon: shieldIcon, title: "Mindfulness Workshop Series", desc: "4-week online workshop on breathing, journaling, and daily routines.", date: "January 2025", location: "Online" },
  { icon: starIcon, title: "Peer Support Certification Drive", desc: "Training program for teens who want to become certified peer supporters.", date: "Nov 2024", location: "Online" },
];

export const Events = () => (
  <section className="ms-section ms-events">
    <div className="ms-s-inner">
      <div className="ms-events-header ms-reveal">
        <div className="ms-s-label">What's happening</div>
        <h2 className="ms-s-title">Events & <em>Gatherings</em></h2>
      </div>
      <div className="ms-events-layout">
        <div className="ms-event-featured ms-reveal left">
          <div className="ms-event-featured-img">
            <img src={eventFeatured} alt="Teen Wellness Summit" loading="lazy" width={1024} height={576} />
            <div className="ms-event-badge upcoming">Upcoming</div>
          </div>
          <div className="ms-event-featured-body">
            <h3 className="ms-event-featured-title">Teen Wellness Summit 2025</h3>
            <p className="ms-event-featured-desc">
              Our flagship annual event bringing together teens, counselors, and mental health advocates for a full day of connection, workshops, and honest conversations about what it means to be a teenager today.
            </p>
            <div className="ms-event-meta">
              <div className="ms-event-meta-item">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Date TBA, 2025
              </div>
              <div className="ms-event-meta-item">
                <svg viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Virtual + In-person
              </div>
            </div>
            <a href="/events" className="ms-event-learn">Learn more ↗</a>
          </div>
        </div>

        <div className="ms-events-list ms-reveal right">
          {events.map((e) => <EventRow key={e.title} event={e} />)}
        </div>
      </div>
      <div className="ms-events-footer ms-reveal">
        <a href="/events" className="ms-btn-outline">See all events →</a>
      </div>
    </div>
  </section>
);
