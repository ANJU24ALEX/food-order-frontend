import React from 'react';
import Slider from 'react-slick';
import './Header.css';
import { assets } from '../../assets/assets';


function Header() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
    };
  
    return (
      <div className='header'>
        <div className="slider-container">
          <Slider {...settings}>
            <div className="slide">
              <img src={assets.header_1} alt="Header 1" className="header-image" />
            </div>
            <div className="slide">
              <img src={assets.header_2} alt="Header 2" className="header-image" />
            </div>
            <div className="slide">
              <img src={assets.header_3}alt="Header 3" className="header-image" />
            </div>
          </Slider>
        </div>
  
        <div className="header-contents">
          <h2>Enjoy everything you eat...</h2>
          <p>
            "Indulge in our varied menu, showcasing an impressive selection of dishes from renowned culinary centers. Our mission is to fulfill your cravings and elevate your dining experience, no matter where you are."
          </p>
          <button> View Menu </button>
        </div>
      </div>
    );
  }
  
  export default Header;

