import React from "react";

function FeaturedEvent({ featuredEvent }) {
  return (
    <div className="featured_event shadow event_shadow_bg p-2 rounded">
      <div className="featured_event_title">
        <h1>{ featuredEvent.title }</h1>
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
