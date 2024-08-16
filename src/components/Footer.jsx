import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-20 p-4 items-center text-white font-jost justify-center space-y-8 md:space-y-0 bg-black mt-20">
      <Link to="navigation" smooth={true} duration={500}>
        <button>HOME</button>
      </Link>
      <Link to="projects" smooth={true} duration={500}>
        <button>PROJECTS</button>
      </Link>
      <Link to="about" smooth={true} duration={500}>
        <button>ABOUT</button>
      </Link>
      <Link to="contact" smooth={true} duration={500}>
        <button>CONTACT</button>
      </Link>

      <div className="flex flex-row space-x-2 md:space-x-6">
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
  );
};

export default Footer;
