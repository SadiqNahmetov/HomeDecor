import React, { useEffect } from "react";
import changeTitle from "../../utils/Change";
import Breadcrumbs from "../../components/Breadcrumbs";
import ProductCard from "../../components/ProductCard";
import PageHead from "../../components/PagaHead";


function Product() {
  useEffect(() => {
    changeTitle("Product");
  }, []);
  return (
    <main>
      <Breadcrumbs />
      <PageHead title="Products" />
      <ProductCard />
      
    </main>
  );
}

export default Product;
