import React from "react";
import navbar from "../components/navbar";
import hero from "../components/heroSection";
import footer from "../components/footer";
import contact from "../components/contact";
import aiTypes from "../components/aiTypes";
import aiBenefits from "../components/aiBenefits";

function home() {
    return {
        <>
        <navbar />
        <main>
          <hero />
          <aiTypes />
          <aiBenefits />
          <contact />
        </main>
        <footer />
        </>
    }
}

export default home