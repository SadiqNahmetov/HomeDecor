import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Title";
import "./productList.scss";
import { useLocation } from "react-router-dom";
import ProductCard from "../ProductCard";

const ProductList = ({ take, products }) => {
  const location = useLocation();
  return (
    <section class="product__list section">
      <div className={`${location.pathname == "/" ? "container" : ""}`}>
        <div className="product__content">
          {products?.slice(0, take).map((product) => {
            return <ProductCard key={product.id}>{product}</ProductCard>;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
