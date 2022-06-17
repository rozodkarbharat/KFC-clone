import React from 'react'
import Navbar from '../../components/navbar';
import OrderDetail from '../../components/OrderDetails';
import Footer from '../../components/Footer'
import './deal.css';
const Deals = () => {
  return (
    <>
<Navbar/>
  <OrderDetail/>
    <div className="sec1">
        <h2 className="sec2">Deals &amp; Offers</h2>
        </div>
        <div className="third1">
        <img className="third2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAeCAYAAAB5c901AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7c9BDQAgAMPAgQ4c4F8KDvABFuBHSe+9LGmZ6SsXWkY52b3yW/M5A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpNu9MQhKmC+cDgAAAABJRU5ErkJggg==" alt=""/>
      </div>
      <div className="four1">
       <h2 className="four2" data-testid="header-text">National Offers</h2>
       <p data-id="header-sign-in" data-testid="offers-deals-signin-text" className="four3">Sign In to see exclusive offers &amp; deals</p>
      </div>
   
   <div className='five1'>
    <div className='five2'>
         <div className='five3'>
            <img src="https://online.kfc.co.in/static/media/Native_select%20a%20kfc_grey%20image.6e97ff02.svg" alt="" className='five4'/>
            <h3 className='five5'>Select a kfc to see local offers</h3>
            <div className='five6'>
                <button className='five7' aria-label='Find a KFC'>Find a KFC</button>
            </div> 
          </div>
          <div  className="six1">
            <h3 className="six2">Sign in to see more exclusive offers &amp; deals</h3>
            <div className="six3">
            <button className="six4"  aria-label="Login">Login</button>
            </div></div>
            <div className="seve1">
            <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/CHKZINGER.jpg"   className="seve2"/>
            <div className="seve3">
            <h4 className="seve4">1 Pc free Chicken Zinger on a cart value of 399 or above on first order. Only for registered users.</h4>
            <h5 className="seve5">1 Pc free Chicken Zinger on a cart value of 399 or above on first order. Only for registered users.</h5></div>
            <div className="seve6">
            <button className="seve7">View Details</button>
            <button className="seve8"><span className="seve9">Redeem</span></button></div></div>


            <div className='seve1 Nextdi'>
            
            <img src="	https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/VEGZINGER.jpg"   className="seve2"/>
            <div className="seve3">
            <h4 className="seve4">1 Pc free Veg Zinger on a cart value of 399 or above on first order. Only for registered users</h4>
            <h5 className="seve5">1 Pc free Veg Zinger on a cart value of 399 or above on first order. Only for registered users</h5></div>
            <div className="seve6">
            <button className="seve7">View Details</button>
            <button className="seve8"><span className="seve9">Redeem</span></button></div></div>

            <div className="seve1 Nextdii">
            <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg"   className="seve2"/>
            <div className="seve3">
            <h4 className="seve4">Add 2 Pc  Hot n Crispy Chicken @ just Rs 99 on min cart value of Rs 499 or more. Applicable on 2nd &amp; 3rd order for signed in user.</h4>
            <h5 className="seve5">Add 2 Pc  Hot n Crispy Chicken @ just Rs 99 on min cart value of Rs 499 or more. Applicable on 2nd &amp; 3rd order for signed in user.</h5></div>
            <div className="seve6">
            <button className="seve7">View Details</button>
            <button className="seve8"><span className="seve9">Redeem</span></button></div></div>

            <div className="seve1 Nextdii">
            <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/BIGSAVE.jpg"   className="seve2"/>
            <div className="seve3">
            <h4 className="seve4">Upto Rs 100 off on min cart value of Rs 599 or more . Applicable on 4th order onwards for signed in user.</h4>
            <h5 className="seve5">Upto Rs 100 off on min cart value of Rs 599 or more . Applicable on 4th order onwards for signed in user.</h5></div>
            <div className="seve6">
            <button className="seve7">View Details</button>
            <button className ="seve8"><span className="seve9">Redeem</span></button></div></div>
            </div>
            <Footer/>
    
   </div>

    </>
  )
}

export default Deals