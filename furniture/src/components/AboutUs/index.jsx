import React from "react";
import classes from "./aboutUs.module.scss";
import SecondaryButton from "../SecondaryButton";
import Title from "../Title";

function AboutUs({ image, description, showButton }) {
  return (
    <section className={classes.about__main}>
      <div className="container">
        <Title title="ABOUT US" />

        <div className={classes["about"]}>
          <div className={classes["about__img"]}>
            <img
              src={image}
              alt=""
            />
          </div>

          <div className={classes["about__right"]}>
            <div className={classes["about__text"]}>
              <p>
                {description}
              </p>
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
