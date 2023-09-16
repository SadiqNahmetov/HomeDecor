import React, { useEffect, useState } from "react";
import "./productSlider.scss";
import SliderSlick from "../Slider";
import Title from "../Title";
import ProductCard from "../ProductCard";
import ProductService from "../../APIs/services/ProductService";

function ProductSlider() {
  const settings = {
    infinite: true,
    arrows: true,
    speed: 1500,
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

  const [products, setProducts] = useState([]);

  const GetAllProduct = async () => {
    setProducts(await ProductService.GetAll());
  };

  useEffect(() => {
    GetAllProduct();
  }, []);

  return (
    <section className="productSlider__main">
      <div className="container">
        <Title>
          <h3 className="title__head">MOST POPULAR</h3>
        </Title>
        <SliderSlick settings={settings}>
           {products.slice(0, 6).map((product) => {
            return <ProductCard key={product.id} props={product} />;
          })}
        </SliderSlick>
      </div>
    </section>
  );
}

export default ProductSlider;
