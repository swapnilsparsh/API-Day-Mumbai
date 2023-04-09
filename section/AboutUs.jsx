import Title from "@/components/Title";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="max-w-6xl m-auto p-5">
        <div className=" flex h-[60vh] flex-col justify-center">
          <h4 className="my-5">Get To </h4>
          <h1 className="gradient-text md:text-8xl montserrat text-7xl font-medium">
            Know Us
          </h1>
        </div>

        <div className="-m-5">
          <Title
            title={"Welcome To \n The SUMMIT"}
            description={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae odio distinctio pariatur fugit magni, soluta maxime a. Porro ipsum voluptates voluptas ipsa nemo, consectetur tempore esse et optio consequatur sequi!"
            }
          />
        </div>
        <br />

        <div className="flex md:flex-row flex-col gap-5 mt-20">
          <div className="md:w-2/4">
            <p className="text-primary pb-10">The Summit</p>
            <p>
              A gathering of professionals and tech enthusiasts will be held on
              the 30th of April.
            </p>
            <br />
            <p>
              Mainly focusing on the latest trends in API technology as well its
              integration with other well-known technology.
            </p>
            <br />
            <p>
              It will also be responsible for creating an environment where all
              the like-minded personals come together and discuss various
              topics, intern creating an opportunity for growth and networking.
            </p>
          </div>
          <div className="md:w-2/4">
            <Image
              src={"/meta.png"}
              className="m-auto "
              width={1000}
              height={700}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
