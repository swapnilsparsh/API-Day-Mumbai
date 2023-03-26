import Team from "@/components/Team";
import React from "react";

const OurTeam = () => {
  return (
    <>
      <div className="">

        <h2 className="text-center">Our Team</h2>
        <div className="gradient-bg h-0.5 w-24 mt-3 mb-10 m-auto"></div>



        <div className="flex flex-wrap justify-center">
          <Team />
          <Team />
          <Team />
          <Team />
          <Team />
        </div>
      </div>
    </>
  );
};

export default OurTeam;
