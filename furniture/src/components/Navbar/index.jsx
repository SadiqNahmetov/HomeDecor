import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './navbar.scss'




function Navbar() {

  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClcik = (link) => {
    setActiveLink(link);
  }

  return (

   <section>
     <div className='container'>
      <div className="navbar ">
        <nav className="menu">
          <ul className="menu__list ">
            <li className={`menu__list--item ${activeLink === 'home' ? 'active' : ''}`}>
              <Link onClick={() => handleLinkClcik('home')} to="/" >Home</Link>
            </li>
            <li className={`menu__list--item ${activeLink === 'about' ? 'active' : ''}`}>
              <Link onClick={() => handleLinkClcik('about')} to="/about">About</Link>
            </li>
            <li className={`menu__list--item ${activeLink === 'product' ? 'active' : ''}`}>
              <Link onClick={() => handleLinkClcik('product')} to="/product">Products</Link>
            </li>
            <li className={`menu__list--item ${activeLink === 'collection' ? 'active' : ''}`}>
              <Link onClick={() => handleLinkClcik('collection')} to="/collection">Collections</Link>
            </li>
            <li className={`menu__list--item ${activeLink === 'sale' ? 'active' : ''}`}>
              <Link onClick={() => handleLinkClcik('sale')} to="/sale">Sale</Link>
            </li>
            <li className={`menu__list--item ${activeLink === 'contact' ? 'active' : ''}`}>
              <Link onClick={() => handleLinkClcik('contact')} to="/contact">Contact</Link>
            </li>

          </ul>
        </nav>
      </div>
    </div>
   </section>


  )
}

export default Navbar;