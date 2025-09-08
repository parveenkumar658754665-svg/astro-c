import React from "react";

const BookSessionPage = () => {
  return (
    <section className="bg-[#FCF9F4] text-[#3B2E2A] px-6 py-16 font-serif">
      <div className="max-w-5xl mx-auto space-y-14">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">📅 Book a Session</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            <strong>Rahul Sharma</strong> offers personalized astrology
            consultations based on Vedic principles & intuitive insights.
          </p>
        </div>

        {/* Intro */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            ✨ Ready to Transform Your Life Through Astrology?
          </h2>
          <p>
            You’re here because you’re seeking clarity — whether in love,
            career, health, or life purpose. I’m here to guide you with accuracy
            and compassion through your cosmic blueprint.
          </p>
        </div>

        {/* Session Types */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            💬 Types of Sessions Available
          </h3>
          <ul className="space-y-3 text-[17px] text-gray-800">
            <li>
              <strong>🔮 General Horoscope Reading:</strong> All-round life
              insight — great for first-timers.
            </li>
            <li>
              <strong>❤️ Love & Marriage Consultation:</strong> Compatibility,
              timing & remedies.
            </li>
            <li>
              <strong>💼 Career & Finance Guidance:</strong> Career clarity,
              success windows, and money insights.
            </li>
            <li>
              <strong>🧘 Health & Wellness Reading:</strong> Physical &
              emotional mapping with astrological remedies.
            </li>
          </ul>
        </div>

        {/* How to Book */}
        <div>
          <h3 className="text-xl font-semibold mb-4">📲 How to Book</h3>
          <ol className="list-decimal ml-6 space-y-2 text-gray-800 text-[17px]">
            <li>Choose your service</li>
            <li>
              WhatsApp or Call on <strong>+91-7011809637 & 9773578595</strong>
            </li>
            <li>Share your Date, Time & Place of Birth</li>
            <li>Select your method – Call / WhatsApp / Video</li>
            <li>Receive personalized guidance and remedies</li>
          </ol>
          <p className="mt-4">
            📧 Or Email: <strong>mehrad1949@gmail.com</strong>
          </p>
          <p>
            🗓️ Book Online:{" "}
            <a href="#" className="underline text-[#C05621]">
              Click here to schedule
            </a>
          </p>
          <p>
            🕘 <strong>Availability:</strong> Mon–Sat, 10 AM – 8 PM (IST)
          </p>
        </div>

        {/* Fees Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">💳 Fees & Payment</h3>
          <ul className="space-y-2 text-gray-800 text-[17px]">
            <li>🔖 First Consultation Offer: ₹500 Only</li>
            <li>📄 Optional PDF Report: ₹200 Extra</li>
            <li>💰 Payment via: UPI / GPay / Bank Transfer</li>
          </ul>
          <p className="text-[#C05621] font-medium mt-2">
            💬 100% Confidential — Your privacy is my promise.
          </p>
        </div>

        {/* Final CTA */}
        <div className="text-center space-y-6">
          <p className="italic text-lg max-w-xl mx-auto">
            “When you understand the stars, you can master your life.”
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#7B4C27] text-white px-6 py-3 rounded-lg shadow hover:bg-[#5e3620] transition">
              📱 WhatsApp Now
            </button>
            <button className="bg-white border border-[#7B4C27] text-[#7B4C27] px-6 py-3 rounded-lg shadow hover:bg-[#f5ebe3] transition">
              📅 Schedule Online
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSessionPage;
