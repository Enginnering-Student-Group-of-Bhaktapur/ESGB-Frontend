import React, { useState, useEffect } from "react";
import axiosInstance from "../HelperFunction/Axios";
import { Helmet } from "react-helmet";

import MemberCard from "../components/About/MemberCard";
import ContactForm from "../components/Contact/ContactForm";
import Map from "../components/Contact/Map";

function About() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("/members/")
        setMembers(res.data.results);
      } catch (err) {
        console.log("Error Fetching Data");
      }
    };

    fetchData();
  }, []);

  const displayMembers = () => {
    let display = [];
    let result = [];

    members.map(member => {
        return display.push(
            <MemberCard member = {member} />
        )
    });

    for(let i = 0; i < members.length; i+=3){
        result.push(
            <div className="row" key = {i}>
                <div className="team_member col-md-4">
                    {display[i]}
                </div>
                <div className="team_member col-md-4">
                    {display[i + 1] ? display[i + 1] : null}
                </div>
                <div className="team_member col-md-4">
                    {display[i + 2] ? display[i + 2] : null }
                </div>
            </div>
        );
    }

    if(members.length === 0){
        return (
            <div>
                No Executive Members
            </div>
        )
    }
    else{
        return result;
    }
  };

  return (
    <React.Fragment>
      <Helmet>
        <meta
          name="description"
          content="ESGB is an Engineering Student Group of Bhaktapur from Pulchowk Campus."
        />
        <title>About Us - Engineering Students Group of Bhaktapur(ESGB)</title>
      </Helmet>
      <section>
        <div className="container py-5">
          <div id="team">
            <div className="row">
              <div className="col-md-12">
                <h2 className="text-center py-3">Our Team Members</h2>
              </div>
            </div>

            <div className="team_photos row pb-3">
                {displayMembers()}
            </div>
          </div>
        </div>
      </section>

      {/* contact us section */}
      <ContactForm />
      <Map />
      {/* end of contact us section  */}
    </React.Fragment>
  );
}

export default About;
