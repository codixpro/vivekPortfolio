import React from 'react'
import { useState } from 'react'

const Navbar = () => {
     const [open, setOpen] = useState(false);
  return (
    <nav className="w-full flex justify-center relative">
            {/* NAVBAR MAIN */}
            <div className="bg-[rgba(12,12,12,0.9)] border-t border-white/5 shadow-lg flex items-center justify-between md:justify-around px-6 py-3 w-full z-20 top-0 fixed">

                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#FF6A00] text-white rounded-full flex items-center justify-center font-bold">
                        <img src="https://img.freepik.com/premium-photo/modern-bearded-man-living-urban-rush-wearing-wireless-earphones-listen-music-smiling-carefree-like-headphones-quality_1258-6204.jpg?semt=ais_hybrid&w=740&q=80" className="w-full h-full object-cover rounded-full"  alt="" />
                    </div>
                    <h1 className="text-xl font-semibold text-[#FF6A00]">Vivek</h1>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden w-[50%] md:flex items-start justify-start gap-8 font-medium text-white text-left">
                    <a onclick="location.reload()" href="#home"><li>Home</li></a>
                    <a href="#skills"><li>Skills</li></a>
                    <a href="#contact"><li>Contact</li></a>
                </ul>

                {/* Desktop CTA */}
                <button className="hidden md:block bg-[#FF6A00] text-white px-5 py-2 rounded-full hover:bg-transparent hover:text-white hover:border-2 hover:border-[#FF6A00] transition">
                    View CV
                </button>

                {/* MOBILE ICON TOGGLE */}
                <button
                    className="md:hidden text-3xl text-amber-50"
                    onClick={() => setOpen(!open)}
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`md:hidden absolute top-18 w-full bg-gray-200 shadow-lg rounded-xl overflow-hidden transition-all duration-300 ease-out z-100 ${open ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 translate-y-[-10px]"}`}>
                <ul className="flex flex-col gap-4 p-6 text-gray-700 font-medium">
                    <a onClick={() => window.location.reload()} ><li>Home</li></a>
                    <a href="#about" onClick={() => setOpen(false)}><li>About</li></a>
                    <a href="#contact" onClick={() => setOpen(false)}><li>Contact</li></a>

                    <button className="bg-[#FF6A00] text-white px-5 py-2 rounded-full mt-3 hover:bg-transparent hover:text-[#FF6A00] hover:border-2 hover:border-[#FF6A00] transition">
                        View CV
                    </button>
                </ul>
            </div>
        </nav>
  )
}

export default Navbar
