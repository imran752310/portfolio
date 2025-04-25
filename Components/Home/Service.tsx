import React from "react";
import { DiCreativecommonsBadge, DiDatabase, DiUikit, DiVisualstudio, DiWordpress } from "react-icons/di";
import SectionHeading from "../Helper/SectionHeading";

const Service = () => {
  return (
    <div className="w-[85%] m-auto my-20 px-4 md:px-8">
    {/* heading  */}
      
       <SectionHeading subTitle="What I Offer?" title="My Services" text="There are many variations of passages of Lorem Ipsum available, but the
          majority have suffered alteration in some form." textColor="" />

      {/* Service Cards Container */}
      <div className="my-10 flex flex-wrap justify-center gap-6">
        {/* Service Card 1 */}
        <div  
        data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="600"
      className="bg-white shadow-md rounded-lg p-6 w-full sm:w-80 md:w-96 mx-2 my-4 hover:bg-blue-600 hover:text-white transition">
          <div className="text-center">
            <div className="flex justify-center items-center pb-2">
              <DiUikit className="bg-blue-600 text-white rounded-full p-2" size={50} />
            </div>
            <h2 className="text-md font-bold text-gray-900 p-1">Web Development</h2>
            <p className="text-gray-600 text-xs md:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              ligula vel in.
            </p>
          </div>
        </div>

        {/* Service Card 2 */}
        <div 
         data-aos="fade-down"
         data-aos-easing="linear"
         data-aos-duration="1000"
          className="bg-white shadow-md rounded-lg p-6 w-full sm:w-80 md:w-96 mx-2 my-4 hover:bg-blue-600 hover:text-white transition">
          <div className="text-center">
            <div className="flex justify-center items-center pb-2">
              <DiDatabase className="bg-blue-600 text-white rounded-full p-2" size={50} />
            </div>
            <h2 className="text-md font-bold text-gray-900 p-1">Visual Design</h2>
            <p className="text-gray-600 text-xs md:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              ligula vel in.
            </p>
          </div>
        </div>

        {/* Service Card 3 */}
        <div
         data-aos="fade-down"
         data-aos-easing="linear"
         data-aos-duration="1300"
          className="bg-white shadow-md rounded-lg p-6 w-full sm:w-80 md:w-96 mx-2 my-4 hover:bg-blue-600 hover:text-white transition">
          <div className="text-center">
            <div className="flex justify-center items-center pb-2">
              <DiCreativecommonsBadge className="bg-blue-600 text-white rounded-full p-2" size={50} />
            </div>
            <h2 className="text-md font-bold text-gray-900 p-1">Canva Designer</h2>
            <p className="text-gray-600 text-xs md:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              ligula vel in.
            </p>
          </div>
        </div>

        {/* Service Card 4 */}
        <div
         data-aos="fade-down"
         data-aos-easing="linear"
         data-aos-duration="1800"
          className="bg-white shadow-md rounded-lg p-6 w-full sm:w-80 md:w-96 mx-2 my-4 hover:bg-blue-600 hover:text-white transition">
          <div className="text-center">
            <div className="flex justify-center items-center pb-2">
              <DiWordpress className="bg-blue-600 text-white rounded-full p-2" size={50} />
            </div>
            <h2 className="text-md font-bold text-gray-900 p-1">WordPress Developer</h2>
            <p className="text-gray-600 text-xs md:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              ligula vel in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
