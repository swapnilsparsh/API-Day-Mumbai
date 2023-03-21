import Image from "next/image";
import React from "react";

const Speaker = ({ reverse }) => {
  return (
    <>
      <div className={`speaker flex ${reverse ? "flex-row-reverse": ""} max-w-5xl m-auto my-10 max-md:flex-col`}>
        <div className="md:w-1/2 z-0 p-5">
          <Image
            className="w-full z-0 grey-img"
            src={"/ali-mustafa.jpg"}
            width={1000}
            height={1000}
            alt={"ali"}
          />
        </div>

        <div className="md:w-1/2 z-10 md:pl-14 p-5 flex justify-center flex-col">
          <h3 className="md:-ml-28 z-50">Ali Mustafa</h3>
          <br />
          <p className="uppercase font-semibold text-primary">
            Senior Developer Advocate
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            aspernatur eum voluptate nam atque laborum exercitationem
            consequuntur ipsa maxime placeat, eaque, magnam veritatis voluptas
            accusamus porro soluta esse ea id!
          </p>
        </div>
      </div>
    </>
  );
};

export default Speaker;
