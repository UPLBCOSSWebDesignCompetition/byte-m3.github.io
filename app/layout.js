import "./globals.css";
import { inter, bebas, zenDots } from "./fonts";

export const metadata = {
    title: "ByteM3 - Sustainable Development Goal 17",
    description: "ByteM3 - Sustainable Development Goal 17",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} ${bebas.variable} ${zenDots.variable}`}>{children}</body>
        </html>
    );
}
