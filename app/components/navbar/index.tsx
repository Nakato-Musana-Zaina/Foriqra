'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Home, Info, BarChart2, Package, Mail } from 'lucide-react'; // Import more icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="shadow-md sticky top-0 z-50 ">  {/* Removed bg-white */}
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center"> {/* Added items-center */}
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-[#1A365D] flex items-center gap-2">  {/* Added gap-2 and flex */}
              YourLogo
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">  {/* space-x-6 for spacing */}
            <Link href="/" className="text-gray-700 hover:text-[#168763] transition-colors duration-200 font-medium flex items-center gap-2">  {/* Added gap-2 and flex */}
              <Home size={20} /> {/* Icon */}
              Home
            <Link href="/about_us" className="text-gray-700 hover:text-[#168763] transition-colors duration-200 font-medium flex items-center gap-2">  {/* Added gap-2 and flex */}
              <Info size={20} />  {/* Icon */}
              About
            </Link>
            {/* <Link href="/features" className="text-gray-700 hover:text-[#168763] transition-colors duration-200 font-medium flex items-center gap-2">  
              <BarChart2 size={20} /> 
              Features
            </Link> */}
            <Link href="/plans" className="text-gray-700 hover:text-[#168763] transition-colors duration-200 font-medium flex items-center gap-2">  {/* Added gap-2 and flex */}
              <Package size={20} /> {/* Icon */}
              Plans
            </Link>
            <Link href="/contact_us" className="bg-[#168763] text-white px-4 py-2 rounded-md hover:bg-[#00a36c] transition-colors duration-300 flex items-center gap-2">  {/* Added gap-2 and flex */}
              <Mail size={20} /> {/* Icon */}
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#168763] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-inner"> {/* bg-white */}
          <Link href="/"
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-[#168763] transition-colors duration-200 flex items-center gap-2"  // Added gap-2 and flex
                onClick={toggleMenu}>
            <Home size={20} /> {/* Icon */}
            Home
          </Link>
          <Link href="/about_us"
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-[#168763] transition-colors duration-200 flex items-center gap-2"  // Added gap-2 and flex
                onClick={toggleMenu}>
            <Info size={20} /> {/* Icon */}
            About
          </Link>
          {/* <Link href="/features"
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-[#168763] transition-colors duration-200 flex items-center gap-2"  // Added gap-2 and flex
                onClick={toggleMenu}>
            <BarChart2 size={20} /> 
            Features
          </Link> */}
          <Link href="/plans"
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-[#168763] transition-colors duration-200 flex items-center gap-2"  // Added gap-2 and flex
                onClick={toggleMenu}>
            <Package size={20} /> {/* Icon */}
            Plans
          </Link>
          <Link href="/contact_us"
                className="block px-3 py-2 rounded-md bg-[#168763] text-white hover:bg-[#00a36c] transition-colors duration-300 flex items-center gap-2"  // Added gap-2 and flex
                onClick={toggleMenu}>
            <Mail size={20} /> {/* Icon */}
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;