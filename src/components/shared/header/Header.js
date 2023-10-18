import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import Close from "@mui/icons-material/ChevronLeft";
import Open from "@mui/icons-material/ChevronRight";
const Header = ({ toggler, setToggler }) => {
  const location = useLocation();
  return (
    <nav className="nav navbar bg-light sticky-top col-12">
      <div className="container-fluid">
        <div className="d-flex align-items-center gap-3 col">
          <button
            className={`btn btn-sm p-1 d-flex justify-content-center align-items-center  ${
              toggler ? "btn-dark" : "btn-outline-dark"
            }`}
            onClick={() => setToggler(!toggler)}>
            {toggler ? <Open /> : <Close />}
          </button>
        </div>
        <div className="d-flex justify-content-end align-items-center navbar-nav">
          <Link to={"/login"} className="nav-link">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
