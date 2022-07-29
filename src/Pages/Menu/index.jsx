import React from 'react'
import "./menu.css"

import MenuSidebar from "../../components/Menu_sidebar"
import CategoryCard from '../../components/Categorycard'
import Navbar from '../../components/navbar'
import Footer from '../../components/Footer'
import OrderDetail from '../../components/OrderDetails'

const Menu = () => {


  return (
    <>
    <Navbar/>
      <div style={{marginTop:"104px"}}>
    <OrderDetail/>
    
    </div>
    <div className="menu_main">
      <div className="menu_left">
      
    <MenuSidebar/>
      </div>
  <div className="menu_right">
      <hr className='menu_line' />
       <CategoryCard id="chicken_buckets" value="chicken_buckets" tittle="CHICKEN BUCKETS"/>
       <CategoryCard id="new_launches" value="new_launches" tittle="NEW LAUNCH"/>
        <CategoryCard id="chicken_rolls" value="chicken_rolls" tittle="CHICKEN ROLLS"/>
        <CategoryCard id="biryani_buckets" value="biryani_buckets" tittle="BIRYANI BUCKETS"/>
         <CategoryCard id="box_meals" value="box_meals" tittle="BOX MEALS"/>
         <CategoryCard id ="burgers" value="burgers" tittle="BURGERS"/>
         <CategoryCard id="stay_home_special" value="stay_home_special" tittle="STAY HOME SPECIAL"/>
        <CategoryCard id="snack" value="snack" tittle="SNACKS"/>
        <CategoryCard id="beverage" value="beverage" tittle="BEVERAGES"/>
  </div>

    </div>
    <div className='menu_footer'>
    <Footer/>
    </div>
    
    </>
  )
}

export default Menu
