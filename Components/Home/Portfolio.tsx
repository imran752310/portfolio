import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SectionHeading from '../Helper/SectionHeading';

const Portfolio = () => {
  return (
    <div className="py-20 bg-[#F8F9FF]">
      <SectionHeading title='Recent Works' subTitle='Creative Portfolios' text='There are many variations of passages of Lorem Ipsum available, but the
          majority have  suffered alteration in some form.' textColor='' />

      <div className="flex justify-center gap-4 mb-10 mt-5">
      <Link
           
            href="/All"
            className="px-4 text-sm items-center bg-blue-500 hover:text-white rounded-full p-2"
          >All</Link>
        {['Web', 'App', 'Graphic'].map((category, index) => (
          <Link
            key={index}
            href="/"
            className="px-4 text-sm text-gray-600 hover:bg-blue-500 hover:text-white hover:rounded-full p-2"
          >
            {category}
          </Link>
        ))}
      </div>

      <div className="w-[85%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'Web Development',
            image: '/portfolio-01.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligulavel in.',
          },
          {
            title: 'Visual Design',
            image: '/portfolio-02.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligulavel in.',
          },
          {
            title: 'Canva Designer',
            image: '/portfolio-03.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligulavel in.',
          },
        ].map((project, index) => (
          <div data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
             key={index} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl text-white">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-md font-bold text-gray-900 hover:text-blue-300 mb-2">{project.title}</h2>
              <p className="text-gray-600 text-xs mb-4">{project.description}</p>
              <Link href="/" className="text-xs underline font-bold text-black">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
