import React from "react";
import Logo from "../assets/logo2.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { FaL } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-20 p-4 items-center text-white font-jost justify-center space-y-8 md:space-y-0 bg-black">
      <button>HOME</button>
      <button>PROJECTS</button>
      <button>ABOUT</button>
      <button>CONTACT</button>

      <div className="flex flex-row space-x-2 md:space-x-6">
      <a
            href="https://www.linkedin.com/in/lvollmer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gradient-to-r to-redwood from-burnt-sienna rounded-full text-white cursor-pointer p-4 px-4 hover:from-redwood hover:to-burnt-sienna">
              <FaLinkedin size={18} />
            </button>
          </a>
          <a
            href="https://github.com/lavollmer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gradient-to-r to-redwood from-burnt-sienna rounded-full text-white cursor-pointer p-4 px-4  hover:from-redwood hover:to-burnt-sienna">
              <FaGithubSquare size={18} />
            </button>
          </a>
          <a
            href="https://www.frontendmentor.io/profile/lavollmer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gradient-to-r to-redwood from-burnt-sienna rounded-full text-white cursor-pointer p-4 px-4 hover:from-redwood hover:to-burnt-sienna">
              <SiFrontendmentor size={18} />
            </button>
          </a>
      </div>
    </div>
  );
};

export default Footer;
