import React from "react";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";

const AboutSession = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-[#FDF9F7] min-h-screen p-6 md:p-16 md:pt-0 font-serif mt-20 md:mt-0">
      {/* Left Section - Image Stack */}
      <div className="relative w-full md:w-[40%] flex justify-center items-center">
        {/* Background Satin */}
        <img
          src="/bg1.jpg"
          alt="Satin Background"
          className="w-full h-auto object-cover rounded-lg"
        />

        {/* Maria Image */}
        {/* <img
          src="/clientImg.jpeg"
          alt="Rahul Sharma"
          className="absolute rounded-[40px] w-3/4 md:w-2/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg"
        /> */}

        {/* Rotating Gem */}
        <img
          src="/circle.png"
          alt="Gem"
          className="absolute w-16 h-16 top-4 left-4 scale-[3] animate-spin-slow"
        />
      </div>

      {/* Right Section - Text */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 px-4">
        <h2 className="text-3xl md:text-5xl text-[#7D5A3A] font-light leading-snug">
          Welcome to
          <br />
          Astro Mate
        </h2>

        <p className="mt-6 text-[#444] text-base md:text-lg leading-relaxed">
          I’m Rahul Sharma, a professional astrologer committed to helping
          individuals like you understand the cosmic patterns shaping your life.
          Through the sacred wisdom of Vedic astrology and horoscope
          interpretation, I provide deep insights that guide you toward better
          decisions, stronger relationships, and spiritual growth.
        </p>
        <br />
        <p>
          Whether you’re seeking answers about your love life, career, health,
          marriage, or future, I’m here to illuminate your path with clarity and
          compassion.
        </p>
        {/* <button className="mt-6 px-6 py-3 bg-black text-white uppercase tracking-wide hover:bg-[#333] transition">
          ✦ Schedule Session
        </button>

        <div className="mt-6 flex items-center gap-4 text-[#7D5A3A] text-xl">
          <span className="text-sm uppercase">Follow Maria</span>
          <FaFacebookF className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
          <FaPinterestP className="cursor-pointer" />
        </div> */}
      </div>
    </div>
  );
};

export default AboutSession;
