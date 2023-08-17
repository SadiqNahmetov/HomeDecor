import React from "react";
import classes from "./stats.module.scss";

function Stats() {
  return (
    <div className="container">
      <div className={classes.stats}>
        <div className={classes["stats__content"]}>
          <div className={classes["stats__content--item"]}>
            <h2>500+</h2>
            <p>PROJECTS</p>
          </div>
          <div className={classes["stats__content--item"]}>
            <h2>70+</h2>
            <p>PARTNERS</p>
          </div>
          <div className={classes["stats__content--item"]}>
            <h2>30K+</h2>
            <p>FOLLOWERS</p>
          </div>
          <div className={classes["stats__content--item"]}>
            <h2>25+</h2>
            <p>YEARS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
