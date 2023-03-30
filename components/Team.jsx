import Image from "next/image";
import React from "react";

const Team = ({ image, name, role, desc }) => {
  return (
    <>
      <div className="flex flex-col items-center text-center md:w-1/4  my-10">
        <Image
          className="rounded-full grey-img"
          src={image}
          width={170}
          height={170}
          alt={"image"}
        />

        <h5 className="mt-8">{name}</h5>
        <p className="text-gray-500 ">{role}</p>
      </div>
    </>
  );
};

export default Team;
