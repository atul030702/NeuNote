import Link from "next/link";
import Image from "next/image";

import { Button } from "./ui/button";
import { shadow } from "@/styles/utils";
import DarkModeToggle from "./DarkModeToggle";
import LogOutButton from "./LogOutButton";
import { getUser } from "@/auth/server";

const Header = async () => {
    const user = await getUser();

    return (
        <header className="relative flex h-24 w-full items-center justify-between bg-popover px-3
            sm:px-8"
            style={{
                boxShadow: shadow
            }}
        >
            <Link href="/"
                className="flex items-center justify-center gap-2"
            >
                <Image 
                    src="/neu-note-white-border.webp" 
                    alt="logo"
                    height={60}
                    width={60}
                    draggable="false"
                    priority
                />
                <h1 className="flex text-2xl sm:text-3xl md:text-4xl font-semibold">
                    NEU NOTE
                </h1>
            </Link>

            <div className="flex gap-4">
                { user ? (
                    <LogOutButton />
                ) : (
                    <>
                        <Button asChild>
                            <Link href="/sign-up">Signup</Link>
                        </Button>

                        <Button asChild variant="outline">
                            <Link href="/login">Login</Link>
                        </Button>
                    </>
                )}

                <DarkModeToggle />
            </div>
        </header>
    );
};

export default Header;