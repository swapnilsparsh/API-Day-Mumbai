import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="z-50 w-full p-5">
        <div className="flex items-center justify-center m-auto md:w-3/4">
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
                className="absolute text-2xl top-5 right-10 md:hidden"
              >
                X
              </div>
            )}

            <Link href={"/"}>
              <p className="my-1 text-center cursor-pointer md:mx-5 hover:text-primary">
                Home
              </p>
            </Link>
            <Link href={"/about"}>
              <p className="my-1 text-center cursor-pointer md:mx-5 hover:text-primary">
                About Us
              </p>
            </Link>
            <Link href={"/contact"}>
              <p className="my-1 text-center cursor-pointer md:mx-5 hover:text-primary">
                Contact Us
              </p>
            </Link>
            <p className="px-5 py-2 my-1 text-center transition-all duration-500 bg-gray-600 rounded-md cursor-not-allowed md:mx-5 hover:bg-primary">
              Get Tickets
            </p>
          </div>
          <div
            className="flex flex-col items-end w-full mr-5 hamburger md:hidden"
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
