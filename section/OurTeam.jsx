import Team from "@/components/Team";
import React from "react";

const OurTeam = () => {
  return (
    <>
      <div className="max-w-6xl m-auto mt-40">
        <h2 className="text-center">Our Team</h2>
        <div className="gradient-bg h-0.5 w-24 mt-3 mb-10 m-auto"></div>

        <div className="flex justify-around">
          <Team name={"Ali Mustafa"} role={"Organizer"} image={"/team/Ali-Mustafa.webp"} link={"https://twitter.com/ialimustufa"} />
          <Team name={"Fardin"} role={"Organizer"} image={"/team/Fardin.webp"} link={"https://twitter.com/etrnlnite"} />
        </div>
        <div className="flex flex-wrap justify-around">
          <Team name={"Dhiraj"} role={"Crew"} image={"/team/dhiraj.png"} link={"https://twitter.com/cdhiraj40"} />
          <Team name={"Kiran"} role={"Crew"} image={"/team/Kiran.webp"} link={"https://www.linkedin.com/in/kiran-lavhale"} />
          <Team name={"Khushal"} role={"Crew"} image={"/team/Kushal.webp"} link={"https://linktr.ee/khushal20?utm_source=linktree_admin_share"}/>
          <Team name={"Manas"} role={"Crew"} image={"/team/Manas.webp"} link={"http://manasnanivadekar.me/"} />
          <Team name={"Manish"} role={"Crew"} image={"/team/Manish.webp"} link={"https://www.linkedin.com/in/imanishbarnwal"} />
          <Team name={"Pranit"} role={"Crew"} image={"/team/Pranit.webp"} link={"http://pranitpatil.com/"} />
          <Team name={"Pratik"} role={"Crew"} image={"/team/Pratik.webp"} link={"https://www.linkedin.com/in/pratik-bhagat07"}/>
          <Team name={"Preethika"} role={"Crew"} image={"/team/Preethika.webp"} />
          <Team name={"Radhiya"} role={"Crew"} image={"/team/Radhaiya.webp"} link={"https://www.linkedin.com/in/radhaiya-kulkarni"}/>
          <Team name={"Rohan"} role={"Crew"} image={"/team/Rohan.webp"} link={"https://www.rohankulkarni.co/"}/>
          <Team name={"Saif"} role={"Crew"} image={"/team/saif.jpg"} link={"https://twitter.com/SaifSaifee_dev"}/>
          <Team name={"Swapnil"} role={"Crew"} image={"/team/Swapnil.webp"} link={"https://swapnilsparsh.github.io/"}/>
          <Team name={"Wilfred"} role={"Crew"} image={"/team/Wilfred.webp"} link={"https://twitter.com/WilfredAlmeida_"}/>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
