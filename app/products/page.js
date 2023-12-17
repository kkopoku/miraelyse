import TopNavigation from "@/components/TopNavigation"
import Footer from "@/components/Footer"

export default function Login(){
    return (
        <main className="flex min-h-screen flex-col bg-white h-full text-black">

            <TopNavigation />

            <div className="flex bg-[url('/images/homepage-one-banner.jpg')] h-[80vh] items-center justify-center">
                <button className="p-5 rounded-lg border-2 border-white hover:scale-110 font-semibold text-white hover:bg-slate-200 hover:bg-opacity-40 bg-transparent transition-all">Browse Catalog</button>
            </div>

            <div className=""></div>

            <Footer />

        </main>
    )
}