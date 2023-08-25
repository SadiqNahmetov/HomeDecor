import React from "react";
import "./productSlider.scss";
import SliderSlick from "../Slider";
import ProductCart from "../ProductCard";
import Title from "../Title";

function ProductSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    rules: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <section className="productSlider__main">
      <div className="container">
        <div className="productSlider__main--item">
          <Title title="MOST POPULAR" />
        </div>
        <SliderSlick settings={settings}>
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
        </SliderSlick>
      </div>
    </section>
  );
}

export default ProductSlider;
