import React from "react";
import classes from "./productList.module.scss";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";
function ProductList() {
  return (
      <div className={classes.product}>
    <div className="container">
        <div className={classes["product__secthead"]}>
          <h3 className="head">PRODUCTS</h3>
          <div className={classes["product__secthead--action"]}>
            <Link to="/about">SEE ALL</Link>
          </div>
        </div>

        <div className={classes["product__grid"]}>
          <div className={classes["product__grid__item"]}>
            <ProductCard />
          </div>
          <div className={classes["product__grid__item"]}>
            <ProductCard />
          </div>
          <div className={classes["product__grid__item"]}>
            <ProductCard />
          </div>
          <div className={classes["product__grid__item"]}>
            <ProductCard />
          </div>
          <div className={classes["product__grid__item"]}>
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
