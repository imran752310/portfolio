import React from "react";

const Contact = () => {
  return (
    <div className=" py-20">
      <div className="text-center ">
        <span className="text-sm text-blue-500">Contact With Me</span>
        <h1 className="font-bold text-[42px]">Have an Project in Mind?</h1>
        <p className="text-gray-400 text-sm">
          There are many variations of passages of Lorem Ipsum available but the
          majority have <br /> suffered alteration in some form.
        </p>
      </div>

      <div className="container m-auto flex justify-evenly gap-6 my-10">
        <form>
          <div className="flex justify-between gap-5">
            <div className="w-1/2">
              <div className="">
                <input
                  className="w-[100%] bg-gray-100 py-2 px-4 text-sm my-2 focus:border-b-blue-600"
                  type="text"
                  placeholder="Enter your Name"
                />
              </div>
              <div>
                <input 
                className="w-[100%] bg-gray-100 py-2 px-4 text-sm my-2"
                type="text" placeholder="Enter your Email" />
              </div>
            </div>

            <div className="w-1/2">
              <div>
                <input 
                 className="w-[100%] bg-gray-100 py-2 px-4 text-sm my-2"
                type="text" placeholder="Enter your Name" />
              </div>
              <div>
                <input
                 className="w-[100%] bg-gray-100 py-2 px-4 text-sm my-2"
                type="text" placeholder="Enter your Email" />
              </div>
            </div>
          </div>

          <textarea
           className="w-[100%] bg-gray-100 text-gray-400 py-2 px-4 text-sm my-2 "
            name=""
            id=""
            cols={100}
            defaultValue={"Tell me About your Project"}
            rows={4}
          />
          <div className="text-center">
            <button className='bg-blue-500 px-6 py-2 rounded-full text-white text-sm m-2'> Contact Us</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
