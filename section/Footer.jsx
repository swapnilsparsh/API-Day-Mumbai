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
              A gathering of professionals and tech enthusiasts on 6th of May. <br />
              Build | Network | Grow
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
            <a
              target="_blank"
              href={
                "https://drive.google.com/file/d/1q2V10x5HZhFvSlt9M9KXmD7DIZDtr2sA/view"
              }
            >
              <p className="hover:text-primary my-2">Code Of Conduct</p>
            </a>
          </div>
          <div className="about md:w-1/4 px-5">
            <p className="uppercase text-gray-500 my-5">Connect with us</p>
            <div className="flex gap-2 justify-center">
              <a
                href="https://www.instagram.com/apiday.mumbai/"
                target="_blank"
              >
                <Image
                  className="white-img"
                  src={"/icon/instagram.svg"}
                  width={40}
                  height={40}
                  alt={"Instagram"}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/api-day-mumbai/"
                target="_blank"
              >
                <Image
                  className="white-img"
                  src={"/icon/linkedin.svg"}
                  width={40}
                  height={40}
                  alt={"Linkedin"}
                />
              </a>
              <a href="https://twitter.com/APIDayMumbai" target="_blank">
                <Image
                  className="white-img"
                  src={"/icon/twitter.svg"}
                  width={40}
                  height={40}
                  alt={"Twitter"}
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
