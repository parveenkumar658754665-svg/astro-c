import React from "react";
// import heroImage from "../assets/zodiac-wheel.png"; // replace with your actual image path
import { TbStar } from "react-icons/tb";

const HeroSection = (props) => {
  const { setShowBookingPage, showBookingPage } = props;
  return (
    <section className="bg-[#fdf9f6] min-h-screen md:min-h-[70vh]  flex items-center justify-center px-6 md:px-12">
      <div className="max-w-7xl h-screen md:h-[70vh] w-full flex flex-col-reverse md:flex-row justify-center items-center gap-10">
        {/* Left: Text Section */}
        <div className="space-y-6 h-1/2 md:h-full w-full md:w-1/2 flex flex-col justify-center items-start text-left">
          <h1 className=" w-full text-4xl md:text-4xl font-serif tracking-wide leading-snug text-[#986a36]">
            🌟
            <br />
            Unlock the Power of the Stars:
            <br />
            Get Accurate & Personalized Astrology Guidance
          </h1>
          <p className="w-full text-gray-700 max-w-md">
            Your journey to clarity, success, love, and inner peace begins here.
            Consult with Rahul Sharma — your trusted astrologer.
          </p>
          <button
            onClick={() => {
              setShowBookingPage(!showBookingPage);
            }}
            className="bg-black text-white px-6 py-3 flex items-center gap-2 uppercase tracking-wide font-medium shadow-sm hover:scale-105 transition duration-300 rounded-md"
          >
            {/* <TbStar className="text-[#c49b67]" /> */}
            🔮 Book Your Consultation Now
          </button>
        </div>

        {/* Right: Image Section */}
        <div className="relative h-1/2 md:h-full w-full md:w-1/2">
          <img
            src="zodiac-logo-1.png"
            alt="Zodiac Circle"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md mx-auto pb-4 pr-2 animate-rotate"
          />
          <img
            src="zodiac-logo-2.png"
            alt="Zodiac Circle"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.9]  w-full max-w-md mx-auto pl-1"
          />

          {/* Optional: floating symbols (you can absolutely position them for animation) */}
          {/* You can skip this if you just want static */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
