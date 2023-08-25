import React from "react";
import Slider from "react-slick";
import "./slider.scss";

function SliderSlick({ children, settings }) {
  return (
    <>
      <Slider {...settings}>{children}</Slider>
    </>
  );
}

export default SliderSlick;
