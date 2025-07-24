import React from "react";

import Hero from "@/components/landing-page/Hero";
import Features from "@/components/landing-page/Features";
import Pricing from "@/components/landing-page/Pricing";
import CTA from "@/components/landing-page/CTA";
import Footer from "@/components/landing-page/Footer";

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;
