import React from "react";
import { useState } from "react";
import Logo from "../assets/logo2.png";
import SideNavBar from "./Sidenav";
import CloseIcon from "../assets/icon-close.svg";
import HamburgerIcon from "../assets/icon-hamburger.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  const closeSideNavBar = () => {
    setIsOpen(false);
  };

  return (
    <div className="font-public-sans">
      <div className="md:hidden flex flex-row fixed top-0 z-20 w-full justify-between items-center p-10 bg-white">
        <div>
          <img src={Logo} alt="Flower logo" className="h-5 w-5" />
        </div>
        {/* hamburger button click */}
        <div>
          <button onClick={handleOnClick}>
            <img
              src={isOpen ? CloseIcon : HamburgerIcon}
              alt="menu icon"
            />
          </button>
        </div>
      </div>
      <div className="flex flex-col">{isOpen && <SideNavBar />}</div>
      <div className="hidden md:flex flex-row fixed top-0 left-0 z-20 w-full justify-between items-center bg-white font-public-sans p-16">
        <div className="flex flex-row items-center justify-center space-x-2">
          <img src={Logo} alt="Flower logo" className="h-10 w-12" />
          <h1 className="text-black font-semibold text-3xl">LAURA VOLLMER</h1>
        </div>
        <div className="flex flex-row space-x-6 text-grayish-blue cursor-pointer text-xl">
          <h1 className="hover:border-b-2 hover:border-burnt-sienna">About</h1>
          <h1 className="hover:border-b-2 hover:border-burnt-sienna">
            Projects
          </h1>
          <h1 className="hover:border-b-2 hover:border-burnt-sienna">
            Contact
          </h1>
        </div>
        <div className="space-x-6">
          <button className="bg-gradient-to-r to-redwood from-burnt-sienna rounded-full text-white cursor-pointer p-4 px-4 hover:from-redwood hover:to-burnt-sienna">
            <FaLinkedin size={24} />
          </button>
          <button className="bg-gradient-to-r to-redwood from-burnt-sienna rounded-full text-white cursor-pointer p-4 px-4  hover:from-redwood hover:to-burnt-sienna">
            <FaGithubSquare size={24} />
          </button>
          <button className="bg-gradient-to-r to-redwood from-burnt-sienna rounded-full text-white cursor-pointer p-4 px-4 hover:from-redwood hover:to-burnt-sienna">
            <SiFrontendmentor size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
