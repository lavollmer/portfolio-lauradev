import React from "react";
import imageComputer from "../assets/computer-image.jpg";
import BackgroundOverlay from "../assets/backgroundimageoverlay.svg";

const SplashPage = () => {
  return (
    <>
      {/* desktop version */}
      <div className="hidden md:flex bg-burnt-sienna bg-opacity-60 font-jost relative">
        <div className="flex flex-row relative w-full rounded-lg">
          <div className="flex flex-col justify-center p-20 space-y-6  relative">
            {/* Background overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center z-10"
              style={{ backgroundImage: `url(${BackgroundOverlay})` }}
            ></div>
            <div className="relative z-20 space-y-10">
              <div className="flex items-center text-left">
                <h1 className="text-white text-5xl">Hi, I'm Laura!</h1>
              </div>
              <div>
                <p className="text-white text-2xl">
                  A passionate software developer with a love for design and web
                  accessibility.
                </p>
              </div>
              <div>
                <button className="bg-gradient-to-r to-redwood from-burnt-sienna rounded-full text-white cursor-pointer p-4 px-4 hover:from-redwood hover:to-burnt-sienna">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile version */}
      <div className="flex flex-col md:hidden bg-very-light-gray font-jost">
        <div>
          <div className="relative p-40">
            <div>
              <img
                src={imageComputer}
                alt="intro desktop image"
                className="absolute top-0 left-0 w-full object-cover z-20"
              />
              <div
                className="absolute inset-0 bg-cover bg-center z-10"
                style={{ backgroundImage: `url(${BackgroundOverlay})` }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center p-14 space-y-6 mt-20">
            <h1 className="flex flex-col items-center justify-center text-center text-dark-blue text-3xl">
              Next generation of digital banking
            </h1>
            <p className="text-grayish-blue text-md">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <div>
              <button className="bg-gradient-to-r to-blue-400 from-green-400 hover:from-blue-400 hover:to-green-300 rounded-full text-white text-md cursor-pointer py-2 px-4">
                Request Invite
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SplashPage;
