"use client";

import { useState } from "react";
import Link from "next/link";

import { Menu, X } from "lucide-react";
import LogOutButton from "./LogOutButton";
import { User } from "@supabase/supabase-js";

type Props = {
  user: User | null;
};

const MobileMenu = ({ user }: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex md:hidden sm:hidden"
            >
                { isMenuOpen ? <X size={25} /> : <Menu size={25} /> }
            </button>

            {isMenuOpen && (
                <div className="w-full bg-background md:hidden sm:hidden fixed top-16 left-0 backdrop-blur-sm shadow-md z-10">
                    <div className="px-4 py-3 space-y-3">
                        {!user && (
                            <>
                                <a
                                    href="#features"
                                    className="block hover:text-sage transition-colors duration-200"
                                >
                                    Features
                                </a>
                                <a
                                    href="#pricing"
                                    className="block hover:text-sage transition-colors duration-200"
                                >
                                    Pricing
                                </a>
                                <Link
                                    href="/about"
                                    className="block hover:text-sage transition-colors duration-200"
                                >
                                    About
                                </Link>
                            </>
                        )}
                        { user ? (
                            <LogOutButton width={"full"} yMargin={2} />
                        ) : (
                            <button className="w-full bg-sage px-5 py-2 rounded-sm text-white">
                                <Link href="/login">Login</Link>
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;