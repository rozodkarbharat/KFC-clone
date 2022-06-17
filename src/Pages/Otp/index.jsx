import { Input } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Authcontext } from '../../context/Authcontext'
import "./Otp.css"
import {useNavigate,Link} from "react-router-dom"


const Otp = ({}) => {
   const [otp,setotp]=useState("")
   const {confirmobj}=useContext(Authcontext)
      const [error,seterror]=useState("")
      
     const navigate=useNavigate()
useEffect(() => {
 if(otp.length===6){
  verifyotp(otp)
 }
}, [otp])

const verifyotp=async(otp)=>{
if(otp===""||otp===undefined)return
try{
seterror("")
await confirmobj.confirm(otp)
navigate("/")
}
catch(err){
seterror(err.message)
}


}


  return (
    <>
        <div className='otp_main'>
        <div className='otp_header'>
      <p className='otp_main_first_p'>Sign In / Sign Up</p>
      <img className='otp_main_img' src="KFC.png" alt=""/>
      <p className='otp_main_second_p'>WE JUST TEXTED YOU</p>
        </div>
  <div className='otp_terms'>
          Please enter the verification code we just sent to <u> <b> 919096005866 </b> </u>  .
        </div>
        <div className='otp_change'>
         <u> <b>Different Number?  </b> </u>
        </div>
     

     <div >
      <form  onSubmit={verifyotp}>
        <div className='otp_input'>
      <Input onChange={(e)=>setotp(otp+e.target.value)}/>
      <Input onChange={(e)=>setotp(otp+e.target.value)}/>
      <Input onChange={(e)=>setotp(otp+e.target.value)}/>
      <Input onChange={(e)=>setotp(otp+e.target.value)}/>
      <Input onChange={(e)=>setotp(otp+e.target.value)}/>
      <Input onChange={(e)=>setotp(otp+e.target.value)}/>
        </div>
       {error? <div className='otp_error'>Wrong otp</div>:""}
      <div>
  <button className='otp_btn' type='submit'>Submit</button>
      </div>
       
      </form>
        
        </div>
     
      
 
   
        <div className='otp_or' style={{display:"flex"}}>
            <div></div>
            <div>or</div>
            <div></div>
         
        </div>
     
        <div className='otp_skip'>
          <Link to ="/">
     <button onClick={(e)=>{e.preventDefault()
     }
    }>skip, continue as guest</button>
    </Link>
        </div>
         
       
    </div>
    </>
  )
}

export default Otp
