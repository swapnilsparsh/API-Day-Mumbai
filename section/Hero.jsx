const Hero = () => {
  return (
    <>
      <div className="h-screen p-5">
        <div
          data-aos="fade-up"
          className="flex flex-col justify-center text-left h-full max-w-6xl m-auto "
        >
          <p className=" md:text-3xl pb-5  italic font-semibold">Lets Summit</p>
          <h1 className="gradient-text md:text-8xl text-6xl ">
            API DAY 2023
          </h1>
          <p className="md:text-3xl text-lg py-10">April 30th, Mumbai, India</p>
          <button className="px-8 py-4 bg-gray-600 transition-colors duration-300 hover:bg-primary w-fit">
            Get Tickets
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
