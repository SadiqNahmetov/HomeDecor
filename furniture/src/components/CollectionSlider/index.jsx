import React, { useState, useEffect } from "react";
import axios from "axios";
import SliderSlick from "../Slider";
import "./collectionSlider.scss";
import { Link } from "react-router-dom";
import Title from "../Title";

function CollectionSlider({ slidesCount }) {
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

  const [collection, setCollection] = useState([]);

  const getCollection = async () => {
    await axios.get(`${url}/collections`).then((res) => {
      setCollection(res.data);
    });
  };

  useEffect(() => {
    getCollection();
  }, []);
  return (
    <section className="collection__main">
      <div className="container">
        <div className="collection__main--title">
          <Title title="COLLECTIONS" />
          <div className="collection__main--action">
            <Link to="/">SEE ALL</Link>
          </div>
        </div>
        <SliderSlick settings={settings}>
          {collection.map((collection) => {
            return (
              <div className="collection__slider--item" key={collection.id}>
                <img src={collection.image} alt="" />
                <p className="collection__name">{collection.name}</p>
              </div>
            );
          })}
        </SliderSlick>
      </div>
    </section>
  );
}

export default CollectionSlider;
