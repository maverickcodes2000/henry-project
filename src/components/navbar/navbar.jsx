"use client"
import Link from "next/link";
import datagenerator from "@/utils/datagenerator"
import { userAgent } from "next/server"

const Navbar = ()=>{

    return    <div className="flex justify-between sticky top-2 w-[95%] opacity-90  md:w-[55%] mt-3 bg-white space-x-3 items-center rounded-2xl p-3 md:p-5
              ">
                <ul className="flex justify-between p-3 space-x-1 md:space-x-5 text-gray text-2xl cursor-pointer">
                    <li className=""><a href="#home-page">Home</a></li>
                    <li><a href="#about-page">about</a></li>
                    <li><a href="#children-segment">children</a></li>
                </ul>
                <Link href={'/acess'}>
                    <button className="btn btn-primary">SignIn</button>
                </Link>
                
              </div>
}

export default Navbar