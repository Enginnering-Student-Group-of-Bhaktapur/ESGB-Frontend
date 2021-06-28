import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Engineering Student Group of Bhaktapur
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/" exact={true}>
                Home<span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/events">
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/limelight">
                Limelight
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/members">
                Member
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/about">
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
