import React, { useState, useContext, useEffect } from "react";
import "./Navbar.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { assets } from "../assets/assets";
import { Link } from 'react-router-dom';
import { StoreContext } from './../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Menu");
  const { cartItems } = useContext(StoreContext);
  const [cartCount, setCartCount] = useState(0); 

  // Calculate cart count
  useEffect(() => {
    const count = Object.values(cartItems).reduce((total, itemQuantity) => total + itemQuantity, 0);
    setCartCount(count);
  }, [cartItems]);

  return (
    <div className="navbar">
      <Link to='/'>
        <img
          src={assets.logo}
          alt="Eatyummy Icon"
          className="logo"
        />
      </Link>

      <ul className="navbar-menu">
        <li>
          <Link 
            to='/' 
            onClick={() => setMenu("Home")}
            className={menu === "Home" ? "active" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <a 
            href='#explore-menu'
            onClick={() => setMenu("Menu")}
            className={menu === "Menu" ? "active" : ""}
          >
            Menu
          </a>
        </li>
        <li>
          <a 
            href='#app-download'
            onClick={() => setMenu("Mobile-App")}
            className={menu === "Mobile-App" ? "active" : ""}
          >
            Mobile-App
          </a>
        </li>
        <li>
          <a 
            href='#footer'
            onClick={() => setMenu("Contact Us")}
            className={menu === "Contact Us" ? "active" : ""}
          >
            Contact Us
          </a>
        </li>
      </ul>

      <div className="navbar-right">
        {/* Search Input */}
        <div className="search-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
          />
        </div>

        {/* Cart Icon with Count */}
        <div className="cart-container">
          <Link to='/cart'>
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
            {cartCount === 0 
              ? <span className="dot"></span> // Show dot when cart is empty
              : <span className="cart-count">{cartCount}</span>}
          </Link>
        </div>

        {/* Signup Button */}
        <button onClick={() => setShowLogin(true)} className="signup-button">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;

