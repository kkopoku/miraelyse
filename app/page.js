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
    <main className="flex min-h-screen flex-col bg-white h-full text-black">
      <div className="bg-[url('/images/homepage-one-banner.jpg')] lg:h-[90vh] h-[60vh]">
        <TopNavigation />
        <div className="flex flex-row bg-fixed items-center justify-start px-5 lg:px-32 h-full">
          <div className="flex flex-col bg-white bg-opacity-50 lg:p-20 p-5 rounded-md lg:h-auto h-2/5 w-4/5 lg:1/2">

            <div className="text-xs lg:text-base font-light lg:font-semibold">
              Welcome To MiraElyse
            </div>

            <div className="lg:text-5xl text-lg font-extrabold w-2/3">
              You asked for the best. Here we are
            </div>

            <div className="flex lg:text-base text-xs font-light lg:font-medium h-20">
              <Typewriter
                options={{
                  strings: typingText,
                  autoStart: true,
                  loop: true,
                  delay: 40,
                }}
              />
            </div>

            <div className="flex flex-row gap-3 ">
              <button
                onClick={() => {
                  scrollToSection(why);
                }}
                className="border border-white bg-white rounded-full lg:text-base text-xs w-36 py-2 hover:scale-110 transition-all"
              >
                Know More
              </button>
              <button
                onClick={() => {
                  router.push("/products");
                }}
                className="border border-black rounded-full lg:text-base text-xs w-36 py-2 hover:scale-110 transition-all"
              >
                Our Products
              </button>
            </div>
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
            <p className="text-yellow-500">ETHOS </p> <p>{"\u00a0"}OF BRAND</p>
          </div>
          <div className="flex flex-row text-sm lg:text-base font-light">
            Original and Trendy, a must have defines the finely designed
            accessories. Mira Elyse is dedicated to pushing the boundaries in
            Jewellery making and designs in our scarves and pocket squares
            Through our innovation in design and craftsmanship, we explore new
            frontiers by combining different kinds of beads such as Murano Glass
            beads, Semi Precious stones, Tagua nut beads, Swarovski crystal
            beads, Coral beads, Freshwater Pearls and other authentic rare beads
            in our jewellery designs. We incorporate into the artwork of our
            exclusive ladies versatile scarves and mens pocket squares designs
            such as Traditional African textile designs, contemporary and
            abstract designs, Kente designs and Adinkra symbols to mention a
            few. We hold nothing back in our unique bespoke pieces thus making
            Mira Elyse accessories a peerless creation, designed to enhance any
            style whether elegant, smart or casual.
          </div>
        </div>

        <div className="grid grid-cols-2 gap-">
          <Image
            className="brightness-75"
            src="/images/carousel09.jpg"
            alt=""
            height={300}
            width={300}
          />
          <Image
            className="brightness-75"
            src="/images/carousel10.jpg"
            alt=""
            height={300}
            width={300}
          />
        </div>
      </div>

      {/* Slider div*/}
      <div
        ref={why}
        className="grid lg:grid-cols-2 bg-slate-100 py-20 lg:py-32 items-center text-black"
      >
        <div data-aos="fade-right">
          <SlideShow />
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col gap-2 lg:gap-5 lg:pb-0 pt-5"
        >
          <div className="flex flex-row text-2xl lg:text-4xl font-bold text-yellow-500 px-10 justify-center lg:justify-start">
            <p>WHY</p>
            <p className="text-black">{"\u00a0"}CHOOSE MIRAELYSE </p>
          </div>
          <div className="flex flex-row text-sm lg:text-base font-light px-10 lg:pr-24">
            We use genuine authentic beads, antique silver or gold and stainless
            steel metal products for our accessories and the very best of the
            silk range fabrics, chiffon and polyester fabrics. Our Designs are
            unique and delicately handcrafted. We make limited quantities for
            all our accessories. Our jewellery is nicely packaged in organza
            bags and come in either a mira elyse gift box or velvet pouches at
            point of sale. Also exquisitely packaged are the ladies versatile
            scarves and mens pocket squares and handcrafted Murano glass
            cufflinks which come in Mira elyse gift boxes and bags and velvet
            pouches Included in each package is a generic label card detailing
            the different beads and other materials used in our accessories, and
            our product range.
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
            data-aos="fade-right"
            className="brightness-75"
            src="/images/photo01.jpg"
            alt=""
            height={300}
            width={400}
          />
          <Image
            data-aos="fade-left"
            className="brightness-75"
            src="/images/photo02.jpg"
            alt=""
            height={300}
            width={400}
          />

          <Image
            data-aos="fade-right"
            className="brightness-75"
            src="/images/photo03.jpg"
            alt=""
            height={300}
            width={400}
          />

          <div className="lg:col-span-3 font-light text-sm lg:text-base pt-5 lg:pt-0">
            Mira Elyse accessories are intricately designed ladies versatile
            silk scarves, mens pocket squares, Murano glass cufflinks and
            handcrafted jewellery. Mira Elyse collection are designed and
            handcrafted by me. Scarves and pocket squares are made with 100%
            silk twill fabric with hand rolled finished edges. The designs,
            though abstract and contemporary, also reflects the unique rich
            culture and heritage of Ghana. Incorporated also into our collection
            are Adinkra symbols, delicately woven Kente designs, colourful
            traditional African textile designs and the distinctive vibrant
            beads Scarves are versatile and can also be worn as a head scarf or
            an accessory to handbags. The men’s pocket square can also be used
            as a small neck scarf or worn as a cravat. Cufflinks are made with
            the colourful Murano millefiori beads and stainless steel metals. A
            beautiful piece of accessories for both men and women. Genuine and
            authentic beads for our jewellery pieces are sourced from different
            Continents, these includes Venetian glass beads, freshwater pearls,
            Swarovski crystal beads and semi precious stones to name a few.
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
        <div className="text-sm lg:text-base font-light">
          All products come in organza bags and are beautifully packaged in gift
          boxes or velvet pouches at point of sale.
        </div>
      </div>

      <Footer />
    </main>
  );
}
