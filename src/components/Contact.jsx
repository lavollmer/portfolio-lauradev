import React from "react";
import BackgroundOverlay from "../assets/backgroundimageoverlay.svg";

const Contact = () => {
  return (
    <div className="flex flex-row relative rounded-lg w-full bg-burnt-sienna bg-opacity-60 font-jost p-20 landing-container">
      <div
        className="absolute inset-0 bg-cover bg-center z-10"
        style={{ backgroundImage: `url(${BackgroundOverlay})` }}
      ></div>
      <div className="flex flex-col relative z-20 p-10 space-y-10">
        <div>
          <h1 className="text-white text-6xl font-bold">
            Let's talk about your new project or job opportunity
          </h1>
        </div>
        <div>
          <p className="text-xl">Contact me by sending a message on LinkedIn</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
