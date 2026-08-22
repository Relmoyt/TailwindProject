import React from "react";
import Navbar from "../components/navbar";
import HeroSection from "../components/heroSection";
import AiTypes from "../components/aiTypes";
import AiBenefits from "../components/aiBenefits";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AiTypes />
        <AiBenefits />
      </main>
    </>
  );
}

export default Home;
