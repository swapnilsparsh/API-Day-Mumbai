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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    const url =
      "https://postmanemailcollector-production.up.railway.app/submit";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response.status === 200) {
        const data = await response.json();
      } else {
      }
    } catch (err) {
      console.log("something went wrong");
    }
  };

  return (
    <>
      <div className={`${preloader ? "" : "hidden"}`}>
        <Preloader />
      </div>

      <Script src="" />

      <div className="h-screen bg-[url('/bg-stars.svg')]">
        <div className="text-center pt-40">
          <h1 className="gradient-text md:text-8xl montserrat text-4xl font-bold">
            API DAY 2023
          </h1>
          <p className="md:text-4xl text-lg py-10">April 15th, Mumbai, India</p>
        </div>

        <p className="text-center md:text-xl pb-3">Website live in </p>
        <CountDown />

        <form
          onSubmit={(e) => handleSubmit(e)}
          className="max-w-2xl z-20 flex bg-white m-auto p-1 mx-3 md:m-auto rounded-full "
        >
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-3/5 outline-none p-2 ml-5 text-black"
          />
          <button
            type="submit"
            className="w-2/5 px-8 py-2 gradient-bg rounded-full "
          >
            Subscribe
          </button>
        </form>

        <img src="/pattern-hills.svg" className="absolute -z-10 bottom-0 max-md:w- flex-1 w-full" alt="" />

      </div>

      {/* <div className="h-screen"></div> */}


    </>
  );
}
