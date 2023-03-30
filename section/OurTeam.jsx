import Team from "@/components/Team";
import React from "react";

const OurTeam = () => {
  return (
    <>
      <div className="max-w-6xl m-auto mt-40">
        <h2 className="text-center">Our Team</h2>
        <div className="gradient-bg h-0.5 w-24 mt-3 mb-10 m-auto"></div>

        <div className="flex justify-center">
          <Team
            name={"Ali Mustafa"}
            role={"Organizer"}
            image={"/team/Ali-Mustafa.webp"}
          />
          <Team
            name={"Fardin"}
            role={"Organizer"}
            image={"/team/Fardin.webp"}
          />
        </div>
        <div className="flex flex-wrap justify-center">
          <Team name={"Kiran"} role={"Crew"} image={"/team/Kiran.webp"} />
          <Team name={"Kushal"} role={"Crew"} image={"/team/Kushal.webp"} />
          <Team name={"Manas"} role={"Crew"} image={"/team/Manas.webp"} />
          <Team name={"Manish"} role={"Crew"} image={"/team/Manish.webp"} />
          <Team name={"Pranit"} role={"Crew"} image={"/team/Pranit.webp"} />
          <Team name={"Pratik"} role={"Crew"} image={"/team/Pratik.webp"} />
          <Team
            name={"Preethika"}
            role={"Crew"}
            image={"/team/Preethika.webp"}
          />
          <Team name={"Radhiya"} role={"Crew"} image={"/team/Radhaiya.webp"} />
          <Team name={"Rohan"} role={"Crew"} image={"/team/Rohan.webp"} />
          <Team name={"Swapnil"} role={"Crew"} image={"/team/Swapnil.webp"} />
          <Team name={"Wilfred"} role={"Crew"} image={"/team/Wilfred.webp"} />
        </div>
      </div>
    </>
  );
};

export default OurTeam;
