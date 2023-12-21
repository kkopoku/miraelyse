import React from "react";
import TopNavigation from "@/components/TopNavigation";
import Image from "next/image";
import SlideShow from "@/components/SlideShow";
import Footer from "@/components/Footer";

export default function Home() {
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

  return (
    <main className="flex min-h-screen flex-col bg-white h-full text-black">
      <TopNavigation />

      {/* Ethos of Brand */}
      <div className="grid lg:grid-cols-2 gap-5 px-10 lg:px-20 py-32 items-center">

        <div className="flex flex-col gap-5">
          <div className="flex flex-row text-3xl lg:text-4xl font-bold">
            {" "}
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
      <div className="grid lg:grid-cols-2 bg-slate-100 py-32 items-center text-black">
        <div>
          <SlideShow />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row text-2xl lg:text-4xl font-bold text-yellow-500 px-10">
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
      <div className="w-full py-32 px-10 lg:px-20">
        <div className="lg:text-4xl text-2xl flex flex-row font-bold justify-center pb-5 text-yellow-500">
          <p>ELEVATE</p>
          <p className="text-black">{"\u00a0"}YOUR STYLE </p>
        </div>
        <div className="grid grid-cols-3 gap-4 place-items-center">
          <Image
            className="brightness-75"
            src="/images/photo01.jpg"
            alt=""
            height={300}
            width={400}
          />
          <Image
            className="brightness-75"
            src="/images/photo02.jpg"
            alt=""
            height={300}
            width={400}
          />

          <Image
            className="brightness-75"
            src="/images/photo03.jpg"
            alt=""
            height={300}
            width={400}
          />

          <div className="col-span-3 font-light text-sm lg:text-base">
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

      <div className="flex flex-col w-full py-32 px-10 lg:px-20 items-center bg-slate-100">
        <div className="lg:text-4xl text-2xl font-bold text-yellow-500">PACKAGING</div>
        <div className="text-sm lg:text-base font-light">
          All products come in organza bags and are beautifully packaged in gift
          boxes or velvet pouches at point of sale.
        </div>
      </div>

      <Footer />
    </main>
  );
}
