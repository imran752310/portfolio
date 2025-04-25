import Image from "next/image";
import React from "react";
import SectionHeading from "../Helper/SectionHeading";

const Skills = () => {
  return (
    <div className="bg-blue-950 text-white py-28">
      <div className="container mx-auto px-4">

        <div className="text-center mb-8" 
        data-aos="fade-right"
        data-aos-anchor-placement="center-bottom"
       
        >
          <span className="text-sm text-blue-500"></span>
          <h1 className="font-bold text-[32px] md:text-[42px] mt-2"></h1>
          <p className="text-gray-300 text-sm md:text-base mt-4">
            
          </p>

          <SectionHeading title="My Skills" subTitle="Advance Tech" text="There are many variations of passages of Lorem Ipsum available, but the
            majority have <br /> suffered alteration in some form." textColor="text-gray-300" />
        </div>

        
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex justify-center items-center" 
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="100"
          >
            <Image src={"/html.png"} alt="HTML" width={40} height={40} />
          </div>
          <div className="flex justify-center items-center"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="100"
          >
            <Image src={"/css.png"} alt="CSS" width={50} height={50} />
          </div>
          <div className="flex justify-center items-center"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="100"
          >
            <Image src={"/tailwind.png"} alt="Tailwind CSS" width={50} height={50} />
          </div>
          <div className="flex justify-center items-center"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="100"
          >
            <Image src={"/js.png"} alt="JavaScript" width={50} height={50} />
          </div>
          <div className="flex justify-center items-center"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="100"
          >
            <Image src={"/ts.png"} alt="TypeScript" width={50} height={50} />
          </div>
          <div className="flex justify-center items-center"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="100"
          >
            <Image src={"/react.png"} alt="React" width={50} height={50} />
          </div>
          <div className="flex justify-center items-center"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="100"
          >
            <Image src={"/next.png"} alt="Next.js" width={50} height={50} />
          </div>
          <div className="flex justify-center items-center"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="100"
          >
            <Image src={"/postges.png"} alt="PostgreSQL" width={50} height={50} />
          </div>
          <div className="flex justify-center items-center"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="100">
            <Image src={"/mongodb.png"} alt="MongoDB" width={50} height={50} />
          </div>
          <div className="flex justify-center items-center"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="100">
            <Image src={"/docker.webp"} alt="Docker" width={50} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
