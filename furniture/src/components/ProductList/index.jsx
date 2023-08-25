import React from "react";
import classes from "./productList.module.scss";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";
import Title from "../Title";

function ProductList() {
  return (
    <section className={classes.product__main}>
        <div className="container">
      <div className={classes["product"]}>
          <div className={classes["product__secthead"]}>
              <Title title="PRODUCTS" />
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
    </section>
  );
}

export default ProductList;
