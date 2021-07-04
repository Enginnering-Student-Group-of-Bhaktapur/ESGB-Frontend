import React from "react";

function MemberCard({ member }) {
  const style = {
    backgroundImage: `url(${member.image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "200px",
    width: "200px",
    borderRadius: "50%",
    marginLeft : "20%",
  };

  return (
    <React.Fragment>
      <div className="member_detail py-1 text-center">
        <div className="executive_member" style={style}></div>
        <div className="executive_member_desc pt-3" style={{ width: "100%" }}>
          <span className="name font-weight-bold">{member.name}</span>
          <br />
          <span className="position">{member.position}</span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MemberCard;
