import Image from "next/image";
import React from "react";

const Speaker = ({ reverse }) => {
  return (
    <>
      <div
        className={`speaker blur-xl flex cursor-not-allowed pointer-events-none select-none ${
          reverse ? "flex-row-reverse items-center" : ""
        } max-w-5xl m-auto my-10 max-md:flex-col items-center`}
      >
        <div className="md:w-1/2 z-0 p-5">
          <Image
            className="w-full z-0 grey-img rounded-md"
            src={"/speaker/Ali-Mustafa.webp"}
            width={300}
            height={300}
            alt={"ali"}
          />
        </div>

        <div className="md:w-1/2 z-10 md:pl-14 p-5 flex justify-center flex-col">
          <h3 className="z-50">Ali Mustafa</h3>
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
