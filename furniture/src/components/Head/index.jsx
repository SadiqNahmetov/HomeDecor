import React from "react";
import "./head.scss";

const Head = ({ children }) => {
  return (
    <section className="head">
      <div className="container">
        <div className="header">{children}</div>
      </div>
    </section>
  );
};

export default Head;
