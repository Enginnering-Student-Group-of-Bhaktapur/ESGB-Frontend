import React from "react";

function FeaturedEvent({ featuredEvent }) {
  return (
    <div className="featured_event shadow event_shadow_bg p-2 rounded">
      <div className="featured_event_title">
        <a href={`events/${featuredEvent.slug}`} className="featuredEventTitle">
          <h2 className="py-2">{featuredEvent.title}</h2>
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
