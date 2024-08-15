import React from "react";
import Logo from "../assets/logo2.png";
import CloseIcon from "../assets/icon-close.svg";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { SiFrontendmentor } from "react-icons/si";
import { useState } from "react";

const SideNav = () => {
  //set state to false for close button
  const [close, setClose] = useState(false);

  //function to close the side nav
  const handleClose = () => {
    //set the state to the opposite of the current state to true
    setClose(!close);
    console.log("clicked");
    return;
  };

  //if close is true, return null
  if (close) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col font-rubik text-white bg-redwood bg-opacity-90 top-0 left-0 p-8">
      <div className="flex flex-row justify-between p-6">
        <div>
          <h1 className="text-lg font-semibold">Laura Vollmer</h1>
        </div>
        <div>
          <button onClick={handleClose}>
            <img src={CloseIcon} alt="close" />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 text-xl">
        <div className="w-full border-t border-white p-4">
          <h1 className="flex flex-row items-center justify-center">
            FEATURES
          </h1>
        </div>
        <div className="w-full border-t border-white p-4">
          <h1 className="flex flex-row items-center justify-center">ABOUT</h1>
        </div>
        <div className="w-full border-t border-b border-white p-4">
          <h1 className="flex flex-row items-center justify-center">
            PROJECTS
          </h1>
        </div>
        <div className="flex flex-col w-full m-10 p-6">
          <button className="border border-white rounded-lg py-2">
            CONTACT
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-4">
        <a
          href="https://www.linkedin.com/in/lvollmer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin
            size={26}
            className="md:text-6xl hover:text-customColor hover:scale-110 transition duration-100"
          />
        </a>
        <a
          href="https://github.com/lavollmer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare
            size={24}
            className="md:text-6xl hover:text-customColor hover:scale-110 transition duration-100"
          />
        </a>
        <a
          href="https://www.frontendmentor.io/profile/lavollmer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiFrontendmentor
            size={24}
            className="md:text-6xl hover:text-customColor hover:scale-110 transition duration-100"
          />
        </a>
      </div>
    </div>
  );
};

export default SideNav;
