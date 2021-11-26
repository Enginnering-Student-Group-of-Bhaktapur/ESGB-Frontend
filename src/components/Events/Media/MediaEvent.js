import React, {useState, useEffect} from "react";
import axiosInstance from "../../../HelperFunction/Axios";

import MediaEventFormat from "./MediaEventFormat";

function MediaEvent() {
  const [mediaEvents, setMediaEvents] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchMediaEventData = async () => {
      try {
        const res = await axiosInstance.get("/events/recent/");
        setMediaEvents(res.data.results);
      } catch (err) {
        console.log("Error Fetching Media Event Data");
      }
    };

    fetchMediaEventData();
  }, []);

  const displayMediaEvent = () => {
    let result = [];

    mediaEvents.map((mediaEvent) => {
      return result.push(
        <MediaEventFormat mediaEvent={mediaEvent} key={mediaEvent.id} />
      );
    });

    return result;
  };

  return (
    <React.Fragment>
      {displayMediaEvent()}
    </React.Fragment>
  );
}

export default MediaEvent;
