import React from "react";
import "./accountLayout.scss";
import Breadcrumbs from "../../components/Breadcrumbs";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Profile from "../../components/Profile";
import Footer from "../../components/Footer";

import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";


const AccountLayout = () => {
  return (
    <>
     <Header />
     <Navbar/>
     <Toaster position='top-center'/>
      <Breadcrumbs />
      <div className="container sectionAccount">
        <Profile />
        {<Outlet />}
      </div>
      <Footer />
    </>
  );
};

export default AccountLayout;