import Header from "./components/Header";
import Cursor from "./components/Cursor";
import SdgCardsSection from "./components/SdgCardsSection";
import TickerSection from "./components/TickerSection";
import SdgArticlesSection from "./components/SdgArticlesSection";
import Footer from "./components/Footer";
import "animate.css/animate.min.css";
import HeroSection from "./components/HeroSection";
import ParticleBackground from "./components/ParticleBackground";

export default function Home() {
    return (
        <>
            <ParticleBackground />
            <Cursor />
            <Header />
            <main className="flex max-w-5xl flex-col items-center justify-between lg:px-24 px-5 m-auto relative">
                <HeroSection />
                <TickerSection />
                <SdgCardsSection />
                <SdgArticlesSection />
            </main>
            <Footer />
        </>
    );
} 
