"use client"
import { useFormState } from "react"
import { handlereg } from "@/utils/actions"
import Link from "next/link"

const initialstate={}
const Reg = ({setIsNewUser, isNewUser}) => {
     return <div className="flex flex-col justify-center items-center text-white border-2 rounded-2xl border-white">
               <div className="w-full p-3 flex justify-end" ><p className="p-1  cursor-pointer hover:bg-green-500"><Link href='/'>X</Link></p></div>
               <h2>REGISTER</h2>
               <form action={handlereg} className="flex flex-col p-5 justify-center items-center">
                 <input type="text " placeholder="first name" className="p-2 m-3 bg-black border-2 rounded-2xl" name="firstname" />
                 <input type="text " placeholder="last name" name="lastname" className="p-2 m-3 bg-black border-2 rounded-2xl" />
                 <input type="text " placeholder="email" className="p-2 m-3 bg-black border-2 rounded-2xl" name="email" />
                 <input type="text " placeholder="occupation" className="p-2 m-3 bg-black border-2 rounded-2xl" name="occupation" />
                 <input type="text " placeholder="address" className="p-2 m-3 bg-black border-2 rounded-2xl" name="adress" />
                 <input type="password" placeholder="password" className="p-2 m-3 bg-black border-2 rounded-2xl" name="password"/>
                 <input type="password" placeholder="confirm password" className="p-2 m-3 bg-black border-2 rounded-2xl" name=" confirmpassword"/>
               </form>
               <div className="w-full p-4">
                 <button className="w-full  p-3 bg-green-500 rounded-2xl" onClick={()=>{setIsNewUser(!isNewUser)}}>Submit</button>
               </div> 
               <div className="flex justify-between items-center">
                <p className="p-3">Already have an account</p>
                <p className="text-green-200 cursor-pointer" onClick={()=>setIsNewUser(!isNewUser)}>Sign In</p>
               </div>   
            </div>

}

export default Reg