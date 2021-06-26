import React from "react";

function MemberCard({ member }) {
  return (
    <React.Fragment>
      <img src={member.image} alt="team_member" />
      <div className="member_detail py-1 text-center">
        <span className="name font-weight-bold">{member.name}</span>
        <br />
        <span className="position">{member.position}</span>
      </div>
    </React.Fragment>
  );
}

export default MemberCard;
