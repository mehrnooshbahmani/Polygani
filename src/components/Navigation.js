import { cleanup } from "@testing-library/react";
import React from "react";
import { unstable_createPortal } from "react-dom/cjs/react-dom.development";
import { Link, withRouter } from "react-router-dom";


function Navigation(props) {

  return (
    <div className={`navigation ${props.className1}`}
     >
      <nav className="navbar navbar-expand bg-light ">
        <div className="container">
          <div className="navbar-nav">
              <div
                className={`nav-item-left  ${
                  props.location.pathname === "/purchase" || "/" ? "active" : "" 
                }`}
              >
                <Link className={`nav-link  ${
                  (props.location.pathname === "/purchase" || "/" ? "active" : "" ) ? `${props.className2}` : ""
                }`} to="/purchase" 
                
                >
                  PURCHASES
                </Link>
              </div>
              <div
                className={`nav-item-right ${
                  props.location.pathname === "/wishlist"  ? "active" : ""
                }`}
              >
                <Link className={`nav-link ${
                  (props.location.pathname === "/purchase" || "/" ? "active" : "" ) ? `${props.className3}` : ""
                }`}  to="/wishlist" 
                >
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