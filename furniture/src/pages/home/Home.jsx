import React, { useState, useEffect } from "react";
import axios from "axios";
import MainHeader from "../../components/MainHeader";
import AboutUs from "../../components/AboutUs";
import Discount from "../../components/Discount";
import ProductList from "../../components/ProductList";
import changeTitle from "../../utils/Change";
import CategorySlider from "../../components/CategorySlider";

import ContactContent from "../../components/ContactContent";
import ProductSlider from "../../components/ProductSlider/index";
import CollectionSlider from "../../components/CollectionSlider";

function Home() {
  const url = "http://localhost:3000";

  const [mainHeader, setMainHeader] = useState([]);


  const getMainHeader = async () => {
    await axios.get(`${url}/mainHeader`).then((res) => {
      setMainHeader(res.data);
    });
  };


  const [aboutUs, setAboutUs] = useState([]);

  const getAboutUs = async () => {
    await axios.get(`${url}/aboutUs`).then((res) => {
      setAboutUs(res.data);
    });
  };

  const [discount, setDiscount] = useState([]);

  const getDiscount = async () => {
    await axios.get(`${url}/bannerDiscount`).then((res) => {
      setDiscount(res.data);
    });
  };

  const [products, setProducts] = useState([]);
  const GetAllProduct = async () => {
    setProducts(await ProductService.GetAll());
  };


  useEffect(() => {
    getMainHeader();
    getAboutUs();
    getDiscount();
    changeTitle("Home");
    GetAllProduct();

  }, []);
  return (
    <main>
      <MainHeader {...mainHeader} />
      <CategorySlider  slidesCount={4} />
      <AboutUs {...aboutUs} showButton={true} />
      <Discount {...discount}/>
      <ProductList products={products} take={8} />
      <ProductSlider />
      <CollectionSlider slidesCount={3} />
      <ContactContent />
    </main>
  );
}

export default Home;
