import React, { useState } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import { TbStar } from "react-icons/tb"; // optional for final icon

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { field: "Home", link: "/" },
    { field: "About Me", link: "/about" },
    { field: "Services", link: "/services" },
    { field: "Book Session", link: "/book-session" },
  ];

  return (
    <header className="bg-[#fdf9f6] border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-4xl font-serif  tracking-wide flex items-center gap-1 h-20">
          Astro Mate
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wide hover:text-pink-600 transition duration-500 ease-in-out"
            >
              ✦ {item.field}
            </a>
          ))}
        </nav>

        {/* Right Icons */}
        {/* <div className="hidden md:flex gap-4 items-center">
          <button className="w-10 h-10 rounded-full border border-dashed flex items-center justify-center">
            <FiSearch size={18} />
          </button>
          <div className="relative w-10 h-10 rounded-full border border-dashed flex items-center justify-center">
            <BsBag size={18} />
            <span className="absolute -top-1 -right-1 text-xs text-white bg-[#986a36] w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </div>
          <button className="w-10 h-10 rounded-full border border-dashed flex items-center justify-center">
            <TbStar size={18} />
          </button>
        </div> */}

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#fdf9f6] px-4 pb-4">
          <nav className="flex flex-col gap-3">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-sm font-medium flex items-center gap-2"
              >
                ✦ {item.field}
              </a>
            ))}
            {/* <div className="flex gap-4 mt-4">
              <FiSearch />
              <BsBag />
              <TbStar />
            </div> */}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
