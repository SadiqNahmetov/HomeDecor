import React, { useEffect } from "react";
import changeTitle from "../../utils/Change";
import Breadcrumbs from "../../components/Breadcrumbs";
import ProductList from "../../components/ProductList";

function Product() {
  useEffect(() => {
    changeTitle("Product");
  }, []);
  return (
    <main>
      <Breadcrumbs />
      <ProductList />
    </main>
  );
}

export default Product;
