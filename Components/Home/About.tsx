import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'

const About = () => {
  return (
    <div className='w-[85%] mx-auto border-b border-b-gray-300 relative'>
      {/* Background Circle */}
      <span data-aos="slide-left"  data-aos-delay="100" className='w-20 h-20 bg-blue-600 blur-3xl -z-20 rounded-full absolute right-0 bottom-auto md:w-40 md:h-40'></span>
      <div data-aos="slide-right" className='container m-auto my-20  px-4 md:px-8 xl:my-10'>
        <div className='flex flex-col md:flex-row justify-between items-center md:items-start'>
          {/* Main Content */}
          <div className='w-full md:w-2/3 mb-8 md:mb-0'>
            <span className='text-blue-700 text-sm font-bold block'>ABOUT ME</span>
            <h1 className='text-[32px] md:text-[42px] font-bold  '>
              Better design,<br /> better experience
            </h1>
            <p className='text-gray-600 text-sm md:text-base leading-normal mt-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ligula, malesuada vel convallis in,<br /> tincidunt ut mi. Vestibulum sit amet.
            </p>
          </div>

          {/* Contact Section */}
          <div className='w-full md:w-1/3'>
            <h3 className='font-bold text-lg md:text-xl'>Contact With Me</h3>
            <p className='text-gray-600 text-sm md:text-base mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ligula, malesuada vel convallis in, tincidunt ut mi. Vestibulum sit amet urna placerat, semper tempor.
            </p>
            <div className='flex gap-4 mt-5 text-gray-500'>
              <FaFacebook className='hover:text-blue-600 transition' />
              <FaTwitter className='hover:text-blue-600 transition' />
              <FaYoutube className='hover:text-blue-600 transition' />
              <FaLinkedinIn className='hover:text-blue-600 transition' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
