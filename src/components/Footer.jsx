import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-20 p-4 items-center text-white dark:text-black font-jost justify-center space-y-8 lg:space-y-0 bg-black dark:bg-white mt-20">
      <div className="flex flex-col items-center justify-center lg:flex-row lg:space-x-10 space-x-0 space-y-4 lg:space-y-0 text-lg md:text-2xl lg:text-xl">
        <Link aria-label="Return to home" to="navigation" smooth={true} duration={500} href="#home">
          <button aria-label="home">HOME</button>
        </Link>
        <Link aria-label="Return to Projects" to="projects" smooth={true} duration={500} href="#projects">
          <button aria-label="projects">PROJECTS</button>
        </Link>
        <Link aria-label="Return to About" to="about" smooth={true} duration={500} href="#about">
          <button aria-label="about">ABOUT</button>
        </Link>
        <Link aria-label="Return to Contact" to="contact" smooth={true} duration={500} href="#contact">
          <button aria-label="contact">CONTACT</button>
        </Link>
      </div>
      <div className="flex flex-row space-x-2 lg:space-x-6">
        <a
          href="https://www.linkedin.com/in/lvollmer/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go to Laura Dev Linkedin Profile"
        >
          <button aria-label="linkedin" className="hover:animate-bounce bg-gradient-to-r to-redwood from-burnt-sienna rounded-full text-white cursor-pointer p-4 px-4 hover:from-redwood hover:to-burnt-sienna">
            <FaLinkedin size={24} />
          </button>
        </a>
        <a
          href="https://github.com/lavollmer"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go to Laura Dev Github Profile"
        >
          <button aria-label="github" className="hover:animate-bounce bg-gradient-to-r to-redwood from-burnt-sienna rounded-full text-white cursor-pointer p-4 px-4  hover:from-redwood hover:to-burnt-sienna">
            <FaGithubSquare size={24} />
          </button>
        </a>
        <a
          href="https://www.frontendmentor.io/profile/lavollmer"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go to Laura Dev Frontend Mentor Profile"
        >
          <button aria-label="frontend mentor" className="hover:animate-bounce bg-gradient-to-r to-redwood from-burnt-sienna rounded-full text-white cursor-pointer p-4 px-4 hover:from-redwood hover:to-burnt-sienna">
            <SiFrontendmentor size={24} />
          </button>
        </a>
      </div>
      <div className="text-center mt-4 lg:mt-0 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Laura Vollmer. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
