import Image from "next/image";

import { Brain, Cloud, Focus, } from "lucide-react";
import { FiArrowRight } from "react-icons/fi";

const Features = () => {

    const features = [
        {
            title: 'Smart Organization',
            description:'AI-powered tagging and linking helps you discover connections between your thoughts.',
            icon: <Brain size={36} className="text-sage" />,
            image: "/feature-image-1.webp",
        },
        {
            title: 'Seamless Sync',
            description:'Access your notes anytime, anywhere — flawlessly synced across all devices.',
            icon: <Cloud size={36} className="text-sage" />,
            image: "/feature-image-2.webp",
        },
        {
            title: 'Focus Mode',
            description:'A beautiful, distraction-free interface designed to help you concentrate.',
            icon: <Focus size={36} className="text-sage" />,
            image: "/feature-image-3.webp",
        },
    ];

    return (
        <section id="features"
            className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
            <div className="text-center mb-15">
                <h2 className="element text-3xl sm:text-4xl font-bold mb-4">
                    Designed for clarity and focus
                </h2>
                <p className="element text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Experience a note-taking app that adapts to your thinking process, not the other way around.
                </p>
            </div>
            <div className="space-y-24">
                {features.map((feature, index) => (
                    <div key={index}
                        className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
                    >
                        <div className="w-full lg:w-1/2">
                            <div className="element flex items-center mb-4">
                                {feature.icon}
                                <h3 className="text-2xl font-semibold ml-3">
                                    {feature.title}
                                </h3>
                            </div>
                            <p className="element text-lg text-gray-600 dark:text-gray-300 mb-6">
                                {feature.description}
                            </p>
                            <button className="element flex items-center gap-2 text-sage font-medium cursor-pointer transition-all duration-300 hover:underline">
                                Learn more <FiArrowRight />
                            </button>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative">
                                <div className={`element bg-sage absolute inset-0 rounded-lg opacity-75 transform ${index % 2 === 0 ? "rotate-4" : "-rotate-4"}`}></div>
                                <Image 
                                    className="element w-full relative rounded-lg shadow-lg z-5"
                                    src={feature.image}
                                    alt={feature.title}
                                    width={600}
                                    height={400}
                                    draggable="false"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;