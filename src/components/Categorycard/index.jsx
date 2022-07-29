import React, { useContext, useState } from 'react'
import Box from "@mui/material/Box"
import "./CategoryCard.css"
import { flexbox } from '@mui/system'
import { Repeat } from '@mui/icons-material'
import { Button } from '@mui/material'
import Icon from '@mui/material/Icon';
import { Productscontext } from '../../context/Productscontext'
import {Link} from "react-router-dom"

const CategoryCard = ({value,tittle}) => {
const {data,Addtocart,Decrementcart,setcount,count}=useContext(Productscontext)
const [match,setmatch]=useState(0)
console.log(typeof(data))
const handleclickInc=(e)=>{
e.preventDefault()
Addtocart(e.target.name)
}
const handleDec=(e)=>{
e.preventDefault()
Decrementcart(e.target.name)
}
const Incrementcount=()=>{
setcount(count+1)
}
const Decrementcount=()=>{
setcount(count-1)
}
  return (
    <div className='categorycard_main'>
    <h2 className='categorycard_title' >{tittle}</h2>
          <Box
      sx={{
        display: "grid",
        gridTemplateColumns:"repeat(2,1fr)",
        width: "100%",
        height:"auto",
       gap:"30px",
      }}
    >

    { data.map((elem,index)=>(
      elem.category===value?
    
 <Box key={index}
      sx={{
        width: "95%",
        height: "550px",
        textAlign:"start",
        paddingLeft:"30px",
        backgroundColor: 'rgb(248,247,245)',
        marginBottom:"10px",
        boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px",
        pointer:"cursor"
      }}
    >
       
        <img className='categorycard_image' src={elem.image} alt=""/>
        <h5 className='categorycard_name'>{elem.tittle}</h5>
        <p>{elem.tittle}</p>
        <h5>₹{elem.price}</h5>
        <p>{elem.vegeterian}</p>
        <p>{elem.offer}</p>
       {elem.cartcount>0?  <div className='categorycard_count_hidden'>
          {elem.cartcount>0?  <div  onClick={elem.cartcount==1?Decrementcount:""}><button onClick={handleDec} name={elem.tittle} className='categorycard_count_hidden_fourth'></button></div> : <button className='categorycard_count_hidden_second' > </button>}
         
           
          <div className='categorycard_count_hidden_third' >{elem.cartcount}</div>
        
          <button className='categorycard_count_hidden_first' name={elem.tittle} onClick={handleclickInc}> </button>
         </div>:
        <div onClick={Incrementcount}>
       <Button sx={ { borderRadius: "22px",width:"153px",background:"red",color:"white",display:"flex",height:"44px",fontSize:"12px",fontFamily:"Lato, sans-serif",fontWeight:1000,marginTop:"40px"} } variant="contained" endIcon={<Icon  sx={{ backgroundColor:"white",background:"url(Add_to_Cart.svg)"}}/> } onClick={handleclickInc} name={elem.tittle}>Add to Cart</Button> 
       </div>
         }
    
    </Box>:""
    ))}
         
     
    </Box>
      
      
    </div>
  )
}

export default CategoryCard
