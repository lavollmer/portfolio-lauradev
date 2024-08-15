import React from "react";
import imageComputer from "../assets/computer-image.jpg";
import BackgroundOverlay from "../assets/backgroundimageoverlay.svg";

const SplashPage = () => {
  return (
    <>
      {/* desktop version */}
      <div className="hidden md:flex bg-burnt-sienna mt-10 bg-opacity-60 font-jost relative landing-container">
        <div className="flex flex-row relative w-full rounded-lg">
          <div className="flex flex-col justify-center p-20 space-y-6  relative">
            {/* Background overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center z-10"
              style={{ backgroundImage: `url(${BackgroundOverlay})` }}
            ></div>
            <div className="relative z-20 p-20 space-y-8">
              <div className="flex flex-col text-left space-y-8">
                <h1 className="text-white text-6xl font-semibold">
                  Hello, I'm Laura.
                </h1>
                <h1 className="text-white text-6xl font-semibold">
                  I'm a software developer.
                </h1>
                <p className="text-white text-2xl">
                  I have one year of experience in coding, specializing in
                  frontend software development. My background includes
                  healthcare and floral design. I am a fast learner, constantly
                  seeking opportunities to enhance my skills.
                </p>
                <p className="text-white text-2xl">
                  I value teamwork, integrity, creativity and empathy.
                </p>
              </div>
              <div>
                <button className="bg-white rounded-lg text-black text-xl cursor-pointer p-4 px-4 hover:from-redwood hover:to-burnt-sienna">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile version */}
      <div className="flex flex-col mt-6 md:hidden bg-burnt-sienna bg-opacity-60 font-jost relative landing-container">
        <div className="flex flex-col relative w-full rounded-lg">
          <div className="flex flex-col justify-center space-y-2  relative">
            {/* Background overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center z-10"
              style={{ backgroundImage: `url(${BackgroundOverlay})` }}
            ></div>
            <div className="relative z-20 p-6 space-y-8">
              <div className="flex flex-col text-left space-y-8">
                <h1 className="text-white text-xl font-semibold">
                  Hello, I'm Laura.
                </h1>
                <h1 className="text-white text-xl font-semibold">
                  I'm a software developer.
                </h1>
                <p className="text-white text-md">
                  I have one year of experience in coding, specializing in
                  frontend software development. My background includes
                  healthcare and floral design. I am a fast learner, constantly
                  seeking opportunities to enhance my skills.
                </p>
                <p className="text-white text-md">
                  I value teamwork, integrity, creativity and empathy.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <button className="bg-white rounded-lg text-black text-md cursor-pointer p-4 px-4 hover:from-redwood hover:to-burnt-sienna">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SplashPage;
