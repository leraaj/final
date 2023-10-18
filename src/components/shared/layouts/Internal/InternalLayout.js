import React, { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Header from "../../header/Header";
import Container from "../container/Container";
import links from "./sidebar/links"; // Import the 'links' array
const InternalLayout = () => {
  const [toggler, setToggler] = useState(false);
  const adminLinks = links[0];
  const userLinks = links[1];
  const [position, setPosition] = useState(adminLinks);

  return (
    <>
      <div className="d-flex internal-theme-font">
        <Sidebar toggler={toggler} links={position.sidebarLinks} />
        <div className="col overflow-auto" style={{ height: "100vh" }}>
          <Header toggler={toggler} setToggler={setToggler} />
          <Container>
            <Outlet />
          </Container>
        </div>
      </div>
    </>
  );
};

export default InternalLayout;
