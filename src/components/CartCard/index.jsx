import { Button, Icon } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { Productscontext } from '../../context/Productscontext'

const Cartcard = (elem,index) => {
    const {data,Addtocart,Decrementcart}=useContext(Productscontext)

console.log(elem,"cartdata")

    const handleclickInc=(e)=>{
e.preventDefault()
Addtocart(e.target.name)
}
const handleDec=(e)=>{
e.preventDefault()
Decrementcart(e.target.name)
}

  return (
    <>
      
    </>
  )
}

export default Cartcard
