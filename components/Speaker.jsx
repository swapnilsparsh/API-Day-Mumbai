import Image from "next/image";
import React from "react";

const Speaker = ({ reverse, name, designetion, desc, image }) => {
  return (
    <>
      <div
        className={`speaker flex ${
          reverse ? "flex-row-reverse items-center" : ""
        } max-w-5xl m-auto my-10 max-md:flex-col items-center`}
      >
        <div className="md:w-1/2 z-0 p-5">
          <Image
            className="w-full z-0 grey-img rounded-md"
            src={image}
            width={300}
            height={300}
            alt={"ali"}
          />
        </div>

        <div className="md:w-1/2 z-10 md:pl-14 p-5 flex justify-center flex-col">
          <h3 className="z-50">{name}</h3>
          <br />
          <p className="uppercase font-semibold text-primary">
            {designetion}
          </p>
          <br />
          <p>
            {desc}
          </p>
        </div>
      </div>
    </>
  );
};

export default Speaker;
