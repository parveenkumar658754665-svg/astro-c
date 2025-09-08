import React from "react";

const WhoIHelp = () => {
  return (
    <section class="bg-black text-white py-16 px-6 md:px-20">
      <div class="max-w-5xl mx-auto text-center md:text-left">
        <h2 class="text-3xl md:text-4xl font-serif text-[#c39c6b] mb-6 flex items-center justify-center md:justify-start gap-2">
          🌌 Who I Help
        </h2>

        <ul class="space-y-5 text-base text-gray-200">
          <li class="flex items-start gap-3">
            <span class="text-[#c39c6b] text-lg">✦</span>
            <span>
              <strong>Individuals</strong> facing love, career, or health
              challenges
            </span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-[#c39c6b] text-lg">✦</span>
            <span>
              <strong>Couples</strong> seeking Kundli matching and marriage
              timing
            </span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-[#c39c6b] text-lg">✦</span>
            <span>
              <strong>Parents</strong> concerned about their child’s education
              or future
            </span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-[#c39c6b] text-lg">✦</span>
            <span>
              <strong>Spiritual seekers</strong> who want to grow on their inner
              journey
            </span>
          </li>
        </ul>

        <p class="mt-8 text-lg text-gray-300 max-w-3xl mx-auto md:mx-0">
          No matter your background, the stars have a message for you — and I
          can help you decode it.
        </p>
      </div>
    </section>
  );
};

export default WhoIHelp;
