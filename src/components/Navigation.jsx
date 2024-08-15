import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/logo.png";

const Navigation = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center bg-white fixed w-full top-0 left-0 z-10 text-xl text-black font-public-sans">
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row items-center space-x-4">
            <img src={Logo} alt="flower Logo" className="h-32 w-32" />
            <h1 className="font-bold">LAURA VOLLMER</h1>
            <ul className="flex flex-row space-x-6">
              <li>ABOUT</li>
              <li>PROJECTS</li>
              <li>CONTACT</li>
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
