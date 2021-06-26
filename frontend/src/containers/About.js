import React, { useState, useEffect } from "react";
import axios from "axios";

import MemberCard from "../components/About/MemberCard";

function About() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/members/");
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
    </React.Fragment>
  );
}

export default About;
