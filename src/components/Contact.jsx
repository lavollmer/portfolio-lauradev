import React from "react";
import BackgroundOverlay from "../assets/backgroundimageoverlay.svg";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-row relative rounded-lg w-full bg-burnt-sienna bg-opacity-60 font-jost p-20 landing-container">
      <div
        className="absolute inset-0 bg-cover bg-center z-10"
        style={{ backgroundImage: `url(${BackgroundOverlay})` }}
      ></div>
      <div className="flex flex-col relative z-20 p-10 space-y-10">
        <div className="flex flex-row items-center justify-center">
          <h1 className="text-white text-6xl font-bold">
            Let's talk about your next project or job opportunity
          </h1>
        </div>
        <div className="flex flex-row items-center justify-center space-x-6">
          <p className="text-4xl">Send me a message on LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/lvollmer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="hover:animate-bounce bg-gradient-to-r to-redwood from-burnt-sienna rounded-full text-white cursor-pointer p-4 px-4 hover:from-redwood hover:to-burnt-sienna">
              <p className="font-bold text-2xl">Get in touch</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
