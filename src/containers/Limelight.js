import React from "react";
import { Helmet } from "react-helmet";

import AboutLimelight from "../components/Limelight/AboutLimelight";
import LimelightList from "../components/Limelight/LimelightList";

function Limelight() {
  return (
    <React.Fragment>
      <Helmet>
        <meta
          name="description"
          content="ESGB is an Engineering Student Group of Bhaktapur from Pulchowk Campus."
        />
        <title>Limelight - Engineering Students Group of Bhaktapur(ESGB)</title>
      </Helmet>

      <section>
        <div className="container">
          <div className="row py-4">
            <div className="col-md-8 shadow p-3 event_shadow_bg rounded">
              <AboutLimelight />
            </div>
            <div className="col-md-4 shadow p-3 event_shadow_bg rounded">
              <LimelightList />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Limelight;
