"use client"
import {useFormState} from "react"
import { test } from "@/utils/actions"

const initialstate={}
const Test=()=>{
    const [state,formAction]=useFormState(test,initialstate)
    return <form action={test} className="flex flex-col p-5 justify-center items-center">
    <input type="text " placeholder="EMAIL" className="p-2 m-2 border-2 rounded-lg bg-black" name="email" />
    <input type="text " placeholder="PASSWORD" name="password" className="p-2 rounded-lg bg-black m-2 border-2" />

    {state?.msg && <p>{state.msg}</p>} 
    </form>



}
export default Test

