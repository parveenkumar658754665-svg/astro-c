import React from "react";
import AboutHeroSection from "../Components/AboutUsComponents/AboutHeroSection";
import MyJourneySection from "../Components/AboutUsComponents/MyJourneySection";
import WhatIDo from "../Components/AboutUsComponents/WhatIDo";
import MyApproach from "../Components/AboutUsComponents/MyApproach";
import WhoIHelp from "../Components/AboutUsComponents/WhoIHelp";
import PromiseSection from "../Components/AboutUsComponents/PromiseSection";

const AboutUs = () => {
  return (
    <div>
      <AboutHeroSection />
      <MyJourneySection />
      <WhatIDo />
      <MyApproach />
      <WhoIHelp />
      <PromiseSection />
    </div>
  );
};

export default AboutUs;
