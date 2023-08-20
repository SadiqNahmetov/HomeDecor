import React, { useState, useEffect } from "react";
import axios from "axios";
import MainHeader from "../../components/MainHeader";
import AboutUs from "../../components/AboutUs";
import Discount from "../../components/Discount";
import ProductList from "../../components/ProductList";
import changeTitle from "../../helpers/Change";
import CategorySlider from "../../components/Slider/CategorySlider";
import Title from "../../components/Title";


function Home() {
  const url = "http://localhost:3000";

  const [mainHeader, setMainHeader] = useState([]);

  const getMainHeader = async () => {
    await axios.get(`${url}/mainHeader`).then((res) => {
      setMainHeader(res.data);
    });
  };

  useEffect(() => {
    getMainHeader();
    changeTitle("Home");
  }, []);
  return (
    <main>
      <MainHeader {...mainHeader} />
      <CategorySlider />
      <Title title = 'ABOUT US'/>
      <AboutUs />
      <Discount />
      <Title title = 'PRODUCTS'/>
      <ProductList />
    </main>
  );
}

export default Home;
