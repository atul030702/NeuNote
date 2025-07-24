import React from "react";

import Hero from "@/components/Hero";
import Features from "@/components/Features";

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
    </div>
  );
};

export default LandingPage;
