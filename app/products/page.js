import TopNavigation from "@/components/TopNavigation"
import Footer from "@/components/Footer"
import data from "./data"
import Image from "next/image"

export default function Login(){
    return (
        <main className="flex min-h-screen flex-col bg-white h-full text-black">

            <TopNavigation />

            <div className="flex bg-[url('/images/homepage-one-banner.jpg')] h-[80vh] items-center justify-center">
                <button className="p-5 rounded-lg border-2 border-white hover:scale-110 font-semibold text-white hover:bg-slate-200 hover:bg-opacity-40 bg-transparent transition-all">Browse Catalog</button>
            </div>

            {/* Necklaces */}
            <div className="flex flex-col w-full py-20 px-32">
                <div className="flex flex-row items-center justify-center text-2xl font-semibold pb-5">Necklaces</div>
                <div className="grid grid-cols-3 lg:grid-cols-4 gap-5 bg-slate-100 border rounded-lg border-slate-300 p-5">
                    {data.necklaces.map((necklace)=>
                        <div className="flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-all" key={necklace.src}>
                            <Image className="h-[300px] rounded-lg" width={250} height={300} src={necklace.src} />
                            <p>{necklace.name}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Versatile Scarf */}
            <div className="flex flex-col w-full py-20 px-32">
                <div className="flex flex-row items-center justify-center text-2xl font-semibold pb-5">Versatile Scarf</div>
                <div className="grid grid-cols-3 lg:grid-cols-4 gap-5 bg-slate-100 border rounded-lg border-slate-300 p-5">
                    {data.versatileScarfs.map((necklace)=>
                        <div className="flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-all" key={necklace.src}>
                            <Image className="h-[300px] rounded-lg" width={250} height={300} src={necklace.src} />
                            <p>{necklace.name}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Pocket Squares */}
            <div className="flex flex-col w-full py-20 px-32">
                <div className="flex flex-row items-center justify-center text-2xl font-semibold pb-5">Pocket Squares</div>
                <div className="grid grid-cols-3 lg:grid-cols-4 gap-5 bg-slate-100 border rounded-lg border-slate-300 p-5">
                    {data.pocketSquares.map((necklace)=>
                        <div className="flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-all" key={necklace.src}>
                            <Image className="h-[300px] rounded-lg" width={250} height={300} src={necklace.src} />
                            <p>{necklace.name}</p>
                        </div>
                    )}
                </div>
            </div>

            <Footer />

        </main>
    )
}