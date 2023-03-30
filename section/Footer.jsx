import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="md:p-20 p-10 bg-zinc-900">
        <div className="flex max-md:flex-col max-md:gap-10 m-auto justify-center text-center">
          <div className="about md:w-1/4 px-5">
            <p className="uppercase text-gray-500 my-5">About Event</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              obcaecati quibusdam nam quidem totam quis?
            </p>
          </div>
          <div className="about md:w-1/4 px-5">
            <p className="uppercase text-gray-500 my-5">Quick links</p>
            <Link href={"/about"}>
              <p className="hover:text-primary">About Us</p>
            </Link>
            <Link href={"/contact"}>
              <p className="hover:text-primary my-2">Contact Us</p>
            </Link>
          </div>
          <div className="about md:w-1/4 px-5">
            <p className="uppercase text-gray-500 my-5">Connect with us</p>
            <div className="flex gap-2 justify-center">
              {/* <a href="#">
                <Image
                  className="white-img"
                  src={"/icon/instagram.png"}
                  width={40}
                  height={40}
                  alt={"instagram"}
                />
              </a> */}
              <a href="#">
                <Image
                  className="white-img"
                  src={"/icon/linkedin.png"}
                  width={40}
                  height={40}
                  alt={"instagram"}
                />
              </a>
              <a href="#">
                <Image
                  className="white-img"
                  src={"/icon/twitter.png"}
                  width={40}
                  height={40}
                  alt={"instagram"}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
