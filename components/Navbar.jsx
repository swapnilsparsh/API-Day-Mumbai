import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="w-full p-5 z-50">
        <div className="flex md:w-3/4 m-auto justify-center items-center">
          {/* <div className="logo">
            <Link href={"/"}>
              <h4>API DAY 2023</h4>
            </Link>
          </div> */}
          <div
            className={`links flex md:flex-row flex-col md:relative right-0  bg-background bg-opacity-90 max-md:pt-32 gap-5 transition-all duration-500 ${
              toggle
                ? "flex-col w-2/3 px-5 right-0 translate-x-0 items-end animate-fade fixed top-0 h-screen  "
                : "items-center max-md:translate-x-full max-md:fixed top-0"
            }`}
          >
            {toggle && (
              <div
                onClick={() => setToggle(false)}
                className="absolute top-5 right-10 text-2xl md:hidden"
              >
                X
              </div>
            )}

            <Link href={"/"}>
              <p className="md:mx-5 my-1 cursor-pointer hover:text-primary text-center">
                Home
              </p>
            </Link>
            <Link href={"/about"}>
              <p className="md:mx-5 my-1 cursor-pointer hover:text-primary text-center">
                About Us
              </p>
            </Link>
            <Link href={"/contact"}>
              <p className="md:mx-5 my-1 cursor-pointer hover:text-primary text-center">
                Contact Us
              </p>
            </Link>
              <p className="md:mx-5 my-1 bg-gray-600 px-5 py-2 transition-all duration-500 hover:bg-primary text-center rounded-md">
                Get Tickets
              </p>
          </div>
          <div
            className="hamburger md:hidden w-full flex flex-col items-end mr-5"
            onClick={() => setToggle(!toggle)}
          >
            <div className="line w-5 mb-1 rounded bg-white h-0.5"></div>
            <div className="line w-5 mb-1 rounded bg-white h-0.5"></div>
            <div className="line w-5 mb-1 rounded bg-white h-0.5"></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
