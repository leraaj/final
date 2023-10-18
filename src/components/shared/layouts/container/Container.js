import React from "react";

const Container = ({ children }) => {
  return (
    <div
      className="row m-0 p-3"
      style={{ height: "calc(100% - 56px)", zIndex: 0 }}>
      <div className="col">{children}</div>
    </div>
  );
};

export default Container;
