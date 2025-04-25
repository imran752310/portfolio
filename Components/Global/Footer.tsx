import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-[#090E34] text-white py-10">
      <div className="w-[85%] mx-auto flex flex-wrap justify-between border-b p-5">
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-4 sm:mb-0">
          <h1 className="text-[44px] font-bold">Let Talk</h1>
          <h3 className="text-gray-300 font-bold mt-4">Contact Info</h3>
          <p className="text-sm">closerpage@email.com</p>
          <p className="text-sm">123-456-7890</p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-4 sm:mb-0">
          <h2 className="text-lg font-semibold mb-2">What I Do</h2>
          <ul className="text-lg">
            <li className="text-[12px] py-1">Web Development</li>
            <li className="text-[12px] py-1">UI/UX Design</li>
            <li className="text-[12px] py-1">Content Creation</li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-4 sm:mb-0">
          <h2 className="mb-2 text-lg font-semibold ">Quick Links</h2>
          <ul className="text-sm">
            <li className="text-[12px] py-1"><a href="#">Home</a></li>
            <li className="text-[12px] py-1"><a href="#">About</a></li>
            <li className="text-[12px] py-1"><a href="#">Services</a></li>
            <li className="text-[12px] py-1"><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-4 sm:mb-0">
          <h2 className="mb-2 text-lg font-semibold ">Subscribe</h2>
          <p className="text-[10px]">Subscribe to our newsletter to get the latest updates</p>
          <form className="flex items-center mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-100 p-[6px] px-2 rounded-l-full w-full sm:w-auto"
            />
            <button className="bg-blue-500 text-white p-2 rounded-r-full text-sm text-center">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center p-2">
        <div className="flex justify-center gap-4 mt-5 text-gray-300">
          <FaFacebook className="hover:text-blue-500 cursor-pointer" />
          <FaTwitter className="hover:text-blue-400 cursor-pointer" />
          <FaYoutube className="hover:text-red-500 cursor-pointer" />
          <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
        </div>
        <p className="text-sm mt-2">
          All rights reserved by © Portfolio Creative 2024 <b>Muhammad Imran Khan</b>
        </p>
      </div>
    </footer>
  );
};
