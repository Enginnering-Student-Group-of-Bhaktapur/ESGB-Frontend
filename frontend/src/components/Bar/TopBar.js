import React from "react";

function TopBar() {
  return (
    <section id="top_bar_section">
      <div className="container py-1">
        <div id="top_bar" className="d-flex justify-content-between">
          <div className="left_top_bar">
            <span className="pr-3">
              <i className="fa fa-envelope pr-1" aria-hidden="true"></i>
              <a href="mailto:">esgb@gmail.com</a>
            </span>
            <span>
              <i className="fa fa-phone pr-1" aria-hidden="true"></i>
              <a href="tel:+">9843865781</a>
            </span>
          </div>
          <div className="right_top_bar">Liwali, Bhaktapur - 8</div>
        </div>
      </div>
    </section>
  );
}

export default TopBar;
