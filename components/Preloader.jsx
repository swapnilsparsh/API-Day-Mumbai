import Image from "next/image";

const Preloader = () => {
  return (
    <div className="bg-secondary w-screen h-screen flex justify-center items-center">
      <div className="flex p-1">
        <div className="text-right flex flex-col justify-center">
          <h2 className="font-bold text-xl md:text-2xl">API SUMMIT 2023</h2>
          <h2 className="font-semibold text-xl md:text-2xl italic">MUMBAI</h2>
          <p>18 April 2023</p>
        </div>
        <div className="h-auto mx-5 w-1 bg-white"></div>

        <div className="words max-h-28 overflow-hidden  ">
          <div className="block text-rotate h-full max-md:text-xl text-2xl px-2 ">
            <div className="flex items-center h-full font-bold text-white ">
              <p className="p-3 bg-primary italic uppercase -skew-x-12">
                {" "}
                Lets Summit
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
        <p className="p-2  italic uppercase -skew-x-12"> {text}</p>
      </div>
    </div>
  );
};
