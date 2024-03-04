"use client"
import dynamic from "next/dynamic"
import Childcardmd from "../childcard/childcard-md"
import datagenerator from "@/utils/datagenerator"
import { useEffect, useState } from "react"

const Childrenlistmd = ()=>{
    const [children, setchildren] = useState([])
    useEffect(()=>{
      const kids = datagenerator(3)
      console.log(kids)
      setchildren(kids)
    },[])
    return <div className="border-t-2 p-10">
      <h2 className="text-white text-center text-3xl mb-10 mt-10">Children</h2>
    <div className="carousel rounded-box max-w-[70vw] text-white">
               { children.map(child => {
                    return   <div className="carousel-item p-5 rounded-2xl">
                                <Childcardmd child = {child}/>
                             </div> 
                             })
           } 
           </div>
          </div>
}

export default Childrenlistmd