import Image from "next/image";

const Header = () => {
    return (
        <header className="mx-auto flex justify-between pr-5 relative container">
            <Image
                src="/logo3.svg"
                alt="Byte M3 Logo"
                width={75}
                height={75}
            />
            <div className="flex-grow self-center mr-5 border-t-4 border-white">
            </div>
            <Image
                src="/menu.svg"
                alt="Menu"
                width={37}
                height={37}
            />
        </header>
    );
};

export default Header;