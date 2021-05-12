import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand bg-light ">
        <div class="container">
          <div class="navbar-nav">
         
              <div
                class={`nav-item-left  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/about">
                  PURCHASES
                </Link>
              </div>
              <div
                class={`nav-item-right  ${
                  props.location.pathname === "/data" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/data">
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