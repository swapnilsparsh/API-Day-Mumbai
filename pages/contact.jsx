import Navbar from "@/components/Navbar";
import Footer from "@/section/Footer";
import React, { useRef } from "react";

const Contact = () => {
  return (
    <>
    <Navbar/>
      <div className="max-w-6xl m-auto">
        <div className="h-screen flex flex-col p-5 justify-center">
          <h4 className="my-5">Get In Touch</h4>
          <h1 className="gradient-text md:text-8xl montserrat text-5xl font-medium">
            Contact Us
          </h1>
        </div>

        <div className=" mb-20">
          <div className="flex md:flex-row flex-col">
            <div className="form md:w-1/2 px-10 ">
              <form>
                <div className="flex w-full justify-between">
                  <div className="w-2/5">
                    <p className="my-2">First Name</p>
                    <input
                      type="text"
                      className="border-2 border-white w-full bg-background p-1 outline-none"
                    />
                  </div>
                  <div className="w-2/5">
                    <p className="my-2">Last Name</p>
                    <input
                      type="text"
                      className="border-2 border-white w-full bg-background p-1 outline-none"
                    />
                  </div>
                </div>
                <div className="my-5">
                  <p className="my-2">Email</p>
                  <input
                    type="text"
                    className="border-2 w-full border-white bg-background p-1 outline-none"
                  />
                </div>
                <div className="my-5">
                  <p className="my-2">Subject</p>
                  <input
                    type="text"
                    className="border-2 w-full border-white bg-background p-1 outline-none"
                  />
                </div>
                <div className="my-5">
                  <p className="my-2">Message</p>
                  <textarea
                    className="border-2 w-full border-white bg-background p-1 outline-none"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>

                <button className="px-8 py-2 uppercase bg-gray-600 transition-colors duration-300 hover:bg-primary w-fit">
            Send Message
          </button>

              </form>
            </div>
            <div className="md:w-1/2 p-10 md:px-20">

              <p className="uppercase my-2" >Email Address</p>
              <p>contact@apidaymumbai.com</p>


            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
