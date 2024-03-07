"use client"
import Login from "../../components/login/login"
import Adminlogin from "@/components/adminlogin/adminlogin"



const { useState } = require("react")

const Adminacess=()=>{
    const [isNewUser, setIsNewUser] = useState(false)
    const [isLoggedIn, setisLoggedIn]=useState(false)
    return <main className="flex  justify-center p-10 items-center min-h-[100vh] bg-black">
             <Adminlogin/>
           </main>

}
export default Adminacess