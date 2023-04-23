import Image from "next/image";
import React from "react";

const Community = ({ image, link, alt }) => {
  return (
    <>
      <div className="flex flex-wrap gap-5 m-auto p-6 justify-around">
        <a href={link} target="_blank">
          <Image
            className="grey-img max-md:p-5 md:mb-10"
            src={image}
            width={250}
            height={250}
            alt={alt}
          />
        </a>
      </div>
    </>
  );
};

export default Community;
