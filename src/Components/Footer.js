import React from "react";

const Footer = () => {
  return (
    <footer class="bg-[#fdf8f3] text-[#4c3a2b] border-t-[#e0d5cb] border px-6 py-12">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h4 class="text-lg font-semibold text-[#8d623d] mb-4">CONTACT</h4>
          <p class="mb-2">📍 Location: Online, serving clients globally</p>
          <p class="mb-2">
            📞 Contact:{" "}
            <a href="tel:+919786677432" class="underline">
              +91-9786677432
            </a>
          </p>
          {/* <p class="mb-2">
            🌐 Website:{" "}
            <a href="https://YourDomain.com" class="underline">
              YourDomain.com
            </a>
          </p> */}
          <p class="mb-2">
            📧 Email:{" "}
            <a href="mailto:sharmarahul124@gmail.com" class="underline">
              sharmarahul124@gmail.com
            </a>
          </p>
        </div>

        <div>
          <h4 class="text-lg font-semibold text-[#8d623d] mb-4">QUICK LINKS</h4>
          <ul class="space-y-2">
            <li>
              <a href="#" class="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Book Session
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold text-[#8d623d] mb-4">NEWSLETTER</h4>
          <form class="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
            <input
              type="email"
              placeholder="Email..."
              class="px-4 py-2 border border-gray-300 rounded w-full sm:w-auto mb-2 sm:mb-0"
            />
            <button
              type="submit"
              class="bg-black text-white px-5 py-2 rounded hover:bg-gray-800"
            >
              ✨ SUBMIT
            </button>
          </form>
          <small class="text-sm italic text-gray-500 mt-2 block">
            We promise not to spam you :)
          </small>
        </div>
      </div>

      <div class="border-t border-[#e0d5cb] mt-10 pt-6 text-center">
        <p class="text-sm">© 2025 YourDomain, All Rights Reserved</p>
        <div class="mt-3 space-x-4 text-[#8d623d]">
          <span>🔗 Follow us:</span>
          <a href="#" class="hover:underline">
            Instagram
          </a>
          <a href="#" class="hover:underline">
            Facebook
          </a>
          <a href="#" class="hover:underline">
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
