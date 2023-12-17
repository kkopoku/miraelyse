import React from "react";
import TopNavigation from "@/components/TopNavigation";
import Image from "next/image";
import SlideShow from "@/components/SlideShow";
import Footer from "@/components/Footer";

export default function Home() {

  const introText = [
    "Mira Elyse is dedicated to pushing the boundaries in Jewellery making and the design of our other accessories.",
    "Through our innovation in design and craftsmanship, we explore new frontiers of incorporating beads such as Murano Glass beads, Semi Precious stones,Swarovski beads, Freshwater Pearls and other authentic rare beads into our jewelleries. Also using different Ankara designs, contemporary abstract designs and Adinkra symbols in our exclusive ladies versatile scarves and mens pocket squares",
    "We hold nothing back in our unique bespoke pieces. The different combination of beads in our collection from across the continents makes Mira Elyse accessories a peerless creation designed to enhance your style or give out as gift to a loved one. On the other hand our detailed designs for our scarves and pockets squares are printed on 100% mulberry silk twill fabrics with hand rolled edge finish."
  ]

  const whyChooseText = [
    "Mira Elyse is your destination for exclusive accessories crafted with precision and care. We use only the finest materials – genuine authentic beads, antique silver or gold, and stainless steel for our jewelry. The silk range fabrics grace our versatile scarves and pocket squares.",
    "Our designs are bespoke, handcrafted in limited quantities for a truly unique touch. Each piece is a celebration of authenticity and elegance, making a statement that goes beyond style.",
    "Packaged with utmost care, our accessories come in organza bags, Mira Elyse gift boxes, or velvet pouches, adding sophistication to your purchase. The ladies' scarves, men's pocket squares, and Murano glass cufflinks are elegantly presented in Mira Elyse packaging.",
    "Your purchase includes a label card detailing the diverse beads used in our accessories, offering a glimpse into the craftsmanship and variety we offer. Elevate your style with Mira Elyse – where every accessory is a work of art, designed to make a statement."
  ]

  const sliderImages = [
    {url : "/images/carousel01.jpg"},
    {url : "/images/carousel02.jpg"},
    {url : "/images/carousel03.jpg"},
  ]

  return (
    <main className="flex min-h-screen flex-col bg-white h-full text-black">

      <TopNavigation />

      {/* Banner */}
      <Image
        src="/images/homepage-one-banner.jpg"
        width={900}
        height={500}
        alt=""
        className="w-full brightness-75 z-0"
      />

      {/* Intro Text*/}
      <div className="flex flex-col w-full items-center text-center py-20 text-slate-600">
        <p className="underline text-3xl pb-2">Ethos</p>
        <div className="flex flex-col w-3/4 justify-center gap-3">{introText.map((text)=>{
          return <p key={text}>{text}</p>
        })}</div>
      </div>

      {/* Slider */}
      <div className="bg-slate-100 py-10">
        <SlideShow />
      </div>

      {/* Why Pick MiraElyse */}
      <div className="flex flex-col w-full items-center text-center py-20 text-slate-600">
        <p className="underline text-3xl pb-2">Why Choose MiraElyse</p>
        <div className="flex flex-col w-3/4 justify-center gap-3">{whyChooseText.map((text)=>{
          return <p key={text}>{text}</p>
        })}</div>
      </div>

      <Footer />

    </main>
  );
}
