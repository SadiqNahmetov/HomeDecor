import React, { useState, useEffect } from "react";
import StatsService from "../../APIs/services/StatsService";
import classes from "./stats.module.scss";

function Stats() {


  const [stats, setStats] = useState([]);

  const GetAllStats = async () => {
    setStats(await StatsService.GetAll());
  };

  useEffect(() => {
    GetAllStats();
  }, []);
  return (
    <div className="container">
      <div className={classes.stats}>
        <div className={classes["stats__content"]}>
          {stats.map((stats) => {
            return (
              <div className={classes["stats__content--item"]} key={stats.id}>
                <h2>{stats.value}</h2>
                <p>{stats.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Stats;
