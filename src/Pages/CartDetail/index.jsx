import React from 'react'
import Cartdata from '../../components/Cartdata'
import Navbar from '../../components/navbar'
import OrderDetail from '../../components/OrderDetails'
import "./cartdata.css"
const CartDetail = () => {
  return (
    <>
     <Navbar/>
        <div className='orderdetail_top'>
          <OrderDetail/>
        </div>
     <Cartdata/>
    </>
  )
}

export default CartDetail
