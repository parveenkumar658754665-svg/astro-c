import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const cardData = [
  {
    title: "Birth Chart Reading",
    description:
      "Discover your life’s blueprint and gain personalized insights based on your birth details.",
    image: "/card1.png",
  },
  {
    title: "Love & Marriage Consultation",
    description:
      "Will you marry the one you love? When will you find your soulmate? Get love clarity.",
    image: "/card2.png",
  },
  {
    title: "Career & Finance Guidance",
    description:
      "Know the best career path, timing for promotions, business success, and financial stability.",
    image: "/card3.png",
  },
  {
    title: "Health Predictions",
    description:
      "Understand your physical and mental well-being with planetary analysis.",
    image: "/card1.png",
  },
  {
    title: "Matchmaking (Kundli Milan)",
    description:
      "Ensure compatibility for a successful and harmonious marriage.",
    image: "/card2.png",
  },
];

const CarouselCards = () => {
  return (
    <div className="bg-[#FDF9F7] py-12 font-serif">
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        // navigation
        modules={[Autoplay, Pagination]}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className={``}>
              <div className={` text-center  p-6  border border-x-[0.5px] border-[#c3beb6] ${index%2==0?"bg-[#fdf8f5]":"bg-white"}`}>
                <div
                  className={`relative aspect-[4/5]   overflow-hidden mb-6 p-2 m-6`}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className={`w-full h-full object-cover  `}
                  />
                </div>
                <h3 className="text-[#7D5A3A] text-xl font-medium mb-2 tracking-wide">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-700 mb-4">{card.description}</p>
                {/* <button
                  type="button"
                  className="text-sm font-medium text-[#7D5A3A] hover:underline focus:outline-none"
                >
                  ✦ LEARN MORE
                </button> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>
      <p className="w-full text-center font-mono bg-[#fdf8f5] py-2">
          📲 All services are available online via WhatsApp, phone call, or
          video consultation.
        </p>
    </div>
  );
};

export default CarouselCards;
