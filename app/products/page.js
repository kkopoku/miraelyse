"use client";

import TopNavigation from "@/components/TopNavigation";
import Footer from "@/components/Footer";
import data from "./data";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Modal from "@/components/modal";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Login() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-back",
      offset: 120,
      once: true,
    });
  }, []);

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
      <div className="flex flex-col bg-[url('/images/photo07.jpg')] bg-cover h-[50vh] lg:h-[90vh] items-start gap-20 lg:gap-32 rounded-b-2xl">
        <TopNavigation />

        <div className="flex flex-col bg-white bg-opacity-50 lg:p-20 p-5 rounded-md lg:w-1/2 lg:mx-24 mx-10">
          <div className="text-xs lg:text-base font-light lg:font-semibold">
            Welcome To Our Products Catalog
          </div>

          <div className="lg:text-5xl text-lg font-extrabold w-2/3">
            Quality African Products
          </div>

          <div className="flex lg:text-base text-xs font-light lg:font-medium py-3">
            Browse from our various categories
          </div>

          <div className="flex flex-row gap-3 ">
            <button
              onClick={() => {
                scrollToSection(necklacesRef);
              }}
              className="border border-black bg-transparent rounded-xl lg:text-base text-xs px-4 py-2 lg:py-3 hover:scale-110 transition-all"
            >
              Browse Catalog
            </button>

          </div>
        </div>
      </div>

      {showModal && <Modal data={selectedProduct} closeModal={closeModal} />}

      {/* Necklaces */}
      <div
        data-aos="fade-down"
        ref={necklacesRef}
        className="flex flex-col w-full py-20 px-5 lg:px-32"
      >
        <div className="flex flex-row items-center justify-center text-2xl font-semibold pb-5">
          Necklaces
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 bg-slate-100 border rounded-lg border-slate-300 p-5 lg:p-10">
          {data.necklaces.map((item) => (
            <div
              onClick={() => {
                setSelectedProduct(item);
                setShowModal(true);
              }}
              className="flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-all"
              key={item.src}
            >
              <Image
                alt=""
                className="lg:h-[300px] md:h-[180px] rounded-lg"
                width={250}
                height={300}
                src={item.src}
              />
              <p className="lg:text-base text-xs">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Versatile Scarf */}
      <div
        data-aos="fade-down"
        ref={versatileRef}
        className="flex flex-col w-full py-20 px-5 lg:px-32"
      >
        <div className="flex flex-row items-center justify-center text-2xl font-semibold pb-5">
          Versatile Scarf
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 bg-slate-100 border rounded-lg border-slate-300 p-10">
          {data.versatileScarfs.map((item) => (
            <div
              onClick={() => {
                setSelectedProduct(item);
                setShowModal(true);
              }}
              className="flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-all"
              key={item.src}
            >
              <Image
                alt=""
                className="lg:h-[300px] md:h-[180px] rounded-lg"
                width={250}
                height={300}
                src={item.src}
              />
              <p className="lg:text-base text-xs">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Pocket Squares */}
      <div
        data-aos="fade-down"
        ref={pocketRef}
        className="flex flex-col w-full py-20 px-5 lg:px-32"
      >
        <div className="flex flex-row items-center justify-center text-2xl font-semibold pb-5">
          Pocket Squares
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 bg-slate-100 border rounded-lg border-slate-300 p-10">
          {data.pocketSquares.map((item) => (
            <div
              onClick={() => {
                setSelectedProduct(item);
                setShowModal(true);
              }}
              className="flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-all"
              key={item.src}
            >
              <Image
                alt=""
                className="lg:h-[300px] md:h-[180px] rounded-lg"
                width={250}
                height={300}
                src={item.src}
              />
              <p className="lg:text-base text-xs">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
