"use client"
import Link from "next/link";
import { ReactTyped } from "react-typed";

const Homepagediv=()=>{
    return  <div className=" flex flex-col p-20 space-y-5 justify-center min-h-[100vh] items-center text-white">
                <h1 className="text-bold text-7xl  bg-gray-300 text-gray-700 rounded-2xl p-4 border-2">HAPPY HOMES</h1>
                <p className="text-2xl bg-gray-300 p-2 rounded-2xl text-black text-bold hidden md:visible">Complete your home by adopting a child today</p>
                <ReactTyped className="text-lg no-wrap md:text-xl text-bold"
                strings={[
                    "Adopt a child today"
                ]}
                typeSpeed={70}
                backSpeed={70}
                loop
                >
                </ReactTyped>
                <button className="p-5 rounded-2xl text-gray-700 text-bold text-2xl bg-gray-300
                 ease-in-out duration-500 hover:bg-black hover:text-white">
                    <Link href='acess'>Get Started</Link>
                </button>
            </div>
}

export default Homepagediv