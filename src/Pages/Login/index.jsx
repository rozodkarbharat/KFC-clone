import { Input, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import "./Login.css"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
// import { Useuserauth } from '../context/Authcontext'
import { async } from '@firebase/util'
import { Authcontext } from '../../context/Authcontext'
import Otp from '../Otp'
import { Navigate,useNavigate,Link } from 'react-router-dom'

const Login = () => {
    const [number,setnumber]=useState("")
        const [error,seterror]=useState("")

       const {Setuprecatcha,setconfirmobj}=useContext(Authcontext);
 
const navigate=useNavigate()


const getotp=async(e)=>{
e.preventDefault()

seterror("")

if(number===""||number===undefined){
  return seterror("Enter a valid phone number!")

}
try {

  const res=await Setuprecatcha(number)
    
    console.log(res,"***")
    setconfirmobj(res)
 navigate("/otp")
}catch(err){
seterror(err.message)
console.log(error)
}
console.log(number)

}





  return (
    <div className='login_main'>
        <div className='login_header'>
      <p className='login_main_first_p'>Sign In / Sign Up</p>
      <img className='login_kfc_image' src="KFC.png" alt=""/>
      <p className='login_main_second_p'>LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE NUMBER!</p>
        </div>

      <form className='login_form' onSubmit={getotp}>

        <PhoneInput
        defaultCountry='IN'
        value={number}
        onChange={setnumber}
        placeholder="Enter Phone Number" className='login_input'/>
        <div className='login_terms'>
            By “logging in to KFC”, you agree to our <u> <b> Privacy Policy </b> </u>  and<u> <b> Terms & Conditions </b> </u>.
        </div>
        <div id="recaptcha-container"/>
        <button type='submit'>Send me a code</button>
      </form>
   
        <div className='login_or' style={{display:"flex"}}>
            <div></div>
            <div>or</div>
            <div></div>
         
        </div>
        <div className='login_skip'>
            <Link to ="/">
     <button>skip, continue as guest</button>
     </Link>
        </div>
         
       
    </div>
  )

}

export default Login
