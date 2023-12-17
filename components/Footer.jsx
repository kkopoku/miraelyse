'use client'
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";

export default function Footer(){
    return(
        <div className="flex flex-row bg-black justify-center p-20 gap-10 text-white text-center">
            <button onClick={()=>window.open('https://www.instagram.com/mira_elyse/?hl=en','_blank')}><IoLogoInstagram className="text-3xl"/></button>
            <button onClick={()=>window.open('https://twitter.com/mira_elyse','_blank')}><RiTwitterXFill className="text-3xl"/></button>
        </div>
    )
}