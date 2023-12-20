"use client";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Image from "next/image";

const images = [
  "/images/carousel01.jpg",
  "/images/carousel02.jpg",
  "/images/carousel03.jpg",
  "/images/carousel04.jpg",
  "/images/carousel05.jpg",
  "/images/carousel06.jpg",
  "/images/carousel07.jpg",
  "/images/carousel08.jpg",
  "/images/carousel09.jpg",
  "/images/carousel10.jpg",
];

export default function SlideShow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex items-center justify-center gap-10">
      <button
        className="p-4 px-5 rounded-full bg-transparent hover:text-yellow-500"
        onClick={prevSlide}
      >
        <IoIosArrowBack />
      </button>
      <Image
        height={300}
        width={300}
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="object-cover brightness-90 rounded-lg"
      />
      <button
        className="p-4 px-5 rounded-full bg-transparent hover:text-yellow-500"
        onClick={nextSlide}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}
