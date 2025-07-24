import Link from "next/link";
import { getUser } from "@/auth/server";

import DarkModeToggle from "./DarkModeToggle";
import LogOutButton from "./LogOutButton";
import MobileMenu from "./MobileMenu";

const Header = async () => {

    const user = await getUser();

    return (
        <header className="sticky top-0 flex w-full items-center justify-between bg-popover px-4 z-10
            sm:px-8 py-3.5 sm:py-5 md:py-5"
        >
            <Link href="/">
                <h1 className="flex text-2xl sm:text-3xl md:text-4xl font-bold ml-2 sm:ml-4 md:ml-4">
                    neu <span className="text-color">note</span>
                </h1>
            </Link>

            {/**Desktop Navigation */}
            <div className="hidden sm:flex md:flex gap-5">
                {!user && (
                    <div className="flex items-center gap-5">
                        <a
                            href="#features"
                            className="block hover:text-color transition-all"
                        >
                            Features
                        </a>
                        <a
                            href="#pricing"
                            className="block hover:text-color transition-all"
                        >
                            Pricing
                        </a>
                        <a
                            href="#"
                            className="block hover:text-color transition-all"
                        >
                            Blog
                        </a>
                    </div>
                )}

                <DarkModeToggle />

                { user ? (
                    <LogOutButton width={24} yMargin={1} />
                ) : (
                    <button className="custom-bg px-4 rounded-sm text-white font-normal">
                        <Link href="/login">Login</Link>
                    </button>
                )}
            </div>

            {/**Mobile Menu*/}
            <div className="flex items-center sm:hidden md:hidden gap-4">
                <DarkModeToggle />
                <MobileMenu user={user} />
            </div>
        </header>
    );
};

export default Header;