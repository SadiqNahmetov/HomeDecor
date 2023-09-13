import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import { Outlet } from 'react-router-dom'
import {useLocation} from "react-router-dom";

function MainLayout() {
  const location = useLocation();
  return (
    <>
        <Header/>
        <Navbar/>
        {location.pathname !== "/" ? <Breadcrumbs /> : null}
        <Outlet/>
        <Footer />
    </>
  )
}

export default MainLayout