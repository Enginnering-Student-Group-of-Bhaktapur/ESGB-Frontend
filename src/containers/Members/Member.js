import React, { useState, useEffect } from "react";
import axiosInstance from "../../HelperFunction/Axios";
import TableMember from "../../components/Members/TableMember";
import {Helmet} from 'react-helmet';

function Member() {
  const [memberData, setMemberData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchMemberData = async () => {
      try {
        const res = await axiosInstance.get("/members/memberlist/");
        setMemberData(res.data.results);
      } catch (err) {
        console.log("Error Fetching Data");
      }
    };

    fetchMemberData();
  }, []);

  return (
    <section>
      <Helmet>
      <meta
          name="description"
          content="ESGB is an Engineering Student Group of Bhaktapur from Pulchowk Campus."
        />
        <title>Members - Engineering Students Group of Bhaktapur(ESGB)</title>
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-4">
            <div className="py-2">
              <h1>List of all members of ESGB</h1>
            </div>
            { memberData.length > 0 ? <TableMember data = {memberData} /> : "No Data To Display" }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Member;
