import Image from "next/image";

const Preloader = () => {
  return (
    <div className="bg-gray-700 w-screen h-screen flex justify-center items-center">
      <div className="flex">
        <div className="text-right flex flex-col justify-center">
          <h2 className="font-bold text-2xl">API SUMMIT 2023</h2>
          <h2 className="font-semibold text-2xl italic">MUMBAI</h2>
          <p>4 April 2023</p>
        </div>
        <div className="h-auto my-10 mx-5 w-1 bg-white"></div>

        <div className="words overflow-hidden  ">
          <ChangingText text={"build"} />
          <ChangingText text={"network"} />
          <ChangingText text={"grow"} />
          <div className="block text-rotate h-full text-2xl px-2 ">
            <div className="flex items-center h-full font-bold text-white ">
              <p className="p-3 bg-primary italic"> Lets Summit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;

const ChangingText = ({ text }) => {
  return (
    <div className="block text-rotate h-full text-2xl px-2 ">
      <div className="flex items-center h-full font-bold text-white ">
        <p className="p-3 bg-primary italic"> {text}</p>
      </div>
    </div>
  );
};
