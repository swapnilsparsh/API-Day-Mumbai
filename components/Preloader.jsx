import Image from "next/image";

const Preloader = () => {
  return (
    <div className="bg-background fixed !z-50 w-screen h-screen flex justify-center items-center">
      <div className="flex p-1">
        <div className="text-right flex flex-col justify-center">
          <h2 className="font-bold text-xl md:text-2xl font-robo">
            API SUMMIT 2023
          </h2>
          <h2 className="font-semibold text-xl md:text-2xl italic font-robo">
            MUMBAI
          </h2>
          <p className=" font-robo">18 April 2023</p>
        </div>
        <div className="h-auto mx-5 w-1 bg-white"></div>

        <div className="words max-h-28 overflow-hidden  ">
          <div className="block text-rotate h-full max-md:text-xl text-2xl px-2 ">
            <div className="flex items-center h-full font-bold text-white ">
              <p className="p-3 bg-gradient-to-b from-primary to-red italic uppercase -skew-x-12 font-robo">
                {" "}
                Lets Summit !
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
    <div className="block text-rotate h-full max-md:text-xl text-2xl ">
      <div className="flex items-center h-full font-bold text-white ">
        <p className="p-2 font-robo italic uppercase -skew-x-12"> {text}</p>
      </div>
    </div>
  );
};
