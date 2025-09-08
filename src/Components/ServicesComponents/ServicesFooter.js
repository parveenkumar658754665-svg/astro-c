import React from "react";

const ServicesFooterSection = () => {
  return (
    <section className="bg-[#FDF6F1] text-[#4B2E19] py-16 px-6 font-serif">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#7B4C27]">
            💬 How It Works
          </h2>
          <ul className="space-y-4 text-[17px] text-gray-800 pt-4">
            <li>✅ Choose your service(s)</li>
            <li>✅ Share your birth details (Date, Time, Place of birth)</li>
            <li>✅ Book your time slot (WhatsApp / Call / Video)</li>
            <li>✅ Receive guidance, remedies & answers</li>
            <li>✅ Optional report will be sent as a PDF</li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="space-y-4 text-[17px] text-gray-700 text-center">
          <h3 className="text-2xl font-semibold text-[#7B4C27]">
            📞 Book Your Session Now
          </h3>
          <p>
            🌐 <strong>Online Consultation Only</strong>
          </p>
          <p>🕉 Available in Hindi & English</p>
          <p>
            📱 WhatsApp/Call:{" "}
            <span className="font-semibold">+91-7011809637 / 9773578595</span>
          </p>
          <p>
            📧 Email:{" "}
            <span className="font-semibold">mehrad1949@gmail.com</span>
          </p>
          <div className="mt-2">
            <p className="mb-2">📆 Book Appointment:</p>
            <button className="bg-[#7B4C27] hover:bg-[#5e3620] text-white px-5 py-2 rounded-lg shadow transition">
              Book Now
            </button>
          </div>
          <p className="text-[#C05621] font-semibold">
            💰 Special First-Time Discount Available
          </p>
        </div>
      </div>

      {/* Quote at Bottom */}
      <div className="max-w-4xl mx-auto text-center mt-12 pt-8 border-t border-[#E2D2C6]">
        <p className="italic text-lg text-[#6C3E2B]">
          “When you understand the stars, you can master your life. Let’s begin
          your journey.”
        </p>
      </div>
    </section>
  );
};

export default ServicesFooterSection;
