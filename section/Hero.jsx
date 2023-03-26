import React from "react";

const Hero = () => {
  return (
    <>
      <div className="h-screen bg-[url('/bg-stars.svg')]">
        <div className="flex flex-col justify-center items-center h-full">
        <p className="text-center md:text-xl pb-3">API CONFERENCE </p>
          <h1 className="gradient-text md:text-8xl montserrat text-4xl font-bold">
            API DAY 2023
          </h1>
          <p className="md:text-4xl text-lg py-10">April 30th, Mumbai, India</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
