import { Inter, Bebas_Neue, Zen_Dots } from "next/font/google";

const inter = Inter({
    subsets: ["latin"]
});

const bebas = Bebas_Neue({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-bebas-neue",
});

const zenDots = Zen_Dots({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-zen-dots",
});

export { inter, bebas, zenDots };