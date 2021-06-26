import React from "react";

function MediaEventFormat({ mediaEvent }) {
  return (
    <div className="recent_events pb-4">
      <div className="media">
        <img
          className="mr-3 img-fluid"
          src={mediaEvent.main_image}
          alt="Event Media"
          width="100"
        />
        <div className="media-body">
          <h6 className="m-0">{mediaEvent.title}</h6>
          <p className="m-0">{mediaEvent.description.slice(0, 60)}...</p>
          <a href={`/events/${mediaEvent.slug}`}>Continue reading...</a>
        </div>
      </div>
    </div>
  );
}

export default MediaEventFormat;
