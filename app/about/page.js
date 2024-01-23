'use client'
import TopNavigation from "@/components/TopNavigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function AboutPage() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-back",
      offset: 120,
      once: true,
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col h-full text-black bg-slate-300">

      <TopNavigation />

      <div className="grid lg:grid-cols-2 grid-cols-1 w-full min-h-screen items-center justify-center px-10 lg:px-32 gap-10">

        <div data-aos="fade-right" className="flex flex-col gap-5 pt-10 lg:pt-0">
          <p className="lg:text-4xl text-2xl font-bold">ABOUT US</p>
          <p className="text-sm lg:text-base font-light">
            My name is Agnes Essandoh, CEO, artisan and designer of the
            accessory brand Mira Elyse.
            <br />
            My journey began about 7 years ago when my daughter started her
            sixth form education. Relieved from some of my motherly duties, l
            decided to pursue a passion l had put on hold for many years. A love
            for fashion and design was the inspiration that led to the creation
            of the handcrafted jewellery, intricately designed scarves and
            pocket squares and other accessories.
            <br />
            Each design is an attempt to capture and bring to life wells of
            imagination and creativity, an opportunity to incorporate into our
            pieces the uniqueness of my Ghanaian heritage and designs from other
            Continents. My objective is to make limited quantities per design
            for any of the collection, in order to maintain the brand&apos;s
            exclusivity.
            <br />
            Mira Elyse products are original, contemporary and vibrant. An
            alternative to the usual “ Say it with colour and style “
          </p>
        </div>

        <div data-aos="fade-left" className='grid grid-cols-3 gap-3'>
        <Image
            className="brightness-75"
            src="/images/photo02.jpg"
            alt=""
            height={200}
            width={200}
          />
          <Image
            className="brightness-75"
            src="/images/photo03.jpg"
            alt=""
            height={200}
            width={200}
          /><Image
          className="brightness-75"
          src="/images/photo04.jpg"
          alt=""
          height={200}
          width={200}
        />
        <Image
          className="brightness-75"
          src="/images/photo01.jpg"
          alt=""
          height={200}
          width={200}
        />
        <Image
          className="brightness-75"
          src="/images/photo08.jpg"
          alt=""
          height={200}
          width={200}
        />
        <Image
          className="brightness-75"
          src="/images/photo09.jpg"
          alt=""
          height={200}
          width={200}
        />
        </div>
      </div>

      <Footer />
    </main>
  );
}
