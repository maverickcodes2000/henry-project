"use client"
import Link from "next/link"
const Response=()=>{
   return <div className=" responseflex flex-col justify-center items-center text-white space-y-5  bg-black p-10 min-h-[100vh] ">
             <button className="p-2 px-10 bg-green-500 rounded-2xl"><Link href='/'>Back</Link></button>
             <div className="p-10 rounded-2xl border-2 ">
               <p>your response has been recorded and your application is being reviewed.</p>
               <p>An email will be sent to your email adress for futher information</p>
             </div>
          </div>
        }
        export default Response