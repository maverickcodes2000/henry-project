"use client"
import Reg from "../../components/sign/signin"
import Login from "../../components/login/login"

const { useState } = require("react")

const Acess=()=>{
    const [isNewUser, setIsNewUser] = useState(false)
    const [isLoggedIn, setisLoggedIn]=useState(false)
    return <main className="flex justify-center p-10 items-center min-h-[100vh] bg-black">
        {isNewUser?
           <Reg setIsNewUser={setIsNewUser} isNewUser={isNewUser}/>:
           <Login setIsNewUser={setIsNewUser} isNewUser={isNewUser} isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />
        }
    </main>

}
export default Acess