import React, { useState, useEffect } from "react";
import classes from "./aboutUs.module.scss";
import SecondaryButton from "../SecondaryButton";
import Title from "../Title";
import AboutUsService from "../../APIs/services/AboutUsService";

function AboutUs({ showButton }) {
  const [aboutUs, setAboutUs] = useState([]);

  const GetAllAbout = async () => {
    setAboutUs(await AboutUsService.GetAll());
  };

  useEffect(() => {
    GetAllAbout();
  }, "");
  return (
    <section className={classes.about__main}>
      <div className="container">
        <Title title="ABOUT US" />

        <div className={classes["about"]}>
          <div className={classes["about__img"]}>
            <img src={aboutUs.image} alt="aboutUsImage" />
          </div>

          <div className={classes["about__right"]}>
            <div className={classes["about__text"]}>
              <p>{aboutUs.description}</p>
            </div>

            <div className={classes["about__btn"]}>
              {showButton && <SecondaryButton />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
