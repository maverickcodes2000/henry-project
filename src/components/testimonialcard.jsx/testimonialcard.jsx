"use client"

const Testimonycard=({testimony})=>{
    return <div className="p-10 md:p-15 flex w-32 flex-col justify-center items-center  space-y-5 bg-green-500 rounded-lg">
             <h2 className="text-3xl text-bold"> {testimony.firstname + " " + testimony.lastname}</h2>
             <div className="flex flex-wrap">"
                {`${testimony.testimony}`}
                "
             </div>
            </div>
}

export default Testimonycard