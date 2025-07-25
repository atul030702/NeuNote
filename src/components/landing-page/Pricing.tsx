import Link from "next/link";

import { Check } from "lucide-react";
import plans from "@/utils/pricing";

const Pricing = () => {

    return (
        <section id="pricing"
            className="bg-accent py-16 md:py-20"
        >
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="text-center mb-15">
                    <h2 className="element text-3xl sm:text-4xl font-bold mb-4">
                        Simple and transparent pricing
                    </h2>
                    <p className="element text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Choose the plan that fits your needs. All plans include a 7-day free trial.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-8 sm:gap-15 md:gap-x-20">
                    {plans.map((plan, index) => (
                        <div key={index}
                            className={`relative overflow-hidden border transition-all duration-300
                                ${plan.popular ? "border-custom-border shadow-lg" : "border-gray-200 dark:border-gray-700 hover:shadow-md dark:hover:shadow-lg"}
                            `}
                        >
                            {plan.popular && (
                                <div className="bg-sage text-white text-sm font-medium py-1 px-3 absolute top-0 right-0">
                                    Popular
                                </div>
                            )}

                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-2">
                                    {plan.name}
                                </h3>
                                <div className="mb-4">
                                    <span className="text-3xl font-bold">
                                        {plan.price}
                                    </span>
                                    <span className="text-gray-600 dark:text-gray-400 ml-1">
                                        /{plan.period}
                                    </span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    {plan.description}
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center">
                                            <Check size={18} className="text-sage mr-2" />
                                            <span> {feature} </span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className="w-full bg-sage text-white py-3 rounded-md font-medium cursor-pointer transition-colors duration-300 hover:bg-sage/75"
                                >
                                    <Link href="/login"> {plan.cta} </Link>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;