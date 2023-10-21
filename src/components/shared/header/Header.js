import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import brand from "../../../assets/images/brand/darkshot-logo.png";
import "./style.css";
import Close from "@mui/icons-material/ChevronLeft";
import Open from "@mui/icons-material/ChevronRight";
import ThemeButton from "../../buttons/ThemeButton";
const Header = ({ toggler, setToggler }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };
  if (location.pathname === "/") {
    return (
      <nav className="nav navbar fixed-top" style={style.nav}>
        <div className="container d-flex align-items-center py-2">
          <div className="col">
            <Link to={"/"}>
              <img src={brand} style={style.logo} />
            </Link>
          </div>
          <div className="col d-flex justify-content-end gap-2">
            <ThemeButton
              primary={true}
              textName={"Register"}
              clickTrigger={handleRegister}
            />
            <ThemeButton
              primary={false}
              textName={"Sign in"}
              clickTrigger={handleLogin}
            />
          </div>
        </div>
      </nav>
    );
  } else {
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
  }
};

const style = {
  nav: {
    zIndex: "1",
    backgroundColor: "rgb(0,0,0,0.25)",
    backdropFilter: "blur(10px)  ",
  },
  logo: {
    height: "30px",
    objectFit: "cover",
  },
};
export default Header;
