import React, { useEffect, useState } from "react";
import axios from "axios";
import AboutUs from "../../components/AboutUs";
import changeTitle from "../../utils/Change";
import Stats from "../../components/Stats";
import Breadcrumbs from "../../components/Breadcrumbs";

function About() {
  const url = "http://localhost:3000";

const [aboutUs, setAboutUs] = useState([]);

  const getAboutUs = async () => {
    await axios.get(`${url}/aboutUs`).then((res) => {
      setAboutUs(res.data);
    });
  };
   
  useEffect(() => {
    getAboutUs();
    changeTitle("About");
  }, []);
  return (
    <main>
      <Breadcrumbs />
      <AboutUs {...aboutUs} />
      <Stats />
    </main>
  );
}

export default About;
