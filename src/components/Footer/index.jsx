import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
<>

 <div className="footer_Parent">
   <div className='footer_main'>
   <div className='footer_child'>
    <img className='footer_logo' src="KFC_Logo.svg" alt=""/>
   </div>
   <div className='footer_child'>
    <p>KFC food</p>
    <p>Menu</p>
    <p>Order Lookup</p>
    <p>Gift Card</p>
   </div>
   <div className='footer_child'>
    <p>Support</p>
    <p>Get Help</p>
    <p>Contact Us</p>
    <p>KFC Feedback</p>
    <p>Privacy Policy</p>
   </div>
   <div className='footer_child'>
    <p>Legal</p>
    <p>Terms and Conditions</p>
    <p>Privacy Policy</p>
    <p>Disclaimer</p>
    <p>Caution Notice</p>
   </div>
   <div className='footer_child'>
    <p>KFC India</p>
    <p>KFC Care</p>
    <p>About KFC</p>
    <p>Career</p>
    <p>Our Golden Past</p>
   </div>
   <div className='footer_child'>
    <p>Find a KFC</p>
   </div>
   <div className='footer_child'>
      <img className='footer_store' src="google_play.svg" alt=""/>
   </div>
   <div className='footer_child'>
      <img className='footer_store' src="apple.svg" alt=""/>
   </div>

 </div>
<div className='footer_end'>
     <p>Copyright © KFC Corporation 2021 All Rights Reserved</p> 
  <div className='footer_end_images'>
      <img src="instagram.svg" alt="" />
     <img src="facebook.svg" alt="" />
     <img src="twitter.svg" alt="" />
  </div>
</div>
 </div>
 
</>
  )
}

export default Footer
