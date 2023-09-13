import React from "react";
import "./productList.scss";
import { useLocation } from "react-router-dom";
import ProductCard from "../ProductCard";

const Product = ({ take, products }) => {

  const location = useLocation();
  return (
    <section className="product__list section">
      <div className={`${location.pathname == "/" ? "container" : ""}`}>
        <div className="product__content">
          {products?.slice(0, take).map((product) => {
            return <ProductCard key={product.id} props = {product}/>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Product;