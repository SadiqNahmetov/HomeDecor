import React, { useEffect } from "react";
import AboutUs from "../../components/AboutUs";
import changeTitle from "../../helpers/Change";
import Stats from "../../components/Stats";
import Breadcrumbs from "../../components/Breadcrumbs";
import Title from "../../components/Title";

function About() {
  useEffect(() => {
    changeTitle("About");
  }, []);
  return (
    <main>
      <Breadcrumbs />
      <Title title="ABOUT US" />
      <AboutUs />
      <Stats />
    </main>
  );
}

export default About;
