// import React, { useState } from "react";
// import "./Navbar.css"; 
// import eatyummynowIcon from "../assets/eatyummynow-icon.png"; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

// const Navbar = () => {

//     const [menu,setMenu] = useState ("Menu");
//   return (
//     <div className="navbar">
//       <img src={eatyummynowIcon} alt="Eatyummy Icon" style={{ width: '150px', height: '150px' }} />
      
//       <ul className="navbar-menu">
//         <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
//         <li onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</li>
//         <li onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile-App</li>
//         <li onClick={()=>setMenu("Contact Us")} className={menu==="Contact Us "?"active":""}>Contact Us</li>
//       </ul>

//       <div className="navbar-right">
//         {/* Search Input */}
//         <div className="search-container">
//           <FontAwesomeIcon icon={faSearch} className="search-icon" />
//           <input type="text" className="search-input" placeholder="Search..." />
//         </div>

//         {/* Cart Icon */}
//         <div className="cart-container">
//           <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
//           <span className="cart-count"></span> {/* Example count */}
//         </div>

//         {/* Signup Button */}
//         <button className="signup-button">Sign Up</button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import "./Navbar.css"; 
import eatyummynowIcon from "../assets/eatyummynow-icon.png"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menu, setMenu] = useState("Menu");
  const [cartCount, setCartCount] = useState(3); // Example cart count, can be dynamic

  return (
    <div className="navbar">
      <img
        src={eatyummynowIcon}
        alt="Eatyummy Icon"
        style={{ width: "100px", height: "auto" }}
      />

      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("Mobile-App")}
          className={menu === "Mobile-App" ? "active" : ""}
        >
          Mobile-App
        </li>
        <li
          onClick={() => setMenu("Contact Us")}
          className={menu === "Contact Us" ? "active" : ""}
        >
          Contact Us
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

        {/* Cart Icon with Dot */}
        <div className="cart-container">
          <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
          {cartCount > 0 && <span className="dot">{cartCount}</span>}
        </div>

        {/* Signup Button */}
        <button className="signup-button">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
