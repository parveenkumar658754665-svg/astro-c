import React from "react";

const AboutHeroSection = () => {
  return (
    <section class="bg-black text-white bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-cover bg-center py-16 px-6 md:px-20">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div class="w-full">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif text-[#c39c6b] leading-tight ">
            HELLO! I’M Rahul Sharma
          </h1>
          <p className="mb-6 text-[#c39c6b] font-mono">
            Your Trusted Astrologer
          </p>
          <p className="text-2xl font-serif">Welcome to My Cosmic World</p>
          <p className="text-lg md:text-xl text-gray-200 mb-2">
            I am Rahul Sharma, a dedicated and spiritually guided astrologer,
            here to help you uncover the truth written in the stars. With a deep
            belief in the ancient science of astrology and a mission to bring
            light, direction, and peace into your life, I offer personalized
            consultations that truly make a difference.
          </p>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Rahul Sharma is a Btech,Mba and diploma in astrology and Advance
            Diploma in Astrology He is renound astrologer with more than 20
            years of experience.
          </p>
          <ul class="space-y-3 text-gray-200 text-base">
            <li class="flex items-start">
              <span class="text-[#c39c6b] mr-2">✦</span> I don't just read your
              stars — I help you understand your life.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
