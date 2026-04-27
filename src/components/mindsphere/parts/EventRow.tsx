import type { ReactNode } from "react";

export type EventRowData = {
  icon: ReactNode;
  title: string;
  desc: string;
  date: string;
  location: string;
};

export const EventRow = ({ event }: { event: EventRowData }) => (
  <div className="ms-event-row" role="button" tabIndex={0}>
    <div className="ms-event-row-img">{event.icon}</div>
    <div className="ms-event-row-content">
      <div className="ms-event-row-title">{event.title}</div>
      <div className="ms-event-row-desc">{event.desc}</div>
      <div className="ms-event-row-meta">
        <span>
          <svg viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          {event.date}
        </span>
        <span>
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
          {event.location}
        </span>
      </div>
    </div>
    <div className="ms-event-row-arrow">↗</div>
  </div>
);
