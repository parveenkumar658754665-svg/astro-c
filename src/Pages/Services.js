import React from "react";
import ServicesHeroSection from "../Components/ServicesComponents/ServicesHeroSection";
import ServicesList from "../Components/ServicesComponents/ServicesList";
import ServicesFooterSection from "../Components/ServicesComponents/ServicesFooter";

const Services = () => {
  return <div>
    <ServicesHeroSection />
    <ServicesList />
    <ServicesFooterSection />
  </div>;
};

export default Services;
