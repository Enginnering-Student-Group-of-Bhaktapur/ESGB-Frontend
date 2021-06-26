import React from "react";

import EventGallery from "./EventLightGallery";

function EventDetailFormat({ event }) {
  const event_sub_image = [];
  const max_no_of_images = 10;

  for(let i = 1; i <= max_no_of_images; i++){
    if(event["image_".concat(i)] != null){
      event_sub_image.push(event["image_".concat(i)]);
    }
  }

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
      <EventGallery event_images = {event_sub_image} />
    </div>
  );
}

export default EventDetailFormat;
