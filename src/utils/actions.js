"use server"
import { admindata } from "./Admin/admindata"

export const handlereg = ( formData)=>{
    const firstname = formData.get('firstname')
    const lastname=formData.get('lastname')
    const email=formData.get('email')
    const password=formData.get('password')
    const confirmpassword=formData.get('confirmpassword')
    if(password!==confirmpassword){
    }
    try {
        return {msg:'sucessfully registered'}
    } catch (error) {
        
    }
}

export const handlelogin =(formData)=>{
    const email = formData.get('email')
    const password = formData.get('password')
    try {
        return {msg:'sucessfully registered'}
    } catch (error) {
        
    }
}
export const handleadminlogin =(prevstate,formData)=>{
    const email = formData.get('email')
    const password = formData.get('password')
    try {
        return {msg:'sucessfully registered'}
    } catch (error) {
       console.log(error) 
    }
}

