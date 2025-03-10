import React from "react";
import BackgroundOverlay from "../../public/backgroundimageoverlay.svg";
import Arrow from "../assets/icon-arrow.svg";
import { Link } from "react-scroll";

const SplashPage = () => {
  return (
    <>
      {/* desktop version */}
      <div className="hidden lg:flex bg-burnt-sienna dark:bg-teracotta bg-opacity-60 mt-10 font-jost relative landing-container">
        <div className="flex flex-row relative w-full rounded-lg">
          <div className="flex flex-col justify-center p-20 space-y-6  relative">
            {/* Background overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center z-10"
              style={{ backgroundImage: `url(/backgroundimageoverlay.svg)` }}
            ></div>
            <div className="relative z-20 p-20 space-y-8">
              <div className="flex flex-col text-left space-y-8">
                <h1 className="text-black dark:text-white text-6xl font-semibold">
                  Hello, I'm Laura.
                </h1>
                <h1 className="text-black dark:text-white text-6xl font-semibold">
                  I'm a software developer.
                </h1>
                <p className="text-black dark:text-white text-2xl pr-80">
                  I have one year of experience in coding, specializing in
                  frontend software development. My background includes
                  healthcare and floral design. I am a fast learner, constantly
                  seeking opportunities to enhance my skills.
                </p>
                <p className="text-black dark:text-white text-2xl">
                  I value teamwork, integrity, creativity and empathy.
                </p>
              </div>
              <div>
                <Link
                  aria-label="Go to Learn More about Laura Dev"
                  to="skills"
                  smooth={true}
                  duration={500}
                  href="#learnmore"
                >
                  <button
                    aria-label="learn more"
                    className="flex flex-row items-center justify-center space-x-2 bg-white animate-bounce rounded-full text-black text-xl cursor-pointer p-4 px-4 hover:from-redwood hover:to-burnt-sienna"
                  >
                    <img src={Arrow} alt="arrow" className="text-black" />
                    <p>Learn More</p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile version */}
      <div className="flex flex-col lg:hidden bg-burnt-sienna dark:bg-teracotta bg-opacity-80 font-jost relative landing-container md:mt-10">
        <div className="flex flex-col relative w-full rounded-lg">
          <div className="flex flex-col justify-center space-y-2  relative">
            {/* Background overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center z-10"
              style={{ backgroundImage: `url(/backgroundimageoverlay.svg)` }}
            ></div>
            <div className="relative z-20 p-6 md:p-20 space-y-8">
              <div className="flex flex-col text-left space-y-8 md:space-y-4">
                <h1 className="text-black dark:text-white text-xl md:text-4xl font-semibold">
                  Hello, I'm Laura.
                </h1>
                <h1 className="text-black dark:text-white text-xl font-semibold md:text-4xl">
                  I'm a software developer.
                </h1>
                <p className="text-black dark:text-white text-md md:text-xl">
                  I have one year of experience in coding, and continue to build my skills. My background includes
                  healthcare and floral design. I am a fast learner, constantly
                  seeking opportunities to enhance my skills.
                </p>
                <p className="text-black dark:text-white text-md md:text-xl">
                  I value teamwork, integrity, creativity and empathy.
                </p>
              </div>
              <div className="flex flex-row items-center justify-center">
                <button
                  aria-label="learn more"
                  className="flex flex-row items-center justify-center space-x-4 bg-white animate-bounce rounded-full text-black cursor-pointer p-6 px-8 hover:from-redwood hover:to-burnt-sienna"
                >
                  <Link
                    to="skills"
                    smooth={true}
                    duration={500}
                    href="#learnmore"
                    className="flex flex-row justify-center items-center space-x-2"
                  >
                    <img src={Arrow} alt="arrow" className="text-black h-2 w-3 md:h-3 md:w-4" />
                    <p className="text-md md:text-lg">Learn More</p>
                  </Link>
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
