import Preloader from "@/components/Preloader";
import Image from "next/image";
import { useEffect, useState } from "react";
import FlipCountdown from "@rumess/react-flip-countdown";
import Script from "next/script";
import CountDown from "@/components/CountDown";

export default function Home() {
  const [preloader, setPreloader] = useState(true);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 3900);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <>
      <div className={`${preloader ? "" : "hidden"}`}>
        <Preloader />
      </div>

      <Script src="" />

      <div className="h-screen half-bg">
        <div className="text-center pt-40">
          <h1 className="gradient-text md:text-8xl text-4xl font-bold">
            API Day 2023
          </h1>
          <p className="md:text-4xl text-lg py-10">April 18th, Mumbai, India</p>
        </div>

        <CountDown />

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
            className="w-2/5 px-8 py-2 gradient-bg  rounded-full"
          >
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
}
