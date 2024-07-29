// import React from "react";
// import "./Navbar.css"; // Assuming you have styles in a separate file
// import eatyummynowIcon from "../assets/eatyummynow-icon.png"; // Correct the path with single extension
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <img src={eatyummynowIcon} alt="Eatyummy Icon" 
//       style={{ width: '100px', height: '100px' }} />
//       <ul className="navbar-menu">
//       <li>home</li>
//       <li>menu</li>
//       <li>mobile-app</li>
//       <li>contact us</li> 
//       </ul>
//       <div className="navbar-right">
//       <FontAwesomeIcon icon={faSearch} className="search-icon" />
//       <input type="text" className="search-input" placeholder="Search..." />
//       </div>
//       <div className="cart-container">
//           <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
//           <span className="cart-count">2</span> {/* Example count */}
//         </div>
//         <button className="signup-button">Sign Up</button>
//       </div>
    
//   );

import React from "react";
import "./Navbar.css"; // Import your CSS file
import eatyummynowIcon from "../assets/eatyummynow-icon.png"; // Correct path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={eatyummynowIcon} alt="Eatyummy Icon" style={{ width: '100px', height: '100px' }} />
      
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile App</li>
        <li>Contact Us</li>
      </ul>

      <div className="navbar-right">
        {/* Search Input */}
        <div className="search-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" className="search-input" placeholder="Search..." />
        </div>

        {/* Cart Icon */}
        <div className="cart-container">
          <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
          <span className="cart-count"></span> {/* Example count */}
        </div>

        {/* Signup Button */}
        <button className="signup-button">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
