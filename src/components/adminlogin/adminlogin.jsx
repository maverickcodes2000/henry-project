"use client"
import { useEffect, useFormState, useState } from "react"
import { admindata } from "@/utils/Admin/admindata"
/* import { handleadminlogin } from "@/utils/actions" */
import Link from "next/link"
import { useRouter } from "next/navigation"
const initialstate={}

const Adminlogin = () => {
    const [state, setstate]=useState({msg:''})
    const [ispasswordvisible, setispasswordvisible]=useState(false)
    let router = useRouter()
    useEffect(()=>{
        state?.msg ==='sucess' && router.push('/adminpage')
    },[state?.msg])

    const handleadminlogin=(formData)=>{
       const {email,password} = Object.fromEntries(formData)
       console.log(email, password)
       console.log(admindata)
       if(email === ''){
        setstate({err:'pls provide email and password'})
        return
       }
       const iscreadentialsvalid = admindata.filter(admin =>{ return admin.email === email && admin.password===password})
       console.log(iscreadentialsvalid)
       if(iscreadentialsvalid.length>0){
        setstate({msg:'sucess'})
        return
       }
       setstate({err:'wrong credentials'}) 
    }

     return <div className=" flex flex-col justify-center rounded-2xl text-white  items-center border-2 border-white">
               <div className="flex justify-end w-full p-4 "><p className="hover:bg-gray cursor-pointer"><Link href='/'>X</Link></p></div> 
               <h2 className="text-center text-2xl">LOGIN</h2>
               <form action={handleadminlogin} className="flex flex-col p-5 justify-center items-center">
                 <input type="text " placeholder="EMAIL" className="p-2 m-2 border-2 rounded-lg bg-black" name="email" />
                 <input type='pasword' placeholder="PASSWORD" name="password" className="p-2 rounded-lg bg-black m-2 border-2" />
                 <div className="w-full px-5 flex mb-4 justify-center items-center">
                  <button className="bg-green-500 text-black p-2 mt-5 w-full rounded-2xl">submit</button>
                 </div>
               </form>
               {state?.err && <p>{state.err}</p>}   
            </div>

}

export default Adminlogin