import React from "react";
import { useState } from "react";
import Logo from "../assets/logo2.png";
import SideNavBar from "./Sidenav";
import HamburgerIcon from "../assets/icon-hamburger.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { Link } from "react-scroll";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="font-jost">
      <div className="md:hidden fixed top-0 z-20 w-full flex flex-row justify-between items-center bg-white p-4">
        <div className="flex flex-row items-center justify-center space-x-2">
          <img src={Logo} alt="Flower logo" className="h-6 w-7" />
          <h1 className="font-semibold text-lg">LAURA VOLLMER</h1>
        </div>
        {/* hamburger button click */}
        <div className="flex-shrink-0">
          <button onClick={toggleSideNav} className="p-2">
            <img src={HamburgerIcon} alt="menu icon" className="h-4 w-4" />
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
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </h1>
          <h1 className="hover:border-b-2 hover:border-burnt-sienna">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </h1>
          <h1 className="hover:border-b-2 hover:border-burnt-sienna">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
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
