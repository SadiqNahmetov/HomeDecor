import React, { useEffect, useState } from "react";
import "../CategorySlider/categorySlider.scss";
import CategoryService from "../../APIs/services/CategoryService";
import SliderSlick from "../Slider";

const CategorySlider = ({ slidesCount }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesCount,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          arrows: false,
        },
      },
    ],
  };

  const [categories, setCategories] = useState([]);

  const GetAllCategory = async () => {
    setCategories(await CategoryService.GetAll());
  };

  useEffect(() => {
    GetAllCategory();
  }, []);

  return (
    <section>
      <div className="container">
        <SliderSlick settings={settings}>
          {categories.map((category) => {
            return (
              <div className="category__slider--item" key={category.id}>
                <img src={category.image} alt="" />
                <p className="category__name">{category.name}</p>
              </div>
            );
          })}
        </SliderSlick>
      </div>
    </section>
  );
};

export default CategorySlider;


