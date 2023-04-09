import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="p-10 md:p-20 bg-zinc-900">
        <div className="flex justify-center m-auto text-center max-md:flex-col max-md:gap-10">
          <div className="px-5 about md:w-1/4">
            <p className="my-5 text-gray-500 uppercase">About Event</p>
            <p>
              A gathering of professionals and tech enthusiasts on 6th of May. <br />
              Build | Network | Grow
            </p>
          </div>
          <div className="px-5 about md:w-1/4">
            <p className="my-5 text-gray-500 uppercase">Quick links</p>
            <Link href={"/about"}>
              <p className="hover:text-primary">About Us</p>
            </Link>
            <Link href={"/contact"}>
              <p className="my-2 hover:text-primary">Contact Us</p>
            </Link>
            <a
              target="_blank"
              href={
                "https://drive.google.com/file/d/1q2V10x5HZhFvSlt9M9KXmD7DIZDtr2sA/view"
              }
            >
              <p className="my-2 hover:text-primary">Code Of Conduct</p>
            </a>
          </div>
          <div className="px-5 about md:w-1/4">
            <p className="my-5 text-gray-500 uppercase">Connect with us</p>
            <div className="flex justify-center gap-2">
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
              {/* <a
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
              </a> */}
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
