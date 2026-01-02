import React, { useState } from "react";

const Navbar = ({ setActiveSection }) => {
  const [open, setOpen] = useState(false);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setOpen(false); // close mobile menu
  };

  return (
    <nav className="w-full flex justify-center relative">
      {/* NAVBAR MAIN */}
      <div className="bg-[rgba(12,12,12,0.9)] border-t border-white/5 shadow-lg flex items-center justify-between md:justify-around px-6 py-3 w-full z-20 top-0 fixed">

        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleNavClick("home")}
        >
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="https://img.freepik.com/premium-photo/modern-bearded-man-living-urban-rush-wearing-wireless-earphones-listen-music-smiling-carefree-like-headphones-quality_1258-6204.jpg"
              className="w-full h-full object-cover"
              alt="logo"
            />
          </div>
          <h1 className="text-xl font-semibold text-[#FF6A00]">Vivek</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-white">
          <li onClick={() => handleNavClick("home")} className="cursor-pointer hover:text-[#FF6A00]">Home</li>
          <li onClick={() => handleNavClick("skills")} className="cursor-pointer hover:text-[#FF6A00]">Skills</li>
          <li onClick={() => handleNavClick("about")} className="cursor-pointer hover:text-[#FF6A00]">About</li>
          <li onClick={() => handleNavClick("contact")} className="cursor-pointer hover:text-[#FF6A00]">Contact</li>
        </ul>

        {/* Desktop CTA */}
        <button className="hidden md:block bg-[#FF6A00] text-white px-5 py-2 rounded-full hover:bg-transparent hover:border-2 hover:border-[#FF6A00] transition">
          View CV
        </button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
<div
  className={`md:hidden fixed top-16 left-0 w-full bg-gray-200 shadow-lg rounded-b-xl 
  transition-all duration-300 ease-out 
  z-[9999]
  ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}
>
  <ul className="flex flex-col gap-4 p-6 text-gray-800 font-medium">
    <li onClick={() => handleNavClick("home")} className="cursor-pointer">Home</li>
    <li onClick={() => handleNavClick("skills")} className="cursor-pointer">Skills</li>
    <li onClick={() => handleNavClick("about")} className="cursor-pointer">About</li>
    <li onClick={() => handleNavClick("contact")} className="cursor-pointer">Contact</li>

    <button className="bg-[#FF6A00] text-white px-5 py-2 rounded-full mt-3">
      View CV
    </button>
  </ul>
</div>
    </nav>
  );
};

export default Navbar;
