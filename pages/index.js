import Preloader from "@/components/Preloader";
import Image from "next/image";
import { useEffect, useState } from "react";
import FlipCountdown from "@rumess/react-flip-countdown";

export default function Home() {
  const [preloader, setPreloader] = useState(true);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 3900);
  }, []);

  const calculateTime = () => {
    const dday = 1681792200000;
    const currentTime = Date.now();

    if (dday - currentTime < 0) return;

    const time = new Date(dday - currentTime);

    let days = (dday - currentTime) / (1000 * 60 * 60 * 24);

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    setDays(Math.floor(days));
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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

      <div className="md:pt-20 pt-5 pb-10 flex max-w-8xl m-auto max-md:flex-col-reverse justify-center">
        <div className="md:w-4/6 md:p-16 p-5 ">
          <h2 className=" md:text-8xl text-3xl text-center font-robo font-normal bg-gradient-to-r from-red to-primary text-transparent bg-clip-text">API Summit 2023</h2>
          <h2 className="md:text-4xl text-3xl text-center font-robo font-normal pt-20">April 18th, Mumbai, India</h2>

          <div className="countdowns flex mt-28 max-md:mt-10 max-md:justify-center justify-center">
            <div className="countdown text-center mr-5 flex flex-col">
              <span className="md:text-8xl w-full text-3xl font-bold md:px-5 p-3 md:pb-3 rounded-lg bg-gradient-to-b from-primary to-red">
                {days > 9 ? days : `0${days}`}
              </span>
              <p className="uppercase mt-2 font-robo">Days</p>
            </div>
            <div className="countdown text-center mr-5 flex flex-col ">
              <span className="md:text-8xl w-full text-3xl font-bold md:px-5 p-3 md:pb-3 rounded-lg bg-gradient-to-b from-primary to-red">
                {hours > 9 ? hours : `0${hours}`}
              </span>
              <p className="uppercase mt-2 font-robo">Hours</p>
            </div>
            <div className="countdown text-center mr-5 flex flex-col">
              <span className="md:text-8xl w-full text-3xl font-bold md:px-5 p-3 md:pb-3 rounded-lg bg-gradient-to-b from-primary to-red">
                {minutes > 9 ? minutes : `0${minutes}`}
              </span>
              <p className="uppercase mt-2 font-robo">Minutes</p>
            </div>
            <div className="countdown text-center flex flex-col">
              <span className="md:text-8xl w-full text-3xl font-bold md:px-5 p-3 md:pb-3 rounded-lg bg-gradient-to-b from-primary to-red">
                {seconds > 9 ? seconds : `0${seconds}`}
              </span>
              <p className="uppercase mt-2 font-robo">Seconds</p>
            </div>
          </div>
        </div>
      </div>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="max-w-2xl flex bg-white m-auto p-1 mx-3 md:m-auto rounded-full"
      >
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-3/5 outline-none ml-5 text-black"
        />
        <button
          type="submit"
          className="w-3/5 px-3 py-2 bg-gradient-to-b from-red to-primary rounded-full font-robo"
        >
          Subscribe
        </button>
      </form>
    </>
  );
}
