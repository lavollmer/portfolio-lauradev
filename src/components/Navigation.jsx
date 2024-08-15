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

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="font-jost">
      <div className="md:hidden flex flex-row md:fixed top-0 z-20 w-full justify-between items-center md:pl-10 md:pr-10 bg-white md:mt-20 mt-10">
        <div className="flex flex-row items-center justify-center space-x-2">
          <img src={Logo} alt="Flower logo" className="h-6 w-7" />
          <h1 className="font-semibold text-lg">LAURA VOLLMER</h1>
        </div>
        {/* hamburger button click */}
        <div>
          <button onClick={toggleSideNav}>
            <img src={HamburgerIcon} alt="menu icon" />
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        {isOpen && <SideNavBar onClose={toggleSideNav} />}
      </div>
      <div className="hidden md:flex flex-row top-0 left-0 z-20 w-full justify-between items-center bg-white font-jost">
        <div className="flex flex-row items-center justify-center space-x-2">
          <img src={Logo} alt="Flower logo" className="h-10 w-12" />
          <h1 className="text-black font-semibold text-2xl">LAURA VOLLMER</h1>
        </div>
        <div className="flex flex-row space-x-6 cursor-pointer text-xl">
          <h1 className="hover:border-b-2 hover:border-burnt-sienna">
            Projects
          </h1>
          <h1 className="hover:border-b-2 hover:border-burnt-sienna">About</h1>
          <h1 className="hover:border-b-2 hover:border-burnt-sienna">
            Contact
          </h1>
        </div>
        <div className="space-x-6">
          <a
            href="https://www.linkedin.com/in/lvollmer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="hover:animate-bounce bg-gradient-to-r to-redwood from-burnt-sienna rounded-full text-white cursor-pointer p-4 px-4 hover:from-redwood hover:to-burnt-sienna">
              <FaLinkedin size={20} />
            </button>
          </a>
          <a
            href="https://github.com/lavollmer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="hover:animate-bounce bg-gradient-to-r to-redwood from-burnt-sienna rounded-full text-white cursor-pointer p-4 px-4  hover:from-redwood hover:to-burnt-sienna">
              <FaGithubSquare size={20} />
            </button>
          </a>
          <a
            href="https://www.frontendmentor.io/profile/lavollmer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="hover:animate-bounce bg-gradient-to-r to-redwood from-burnt-sienna rounded-full text-white cursor-pointer p-4 px-4 hover:from-redwood hover:to-burnt-sienna">
              <SiFrontendmentor size={20} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
