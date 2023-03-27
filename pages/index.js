import Preloader from "@/components/Preloader";
import { useEffect, useState } from "react";
import CountDown from "@/components/CountDown";
import Sponsors from "@/section/Sponsors";
import Speakers from "@/section/Speakers";
import Hero from "@/section/Hero";
import Footer from "@/section/Footer";

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
      {/* <div className={`${preloader ? "" : "hidden"}`}>
        <Preloader />
      </div> */}
      <Hero/>

      <Speakers/>

      <div className="py-10"></div>

      <Sponsors/> 

      <div className="py-10"></div>
      <Footer/>
    </>
  );
}
