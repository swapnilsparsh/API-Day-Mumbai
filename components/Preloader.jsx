import Image from "next/image";

const Preloader = () => {
  return (
    <div className="bg-background fixed !z-50 w-screen h-screen flex justify-center items-center">
      <div className="flex p-1">
        <div className="flex flex-col justify-center text-right">
          <h2 className="text-xl font-bold md:text-2xl font-robo">
            API DAY 2023
          </h2>
          <h2 className="text-xl italic font-semibold md:text-2xl font-robo">
            MUMBAI
          </h2>
          <p className=" font-robo">16 June 2023</p>
        </div>
        <div className="w-1 h-auto mx-5 bg-white"></div>

        <div className="overflow-hidden words max-h-28 ">
          <div className="block h-full px-2 text-2xl text-rotate max-md:text-xl ">
            <div className="flex items-center h-full font-bold text-white ">
              <p className="p-3 italic uppercase -skew-x-12 bg-primary font-robo">
                {" "}
                Lets Summit!
              </p>
            </div>
          </div>
          <ChangingText text={"Grow"} />
          <ChangingText text={"Network"} />
          <ChangingText text={"Build"} />
        </div>
      </div>
    </div>
  );
};

export default Preloader;

const ChangingText = ({ text }) => {
  return (
    <div className="block h-full text-2xl text-rotate max-md:text-xl ">
      <div className="flex items-center h-full font-bold text-white ">
        <p className="p-2 italic uppercase -skew-x-12 font-robo"> {text}</p>
      </div>
    </div>
  );
};
