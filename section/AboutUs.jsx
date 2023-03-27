import Title from "@/components/Title";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="max-w-6xl m-auto">
        <div className="h-[70vh]   flex flex-col justify-center">
          <h4 className="my-5">Get To Know Us</h4>
          <h1 className="gradient-text md:text-8xl montserrat text-4xl font-medium">
            About Us
          </h1>
        </div>


        <Title
          title={"Welcome To \n The SUMMIT"}
          description={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae odio distinctio pariatur fugit magni, soluta maxime a. Porro ipsum voluptates voluptas ipsa nemo, consectetur tempore esse et optio consequatur sequi!"
          }
        />
            <Image src={'/meta.png'} className='m-auto' width={1000} height={700} /> 

        <div className="flex mt-10">
          <div className="w-2/5">
            <p className="text-primary">The Conference</p>
          </div>
          <div className="w-3/5">
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
        </div>
      </div>
    </>
  );
};

export default AboutUs;
