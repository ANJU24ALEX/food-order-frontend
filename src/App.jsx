// import React from 'react'
// import Navbar from './components/Navbar'
// import { Routes } from 'react-router-dom'
// import Home from './pages/Home/Home'
// import Cart from './pages/Cart/Cart'
// import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

// const App = () => {
//   return (
//     <div className='app'>
//       <Navbar/>
//       <Routes>
//         <Route path='/' element = {<Home/>}/>
//         <Route path='/cart' element = {<Cart/>}/>
//         <Route path='/Order' element = {<PlaceOrder/>}/>
//       </Routes>


//     </div>
//   )
// }

// export default App
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Route here
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
// In your index.js or App.js
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/Order' element={<PlaceOrder />} />
      </Routes>
    </div>
  );
}

export default App;
