import React from "react";

function FeaturedEvent({ featuredEvent }) {
  return (
    <div className="featured_event shadow event_shadow_bg p-2 rounded">
      <div className="featured_event_title">
        <a href={`events/${featuredEvent.slug}`} className="featuredEventTitle">
          <h1>{featuredEvent.title}</h1>
        </a>
      </div>
      <img
        src={featuredEvent.main_image}
        alt="featured event"
        className="img-fluid"
      />
    </div>
  );
}

export default FeaturedEvent;
