import Navbar from "@/components/Layout/TopNav/navbar";
import Footer from "@/components/Layout/Footer/Footer";
import Write from "@/components/Features/components/write";

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow flex flex-col items-center justify-center">
                <Write />
            </main>
            <footer className="mt-auto">
                <Footer />
            </footer>
        </div>
    )
}