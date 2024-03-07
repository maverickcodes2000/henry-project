"use client"
import Reg from "../../components/sign/signin"
import Login from "../../components/login/login"
import Link from "next/link"

const { useState } = require("react")

const Acess=()=>{
    const [isNewUser, setIsNewUser] = useState(false)
    const [isLoggedIn, setisLoggedIn]=useState(false)
    return <main className="flex flex-col justify-center p-10 items-center min-h-[100vh] bg-black">
        <div className="w-full flex justify-end items-center text mb-5">
            <button className="p-5 border-2 m-3 text-white rounded-2xl hover:text-black hover:bg-white duration-500 ease-in-out">
                <Link href='/adminAcess'>Admin login</Link>
            </button>
        </div>
        {isNewUser?
           <Reg setIsNewUser={setIsNewUser} isNewUser={isNewUser}/>:
           <Login setIsNewUser={setIsNewUser} isNewUser={isNewUser} isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />
        }
    </main>

}
export default Acess