import React from "react";
import { useState } from "react";
import Logo from "../assets/logo2.png";
import SideNavBar from "./Sidenav";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navigation = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`font-jost ${theme === "dark" ? "dark" : ""}`}>
      <div className="lg:hidden text-black dark:text-white top-0 z-20 w-full flex flex-row justify-between items-center p-4">
        <div className="flex flex-row items-center justify-center space-x-2">
          <img src={Logo} alt="Flower logo" className="h-6 w-7 rounded-lg" />
          <h1 className="font-semibold text-lg md:text-3xl">LAURA VOLLMER</h1>
        </div>
        <div className="flex items-center font-jost text-black dark:text-white">
          <span className="mr-1 text-xs md:text-2xl text-gray-700 dark:text-gray-300">
            {theme === "light" ? "Light Mode" : "Dark Mode"}
          </span>
          <button
            onClick={toggleTheme}
            aria-label="dark mode icon"
            className={`relative inline-flex items-center h-4 rounded-full w-8 transition-colors duration-300 focus:outline-none ${
              theme === "light" ? "bg-gray-300" : "bg-gray-700"
            }`}
          >
            <span
              className={`inline-block w-2 h-2 transform bg-white rounded-full transition-transform duration-300 ${
                theme === "light" ? "translate-x-1" : "translate-x-6"
              }`}
            />
          </button>
        </div>
        {/* hamburger button click */}
        <div className="flex-shrink-0">
          <button
            aria-label="menu icon"
            onClick={toggleSideNav}
            className={`p-2 ${theme === "dark" ? "text-white" : "text-black"}`}
          >
            <GiHamburgerMenu size={24} />
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        {isOpen && <SideNavBar onClose={toggleSideNav} />}
      </div>
      <div className="hidden lg:flex lg:flex-row top-0 left-0 z-20 w-full justify-between items-center font-jost">
        <div className="flex flex-row items-center justify-center space-x-2">
          <img src={Logo} alt="Flower logo" className="h-10 w-12 rounded-lg" />
          <h1 className="text-black dark:text-white font-semibold md:text-lg lg:text-2xl">
            LAURA VOLLMER
          </h1>
        </div>
        <div className="flex flex-row space-x-8 cursor-pointer text-xl text-black dark:text-white">
          <div className="hover:border-b-2 hover:border-burnt-sienna">
            <Link
              aria-label="Go to Skills Section"
              to="skills"
              smooth={true}
              duration={500}
              href="#skills"
            >
              <h1 className="text-base md:text-lg">Skills</h1>
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
              <h1 className="text-base md:text-lg">Projects</h1>
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
              <h1 className="text-base md:text-lg">About</h1>
            </Link>
          </div>
          <div className="hover:border-b-2 hover:border-burnt-sienna">
            <Link
              aria-label="Go to Education Section"
              to="education"
              smooth={true}
              duration={500}
              href="#education"
            >
              <h1 className="text-base md:text-lg">Education</h1>
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
              <h1 className="text-base md:text-lg">Contact</h1>
            </Link>
          </div>
        </div>
        <div className="flex flex-row space-x-2 md:space-x-8">
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
              className="hover:animate-bounce bg-gradient-to-r to-redwood from-burnt-sienna rounded-full text-white cursor-pointer p-2 px-2 md:p-4 md:px-4 hover:from-redwood hover:to-burnt-sienna"
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
              className="hover:animate-bounce bg-gradient-to-r to-redwood from-burnt-sienna rounded-full text-white cursor-pointer p-2 px-2 md:p-4 md:px-4 hover:from-redwood hover:to-burnt-sienna"
            >
              <SiFrontendmentor size={20} />
            </button>
          </a>

          <div className="flex items-center font-jost text-black dark:text-white">
            <span className="mr-2 text-sm text-gray-700 dark:text-gray-300">
              {theme === "light" ? "Light Mode" : "Dark Mode"}
            </span>
            <button
              onClick={toggleTheme}
              aria-label="dark mode"
              className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 focus:outline-none ${
                theme === "light" ? "bg-gray-300" : "bg-gray-700"
              }`}
            >
              <span
                className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ${
                  theme === "light" ? "translate-x-1" : "translate-x-6"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
