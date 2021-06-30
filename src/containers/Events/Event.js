import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import axiosInstance from "../../HelperFunction/Axios";

import FeaturedEvent from "../../components/Events/FeaturedEventFormat";
import MediaEvent from "../../components/Events/Media/MediaEvent";

function Event() {
  const [featuredEvents, setFeaturedEvents] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchFeaturedEventData = async () => {
      try {
        const res = await axiosInstance.get("/events/featured/");
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
      <Helmet>
        <meta
          name="description"
          content="ESGB is an Engineering Student Group of Bhaktapur from Pulchowk Campus."
        />
        <title>Events - Enginnering Student Group of Bhaktapur(ESGB)</title>
      </Helmet>
      <section className="container">
        <div className="row pt-4">
          <div className="col-md-8">{displayFeaturedEvent()}</div>
          <div className="col-md-4 shadow p-3 event_shadow_bg">
            <MediaEvent />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Event;
