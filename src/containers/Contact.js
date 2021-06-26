import React from "react";
import { Helmet } from "react-helmet";

import ContactForm from "../components/Contact/ContactForm";
import Map from "../components/Contact/Map";

function Contact() {
  return (
    <React.Fragment>
      <Helmet>
        <meta
          name="description"
          content="ESGB is an Engineering Student Group of Bhaktapur from Pulchowk Campus."
        />
        <title>Contact Us - Engineering Students Group of Bhaktapur(ESGB)</title>
      </Helmet>
      <ContactForm />
      <Map />
    </React.Fragment>
  );
}

export default Contact;
