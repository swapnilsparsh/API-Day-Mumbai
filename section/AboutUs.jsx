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
            <p className="text-primary pb-10">The Conference</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsam
              sint debitis officiis itaque vero quo est, placeat repellat
              incidunt necessitatibus vitae illo ex nisi corporis laborum dicta
              mollitia assumenda.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsam
              sint debitis officiis itaque vero quo est, placeat repellat
              incidunt necessitatibus vitae illo ex nisi corporis laborum dicta
              mollitia assumenda.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsam
              sint debitis officiis itaque vero quo est, placeat repellat
              incidunt necessitatibus vitae illo ex nisi corporis laborum dicta
              mollitia assumenda.
            </p>
          </div>
          <div className="md:w-2/4">
        <Image src={"/meta.png"} className="m-auto " width={1000} height={700} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
