import React, { useState } from "react";
import logoImage from "../assets/logo.png";
import { Link } from "react-router-dom";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Lucide icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Framer variants
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  return (
    <header className="max-w-[1440px] container mx-auto flex justify-between items-center px-4 py-4 sticky top-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
      {/* ------------- Logo ------------- */}
      <div className="flex items-center space-x-2 cursor-pointer">
        <img src={logoImage} alt="Logo" className="w-10 h-10" />
        <span className="text-2xl font-bold text-[#F53838]">NakibVpn</span>
      </div>

      {/* ------------- Desktop Menu ------------- */}
      <nav className="hidden md:flex">
        <ul className="flex space-x-6 items-center font-medium">
          {["Home", "About", "Features", "Pricing", "Testimonial", "Help"].map(
            (item, i) => (
              <li
                key={i}
                className="text-[#F53838] hover:text-[#F53838]/80 transition duration-300"
              >
                <Link to="/">{item}</Link>
              </li>
            )
          )}
        </ul>
      </nav>

      {/* ------------- Desktop Buttons ------------- */}
      <div className="hidden md:flex font-semibold space-x-3.5">
        <button className="px-4 py-2 text-white bg-[#F53838] rounded-2xl hover:bg-white border border-[#F53838] hover:text-[#F53838] duration-300 ease-in-out">
          Sign Up
        </button>
        <button className="px-4 py-2 border hover:text-white text-[#F53838] hover:bg-[#F53838] rounded-2xl transition duration-300 ease-in-out">
          Sign In
        </button>
      </div>

      {/* ------------- Mobile Menu Button ------------- */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X size={28} className="text-[#F53838]" />
          ) : (
            <Menu size={28} className="text-[#F53838]" />
          )}
        </button>
      </div>

      {/* ------------- Mobile Dropdown Menu ------------- */}
      <AnimatePresence>
        {isOpen && (
          <Motion.nav
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-16 left-0 w-full bg-white shadow-md rounded-b-2xl md:hidden z-40"
          >
            <ul className="flex flex-col items-center space-y-4 py-6 font-semibold text-[#F53838]">
              {["Home", "About", "Features", "Pricing", "Testimonial", "Help"].map(
                (item, i) => (
                  <li key={i}>
                    <Link
                      to="/"
                      className="hover:text-[#F53838]/80 transition duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
              <div className="flex flex-col space-y-3 mt-4">
                <button className="px-6 py-2 text-white bg-[#F53838] rounded-2xl hover:bg-white border border-[#F53838] hover:text-[#F53838] duration-300 ease-in-out">
                  Sign Up
                </button>
                <button className="px-6 py-2 border hover:text-white text-[#F53838] hover:bg-[#F53838] rounded-2xl transition duration-300 ease-in-out">
                  Sign In
                </button>
              </div>
            </ul>
          </Motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
