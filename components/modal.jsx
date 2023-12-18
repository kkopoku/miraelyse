'use client'
import Image from "next/image"

export default function Modal ({data, closeModal}){
    return(
        <div onClick={closeModal} className="flex fixed h-screen w-screen bg-black bg-opacity-70 items-center justify-center z-40 hover:cursor-pointer">
            <div onClick={(e) => e.stopPropagation()} className="flex flex-col rounded bg-slate-200 p-10 w-1/3 items-center hover:cursor-default gap-2 relative">
                <div onClick={closeModal} className="absolute top-0 left-0 p-2 cursor-pointer text-2xl hover:text-yellow-500 transition-all"> &times; </div>
                <div>
                    <Image alt="" className="h-[300px] rounded-lg" width={250} height={300} src={data.src}/>
                </div>
                <p className="font-semibold">{data.name}</p>
                <p>{data.description}</p>
            </div>
        </div>
    )
}