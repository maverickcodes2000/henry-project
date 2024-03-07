"use client"
import children from "@/utils/testimonials"
import Link from "next/link"

const Childcardmd=({child})=>{
    return <div className="p-10 md:p-15 flex flex-col text-black justify-center items-center  space-y-3 bg-gray-300 rounded-lg">
             <div className=" rounded-full"  >
               <img src='/no-avatar.png' alt='' className="w-[50px] h-[50px]"/>
             </div>
             <h2 className="text-xl font-bold"> {child.firstname + " " + child.lastname}</h2>
             <h3 className="text-gray-900"> {`Gender: ${child.gender}`}</h3>
             <button className="btn btn-primary"><Link href='/acess'>Adopt Now</Link></button>
            </div>
}

export default Childcardmd