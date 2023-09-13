import React, { useState, useEffect } from "react";
import axios from "axios";
import MainHeader from "../../components/MainHeader";
import AboutUs from "../../components/AboutUs";
import Discount from "../../components/Discount";
import ProductList from "../../components/ProductList";
import changeTitle from "../../utils/Change";
import CategorySlider from "../../components/CategorySlider";
import { Link } from "react-router-dom";

import ContactContent from "../../components/ContactContent";
import ProductSlider from "../../components/ProductSlider/index";
import CollectionSlider from "../../components/CollectionSlider";
import MainHeaderService from "../../APIs/services/MainHeaderService";
import AboutService from "../../APIs/services/AboutUsService";
import ProductService from "../../APIs/services/ProductService";
import Title from "../../components/Title";

function Home() {
  const url = "http://localhost:3000";


  const [mainHeader, setMainHeader] = useState([]);

  const GetAllMainHeader = async () => {
    setMainHeader(await MainHeaderService.GetAll());
  };

  const [aboutUs, setAboutUs] = useState("");

  const GetAllAbout = async () => {
    setAboutUs(await AboutService.GetAll());
  };

  useEffect(() => {
    GetAllAbout();
  },"");



  const [products, setProducts] = useState([]);
  const GetAllProduct = async () => {
    setProducts(await ProductService.GetAll());
  };


  useEffect(() => {
    GetAllMainHeader();
    GetAllAbout();

    changeTitle("Home");
    GetAllProduct();

  }, []);
  return (
    <main>
      <MainHeader {...mainHeader} />
      <CategorySlider  slidesCount={4} />
      <AboutUs {...aboutUs} showButton={true} />
      <Discount />
      <div className="container">
        <Title>
          <h3 className="title__head">PRODUCTS</h3>
          <div className="title--action">
            <Link to="/about">SEE ALL</Link>
          </div>
        </Title>
      </div>
      <ProductList products={products} take={8} />
      <ProductSlider />
      <CollectionSlider slidesCount={3} />
      <ContactContent />
    </main>
  );
}

export default Home;
