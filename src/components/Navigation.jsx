import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/logo.png";

const Navigation = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center bg-transparent fixed w-full top-0 left-0 z-10 text-xl text-white font-public-sans">
        <div className="flex flex-row justify-between w-full max-w-screen-lg px-4">
          <div className="flex flex-row items-center">
            <img src={Logo} alt="flower Logo" className="h-10 w-70" />
            <h1>LAURA VOLLMER</h1>
          </div>
          <div>
            <ul className="flex flex-row space-x-4">
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <FaLinkedin />
            <FaSquareGithub />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
