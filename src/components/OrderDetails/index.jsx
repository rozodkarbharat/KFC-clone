import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import "./orderDetails.css"

const OrderDetail = () => {
  return (
    <>
         <Box
      sx={{
        width:"100%",
        height: "68px",
        backgroundColor: 'black',
        display:"flex",
        justifyContent:"center",
        alignContent:"center"

      }}
    >
        <p className='Order_detail_tittle'>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</p>
        <Link to="/menu" >
          <Button sx={ { borderRadius: "22px",width:"153px",background:"red",color:"white",display:"flex",height:"44px",alignSelf:"center",fontSize:"12px",fontFamily:"Lato, sans-serif",fontWeight:1000,marginTop:"8%"} } variant="contained" className='order_detail_button' >Start Order</Button>
          </Link>
      
    </Box>
    </>
  )
}

export default OrderDetail
