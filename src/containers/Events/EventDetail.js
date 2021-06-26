import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";


import EventDetailFormat from "../../components/Events/EventDetailFormat";
import MediaEvent from "../../components/Events/Media/MediaEvent";

function EventDetail(props) {
  const [event, setEvent] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    const slug = props.match.params.slug;
    axios
      .get(`http://127.0.0.1:8000/api/events/${slug}/`)
      .then((res) => {
        setEvent(res.data);
      })
      .catch((err) => {
        console.log("Error Fetching Data");
      });
  }, [props.match.params.slug]);

  return (
    <React.Fragment>
      <Helmet>
        <meta
          name="description"
          content="ESGB is an Engineering Student Group of Bhaktapur from Pulchowk Campus."
        />
        <title>{`${event.title}`} - Engineering Students Group of Bhaktapur(ESGB)</title>
      </Helmet>
      <section>
        <div className="container">
          <div className="row pt-4">
            <div className="col-md-8">
              <EventDetailFormat event={event} />
            </div>
            <div className="col-md-4 shadow p-3 event_shadow_bg">
              <MediaEvent />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default EventDetail;
