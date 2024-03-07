"use client"

const Testimonycard=({testimony})=>{
    return <div className="p-14 px-10 md:p-15 text-gray-900 flex w-[250px] flex-col justify-center items-center  space-y-5 bg-gray-300 rounded-lg">
             <h2 className="text-3xl text-bold"> {testimony.firstname + " " + testimony.lastname}</h2>
             <div className="flex flex-wrap">"
                {`${testimony.testimony}`}
                "
             </div>
            </div>
}

export default Testimonycard