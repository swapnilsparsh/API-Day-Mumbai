import Image from "next/image";
import React from "react";

const Team = ({ image, name, role, link }) => {
  return (
    <>
      <div className="flex flex-col items-center my-10 text-center md:w-1/4">
        <a href={link} target="_blank">
          <Image
            className="rounded-full grey-img"
            src={image}
            width={170}
            height={170}
            alt={"image"}
          />
          <h5 className="mt-8">{name}</h5>
          <p className="text-gray-500 ">{role}</p>
        </a>
      </div>
    </>
  );
};

export default Team;
