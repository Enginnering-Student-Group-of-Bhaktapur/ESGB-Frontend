import React, { useState, useEffect } from "react";
import axios from "axios";

import FeaturedEvent from "../../components/Events/FeaturedEventFormat";
import MediaEvent from "../../components/Events/MediaEvent";

function Event() {
  const [featuredEvents, setFeaturedEvents] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchFeaturedEventData = async () => {
      try {
        const res = await axios.get(
          "http://127.0.0.1:8000/api/events/featured/"
        );
        setFeaturedEvents(res.data.results);
      } catch (err) {
        console.log("Error Fetching Featured Event Data");
      }
    };

    fetchFeaturedEventData();
  }, []);

  const displayFeaturedEvent = () => {
    let result = [];

    featuredEvents.map((featuredEvent) => {
      return result.push(
        <FeaturedEvent featuredEvent={featuredEvent} key={featuredEvent.id} />
      );
    });

    return result;
  };

  return (
    <React.Fragment>
      <section className="container">
        <div className="row pt-4">
          <div className="col-md-8">{displayFeaturedEvent()}</div>
          <div className="col-md-4 shado p-3 event_shadow_bg">
            <MediaEvent />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Event;
