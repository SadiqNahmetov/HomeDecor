// src/pages/NotFound.js
import React, {useEffect} from "react";
import changeTitle from "../../utils/Change";
import './notFound.scss'
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";


function Page404() {


  useEffect(() => {
    changeTitle("Home");
  }, []);
  return (
    <div className="container">
      <Header />
      <Navbar />
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
