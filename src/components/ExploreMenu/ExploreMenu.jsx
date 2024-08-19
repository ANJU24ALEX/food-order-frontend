import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
    const handleMenuClick = (menu_name) => {
        // Toggle the category in the parent component
        setCategory(prev => prev === menu_name ? "All" : menu_name);
    };

    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'>
                Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
            </p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div
                            onClick={() => handleMenuClick(item.menu_name)} // Call function to update state in parent
                            key={index}
                            className='explore-menu-list-items'
                        >
                            <img
                                className={category === item.menu_name ? "active" : ""}
                                src={item.menu_image}
                                alt={item.menu_name}
                            />
                            <p>{item.menu_name}</p>
                        </div>
                    );
                })}
            </div>
            <hr />
        </div>
    );
};

export default ExploreMenu;


// import React, { useState } from 'react';
// import './ExploreMenu.css';
// import { menu_list } from '../../assets/assets';

// const ExploreMenu = () => {
//     const [category, setCategory] = useState("All"); // Set initial state

//     const handleMenuClick = (menu_name) => {
//         // Toggle the category
//         setCategory(prev => prev === menu_name ? "All" : menu_name);
//     };

//     return (
//         <div className='explore-menu' id='explore-menu'>
//             <h1>Explore our menu</h1>
//             <p className='explore-menu-text'>
//                 Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
//             </p>
//             <div className="explore-menu-list">
//                 {menu_list.map((item, index) => {
//                     return (
//                         <div
//                             onClick={() => handleMenuClick(item.menu_name)} // Call function to update state
//                             key={index}
//                             className='explore-menu-list-items'
//                         >
//                             <img
//                                 className={category === item.menu_name ? "active" : ""}
//                                 src={item.menu_image}
//                                 alt={item.menu_name}
//                             />
//                             <p>{item.menu_name}</p>
//                         </div>
//                     );
//                 })}
//             </div>
//             <hr />
//         </div>
//     );
// };

// export default ExploreMenu;

