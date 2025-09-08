import React from "react";

const services = [
  {
    title: "Kundli Analysis (Birth Chart Reading)",
    icon: "🌟",
    what: "Your Kundli is the astrological blueprint of your life, based on your exact time, date, and place of birth.",
    discover: [
      "Your personality traits, strengths, and challenges",
      "Planetary influences on key life areas",
      "Past karmas and future predictions",
      "Major Dasha (planetary period) analysis",
    ],
    who: "Anyone seeking a deep understanding of their life's journey, purpose, and timing.",
    duration: "30–45 mins",
    extra: "Optional PDF Report",
    fee: "₹500",
  },
  {
    title: "Love & Marriage Consultation",
    icon: "❤️",
    what: "Are you struggling in love? Will your relationship succeed? Will you marry your partner?",
    discover: [
      "Timing of love or marriage",
      "Obstacles in love life & how to overcome them",
      "Chances of love or arranged marriage",
      "Remedies for love conflicts or delays",
    ],
    duration: "30 mins",
    extra: "1-on-1 Guidance",
    fee: "₹500",
  },
  {
    title: "Career & Finance Guidance",
    icon: "💼",
    what: "Confused about your career path? Struggling with job changes or money issues?",
    discover: [
      "Right career options based on your planetary placements",
      "Periods of success or challenges in job/business",
      "Foreign job opportunities or promotions",
      "Financial luck, stability & growth remedies",
    ],
    duration: "30–40 mins",
    extra: "Customized Advice",
    fee: "₹500",
  },
  {
    title: "Health & Well-Being Analysis",
    icon: "🧘",
    what: "Your planets can reveal much about your physical and mental health.",
    discover: [
      "Periods of low immunity or health challenges",
      "Stress, anxiety, or sleep patterns linked to planetary influence",
      "Hidden health vulnerabilities",
      "Remedies through astrology, colors, food, and mantras",
    ],
    duration: "25–30 mins",
    extra: "Remedies Provided",
    fee: "₹500",
  },
  {
    title: "Kundli Milan (Marriage Matchmaking)",
    icon: "💑",
    what: "Before marriage, compatibility is key. This service helps match two horoscopes for marriage success.",
    discover: [
      "Gun Milan score",
      "Compatibility in mental, emotional, physical aspects",
      "Doshas like Manglik or Nadi",
      "Remedies to resolve match issues",
    ],
    duration: "20 mins",
    extra: "Detailed Match Report",
    fee: "₹500",
  },
  {
    title: "Diploma in Astrology ",
    icon: "🎓",
    what: "Guidance and insights based on structured foundational principles of astrology studied through formal diploma.",
    who: "Students of astrology or anyone seeking in-depth classical understanding of life events and timing.",
    duration: "30–40 mins",
    extra: "Syllabus-Based Analysis",
    fee: "₹4500",
  },
  {
    title: "Advanced Diploma in Astrology ",
    icon: "🎓",
    what: "Detailed interpretation using advanced astrological tools and methods for precise guidance.",
    who: "People needing clarity on complex life issues and timing.",
    duration: "40 mins",
    extra: "In-depth Advanced Reading",
    fee: "₹4500",
  },
  {
    title: "Jyotish Vachaspati ",
    icon: "🔱",
    what: "Expert-level astrological interpretation focusing on higher wisdom and spiritual mapping.",
    who: "Spiritual seekers and those facing long-term karmic challenges.",
    duration: "30–45 mins",
    extra: "Intuitive + Vedic Analysis",
    fee: "₹4500",
  },
  {
    title: "Jyotish Ratna",
    icon: "🔯",
    what: "Basic to intermediate astrological consultation using traditional Vedic wisdom.",
    who: "Everyday concerns like health, marriage, career, and peace of mind.",
    duration: "25 mins",
    extra: "Vedic Chart-Based",
    fee: "₹4500",
  },
  {
    title: "Diploma in Astrology and Wealth",
    icon: "💰",
    what: "A specialized consultation to understand how your horoscope influences financial growth and wealth-building.",
    discover: [
      "Best periods for wealth creation",
      "Financial doshas or blocks",
      "Investments & business predictions",
    ],
    duration: "30 mins",
    extra: "Financial Report Available",
    fee: "₹4500",
  },
  {
    title: "Horoscope Reading",
    icon: "🪐",
    what: "Get a complete reading of your daily, monthly, or yearly horoscope.",
    discover: [
      "Key periods for success and challenges",
      "Transit-based opportunities and risks",
      "Short- and long-term predictions",
    ],
    duration: "20–25 mins",
    extra: "Timeline Overview",
    fee: "₹4500",
  },
];

const ServicesList = () => {
  return (
    <section className="bg-[#FCF8F4] py-16 px-4 font-serif">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-[#7B4C27] font-bold text-center mb-10">
          🌠 Available Astrology Services
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          All services are available online (via WhatsApp, phone, or video call)
          and handled with 100% confidentiality.
        </p>

        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white border border-[#E5D5C4] shadow-sm rounded-2xl p-6 mb-8 hover:shadow-md transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-[#6A3E1E] mb-2">
              {service.icon} {service.title}
            </h3>
            <p className="text-gray-700 italic mb-3">{service.what}</p>

            {service.discover && (
              <ul className="list-disc list-inside text-gray-700 mb-3">
                {service.discover.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {service.who && (
              <p className="text-gray-700 mb-3">
                <strong>Who it’s for:</strong> {service.who}
              </p>
            )}

            <div className="text-sm text-gray-600">
              <p>
                🕒 <strong>Duration:</strong> {service.duration}
              </p>
              {service.extra && <p>📄 {service.extra}</p>}
              <p className="text-lg text-[#7B4C27] font-bold mt-2">
                💰 Fees: {service.fee}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesList;
