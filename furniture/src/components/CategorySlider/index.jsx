import React, { useEffect, useState } from "react";
import axios from "axios";
import "../CategorySlider/categorySlider.scss";
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
  const url = "http://localhost:3000";
  const [categorySlider, setCatagorySlider] = useState([]);

  const getCategorySlider = async () => {
    await axios.get(`${url}/categorySlider`).then((res) => {
      setCatagorySlider(res.data);
    });
  };

  useEffect(() => {
    getCategorySlider();
  }, []);

  return (
    <section>
      <div className="container">
        <SliderSlick settings={settings}>
          {categorySlider.map((category) => {
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

{
  /* <div className="category__slider--item">
            <img src="" alt="" />
            <p className="category__name"></p>
          </div>
          <div className="category__slider--item">
            <img src="" alt="" />
            <p className="category__name"></p>
          </div>
          <div className="category__slider--item">
            <img src="" alt="" />
            <p className="category__name">RUGS</p>
          </div>
          <div className="category__slider--item">
            <img
              src="https://s3-alpha-sig.figma.com/img/fc4f/78b4/52608fae9d209c21479bbc2e3acdb8da?Expires=1692576000&Signature=o65p4eTHGOi9u3hpEaLWGmybuQZh~WWiz84vP~1TRsjXmszNF12awYZxdgTrMVC0DHYQWISQ3VMhNS9Ozl6~j9rPEFt3QIQIUXUmhCccEnti7Dk22mT~ftDwDDdsc3iHETzrEudIpVMvpz2YqvBWAFcjdDkmv1ifWU7ud7l~fBV-CMircpUj8ZBu~JIXV~8OqKknouUiLhF9765EKTtaRSsWx7fVzAFNg7WNy9zfIoqFjAZe2cXJiYHQZoWY9WixAkERtgLtTODCcPMuv1~ZzJzMiMhWeMcqWJqPhEgmuXaVqUr~9Op2PWEYgVNfXb-HOy4Qy1IxHnAmsMfH3q7bYg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
            <p className="category__name">SOFAS</p>
          </div> */
}
