"use client"

import Link from "next/link";
import Navbar from "@/components/navbar/navbar";
import Homepagediv from "@/components/divs/firsthomepagediv/homepadediv";
import Aboutpage from "@/components/about/aboutpagediv";
import Childrenlistmd from "@/components/displaychildren/displaychildrenmd";
import Testimoniallist from "@/components/testimonials/testimonial";




export default function Home() {
  return (
       <main className="flex min-h-screen flex-col bg-transparent items-center justify-center ">
       <Navbar/>
      <div id="home-page" className=" w-[100%] p-5">
        <Homepagediv/>
      </div>
      <div id="about-page" className="border-t-2  w-[100%] flex justify-center">
        <Aboutpage/> 
      </div>
      <div id="children-segment" className="border-t-2  w-[100%] flex justify-center">
         <Childrenlistmd/>
      </div>
      <div id="testimony-segment" className="border-t-2  w-[100%] flex justify-center">
        <Testimoniallist/>
      </div>
      <div id="testimony-segment" className="border-t-2  w-[100%] flex justify-center">
        
      </div>
    </main>   
  );
}
