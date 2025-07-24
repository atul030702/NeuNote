import Image from "next/image";
import Link from "next/link";

const Hero = () => {

    return (
        <section className="pt-5 sm:pt-15 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="w-full flex flex-col lg:flex-row items-center lg:justify-center lg:gap-20">
                <div className="w-full lg:w-1/2 mb-5 lg:mb-0">
                    <h1 className="element text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                        Find Clarity <br />
                        <span className="text-color">in Every Note.</span>
                    </h1>
                    <p className="element text-lg sm:text-xl mb-8 max-w-lg">
                        The minimalist, intelligent app to capture, organize, and connect your thoughts effortlessly.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
                        <button className="element custom-bg px-6 py-3 font-medium rounded-md sm:rounded-sm hover:transform hover:-translate-y-0.5 transition-all duration-200">
                            <Link href="/sign-up">Get Started for Free</Link>
                        </button>
                        <button className="element font-medium cursor-pointer">
                            See How It Works {">"}
                        </button>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="relative">
                        <div className="custom-bg absolute inset-0 opacity-75 rounded-lg transform rotate-4 -z-0"></div>
                        <Image 
                            className="relative z-0 rounded-lg shadow-xl w-full"
                            src="/hero-section-img.webp"
                            alt="neunote app cover image"
                            width={600}
                            height={400}
                            draggable="false"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;