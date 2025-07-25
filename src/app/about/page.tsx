import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/landing-page/Footer";

const About = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="element text-4xl sm:text-5xl font-bold mb-6">Our Story</h1>
                        <p className="element text-lg sm:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
                            We're on a mission to help people capture, organize, and connect
                            their thoughts in the most intuitive way possible.
                        </p>
                    </div>
                    <div className="mt-16 flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                        <h2 className="element text-3xl font-bold mb-4">Why we built neunote</h2>
                        <p className="element text-lg mb-6 text-gray-600 dark:text-gray-300">
                            In a world filled with digital noise, we saw a need for a
                            note-taking app that prioritizes clarity and focus. We believe
                            that capturing your thoughts shouldn't be complicated.
                        </p>
                        <p className="element text-lg mb-6 text-gray-600 dark:text-gray-300">
                            neunote was born from our own frustration with existing tools
                            that were either too complex or too simple. We wanted something
                            that could grow with our thinking process, making connections we
                            might miss ourselves.
                        </p>
                        <p className="element text-lg text-gray-600 dark:text-gray-300">
                            Our approach combines minimalist design with intelligent
                            features that work behind the scenes to enhance your note-taking
                            experience without getting in the way.
                        </p>
                        </div>
                        <div className="w-full md:w-1/2">
                        <div className="relative">
                            <div className="element absolute inset-0 bg-sage rounded-lg opacity-75 transform rotate-4"></div>
                            <Image
                                className="element relative rounded-lg shadow-xl w-full"
                                src="/about-section-image.webp"
                                alt="Team collaboration"
                                width={600}
                                height={400}
                                draggable="false"
                            />
                        </div>
                        </div>
                    </div>
                </section>
                {/* Values Section */}
                <section className="pt-25 pb-15 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="element text-3xl font-bold mb-12 text-center">Our Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="element p-8 rounded-lg bg-card">
                                <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mb-4">
                                    <span className="element text-sage text-2xl font-bold">1</span>
                                </div>
                                <h3 className="element text-xl font-bold mb-3">Simplicity</h3>
                                <p className="element text-gray-600 dark:text-gray-300">
                                    We believe in removing complexity, not adding to it. Every
                                    feature we build aims to simplify your workflow, not
                                    complicate it.
                                </p>
                            </div>
                            <div className="element p-8 rounded-lg bg-card">
                                <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mb-4">
                                    <span className="element text-sage text-2xl font-bold">2</span>
                                </div>
                                <h3 className="element text-xl font-bold mb-3">Intelligence</h3>
                                <p className="element text-gray-600 dark:text-gray-300">
                                    Technology should work for you, not the other way around. Our
                                    AI features enhance your thinking without being intrusive.
                                </p>
                            </div>
                            <div className="element p-8 rounded-lg bg-card">
                                <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mb-4">
                                    <span className="element text-sage text-2xl font-bold">3</span>
                                </div>
                                <h3 className="element text-xl font-bold mb-3">Privacy</h3>
                                <p className="element text-gray-600 dark:text-gray-300">
                                    Your thoughts are yours alone. We build with privacy as a
                                    foundation, not an afterthought.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Join Us Section */}
                <section className="py-15 bg-accent px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="element text-3xl font-bold mb-6">Join Our Journey</h2>
                        <p className="element text-lg mb-8 text-gray-600 dark:text-gray-300">
                            We're just getting started, and we'd love for you to be part of
                            our story. If you're a user with feedback, we'd love to hear from you.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/login" 
                                className="element bg-sage text-white px-6 py-3 rounded-md hover:bg-sage/75 transition-all cursor-pointer"
                            >
                                Try neunote Free
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default About;