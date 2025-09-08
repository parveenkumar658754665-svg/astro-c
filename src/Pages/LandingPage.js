import React from "react";
import HeroSection from "../Components/LandingPageComponents/HeroSection";
import AboutSection from "../Components/LandingPageComponents/AboutSection";
import CarouselCards from "../Components/LandingPageComponents/CarouselCards";
import WhyChooseMe from "../Components/LandingPageComponents/WhyChooseMe";
import TestimonialSection from "../Components/LandingPageComponents/TestimonialsSection";
import BookConsultation from "../Components/LandingPageComponents/BookConsultation";
import LatestBlogPosts from "../Components/LandingPageComponents/BlogSection";

const LandingPage = (props) => {
  const { setShowBookingPage,showBookingPage } = props;
  return (
    <div className="bg-[#fdf8f5]">
      <HeroSection setShowBookingPage={setShowBookingPage} showBookingPage={showBookingPage}  />
      <AboutSection />
      <CarouselCards />
      <WhyChooseMe />
      <TestimonialSection />
      <BookConsultation />
      <LatestBlogPosts />
    </div>
  );
};

export default LandingPage;
