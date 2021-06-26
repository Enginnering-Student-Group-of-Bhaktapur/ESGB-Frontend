import React from "react";
import { Helmet } from "react-helmet";

import Banner from "../components/Home/Banner";
import FounderMessage from "../components/Home/FounderMessage";
import Dress from "../components/Home/Dress";

function Home() {
  return (
    <React.Fragment>
      <Helmet>
        <meta
          name="description"
          content="ESGB is an Engineering Student Group of Bhaktapur from Pulchowk Campus."
        />
        <title>ESGB - Engineering Students Group of Bhaktapur(ESGB)</title>
      </Helmet>
      <Banner />
      <FounderMessage />
      <Dress />
    </React.Fragment>
  );
}

export default Home;
