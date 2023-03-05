import Preloader from "@/components/Preloader";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [preloader, setPreloader] = useState(true);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [email, setEmail] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 4000);
  }, []);


  const calculateTime = () => {
    const dday = 1680582600000;
    const currentTime = Date.now();

    if (dday - currentTime < 0) return;

    const time = new Date(dday - currentTime);

    let days = time.getDate();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTime();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className={`${preloader ? "fixed" : "hidden"}`}>
        <Preloader />
      </div>

      <div className="md:pt-20 pt-5 pb-10 flex max-w-7xl m-auto max-md:flex-col-reverse">
        <div className="md:w-4/6 md:p-16 p-5 ">
          <h2 className="font-bold md:text-6xl text-3xl">API SUMMIT 2023</h2>
          <h2 className=" text-3xl italic">MUMBAI</h2>

          <div className="countdowns flex mt-28 max-md:mt-10 max-md:justify-between">
            <div className="countdown text-center mr-5 flex flex-col flex-1 ">
              <span className="md:text-8xl text-3xl font-bold md:px-5 p-3 md:pb-3 rounded-lg  bg-primary">
              { days > 9 ? days : `0${days}` }
              </span>
              <p className="uppercase mt-2">Days</p>
            </div>
            <div className="countdown text-center mr-5 flex flex-col flex-1">
              <span className="md:text-8xl text-3xl font-bold md:px-5 p-3 md:pb-3 rounded-lg  bg-primary">
              { hours > 9 ? hours : `0${hours}` }
              </span>
              <p className="uppercase mt-2">Hours</p>
            </div>
            <div className="countdown text-center mr-5 flex flex-col flex-1">
              <span className="md:text-8xl text-3xl font-bold md:px-5 p-3 md:pb-3 rounded-lg  bg-primary">
                { minutes > 9 ? minutes : `0${minutes}` }
              </span>
              <p className="uppercase mt-2">Minutes</p>
            </div>
            <div className="countdown text-center flex flex-col flex-1">
              <span className="md:text-8xl text-3xl font-bold md:px-5 p-3 md:pb-3 rounded-lg  bg-primary">
              { seconds > 9 ? seconds : `0${seconds}` }
              </span>
              <p className="uppercase mt-2">Seconds</p>
            </div>
          </div>
        </div>
        <div className="md:w-2/6 w-2/3 m-auto max-md:p-5 ">
          <Image
            className="my-auto"
            src={"/logo.png"}
            width={400}
            height={400}
            alt={'logo'}
          />
        </div>

      </div>
        <form onSubmit={(e)=>handleSubmit(e)} className="max-w-2xl flex bg-white m-auto p-1 mx-3 md:m-auto rounded-full">
          <input required type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Email" className="w-3/5 outline-none ml-5 text-black"  />
          <button type="submit" className="w-2/5 px-8 py-2 bg-primary rounded-full">Subscribe</button>
        </form>
    </>
  );
}
