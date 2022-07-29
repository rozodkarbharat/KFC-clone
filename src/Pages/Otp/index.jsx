import { Input, TextField } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Authcontext } from '../../context/Authcontext'
import "./Otp.css"
import {useNavigate,Link} from "react-router-dom"
import {useLocation} from "react-router-dom"


const Otp = () => {
   const [otp,setotp]=useState("")
   const {confirmobj,settoken,number}=useContext(Authcontext)
      const [error,seterror]=useState("") 
     const navigate=useNavigate()
      const {location}=useLocation()
console.log(location)

const verifyotp=async(e)=>{
e.preventDefault()
  console.log(otp)
if(otp===""||otp===undefined)return
try{
  if(otp.length===6)
{
  seterror("")
await confirmobj.confirm(otp)
settoken(otp)
navigate("/")
}
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
          Please enter the verification code we just sent to <u> <b> {number}</b> </u>  .
        </div>
        <div className='otp_change'>
          <Link to="/login">
         <u> <b>Different Number?  </b> </u>
         </Link>
        </div>
     

     <div >
      <form  onSubmit={verifyotp}>
        <div className='otp_input'>

    <TextField sx={{width:"60%",margin:"auto",background:"white"}} value={otp} onChange={(e)=>setotp(e.target.value)} id="filled-basic" label="OTP" variant="filled" />
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
