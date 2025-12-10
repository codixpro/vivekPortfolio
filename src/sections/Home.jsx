import React from "react";



const Home = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center h-screen text-white overflow-hidden"
    >

      <div className="z-10 flex flex-col items-center px-4 text-center">
        <p className="text-sm font-medium text-orange-600">PRODUCT MANAGEMENT . UX STRATEGY</p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Hi, I'm <span className="text-orange-600">Vivek.</span>
        </h1>
        <p className=" text-md  mt-2 text-gray-200 ">
          I turn research and requirements into clear PRDs, aligned roadmaps, and iterative product launches.
        </p>

        <div className="mt-6 flex gap-5">
          <button className="bg-orange-600 text-white px-6 py-2.5 rounded-full hover:border-2 hover:bg-transparent hover:border-orange-600 hover:text-orange-600 transition-all duration-200">
            View Portfolio
          </button>

          <button className="bg-gray-200 text-orange-600 px-6 py-2.5 rounded-full  hover:border-2 hover:bg-transparent hover:border-orange-600 hover:text-orange-600 transition-all duration-200">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
