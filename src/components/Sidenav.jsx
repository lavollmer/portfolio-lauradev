import React from "react";
import CloseIcon from "../assets/icon-close.svg";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { SiFrontendmentor } from "react-icons/si";
import { Link } from "react-scroll";

const SideNav = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col font-jost text-white bg-redwood bg-opacity-90 top-0 left-0 p-8">
      <div className="relative flex flex-row right-0 p-6">
        <div className="absolute top-0 right-0 p-4">
          <button aria-label="close" onClick={onClose}>
            <img src={CloseIcon} alt="close icon" />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-xl">
        <div className="flex flex-col items-center justify-center mt-4 mb-4 text-2xl">
          <p>Laura Vollmer</p>
        </div>
        <div className="w-full border-t border-white p-4">
          <Link aria-label="Go to projects section" to="projects" smooth={true} duration={500} onClick={onClose} href="#projects">
            <h1 className="flex flex-row items-center justify-center ">
              PROJECTS
            </h1>
          </Link>
        </div>
        <div className="w-full border-t border-white p-4">
          <Link aria-label="Go to skills section" to="skills" smooth={true} duration={500} onClick={onClose} href="#skills">
            <h1 className="flex flex-row items-center justify-center ">
              SKILLS
            </h1>
          </Link>
        </div>
        <div className="w-full border-t border-white p-4">
          <Link aria-label="Go to About section" to="about" smooth={true} duration={500} onClick={onClose} href="#about">
            <h1 className="flex flex-row items-center justify-center">ABOUT</h1>
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center w-full m-10 p-6">
          <Link aria-label="Go to Contact section" to="contact" smooth={true} duration={500} onClick={onClose} href="#contact">
            <button aria-label="contact" className="border border-white rounded-lg py-2 px-4">
              CONTACT
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-10">
        <a
          href="https://www.linkedin.com/in/lvollmer/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go to Laura Dev Linkedin Profile"
        >
          <AiFillLinkedin
            size={36}
            className="md:text-6xl hover:text-customColor hover:scale-110 transition duration-100"
          />
        </a>
        <a
          href="https://github.com/lavollmer"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go to Laura Dev Github Profile"
        >
          <FaGithubSquare
            size={36}
            className="md:text-6xl hover:text-customColor hover:scale-110 transition duration-100"
          />
        </a>
        <a
          href="https://www.frontendmentor.io/profile/lavollmer"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go to Laura Dev Frontend Mentor Profile"
        >
          <SiFrontendmentor
            size={36}
            className="md:text-6xl hover:text-customColor hover:scale-110 transition duration-100"
          />
        </a>
      </div>
    </div>
  );
};

export default SideNav;
