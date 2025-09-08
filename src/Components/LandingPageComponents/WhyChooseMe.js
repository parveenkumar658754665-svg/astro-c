import React from "react";
import { FaCheck } from "react-icons/fa";

const features = [
  {
    title: "Expert Guidance",
    description:
      "Years of deep study and real-life consultation experience in astrology and spiritual guidance.",
  },
  {
    title: "Personalized Insights",
    description:
      "Every report and consultation is tailored to you and kept 100% confidential.",
  },
  {
    title: "Accurate Predictions",
    description:
      "My astrology isn’t guesswork — it's based on time-tested Vedic principles and intuitive clarity.",
  },
  {
    title: "Affordable Rates",
    description:
      "High-value guidance at fair rates — because everyone deserves cosmic support.",
  },
  {
    title: "Global Accessibility",
    description:
      "Book a session from anywhere in the world — get answers from the comfort of your home.",
  },
];

const WhyChooseMe = () => {
  return (
    <div className="bg-[#FDF9F7] py-10 font-serif">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl text-[#7D5A3A] font-semibold tracking-wide uppercase">
            ✦ Why Choose Me? ✦
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
            Discover why countless clients trust me for astrological and spiritual guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white border border-[#ECDCD1] rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <FaCheck className="absolute -top-4 left-4 bg-[#FDF9F7] p-2 rounded-full text-[#7D5A3A] text-xl border border-[#ECDCD1]" />
              <h3 className="text-[#7D5A3A] text-lg font-medium mb-2 mt-4">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMe;
