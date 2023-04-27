import Preloader from "@/components/Preloader";
import { useEffect, useState } from "react";
import CountDown from "@/components/CountDown";
import Sponsors from "@/section/Sponsors";
import Speakers from "@/section/Speakers"
import Community from "@/section/Community";
import Hero from "@/section/Hero";
import Footer from "@/section/Footer";
import Navbar from "@/components/Navbar";
import Programs from "@/section/Programs";

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

      {splash && 
      <>


      <Navbar />

      <Hero />

      <div className="py-10"></div>
      <Speakers />

      <div className="py-10"></div>

      <Sponsors />

      <div className="py-10"></div>
      <Programs/>
      <div className="py-10"></div>

      <Community />

      <div className="py-10"></div>
      <Footer />
      </>}
    </>
  );
}
