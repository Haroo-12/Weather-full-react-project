import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaBars, FaTimes } from "react-icons/fa";
import hotImage from '../Images/hot.png';
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#202B3B] p-12 w-[100%]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl">
        <img src={hotImage}  className="w-[10%]" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-400 font-bold text-xl">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-400 font-bold text-xl">About</Link>
          <Link to="/contact" className="text-white hover:text-gray-400 font-bold text-xl">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white"
        >
          {isMobileMenuOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-gray-700 p-4 space-y-4`}
      >
        <Link to="/" className="text-white hover:text-gray-400 block text-xl font-bold ">Home</Link>
        <Link to="/about" className="text-white hover:text-gray-400 block text-xl font-bold">About</Link>
        <Link to="/contact" className="text-white hover:text-gray-400 block text-xl font-bold">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
