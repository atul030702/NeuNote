import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <header>
            <Link href="/">
                <Image 
                    src="/neu-note-white-border.webp" 
                    alt="logo"
                    height={60}
                    width={60}
                    draggable="false"
                    priority
                />
            </Link>
        </header>
    );
};

export default Header;