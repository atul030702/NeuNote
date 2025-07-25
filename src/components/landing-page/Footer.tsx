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
                        <li>
                            <Link href="/about">
                                About
                            </Link>
                        </li>
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
                            <a href="https://x.com/k_atul0307"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SiX className="hover:text-sage hover:scale-115 transition-all duration-300"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/atul030702/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SiLinkedin className="hover:text-sage hover:scale-115 transition-all duration-300"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/atul030702"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SiGithub className="hover:text-sage hover:scale-115 transition-all duration-300"/>
                            </a>
                        </li>
                    </ul>                
                </div>

                <div className="mt-10 pt-10 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} nue<span className="text-sage">note</span>. All rights reserved.
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