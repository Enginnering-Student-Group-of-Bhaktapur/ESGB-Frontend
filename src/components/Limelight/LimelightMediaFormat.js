import React from "react";

function LimelightMediaFormat({ limelight }) {
  return (
    <div className="limelight_media pb-4">
      <div className="media">
        <img
          className="mr-3 img-fluid"
          src={limelight.image}
          alt="Event Media"
          width="100"
        />
        <div className="media-body">
          <h6 className="m-0">{limelight.theme}</h6>
          <span>{limelight.year_published}</span><br/>
          <a className="limelight_link" href={limelight.file} target="_blank" rel="noreferrer">View Limelight...</a>
        </div>
      </div>
    </div>
  );
}

export default LimelightMediaFormat;
