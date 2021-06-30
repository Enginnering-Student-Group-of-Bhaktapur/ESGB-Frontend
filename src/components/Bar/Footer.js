import React from "react";
import Banner from "../../assets/img/banner.png";
import Logo from "../../assets/img/logo.png"

import {Link} from 'react-router-dom';


function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row pt-4 pb-4">
          <div className="col-md-4">
            <h5>About ESGB</h5>
            <p className="text-justify">
              Ee lyres his massy concubines him and nor his was. Mother left
              hall longed was and made sea. Of oh he vaunted break smile condole
              what way. Sun was not disappointed this feud ofttimes a. Hour nor
              deigned but he such yet vast deemed. Not if holy shrine hill.
              Later oh from unto losel break dwell heartless prose. Him maidens
              birth old care massy but, flow heart the to wins objects. To the
              heart known fabled his his from than, fountain and known to but
              befell delight. The finds be these mote, condemned far girls clay
              from of fathers lurked...
            </p>
          </div>
          <div className="col-md-4">
            <h5>Information</h5>
            <span>
              <Link to="/about">About Us</Link>
            </span>
            <br />
            <span>
              <Link to="/limelight">Lime Light</Link>
            </span>
            <br />
            <span>
              <Link to="/events">Our Events</Link>
            </span>
            <br />
            <div className="dress_footer pt-5">
              <div className="row">
                <div className="offset-md-2 col-md-6">
                  <img src={Logo} className="img-fluid" alt="Logo" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <span>
              <i className="fa fa-envelope pr-1" aria-hidden="true"></i>
              <a href="mailto:esgb@gmail.com">esgb@gmail.com</a>
            </span>
            <br />
            <span>
              <i className="fa fa-phone pr-2" aria-hidden="true"></i>
              <a href="tel:+9779843865781">9843865781</a>
            </span>
            <div className="logo pt-4">
              <div className="row">
                <div className="col-md-12">
                  <img src={Banner} alt="Logo" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
