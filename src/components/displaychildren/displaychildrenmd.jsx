"use client"
import Childcardmd from "../childcard/childcard-md"
import datagenerator from "@/utils/datagenerator"
import { Suspense, useEffect, useState } from "react"
import { useGlobalcontext } from "@/app/Context/store"


const Childrenlistmd = ()=>{
  const [children , setchildren]=useState([])
  const {state}=useGlobalcontext()
    useEffect(()=>{
      const kids = datagenerator(3)
      setchildren(kids)
    },[])
    return <div className="border-t-2 p-10">
      <h2 className="text-white text-center text-3xl mb-10 mt-10">Children</h2>
      <div className="carousel rounded-box max-w-[70vw] text-white">
               { state.kids.map(child => {
                    return   <div className="carousel-item p-5 rounded-2xl"  key={child.birthdate}>
                                <Childcardmd child = {child}/>
                             </div> 
                             })
           } 
      </div>
     
          </div>
}

export default Childrenlistmd