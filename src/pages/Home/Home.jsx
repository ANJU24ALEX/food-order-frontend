import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const Home = () => {
    const [category, setCategory] = useState("All"); // State is now managed here

    return (
        <div>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} /> {/* Pass state as props */}
            <FoodDisplay category={category} /> {/* Pass category state to FoodDisplay */}
        </div>
    );
};

export default Home;


// import React, { useState } from 'react'
// import './Home.css'
// import Header from '../../components/Header/Header'
// import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
// import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
// const Home = () => {

//   const [category, setCategory] = useState ("all");
//   return (
//     <div>
//         <Header/>
//         <ExploreMenu category= {category} setCategory = {setCategory}/>
//     <FoodDisplay category= {category}/>
    
//     </div>
//   )
// }

// export default Home