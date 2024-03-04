"use client"
import { useFormState } from "react"
import { handlelogin } from "@/utils/actions"
import Link from "next/link"
const initialstate={}

const Login = ({setIsNewUser, isNewUser, isLoggedIn, setisLoggedIn}) => {
     return <div className=" flex flex-col justify-center rounded-2xl text-white  items-center border-2 borger-white ">
               <div className="flex justify-end w-full p-4 "><p className="hover:bg-gray cursor-pointer"><Link href='/'>X</Link></p></div> 
               <h2 className="text-center text-2xl">LOGIN</h2>
               <form action={handlelogin} className="flex flex-col p-5 justify-center items-center">
                 <input type="text " placeholder="EMAIL" className="p-2 m-2 border-2 rounded-lg bg-black" name="email" />
                 <input type="text " placeholder="PASSWORD" name="password" className="p-2 rounded-lg bg-black m-2 border-2" />
               </form>
               <div className="w-full px-5 flex  justify-center items-center">
                <button className="bg-green-500 p-2 mt-5 w-full rounded-2xl" onClick={()=>setisLoggedIn(!isLoggedIn)}><Link href='/response'>submit</Link></button>
               </div>
               <div className="w-full p-5 flex justify-between items-center">
                <p>Dont have an account?</p>
                <h2 onClick={()=>{
                 setIsNewUser(!isNewUser)
                }} className="cursor-pointer text-green-200">Login</h2>
               </div>    
            </div>

}

export default Login


