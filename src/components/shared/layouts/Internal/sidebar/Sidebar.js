import React from "react";
import "./style.css";
import logo from "../../../../../assets/images/brand/darkshot-logo.png";
import collapsedLogo from "../../../../../assets/images/brand/collapseLogo.ico";
import Profile from "../../../../../assets/images/placeholder/profile-placeholder.jpg";
import { Link, useLocation } from "react-router-dom";
const Sidebar = ({ toggler, links }) => {
  const location = useLocation();
  return (
    <nav
      className={`sidebar sticky-top ${
        toggler && "sidebar-toggled"
      }  internal-theme-font`}>
      <div className="sidebar-header row m-0 p-0 justify-content-center align-items-center col ">
        <div className="col-12 d-flex justify-content-center m-0 p-0">
          <Link to={location.pathname}>
            {toggler ? (
              <img
                src={collapsedLogo}
                className="img-fluid"
                style={{ height: "30px" }}
              />
            ) : (
              <img
                src={logo}
                className="img-fluid"
                style={{ height: "30px" }}
              />
            )}
          </Link>
        </div>
      </div>
      <div className="sidebar-body vstack">
        {links.map((link) => {
          return (
            <Link
              // to={"/accounts"}
              to={link.url}
              className={`sidebar-link ${
                location.pathname == link.url && " active"
              } d-flex align-items-center`}>
              <span>{link.icon}</span>{" "}
              {toggler ? "" : <span>{link.label}</span>}
            </Link>
          );
        })}
      </div>
      <div className="sidebar-footer row align-items-center m-0 p-0 ">
        <div className="profile-container col-auto m-0 p-0">
          <img src={Profile} className="img-fluid profile-img rounded-pill" />
          {/* <Profile className="img-fluid profile-img rounded-pill text-light" /> */}
        </div>
        {toggler ? (
          ""
        ) : (
          <span className="profile-email col m-0 p-0 px-1">
            johndoe@gmail.com
          </span>
        )}
      </div>
    </nav>
  );
};

export default Sidebar;
