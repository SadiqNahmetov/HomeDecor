import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "../src/pages/home/Home";
import MainLayout from "./layout/MainLayout";
import About from "./pages/about/About";
import Product from "./pages/product/Product";
import Collection from "./pages/collection/Collection";
import Contact from "./pages/contact/Contact";
import Page404 from './pages/Page404/Page404';
import AccountLayout from "./components/AccountLayout";
import MyAccount from "./pages/MyAccount";


function App() {
  return (
    <>
      
        <Routes>
      
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/contact" element={<Contact />} />
           
          </Route>
            <Route path='*' element={<Page404 />} />
         
            <Route path="myaccount/" element={<AccountLayout/>} >
                  <Route path="info" element={<MyAccount/>} />
        </Route>
      
        </Routes>

      

    </>
  );
}

export default App;
