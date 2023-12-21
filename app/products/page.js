'use client'

import TopNavigation from "@/components/TopNavigation"
import Footer from "@/components/Footer"
import data from "./data"
import Image from "next/image"
import { useState, useRef } from "react"
import Modal from "@/components/modal"

export default function Login() {

    const [selectedProduct, setSelectedProduct] = useState("");
    const [showModal, setShowModal] = useState(false);

    function closeModal() {
        console.log("closing modal");
        setShowModal(false);
    }

    const necklacesRef = useRef(null);
    const versatileRef = useRef(null);
    const pocketRef = useRef(null);


    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <main className="flex min-h-screen flex-col bg-white h-full text-black">

            <TopNavigation />

            {showModal && (
                <Modal data={selectedProduct} closeModal={closeModal} />
            )}

            
            <div className="flex bg-[url('/images/homepage-one-banner.jpg')] lg:h-[80vh] h-[50vh] items-center justify-center">
                <button onClick={()=>scrollToSection(necklacesRef)} className="lg:p-5 p-2 rounded-lg border-2 border-white hover:scale-110 font-medium text-white hover:bg-slate-200 hover:bg-opacity-40 bg-transparent transition-all text-base lg:text-2xl mt-20">Browse Catalog</button>
            </div>

            {/* Necklaces */}
            <div ref={necklacesRef} className="flex flex-col w-full py-20 px-5 lg:px-32">
                <div className="flex flex-row items-center justify-center text-2xl font-semibold pb-5">Necklaces</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 bg-slate-100 border rounded-lg border-slate-300 p-5 lg:p-10">
                    {data.necklaces.map((item) =>
                        <div onClick={() => {
                            setSelectedProduct(item);
                            setShowModal(true);
                        }

                        } className="flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-all" key={item.src}>
                            <Image alt="" className="lg:h-[300px] md:h-[180px] rounded-lg" width={250} height={300} src={item.src} />
                            <p className="lg:text-base text-xs">{item.name}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Versatile Scarf */}
            <div ref={versatileRef} className="flex flex-col w-full py-20 px-5 lg:px-32">
                <div className="flex flex-row items-center justify-center text-2xl font-semibold pb-5">Versatile Scarf</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 bg-slate-100 border rounded-lg border-slate-300 p-10">
                    {data.versatileScarfs.map((item) =>
                        <div onClick={() => {
                            setSelectedProduct(item);
                            setShowModal(true);
                        }

                        } className="flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-all" key={item.src}>
                            <Image alt="" className="lg:h-[300px] md:h-[180px] rounded-lg" width={250} height={300} src={item.src} />
                            <p className="lg:text-base text-xs">{item.name}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Pocket Squares */}
            <div ref={pocketRef} className="flex flex-col w-full py-20 px-5 lg:px-32">
                <div className="flex flex-row items-center justify-center text-2xl font-semibold pb-5">Pocket Squares</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 bg-slate-100 border rounded-lg border-slate-300 p-10">
                    {data.pocketSquares.map((item) =>
                        <div onClick={() => {
                            setSelectedProduct(item);
                            setShowModal(true);
                        }

                        } className="flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-all" key={item.src}>
                            <Image alt="" className="lg:h-[300px] md:h-[180px] rounded-lg" width={250} height={300} src={item.src} />
                            <p className="lg:text-base text-xs">{item.name}</p>
                        </div>
                    )}
                </div>
            </div>

            <Footer />

        </main>
    )
}