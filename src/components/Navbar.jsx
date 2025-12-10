import React from 'react'
import { useState } from 'react'

const Navbar = () => {
     const [open, setOpen] = useState(false);
  return (
    <nav className="w-full flex justify-center relative">
            {/* NAVBAR MAIN */}
            <div className="bg-[rgba(15,15,15,0.7)] backdrop-blur-[10px] shadow-lg flex items-center justify-between md:justify-around px-6 py-3 w-full z-20 top-0 fixed">

                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                        V
                    </div>
                    <h1 className="text-xl font-semibold text-orange-600">Vivek</h1>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 font-medium text-white">
                    <li><a href="#home" className="hover:text-orange-600">Home</a></li>
                    <li><a href="#skills" className="hover:text-orange-600">Skills</a></li>
                    <li><a href="#projects" className="hover:text-orange-600">Projects</a></li>
                    <li><a href="#services" className="hover:text-orange-600">Services</a></li>
                    <li><a href="#about" className="hover:text-orange-600">About</a></li>
                    <li><a href="#contact" className="hover:text-orange-600">Contact</a></li>
                </ul>

                {/* Desktop CTA */}
                <button className="hidden md:block bg-orange-600 text-white px-5 py-2 rounded-full hover:bg-orange-600 transition">
                    Download CV
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
                    <a href="#home" onClick={() => setOpen(false)}><li>Home</li></a>
                    <a href="#skills" onClick={() => setOpen(false)}><li>Skills</li></a>
                    <a href="#projects" onClick={() => setOpen(false)}><li>Projects</li></a>
                    <a href="#services" onClick={() => setOpen(false)}><li>Services</li></a>
                    <a href="#about" onClick={() => setOpen(false)}><li>About</li></a>
                    <a href="#contact" onClick={() => setOpen(false)}><li>Contact</li></a>

                    <button className="bg-orange-600 text-white px-5 py-2 rounded-full mt-3">
                        Download CV
                    </button>
                </ul>
            </div>
        </nav>
  )
}

export default Navbar
