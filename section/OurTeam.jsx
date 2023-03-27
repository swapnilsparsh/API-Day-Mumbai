import Team from "@/components/Team";
import React from "react";

const OurTeam = () => {
  return (
    <>
      <div className="max-w-6xl m-auto mt-40">
        <h2 className="text-center">Our Team</h2>
        <div className="gradient-bg h-0.5 w-24 mt-3 mb-10 m-auto"></div>

        <div className="flex justify-center">
          <Team name={"Ali Mustafa"} role={'Organizer'} />
          <Team name={"Fardin"} role={'Organizer'} />
        </div>
        <div className="flex flex-wrap justify-center">
          <Team name={'Kiran'} role={'Crew'} />
          <Team name={'Kushal'} role={'Crew'} />
          <Team name={'Manas'} role={'Crew'} />
          <Team name={'Manish'} role={'Crew'} />
          <Team name={'Pranit'} role={'Crew'} />
          <Team name={'Pratik'} role={'Crew'} />
          <Team name={'Preetika'} role={'Crew'} />
          <Team name={'Radhiya'} role={'Crew'} />
          <Team name={'Rohan'} role={'Crew'} />
          <Team name={'Swapnil'} role={'Crew'} />
          <Team name={'Wilfred'} role={'Crew'} />

        </div>
      </div>
    </>
  );
};

export default OurTeam;
