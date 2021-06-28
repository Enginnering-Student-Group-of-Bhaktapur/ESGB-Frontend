import React, { useState, useEffect } from "react";
import axios from "axios";

import $ from "jquery";

function MemberTable() {
  const [memberData, setMemberData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchMemberData = async () => {
      try {
        const res = await axios.get(
          "http://127.0.0.1:8000/api/members/memberlist/"
        );
        setMemberData(res.data.results);
      } catch (err) {
        console.log("Error Fetching Data");
      }
    };

    fetchMemberData();

    $(document).ready(function () {
      $("#memberDataTable").DataTable();
      $("tbody .odd").html("");
    });
  }, []);

  const displayMemberTable = () => {
    let result = [];

    memberData.map((member) => {
      return result.push(
        <tr key={member.id}>
          <td>{member.id}</td>
          <td>{member.name}</td>
          <td>{member.batch ? member.batch : "-"}</td>
          <td>{member.faculty ? member.faculty : "-"}</td>
          <td>{member.email ? member.email : "-"}</td>
          <td>{member.address ? member.address : "-"}</td>
          <td>{member.position ? member.position : "Member"}</td>
        </tr>
      );
    });

    return result;
  };

  return (
    <React.Fragment>
      <table id="memberDataTable" className="table table-striped">
        <thead>
          <tr>
            <th>SN</th>
            <th>Name</th>
            <th>Batch</th>
            <th>Faculty</th>
            <th>Email</th>
            <th>Address</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>{displayMemberTable()}</tbody>
        <tfoot>
          <tr>
            <th>SN</th>
            <th>Name</th>
            <th>Batch</th>
            <th>Faculty</th>
            <th>Email</th>
            <th>Address</th>
            <th>Position</th>
          </tr>
        </tfoot>
      </table>
    </React.Fragment>
  );
}

export default MemberTable;
