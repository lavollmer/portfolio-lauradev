import React from "react";
import Logo from "../assets/logo2.png";
import CloseIcon from "../assets/icon-close.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
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
    <div className="fixed inset-0 z-50 flex flex-col font-rubik text-white bg-very-dark-blue bg-opacity-95 top-0 left-0 p-8">
      <div className="flex flex-row justify-between p-10">
        <div>
          <img src={BookmarkWhiteImage} alt="Logo" className="h-10 w-40" />
        </div>
        <div>
          <button onClick={handleClose}>
            <img src={CloseIcon} alt="close" />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-2 text-2xl">
        <div className="w-full border-t border-white p-4">
          <h1 className="flex flex-row items-center justify-center">
            FEATURES
          </h1>
        </div>
        <div className="w-full border-t border-white p-4">
          <h1 className="flex flex-row items-center justify-center">PRICING</h1>
        </div>
        <div className="w-full border-t border-b border-white p-4">
          <h1 className="flex flex-row items-center justify-center">CONTACT</h1>
        </div>
        <div className="flex flex-col w-full m-10 p-6">
          <button className="border border-white rounded-lg py-2">LOGIN</button>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-8 mt-60">
        <FaLinkedin />
        <FaGithubSquare />
        <SiFrontendmentor />
      </div>
    </div>
  );
};

export default SideNav;
