import { RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { auth } from "../Firebase";





export const Authcontext=createContext()

 
export const Authprovider=({children})=>{
  const [token,settoken]=useState("")
 const [confirmobj,setconfirmobj]=useState("")
 const [number,setnumber]=useState("")




    const Setuprecatcha=(number)=>{
        setnumber(number)
const recaptchaVerifier=new RecaptchaVerifier('recaptcha-container', {}, auth)
recaptchaVerifier.render()
return signInWithPhoneNumber(auth,number,recaptchaVerifier)
    }


    return <Authcontext.Provider value={{auth,Setuprecatcha,setconfirmobj,confirmobj,settoken,token,number}}>{children}</Authcontext.Provider>
}

// export const Useuserauth=()=>{
//  useContext(Authcontext)
// }