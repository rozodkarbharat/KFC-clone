import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { Authcontext } from "../context/Authcontext"
import {useLocation} from "react-router-dom"

export const Requiredauth=(children)=>{
const {token}=useContext(Authcontext)
const {pathname}=useLocation()
console.log(pathname,"req")
    if(token){
  return {children}
    }
    else{
        return <Navigate to="/login" state={{from:pathname}} replace/>
    }
}