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
                  props.location.pathname === "/purchase" || "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/purchase">
                  PURCHASES
                </Link>
              </div>
              <div
                className={`nav-item-right  ${
                  props.location.pathname === "/wishlist" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/wishlist">
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