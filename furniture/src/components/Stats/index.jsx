import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./stats.module.scss";

function Stats() {
  const url = "http://localhost:3000";

  const [stats, setStats] = useState([]);

  const getStats = async () => {
    await axios.get(`${url}/stats`).then((res) => {
      setStats(res.data);
    });
  };

  useEffect(() => {
    getStats();
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
