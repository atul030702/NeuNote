import Link from "next/link";
import { SiLinkedin, SiGithub, SiX } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="bg-accent py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-5">
                    <p className="element text-sm text-center leading-relaxed">
                        A clean, mindful note-taking app built for clarity, not clutter.
                        Currently in active development.
                    </p>
                </div>

                <div className="w-full flex flex-col md:flex-row items-center md:justify-between md:space-x-25 space-y-10 md:space-y-0">


                    <ul className="element space-x-10 text-sm flex">
                        <li><a href="#features">Features</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#">Blog</a></li>
                        <li>
                            <Link href="/sign-up"
                                className="whitespace-nowrap"
                            >
                                Sign Up
                            </Link>
                        </li>  
                    </ul>

                    <ul className="element flex space-x-10">
                        <li>
                            <SiX />
                        </li>
                        <li>
                            <SiLinkedin />
                        </li>
                        <li>
                            <SiGithub />
                        </li>
                    </ul>                
                </div>

                <div className="mt-10 pt-10 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} nue<span className="text-color">note</span>. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a
                            href="#"
                            className="text-sm text-gray-600 dark:text-gray-400 hover:text-color dark:hover:text-color"
                        >
                            Privacy
                        </a>
                        <a
                            href="#"
                            className="text-sm text-gray-600 dark:text-gray-400 hover:text-color dark:hover:text-color"
                        >
                            Terms
                        </a>
                        <a
                            href="#"
                            className="text-sm text-gray-600 dark:text-gray-400 hover:text-color dark:hover:text-color"
                        >
                            Sitemap
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;