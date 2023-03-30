import Preloader from "@/components/Preloader";
import { useEffect, useState } from "react";
import CountDown from "@/components/CountDown";
import Sponsors from "@/section/Sponsors";
import Speakers from "@/section/Speakers"
import Community from "@/section/Community";
import Hero from "@/section/Hero";
import Footer from "@/section/Footer";
import Navbar from "@/components/Navbar";

export default function Home({ splash, setSplash }) {
  const [preloader, setPreloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
      setSplash(true);
    }, 3900);
  }, []);

  return (
    <>
      {!splash && (
        <div className={`${preloader ? "" : "hidden"}`}>
          <Preloader />
        </div>
      )}

      <Navbar />

      <Hero />

      <Speakers />

      <div className="py-10"></div>

      <Sponsors />

      <div className="py-10"></div>

      <Community />

      <div className="py-10"></div>
      <Footer />
    </>
  );
}
