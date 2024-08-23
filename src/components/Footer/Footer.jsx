import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer =()=> {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
           <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>At Eatyummynow, we believe in delivering delicious food straight to your door, anytime you crave it. Fresh ingredients, speedy delivery, and easy ordering—everything you need for a yummy meal now. Thank you for choosing us as your go-to for food that delights. Bon appétit!

</p>
<div className="social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            </div>
            
         </div> 

         <div className="footer-content-centre">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
            
            </div>
         <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
<ul>
  <li> +44-327662111</li>
  <li>contact@eatyummynow.com</li>
</ul>
         </div>
        
        </div>
<hr /> 
<p className="footer-copyright">
  Copyright 2024 &#169; Eatyummynow.com - All Right Reserved
</p>
    </div>
  )
}

export default Footer