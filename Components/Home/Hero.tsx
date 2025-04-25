import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-[85%] m-auto h-full  md:px-8">
      {/* <div className="flex flex-col md:flex-row justify-between items-center relative"> */}
      <div  className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center   relative">
        {/* Background Blur Circle */}
        <span className="w-80 h-80 bg-blue-600 blur-3xl -z-20 rounded-full absolute right-0 bottom-auto md:w-96 md:h-96"></span>

        {/* Text Section */}
        <div data-aos="flip-left" className="sm:py-10  ">
          <h1 className="text-blue-700 text-3xl md:text-4xl">
            Hey There 👋 I am <br /><br />
            <span className="text-black my-6 font-bold text-6xl md:text-4xl lg:text-4xl xl:text-6xl">
              Muhammad Imran Khan
            </span>
          </h1>
          <h2 className="text-gray-500 text-xl pt-5 md:text-2xl">
          &quot;Professional&quot;
            <span className="text-black"> Developer</span>
          </h2>
          <p className="text-gray-600 mt-2 text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            interdum consequat convallis.
          </p>

          {/* Buttons */}
          <div className="mt-5">
            <button className="bg-blue-600 hover:bg-blue-500 px-10 py-4 rounded-full text-white text-sm m-2 cursor-pointer">
              Contact Me
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 px-10 py-4 rounded-full text-white text-sm m-2 cursor-pointer">
              Learn More
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div data-aos="zoom-in" className="mt-6  w-full">
          <Image
            src={"/heroo.png"}
            className="rounded-full w-full p-10 "
            width={400}
            height={500}
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
