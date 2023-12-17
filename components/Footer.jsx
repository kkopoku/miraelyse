"use client";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="flex flex-col w-full bg-black">

      <div className="flex flex-row justify-center p-20 gap-10 text-white text-center">
        <button
          onClick={() =>
            window.open("https://www.instagram.com/mira_elyse/?hl=en", "_blank")
          }
        >
          <IoLogoInstagram className="text-3xl" />
        </button>
        <button
          onClick={() =>
            window.open("https://twitter.com/mira_elyse", "_blank")
          }
        >
          <RiTwitterXFill className="text-3xl" />
        </button>
      </div>

      <div className="flex flex-row justify-center pb-10">
        <p className="text-white">Mira</p>
        <p className="text-yellow-500">Elyse</p>
        <p className="text-white">&copy; 2023</p>
      </div>


    </div>
  );
}
