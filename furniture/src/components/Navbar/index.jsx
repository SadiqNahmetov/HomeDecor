import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import './navbar.scss'




function Navbar() {

   return (

   <section>
     <div className='container'>
      <div className="navbar ">
        <nav className="menu">
          <ul className="menu__list ">
            <li className="menu__list--item">
              <NavLink  to="/" >Home</NavLink>
            </li>
            <li className="menu__list--item">
              <NavLink  to="/about">About</NavLink>
            </li>
            <li className="menu__list--item ">
              <NavLink to="/product">Products</NavLink>
            </li>
            <li className="menu__list--item">
              <NavLink  to="/collection">Collections</NavLink>
            </li>
          
            <li className="menu__list--item">
              <NavLink  to="/contact">Contact</NavLink>
            </li>

          </ul>
        </nav>
      </div>
    </div>
   </section>


  )
}

export default Navbar;