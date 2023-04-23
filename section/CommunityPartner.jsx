import React from "react";
import Community from "@/components/Community";

const CommunityPartner = () => {
  return (
    <>
      <div className="max-w-6xl m-auto mt-40 p-5">
        <h2 className="">Community Partner</h2>
        <div className="gradient-bg h-0.5 w-1/2 mt-3 mb-10"></div>

        <div className="flex flex-wrap justify-around">
          <Community
            image={"/community/cerritusCoders.jpg"}
            link={"https://twitter.com/CerritusCoders"}
            alt={"Cerritus Coders"}
          />
          <Community
            image={"/community/cncfThane.jpg"}
            link={"https://twitter.com/cncfthane"}
            alt={"CNCF Thane"}
          />
          <Community
            image={"/community/elastic.jpg"}
            link={"https://twitter.com/ElasticMumbai"}
            alt={"Elastic Mumbai"}
          />
          <Community
            image={"/community/flutterMumbai.jpg"}
            link={"https://twitter.com/MumbaiFlutter"}
            alt={"Mumbai Flutter"}
          />
          <Community
            image={"/community/gdgCloudMumbai.jpg"}
            link={"https://twitter.com/GDGCloudMumbai"}
            alt={"GDG Cloud Mumbai"}
          />
          <Community
            image={"/community/gdgMad.jpg"}
            link={"https://twitter.com/gdgmad"}
            alt={"GDG MAD"}
          />
          <Community
            image={"/community/hackTheLeague.jpg"}
            link={"https://twitter.com/HackTheLeague"}
            alt={"Hack The League"}
          />
          <Community
            image={"/community/madeInMumbai.jpg"}
            link={"https://twitter.com/madeinmumbai_"}
            alt={"Made In Mumbai"}
          />
          <Community
            image={"/community/otc.jpg"}
            link={"https://twitter.com/OurTechComm"}
            alt={"Our Tech Commmunity"}
          />
          <Community
            image={"/community/tfugMumbai.jpg"}
            link={"https://twitter.com/tfugmumbai"}
            alt={"TFUG Mumbai"}
          />
          <Community
            image={"/community/thmMumbai.jpg"}
            link={"https://twitter.com/THMMumbai"}
            alt={"THM Mumbai"}
          />
          <Community
            image={"/community/weBuildPune.jpg"}
            link={"https://twitter.com/webuildpune"}
            alt={"We Build Pune"}
          />
        </div>
      </div>
    </>
  );
};

export default CommunityPartner;
