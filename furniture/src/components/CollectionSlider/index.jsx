import React, { useState, useEffect } from "react";
import CollectionService from "../../APIs/services/CollectionService";
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

  const [collections, setCollections] = useState([]);

  const GetAllCollection = async () => {
    setCollections(await CollectionService.GetAll());
  };

  useEffect(() => {
    GetAllCollection();
  }, []);
  return (
    <section className="collection__main">
      <div className="container">
        <div className="collection__main--title">
        <Title>
          <h3 className="title__head">COLLECTIONS</h3>
          <div className="title--action">
            <Link to="/about">SEE ALL</Link>
          </div>
        </Title>
         
         
        </div>
        <SliderSlick settings={settings}>
          {collections.map((collection) => {
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
