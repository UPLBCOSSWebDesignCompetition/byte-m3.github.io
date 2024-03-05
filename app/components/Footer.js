// components/Footer.js

import Image from "next/image";
import Link from "next/link";

function FooterMenuItem(aProps) {
    const { label, href } = aProps;
    return (
        <li>
            <Link
                href={href}
                className="flex gap-5 group">
                <Image
                    className="absolute opacity-0 group-hover:opacity-100 transition-all"
                    src="/arrow-hex.svg"
                    alt="footer menu item arrow"
                    width="32"
                    height="32"
                />
                <span className="hover:text-gray-300 cursor-pointer text-2xl md:text-4xl uppercase group-hover:ml-12 transition-all">
                    {label}
                </span>
            </Link>
        </li>
    );
}

function Footer() {
    const menuItems = [
        "Home",
        "About",
        "Resources",
        "Contact Us",
    ];
    
    return (
        <footer className="bg-grey text-white py-8 w-full relative">
            <div className="container mx-auto bg-grey mb-8">
                <ul className="mt-2 px-10 font-zen-dots flex flex-col gap-2"> 
                    {
                        menuItems.map(function(aItem, aIndex) {
                            return (
                                <FooterMenuItem
                                    label={aItem}
                                    href="#"
                                    key={aIndex} />
                            );
                        })
                    }
                </ul>
            </div>
            <p className="text-center text-xl font-bebas uppercase">
                &copy; 2024 BYTEM3! ALL RIGHTS RESERVED
            </p>
        </footer>
    );
};

export default Footer;
