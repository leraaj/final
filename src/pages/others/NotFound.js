import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="th-bg-dark text-light d-flex justify-content-center align-items-center"
      style={{ height: "100vh", width: "100vw" }}>
      <div className="col-auto">
        <h1>Page Not Found</h1>

        <div className="col d-flex justify-content-center">
          <Link to={"/"} className="btn btn-sm btn-dark rounded-0">
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
