import React from "react";

const BookConsultation = () => {
  return (
    <div className="bg-[#FDF9F7] py-10 font-serif px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Left: Textual Info */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl text-[#7D5A3A] font-semibold uppercase tracking-wider">
            Book a Consultation
          </h2>
          <p className="mt-6 text-lg text-gray-700">
            🔮 Ready to find out what the stars have planned for you?
          </p>
          <p className="mt-4 text-lg text-gray-700">
            I offer online consultations via phone, WhatsApp, or video call.
            Choose a time that suits you, share your birth details, and receive
            detailed insights you can trust.
          </p>

          <div className="mt-6 space-y-3 text-left text-gray-700 text-base">
            <p>
              📞 <strong>Call / WhatsApp:</strong>{" "}
              <a
                href="tel:+917011809637 / 9773578595"
                className="text-[#7D5A3A] hover:underline"
              >
                +91-7011809637 & 9773578595
              </a>
            </p>
            <p>
              📧 <strong>Email:</strong>{" "}
              <a
                href="mailto:mehrad1949@gmail.com"
                className="text-[#7D5A3A] hover:underline"
              >
                mehrad1949@gmail.com
              </a>
            </p>
            <p>
              🗓️ <strong>Book Online:</strong>{" "}
              <a
                href="/book-session"
                className="text-[#7D5A3A] font-medium underline hover:no-underline"
              >
                Click to Schedule
              </a>
            </p>
            <p className="mt-4 text-[#7D5A3A] font-semibold">
              ✨ First-time consultation offer: ₹XXX only!
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative">
          <img
            src="/consult.jpg" // Replace with your image path
            alt="Astrology Consultation"
            className="rounded-3xl scale-[0.8] shadow-xl border border-[#e6dcd6]"
          />
          {/* Decorative star in corner */}
          <span className="absolute top-4 right-4 text-xl text-[#D8C6B0]">
            ✦
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;
