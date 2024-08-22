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
          <button
            aria-label="menu icon"
            onClick={toggleSideNav}
            className="p-2"
          >
            <img src={HamburgerIcon} alt="menu icon" className="h-5 w-5" />
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
        <div className="hover:border-b-2 hover:border-burnt-sienna">
            <Link
              aria-label="Go to Skills Section"
              to="skills"
              smooth={true}
              duration={500}
              href="#skills"
            >
              <h1>Skills</h1>
            </Link>
          </div>
          <div className="hover:border-b-2 hover:border-burnt-sienna">
            <Link
              aria-label="Go to Projects Section"
              to="projects"
              smooth={true}
              duration={500}
              href="#projects"
            >
              <h1>Projects</h1>
            </Link>
          </div>
          <div className="hover:border-b-2 hover:border-burnt-sienna">
            <Link
              aria-label="Go to About Section"
              to="about"
              smooth={true}
              duration={500}
              href="#about"
            >
              <h1>About</h1>
            </Link>
          </div>
          <div className="hover:border-b-2 hover:border-burnt-sienna">
            <Link
              aria-label="Got to Contact Section"
              to="contact"
              smooth={true}
              duration={500}
              href="#contact"
            >
              <h1>Contact</h1>
            </Link>
          </div>
        </div>
        <div className="space-x-6">
          <a
            href="https://www.linkedin.com/in/lvollmer/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Go to Laura Dev Linkedin Profile"
          >
            <button
              aria-label="linkedin"
              className="hover:animate-bounce bg-gradient-to-r to-redwood from-burnt-sienna rounded-full text-white cursor-pointer p-4 px-4 hover:from-redwood hover:to-burnt-sienna"
            >
              <FaLinkedin size={20} />
            </button>
          </a>
          <a
            href="https://github.com/lavollmer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Go to Laura Dev Github Profile"
          >
            <button
              aria-label="github"
              className="hover:animate-bounce bg-gradient-to-r to-redwood from-burnt-sienna rounded-full text-white cursor-pointer p-4 px-4  hover:from-redwood hover:to-burnt-sienna"
            >
              <FaGithubSquare size={20} />
            </button>
          </a>
          <a
            href="https://www.frontendmentor.io/profile/lavollmer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Go to Laura Dev Frontend Mentor Profile"
          >
            <button
              aria-label="frontend mentor"
              className="hover:animate-bounce bg-gradient-to-r to-redwood from-burnt-sienna rounded-full text-white cursor-pointer p-4 px-4 hover:from-redwood hover:to-burnt-sienna"
            >
              <SiFrontendmentor size={20} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
