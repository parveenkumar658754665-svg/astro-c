import React from "react";

const ServicesHeroSection = () => {
  return (
    <section className="bg-[#FDF9F7] text-center py-20 px-6 md:px-16 font-serif">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#7B4C27] mb-4">
          Astrology Services by Rahul Sharma
        </h1>
        <p className="text-lg md:text-xl italic text-gray-600 mb-6">
          “Astrology doesn’t predict doom—it reveals your highest path.”
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Welcome to my Astrology Services page, where I offer a wide range of
          personalized consultations designed to guide, support, and empower
          you. Whether you're searching for clarity in love, guidance for your
          career, or simply peace of mind, you're in the right place.
        </p>
      </div>
    </section>
  );
};

export default ServicesHeroSection;
