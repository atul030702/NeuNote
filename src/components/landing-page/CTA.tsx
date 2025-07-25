import Link from "next/link";

const CTA = () => {
    return (
        <section className="py-20">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 className="element text-3xl sm:text-4xl font-bold mb-6">
                    Ready to Organize Your Life?
                </h2>
                <p className="element text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                    “Built for thinkers who want less clutter and more clarity.”
                </p>

                <Link href="/sign-up"
                    className="element bg-sage text-white px-8 py-3 rounded-md text-lg font-medium cursor-pointer transition-colors duration-300 hover:bg-sage/75"
                >
                    Sign Up Free
                </Link>

                <p className="element mt-5 text-sm text-gray-500 dark:text-gray-400">
                    No credit card. No spam. Just better notes.
                </p>
            </div>
        </section>
    );
};

export default CTA;