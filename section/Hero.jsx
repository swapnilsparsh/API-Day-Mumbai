import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="h-[90vh] bg-[url('/bg-stars.svg')]">
        {/* <div className="h-screen p-5 md:p-10"> */}
        <div
          data-aos="fade-up"
          className="flex flex-col justify-center h-full max-w-6xl p-5 m-auto text-left md:p-10"
        >
          <p className="pb-5 italic font-semibold  md:text-3xl montserrat">
            Lets Summit
          </p>
          <h1 className="text-6xl gradient-text md:text-8xl ">API DAY 2023</h1>
          <p className="py-10 text-lg md:text-3xl">Mumbai, India</p>
          <Link
            href={
              "https://www.eventbrite.com/e/api-day-mumbai-2k23-tickets-618376058437"
            }
          >
            <div className="px-8 py-4 text-white transition-colors duration-300 bg-gray-600 rounded-md hover:bg-primary w-fit">
              Get Tickets
            </div>
          </Link>
        </div>
        <img
          src="/pattern-hills.svg"
          className="absolute bottom-0 flex-1 w-full -z-10 max-md:w-"
          alt=""
        />

        {/* </div> */}
      </div>
    </>
  );
};

export default Hero;
