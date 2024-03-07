"use client"
import { createRef } from "react"
import { useGlobalcontext} from "../Context/store"
import Link from "next/link"

const adminpage = () => {
    const {state, ADD, REMOVE, SETERROR} = useGlobalcontext()
    const ref = createRef()
    const handleaddchild=(formData)=>{
         const {firstname, lastname, gender, isadopted}=Object.fromEntries(formData)
         if(firstname===''||lastname===''||gender===''){
              SETERROR('please provide first name, last name and gender')
              return
         }
         ADD({firstname, lastname,gender,isadopted})
         ref.current.reset()
    }
    return (
         <div className="flex flex-col space-y-5 items-center bg-black min-h-[100vh]">
             <div className="flex justify-between sticky top-2 w-[95%] opacity-90  md:w-[55%] mt-3 bg-white space-x-3 items-center rounded-2xl p-3 md:p-5">
                <ul className="flex  p-3 space-x-1 md:space-x-5 text-gray text-2xl cursor-pointer">
                    <li className="border-2 rounded-2xl border-gray-900 p-3 hover:bg-gray-500 hover:text-white duration-300 ease-in-out"><Link href='/'>Welcome</Link></li>
                </ul>
                <Link href={'/'}>
                    <button className="btn btn-primary">Signout</button>
                </Link>
                
              </div>
              <div className="p-5 flex space-x-2 justify-center items-center w-[95%]">
                <div className="bg-gray-300 min-w-[100px] p-2 min-h-[50px]  md:min-w-[250px] md:min-h-[100px] rounded-2xl flex justify-center items-center  space-x-5">
                  <h2>Registered kids</h2>
                  <div className="w-[40px] h-[40px] flex justify-center  border-2 rounded-full border-black items-center">
                     <p className="text-xl font-bold">{state.kids.length}</p>
                  </div>  
                </div>
                <div className="bg-gray-300 min-w-[100px]  p-2 min-h-[50px] md:min-w-[250px] md:min-h-[100px] rounded-2xl flex justify-center items-center cursor-pointer space-x-5">
                  
                  <h2>Add kids</h2>
                  <div className="w-[40px] h-[40px] flex justify-center  border-2 rounded-full border-black items-center">
                    <a href="#addchild">
                      <p className="text-3xl">+</p>
                    </a>
                     
                  </div>  
                </div>
              </div>
              <div className=" flex flex-col text-white border-t-2 w-full p-2 ">
                <h2 className="text-center text-2xl font-bold mb-8">Children</h2>
                <div className="flex justify-center flex-wrap gap-10 p-5">
                  {
                     state.kids.map(child=>(
                      <div className="w-[200px] flex flex-col text-black justify-center items-center space-y-3 p-4 bg-gray-300 rounded-lg hover:bg-gray-900 hover:text-white duration-500 ease-in-out">
                        <div className="rounded-full"  >
                          <img src='/no-avatar.png' alt='' className="w-[50px] h-[50px]"/>
                        </div>
                        <h2 className="text-xl font-bold"> {child.firstname + " " + child.lastname}</h2>
                        <h3 className="text-gray-900 "> {`Gender: ${child.gender}`}</h3>
                        <h3 className="text-gray-900">{child.adopted===true?'Adopted':null}</h3>
                        <button className="px-5 p-1 rounded-2xl bg-gray-400" onClick={()=>REMOVE(child.firstname)}>Delete</button>
                      </div>
                     ))
                  }
                </div>
              </div>
              <div className=" flex flex-col justify-center border-t-2 w-full" id="addchild">
                <h2 className="text-center p-3 mb-3 text-white text-xl font-bold">Add a child</h2>
                <div className="flex  flex-col justify-center items-center p-5">
                  <form ref={ref} action={handleaddchild} className="flex flex-col p-5 justify-center items-center max-w-fit border-2 rounded-2xl text-white">
                    <input type="text " placeholder="first name" className="p-2 m-2 border-2 rounded-lg bg-black" name="firstname" />
                    <input type="text " placeholder="last name" name="lastname" className="p-2 rounded-lg bg-black m-2 border-2" />
                    <input type="text " placeholder="gender" name="gender" className="p-2 rounded-lg bg-black m-2 border-2" />
                    <input hidden type="text " placeholder="last name" name="isadopted" value={false} className="p-2 rounded-lg bg-black m-2 border-2" />
                    <div className="w-full px-5 flex  justify-center items-center">
                      <button className="bg-green-500 text-black p-2 mt-5 w-full rounded-2xl">SUBMIT</button>
                    </div> 
                  </form>
                  {state.error && <p className="text-white font-bold mt-4">{state.error}</p>}
                </div>
              </div>
              <div>

              </div>
         </div>
    )
   
}
export default adminpage

               
                  
                     
               