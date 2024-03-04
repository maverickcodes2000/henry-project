"use client"
import Link from "next/link";
import { ReactTyped } from "react-typed";

const Homepagediv=()=>{
    return  <div className=" flex flex-col p-20 space-y-5 justify-center items-center text-white">
                <h1 className="text-bold text-7xl">HAPPY HOMES</h1>
                <p className="text-xl text-bold">your home need not be without a  child anymore</p>
                <ReactTyped className="text-lg no-wrap md:text-2xl text-bold"
                strings={[
                    "Adopt a child today"
                ]}
                typeSpeed={70}
                backSpeed={70}
                loop
                >
                </ReactTyped>
                <button className="p-5 rounded-2xl text-bold text-2xl bg-green-600
                 ease-in-out duration-500 hover:bg-white hover:text-black">
                    <Link href='acess'>Get Started</Link>
                </button>
            </div>
}

export default Homepagediv