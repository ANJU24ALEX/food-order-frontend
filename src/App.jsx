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
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Route here
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
// In your index.js or App.js
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';

const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer/>

    </>
  );
}

export default App;
