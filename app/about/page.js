import TopNavigation from "@/components/TopNavigation";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white h-full text-black">
      <TopNavigation />

      <div className="flex flex-col w-full min-h-screen items-center justify-center px-32">
        <p className="text-3xl">About Us</p>
        <p className="text-center">
          Original, trendy, defining exclusivity through finely designed
          accessories. Introducing 'Mira Elyse', bespoke accessories crafted
          from colorful Classic Venetian or Murano Glass Beads, known in West
          Africa as Trade Beads, 100% Mulberry Silk, Freshwater Pearls,
          Swarovski Beads, Tagua nut beads, and an array of Precious and
          Semi-Precious Stones, to name a few. <br />
          Mira Elyse jewelry is meticulously handmade using the finest beads;
          Murano Glass Beads, handcrafted in Venice using traditional Venetian
          bead-making techniques. Some beads are fused with 24K gold foil leaf
          or Silver foil leaf. Our collection also features contemporary bead
          designs like the blown glass bead. Our designs include genuine Pearls
          grown in lakes and rivers in and around Japan... Tahitian, baroque
          freshwater, mother of pearls, south sea pearls, Abalone pearls,
          Swarovski pearls... In addition, we incorporate Precious and
          Semi-Precious stones sourced from the regions of Sri Lanka. Crystals
          from Swarovski and the Czech Republic add a touch of elegance to our
          carefully strung pieces. Our classy yet trendy versatile scarves and
          pocket squares are made from 100% mulberry silk twill fabrics,
          featuring contemporary, abstract, adinkra, and ankara designs. You can
          wear our scarves in various ways or use them as accessories on your
          handbag. Jazz up your formal suit or kaftan outfits with our 100% silk
          twill handmade pocket squares. Our collection includes: Necklace sets,
          Earrings, Bracelets, Ladies scarves, Pocket squares, and Cuff links.
          The unique combination of beads sourced from across continents, along
          with our carefully thought-out designs, makes Mira Elyse Accessories a
          peerless creation designed to enhance and define your style.
        </p>
      </div>

      <Footer />
    </main>
  );
}
