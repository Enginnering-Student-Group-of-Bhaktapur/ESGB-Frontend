import React from "react";

function EventDetailFormat({ event }) {
  return (
    <div className="featured_event shadow event_shadow_bg p-4 rounded">
      <div className="featured_event_title py-2">
        <h1>{event.title}</h1>
        <span>
          <strong>Date:</strong>
          {event.date_of_event}
        </span>
      </div>
      <div className="main_image">
        <img src={event.main_image} alt="main" className="img-fluid" />
      </div>
      <div className="event description">
        <p className="py-4">{event.description}</p>
      </div>
    </div>
  );
}

export default EventDetailFormat;
