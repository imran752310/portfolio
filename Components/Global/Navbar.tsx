"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="py-6 w-[85%] mx-auto sticky top-0 z-20 bg-white px-10 rounded-full sm:rounded-sm ">
      <div data-aos="fade-down" className="container m-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-blue-500 font-bold text-[24px] flex items-center"
          >
            <Image src="/next.svg" alt="logo" width={35} height={35} />{" "}
            Portfolio
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          <Link
            href="/"
            className="text-gray-800 font-semibold group hover:text-sky-600 transition duration-300 "
          >
            Home
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
          </Link>
          <Link href="/"  className="text-gray-800 group hover:text-sky-600 transition duration-300 ">
            About
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
          </Link>
          <Link href="/"  className="text-gray-800 group hover:text-sky-600 transition duration-300 ">
            Service
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
          </Link>
          <Link href="/"  className="text-gray-800 group hover:text-sky-600 transition duration-300 ">
            Pricing
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
          </Link>
          <Link href="/"  className="text-gray-800 group hover:text-sky-600 transition duration-300 ">
            Contact Us
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
          </Link>
          <button className="bg-blue-500 text-white rounded-full px-4 py-2 text-[12px] font-bold">
            Download CV
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 absolute z-10 bg-gray-200 w-full rounded-lg p-10">
          <div className="flex flex-col items-center">
            <Link href="/" className="block py-2 text-gray-800 hover:text-sky-600 transition duration-300 ">
              Home
              
            </Link>
            <Link href="/" className="block py-2 text-gray-800 hover:text-sky-600 transition duration-300">
              About
              
            </Link>
            <Link href="/" className="block py-2 text-gray-800 hover:text-sky-600 transition duration-300">
              Service
              
            </Link>
            <Link href="/" className="block py-2 text-gray-800 hover:text-sky-600 transition duration-300">
              Pricing
              
            </Link>
            <Link href="/" className="block py-2 text-gray-800 hover:text-sky-600 transition duration-300">
              Contact Us
              
            </Link>
            <button className="bg-blue-500 text-white rounded-full px-4 py-2 text-[12px] font-bold mt-4">
              Download CV
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
