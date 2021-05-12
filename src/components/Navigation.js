import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className={`navigation ${props.className}`}
     >
      <nav className="navbar navbar-expand bg-light ">
        <div className="container">
          <div className="navbar-nav">
         
              <div
                className={`nav-item-left  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/about">
                  PURCHASES
                </Link>
              </div>
              <div
                className={`nav-item-right  ${
                  props.location.pathname === "/data" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/data">
                  WISHLIST
                </Link>
              </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);