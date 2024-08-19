import React from 'react';
import Slider from 'react-slick';
import './Header.css';
import { assets } from '../../assets/assets';

// Correct image imports
// import headerImage1 from '../../assets/header 1.jpg';
//  import headerImage2 from '../../assets/header 2.jpg';
// import headerImage3 from '../../assets/header 3.jpg';
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
          <button>View Menu</button>
        </div>
      </div>
    );
  }
  
  export default Header;

// import React from 'react';
// import Slider from 'react-slick';
// import './Header.css';

// // Importing images
// import headerImage1 from '../../assets/header 1.jpg';
// import headerImage2 from '../../assets/header 2.jpg';
// import headerImage3 from '../../assets/header 3.jpg';
// function Header() {
//   // Settings for the carousel
//   const settings = {
//     dots: true,  // Show navigation dots
//     infinite: true,  // Infinite loop sliding
//     speed: 500,  // Transition speed
//     slidesToShow: 1,  // Number of slides to show at once
//     slidesToScroll: 1,  // Number of slides to scroll at once
//     autoplay: true,  // Enable autoplay
//     autoplaySpeed: 3000,  // Autoplay speed (ms)
//     arrows: true,  // Show arrows for navigation
//   };

//   return (
//     <div className='header'>
//       <Slider {...settings}>
//         {/* Slide 1 */}
//         <div className="slide">
//           <img src={headerImage1} alt="Header 1" className="header-image"/>
//           <div className="header-contents">
//             <h2>Enjoy everything you eat...</h2>
//             <p>
//               "Indulge in our varied menu, showcasing an impressive selection of dishes from renowned culinary centers. Our mission is to fulfill your cravings and elevate your dining experience, no matter where you are."
//             </p>
//             <button>View Menu</button>
//           </div>
//         </div>
        
//         {/* Slide 2 */}
//         <div className="slide">
//           <img src={headerImage2} alt="Header 2" className="header-image"/>
//           <div className="header-contents">
//             <h2>Experience Global Flavors</h2>
//             <p>
//               "From local delights to international cuisines, we bring the world to your plate with our exquisite dishes."
//             </p>
//             <button>Explore Dishes</button>
//           </div>
//         </div>
        
//         {/* Slide 3 */}
//         <div className="slide">
//           <img src={headerImage3} alt="Header 3" className="header-image"/>
//           <div className="header-contents">
//             <h2>Savor the Taste of Excellence</h2>
//             <p>
//               "Every dish crafted with care, ensuring a perfect blend of flavors to satisfy your taste buds."
//             </p>
//             <button>Discover More</button>
//           </div>
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default Header;
