// src/pages/NotFound.js
import React, {useEffect} from "react";
import changeTitle from "../../utils/Change";
import './notFound.scss'


function Page404() {


  useEffect(() => {
    changeTitle("Home");
  }, []);
  return (
    <div className="container">
      <div className="notFound">
        <div className="notFound--item">
        <h2>404</h2>
        <p>Page not found</p>
        </div>

      </div>
    </div>
  );
}

export default Page404;
