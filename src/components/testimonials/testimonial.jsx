"use client"
import {  useEffect, useState } from "react"
import testimonialsarray from "@/utils/testimonials"
import Testimonycard from "../testimonialcard.jsx/testimonialcard"


const Testimoniallist = ()=>{
    const [testimonials, settestimonials] = useState(testimonialsarray)
   useEffect(()=>{
     console.log(testimonials)
    },[])
    return <div className="border-t-2 p-10">
             <h2 className="text-white  text-center text-3xl mb-10 mt-10">Testimonies</h2>
             <div className="carousel rounded-box max-w-[70vw] text-white">
             { testimonials.map((testimony, i)=> {
                  return   <div className="carousel-item p-5 rounded-2xl">
                              <Testimonycard key={i} testimony= {testimony}/>
                           </div> 
                           })
         } 
         </div>
        </div>
}

export default Testimoniallist