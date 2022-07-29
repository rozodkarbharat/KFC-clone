import React, { useContext, useState } from 'react'
import Box from "@mui/material/Box"
import "./Cartdetail.css"
// import data from "../../data.json"
import { flexbox } from '@mui/system'
import { Repeat } from '@mui/icons-material'
import { Button } from '@mui/material'
import Icon from '@mui/material/Icon';
import { Productscontext } from '../../context/Productscontext'
import OrderDetail from '../../components/OrderDetails'

const Cartdata = ({value,tittle}) => {

const {data,Addtocart,Decrementcart,price}=useContext(Productscontext)



console.log(typeof(data))
const handleclickInc=(e)=>{
e.preventDefault()
Addtocart(e.target.name)
}
const handleDec=(e)=>{
e.preventDefault()
Decrementcart(e.target.name)
}

  return (
    <div className='cartdata_parent'>
 
        
    <div className='cartdata_main' >
          <Box
      sx={{
        gridTemplateColumns:"repeat(2,1fr)",
        width: "90%",
        height:"auto",
      marginLeft:"10%",
      }}
    >

    { data.map((elem,index)=>{
      if(elem.cartcount>0)
{ return <Box key={index}
      sx={{
        width: "95%",
        height: "155px",
        textAlign:"start",
      
        backgroundColor: 'rgb(248,247,245)',
        marginBottom:"10px",
        boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px",
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
      }}
    >
       
       <div className='cartdata_left'>
         <img className='carddata_image' src={elem.image} alt=""/>
        <p >{elem.offer}</p>
       </div>
       <div className='cartdata_right'>
         <div className='carddata_count_hidden'>
          {elem.cartcount>0?  <button onClick={handleDec} name={elem.tittle} className='carddata_count_hidden_fourth'></button> : <button className='carddata_count_hidden_second' > </button>}
         
           
          <div className='carddata_count_hidden_third' >{elem.cartcount}</div>
        
          <button className='carddata_count_hidden_first' name={elem.tittle} onClick={handleclickInc}> </button>
         </div>
            <h5>₹{elem.price}</h5>
       </div>
         
    
    </Box>
  }
   
    else{
   return ""
    }
        } 
      )}
    </Box>
      
    

    
     </div>  
       <Box 
      sx={{
        width: "22%",
        height: "400px",
        textAlign:"start",
      marginRight:"5%",
        backgroundColor: 'white',
        boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px",
        display:"flex",
        alignItems:"center",
        display:"flex",
        flexDirection:"column"
      }}
    >
     <h2>2 ITEMS</h2>
     <div className='cartdetail_discount'>
    <img src="percentage.svg" alt=""/>
    <p>Apply Offers & Deals</p>
    <button>View all</button>
 

     </div>
       <div className='cardata_amount'>
        
     <p>Subtotal</p>
    <p>₹{price}</p>
  </div >
  <div className="cardata_amount">
     <p>GST</p>
    <p>₹{Math.floor((price/100)*12)}</p>
  </div>
         <hr/>
         <div className='cardata_addhope'>
          <div className='cardata_addhope_checkbox'><input type="checkbox"/></div>
          <div className='cardata_addhope_text'>
            <p>Donate ₹5.00 Tick to Add Hope.</p>
            <p>Our goal is to feed 20 million people by 2022.</p>
          </div>
          <div className='cardata_addhope_image'>
            <img src="add_hope.png" alt=""/>
          </div>
         </div>
            <Button sx={ { borderRadius: "22px",width:"180px",background:"red",color:"white",display:"flex",height:"44px",alignSelf:"center",fontSize:"12px",fontFamily:"Lato, sans-serif",fontWeight:1000,marginTop:"8%",display:"flex",justifyContent:"space-evenly" } } variant="contained" className='order_detail_button' ><p>Checkout</p> <p>₹{price+Math.floor((price/100)*12)}</p></Button>
 
    </Box>
</div>
  )
}

export default Cartdata
