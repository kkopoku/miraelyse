"use client";

import React from "react";
import TopNavigation from "@/components/TopNavigation";
import Image from "next/image";
import SlideShow from "@/components/SlideShow";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const why = useRef(null);
  const router = useRouter();

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-back",
      offset: 120,
      once: true,
    });
  }, []);

  const introText = [
    "Mira Elyse is dedicated to pushing the boundaries in Jewellery making and the design of our other accessories. We creatively integrate Murano Glass beads, Semi Precious stones, Swarovski beads, Freshwater Pearls, and other rare authentic beads into our jewelry through innovative design and craftsmanship.",
    "Also using different Ankara designs, contemporary abstract designs and Adinkra symbols in our exclusive ladies versatile scarves and mens pocket squares. On the other hand our detailed designs for our scarves and pockets squares are printed on 100% mulberry silk twill fabrics with hand rolled edge finish.",
    "We hold nothing back in our unique bespoke pieces. The different combination of beads in our collection from across the continents makes Mira Elyse accessories a peerless creation designed to enhance your style or give out as gift to a loved one.",
  ];

  const whyChooseText = [
    "Mira Elyse is your destination for exclusive accessories crafted with precision and care. We use only the finest materials – genuine authentic beads, antique silver or gold, and stainless steel for our jewelry. The silk range fabrics grace our versatile scarves and pocket squares.",
    "Our designs are bespoke, handcrafted in limited quantities for a truly unique touch. Each piece is a celebration of authenticity and elegance, making a statement that goes beyond style.",
    "Packaged with utmost care, our accessories come in organza bags, Mira Elyse gift boxes, or velvet pouches, adding sophistication to your purchase. The ladies' scarves, men's pocket squares, and Murano glass cufflinks are elegantly presented in Mira Elyse packaging.",
    "Your purchase includes a label card detailing the diverse beads used in our accessories, offering a glimpse into the craftsmanship and variety we offer. Elevate your style with Mira Elyse – where every accessory is a work of art, designed to make a statement.",
  ];

  const typingText = [
    "We craft accessories using genuine beads, antique metals, and premium silk, chiffon, and polyester fabrics.",
    "Our accessories are distinguished by meticulous craftsmanship, ensuring each piece is a blend of timeless elegance and contemporary style.",
    "Authentic beads and antique metals infuse sophistication, complemented by premium silk, chiffon, and polyester fabrics that elevate both the visual and tactile aspects of the products.",
    "The result is a collection of accessories that seamlessly marry quality materials with exquisite design, making a lasting statement in fashion.",
  ];

  return (
    <main className="flex min-h-screen flex-col bg-white h-full text-black font-Roboto">
      <div className="flex flex-col bg-[url('/images/homepage-one-banner.jpg')] h-[60vh] lg:h-[90vh] items-start gap-20 lg:gap-32 rounded-b-2xl">
        <TopNavigation />

        <div className="flex flex-col bg-transparent bg-opacity-50 lg:p-20 p-5 rounded-md lg:w-1/2 lg:mx-24 mx-10">
          <div className="text-base lg:text-base font-semibold">
            Welcome To MiraElyse
          </div>

          <div className="lg:text-5xl text-3xl font-extrabold w-2/3">
            You asked for the best. Here we are
          </div>

          <div className="flex text-base font-medium min-h-[100px]">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString(typingText[0]).start()
              }}
              options={{
                delay: 40,
              }}
            />
          </div>

          <div className="flex flex-row gap-3 ">
            <button
              onClick={() => {
                scrollToSection(why);
              }}
              className="border border-white bg-white rounded-full lg:text-base text-sm w-36 py-3 hover:scale-110 transition-all"
            >
              Know More
            </button>
            <button
              onClick={() => {
                router.push("/products");
              }}
              className="border border-black rounded-full lg:text-base text-sm w-36 py-3 hover:scale-110 transition-all"
            >
              Our Products
            </button>
          </div>
        </div>
      </div>

      {/* Ethos of Brand */}
      <div
        data-aos="fade-down"
        className="grid lg:grid-cols-2 gap-5 px-10 lg:px-20 py-16 lg:py-32 items-center"
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-row text-2xl lg:text-4xl font-bold justify-center">
            <p className="text-yellow-500">WHO </p> <p>{"\u00a0"}ARE WE?</p>
          </div>
          <div className="flex flex-row text-sm lg:text-base font-light text-slate-800">
            Mira Elyse is a trendsetting brand offering must-have accessories,
            dedicated to pushing boundaries in jewelry making. Our scarves and
            pocket squares showcase innovative design and craftsmanship,
            incorporating various beads like Murano Glass, Semi Precious stones,
            and more. Featuring diverse designs, including Traditional African
            textiles and Adinkra symbols, our accessories stand out as peerless
            creations, enhancing styles from elegant to casual.
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Image
            className="brightness-75 rounded-lg"
            src="/images/carousel09.jpg"
            alt=""
            height={300}
            width={300}
          />
          <Image
            className="brightness-75 rounded-lg"
            src="/images/carousel10.jpg"
            alt=""
            height={300}
            width={300}
          />
        </div>
      </div>

      {/* Why Choose MiraElyse */}
      <div
        ref={why}
        className="grid lg:grid-cols-2 bg-slate-100 py-20 lg:py-32 items-center text-black"
      >
        <div data-aos="fade-down">
          <SlideShow />
        </div>

        <div
          data-aos="fade-down"
          className="flex flex-col gap-2 lg:gap-5 lg:pb-0 pt-5"
        >
          <div className="flex flex-row text-2xl lg:text-4xl font-bold text-yellow-500 px-10 justify-center lg:justify-start">
            <p>WHY</p>
            <p className="text-black">{"\u00a0"}CHOOSE MIRAELYSE?</p>
          </div>
          <div className="flex flex-row text-sm lg:text-base text-slate-800 font-light px-10 lg:pr-24">
            We craft our accessories using genuine beads, antique silver or
            gold, and stainless steel metals, paired with the finest silk range
            fabrics, chiffon, and polyester. Each design is unique and
            delicately handcrafted, produced in limited quantities. Our jewelry,
            scarves, pocket squares, and Murano glass cufflinks are elegantly
            packaged in organza bags, Mira Elyse gift boxes or velvet pouches at
            the point of sale. Each package includes a generic label card
            detailing the materials used in our accessories and showcases our
            diverse product range.
          </div>
        </div>
      </div>

      {/* Elevate your style*/}
      <div
        data-aos="fade-down"
        className="w-full py-20 lg:py-32 px-10 lg:px-20"
      >
        <div className="lg:text-4xl text-2xl flex flex-row font-bold justify-center pb-5 text-yellow-500">
          <p>ELEVATE</p>
          <p className="text-black">{"\u00a0"}YOUR STYLE </p>
        </div>
        <div className="grid grid:cols-2 lg:grid-cols-3 gap-4 place-items-center">
          <Image
            data-aos="fade-down"
            className="brightness-75 rounded-xl"
            src="/images/photo01.jpg"
            alt=""
            height={300}
            width={400}
          />
          <Image
            data-aos="fade-down"
            className="brightness-75 rounded-xl"
            src="/images/photo02.jpg"
            alt=""
            height={300}
            width={400}
          />

          <Image
            data-aos="fade-down"
            className="brightness-75 rounded-xl"
            src="/images/photo03.jpg"
            alt=""
            height={300}
            width={400}
          />

          <div className="lg:col-span-3 font-light text-sm lg:text-base text-slate-800 pt-8">
            Mira Elyse offers intricately designed accessories, including
            versatile silk scarves, pocket squares, Murano glass cufflinks, and
            handcrafted jewelry. The collection, personally designed and
            handcrafted, features scarves and pocket squares made from 100% silk
            twill with abstract and contemporary designs reflecting Ghana&apos;s
            rich culture. Incorporating Adinkra symbols, Kente designs, and
            vibrant beads, the scarves are versatile for various styling
            options. The men&apos;s pocket square doubles as a small neck scarf
            or cravat. Cufflinks are crafted with colorful Murano millefiori
            beads and stainless steel. Genuine beads for jewelry are sourced
            globally, including Venetian glass, freshwater pearls, Swarovski
            crystals, and semi-precious stones.
          </div>
        </div>
      </div>

      <div
        data-aos="fade-down"
        className="flex flex-col w-full py-32 px-10 lg:px-20 items-center bg-slate-100"
      >
        <div className="lg:text-4xl text-2xl font-bold text-yellow-500">
          PACKAGING
        </div>
        <div className="text-sm lg:text-base text-slate-800 font-light">
          All products come in organza bags and are beautifully packaged in gift
          boxes or velvet pouches at point of sale.
        </div>
      </div>

      <Footer />
    </main>
  );
}
