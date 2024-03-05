import Image from "next/image";

function MainHero() {
    return (
        <div className="hero-section flex justify-center items-center my-20 animate__animated animate__zoomIn">
            <Image
                src="/sdg-logo.png"
                alt="SDG 17 Logos"
                width={512}
                height={512}
                priority={true}
            />
        </div>
    );
}

export default function HeroSection() {
    return (
        <div className="hero-main">
            <MainHero />
        </div>
    );
}