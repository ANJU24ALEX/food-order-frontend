// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import {BrowserRouter} from 'react-router-dom'
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>

//     <App />

//     </BrowserRouter>
// )
import React from 'react';
import ReactDOM from 'react-dom/client'; // If you are using React 18+
 // Import BrowserRouter
import App from './App.jsx';
import './index.css';
import StoreContextProvider from './context/StoreContext.jsx';
import { BrowserRouter } from 'react-router-dom';

// In your index.js or App.js
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
  <StoreContextProvider>
    <App />
    </StoreContextProvider>
   </BrowserRouter>
)
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );
