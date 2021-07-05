import React, { useState, useEffect } from "react";
import axiosInstance from "../../HelperFunction/Axios";

function MemberTable() {
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

  const displayMemberTable = () => {
    let result = [];
    let id = 0;

    memberData.map((member) => {
      id += 1;
      return result.push(
        <tr key={member.id}>
          <td>{id}</td>
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
