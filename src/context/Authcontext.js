import { RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { auth } from "../Firebase";




export const Authcontext=createContext()

 
export const Authprovider=({children})=>{
  
 const [confirmobj,setconfirmobj]=useState("")




    const Setuprecatcha=(number)=>{
const recaptchaVerifier=new RecaptchaVerifier('recaptcha-container', {}, auth)
recaptchaVerifier.render()
return signInWithPhoneNumber(auth,number,recaptchaVerifier)
    }


    return <Authcontext.Provider value={{auth,Setuprecatcha,setconfirmobj,confirmobj}}>{children}</Authcontext.Provider>
}

// export const Useuserauth=()=>{
//  useContext(Authcontext)
// }