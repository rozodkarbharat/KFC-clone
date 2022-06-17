import { createContext, useEffect, useState } from "react";
import data1 from "../data.json"


export const Productscontext=createContext()

export const Productsprovider=({children})=>{
  const [data,setdata]=useState([...data1.data])
const [cartdata,setcartdata]=useState([])
const [count,setcount]=useState(0)
const [price,setprice]=useState(0)


useEffect(() => {
   var rs=0

  data.map((elem)=>{
    if(elem.cartcount>0){
rs=rs+ +elem.cartcount* +elem.price

    }
    
  })
  setprice(Math.ceil(rs))
}, [data])



const Decrementcart=(payload)=>{
  var newdata= data.map((elem)=>
      { let number=1
        if(elem.tittle==payload){
        number=elem.cartcount-1
       }
       else{
         number=elem.cartcount
       }
       return {...elem,cartcount:number}
    }
       )
       setdata([...newdata])
}

const Addtocart=(payload)=>{

      var newdata= data.map((elem)=>
      { let number=1
        if(elem.tittle==payload){
        number=elem.cartcount+1
       }
       else{
         number=elem.cartcount
       }
       return {...elem,cartcount:number}
    }
       )
       setdata([...newdata])
   
}

    return<Productscontext.Provider value={{data,cartdata,Addtocart,price,Decrementcart,count,setcount}}>{children}</Productscontext.Provider>
}