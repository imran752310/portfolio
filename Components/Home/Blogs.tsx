import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../Helper/SectionHeading";

const Blogs = () => {
  return (
    <div className=" py-20 bg-[#F8F9FF]">
      <div className="w-[85%] mx-auto">
        {/* heading  */}

        <SectionHeading
          title=" From The Blog"
          subTitle="Recent Posts"
          text=" There are many variations of passages of Lorem Ipsum available, but
          the majority have  suffered alteration in some form."
          textColor=""
        />

        <div className="text-center mb-10">
          <span className="text-sm text-blue-500"></span>
          <h1 className="font-bold text-[32px] md:text-[42px] mt-2"></h1>
          <p className="text-gray-600 text-sm md:text-base mt-4"></p>
        </div>

        <div className="container mx-auto pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "UI/UX Design Trend 2024",
              image: "/news-1.jpg",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligulavel in.",
            },
            {
              title: "Tips for Graphics Design",
              image: "/news-3.jpg",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligulavel in.",
            },
            {
              title: "Ips for Graphics Design",
              image: "/news-2.jpg",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligulavel in.",
            },
          ].map((blog, index) => (
            <div
              data-aos="fade-down"
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-md font-bold text-gray-900 hover:text-blue-500 mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 text-[10px] mb-4">
                  {blog.description}
                </p>
                <Link href="/" className="text-[10px] underline font-bold">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
