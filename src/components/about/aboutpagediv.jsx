const Aboutpage=()=>{
    return <div className="text-white flex-col justify-center bg-gray-500 items-center  p-3">
              <h2 className=" text-center text-3xl mb-10">About Us</h2>
              <div className=" flex flex-col justify-center items-center  md:justify-between md:items-center md:flex-row">
               <div className=" flex flex-col md:flex-row justify-center  items-center p-6 space-y-4">
                    <h2 className="flex flex-wrap text-center w-[50%] text-bold p-3 text-2xl">Welcome to your one stop innovative solution
                        for all things adoption related. Over the years
                        we have paired people like you with amazing children,
                        helping them acheive a happy home.
                        Our system operates seamlessly through four key pillars:
                    </h2>
                    <div className=" w-[90%] md:w-[50%]  opacity-90 border-2 text-white p-4 rounded-md ">
                      <ul className="flex flex-col justify-center items-start space-y-4">
                        <li className="flex justify-between items-center space-x-2 "><div className="w-[40px] h-[40px] hidden md:flex justify-center items-center rounded-full border-2">1</div><div className="text-bold text-2xl"><h2>Providing children with a good home</h2></div></li>
                        <li className="flex justify-between items-center space-x-2 "><div className="w-[40px] h-[40px] hidden md:flex justify-center items-center rounded-full border-2">2</div><div className="text-bold text-2xl"><h2>Enabling people attain a happy home</h2></div></li>
                        <li className="flex justify-between items-center  space-x-2"><div className="w-[40px] h-[40px] hidden md:flex justify-center items-center rounded-full border-2">3</div><div className="text-bold text-2xl"><h2>Enabling for seamless adoption procedures</h2></div></li>
                      </ul>
                    </div>  
               </div>
             </div>
           </div>
}

export default Aboutpage 