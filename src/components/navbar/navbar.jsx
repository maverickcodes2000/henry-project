"use client"
import Link from "next/link";

const Navbar = ()=>{

    return    <div className="flex justify-between sticky top-2 w-[95%] opacity-90  md:w-[55%] mt-3 bg-white space-x-3 items-center rounded-2xl p-3 md:p-5
              ">
                <ul className="flex justify-between p-3 items-center space-x-1 md:space-x-5 text-gray text-bold text-lg md:text-2xl cursor-pointer">
                    <li className=" hover:bg-gray-500 hover:text-white duration-500 ease-in-out border-2 p-2 rounded-2xl border-gray-500"><a href="#home-page">Home</a></li>
                    <li className=" hover:bg-gray-500 hover:text-white duration-500 ease-in-out border-2 p-2 rounded-2xl border-gray-500"><a href="#about-page">About</a></li>
                    <li className=" hover:bg-gray-500 hover:text-white duration-500 ease-in-out border-2 p-2 rounded-2xl border-gray-500"><a href="#children-segment">Children</a></li>
                </ul>
                <Link href={'/acess'}>
                    <button className="btn btn-primary">SignIn</button>
                </Link>
                
              </div>
}

export default Navbar