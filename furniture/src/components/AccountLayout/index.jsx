import React from "react";
import "./accountLayout.scss";
import Breadcrumbs from "../../components/Breadcrumbs";
import Header from "../Header";
import Navbar from "../Navbar";
import Profile from "../Profile";
import Footer from "../Footer";

import { Outlet } from "react-router-dom";


const AccountLayout = () => {
  return (
    <>
     <Header />
     <Navbar/>
      <Breadcrumbs />
      <div className="container section">
        <Profile />
        {<Outlet />}
      </div>
      <Footer />
    </>
  );
};

export default AccountLayout;