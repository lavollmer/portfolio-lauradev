import React from "react";
import CloseIcon from "../assets/icon-close.svg";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { SiFrontendmentor } from "react-icons/si";
import { Link } from "react-scroll";

const SideNav = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col font-jost text-white bg-redwood dark:bg-gray-900 dark:bg-opacity-90 bg-opacity-90 top-0 left-0 p-8">
      <div className="relative flex flex-row right-0 p-6">
        <div className="absolute top-0 right-0 p-4">
          <button aria-label="close" onClick={onClose}>
            <img src={CloseIcon} alt="close icon" />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-xl">
        <div className="flex flex-col items-center justify-center mt-4 mb-4 text-2xl md:text-4xl">
          <p>Laura Vollmer</p>
        </div>
        <div className="w-full border-t border-white p-4">
          <Link aria-label="Go to projects section" to="projects" smooth={true} duration={500} onClick={onClose} href="#projects">
            <h1 className="flex flex-row items-center justify-center md:text-2xl">
              PROJECTS
            </h1>
          </Link>
        </div>
        <div className="w-full border-t border-white p-4">
          <Link aria-label="Go to skills section" to="skills" smooth={true} duration={500} onClick={onClose} href="#skills">
            <h1 className="flex flex-row items-center justify-center md:text-2xl">
              SKILLS
            </h1>
          </Link>
        </div>
        <div className="w-full border-t border-white p-4">
          <Link aria-label="Go to About section" to="about" smooth={true} duration={500} onClick={onClose} href="#about">
            <h1 className="flex flex-row items-center justify-center md:text-2xl">ABOUT</h1>
          </Link>
        </div>
        <div className="w-full border-t border-white p-4">
          <Link aria-label="Go to Education section" to="education" smooth={true} duration={500} onClick={onClose} href="#education">
            <h1 className="flex flex-row items-center justify-center md:text-2xl">EDUCATION</h1>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center w-full m-10 p-6 hover:border hover:border-white">
          <Link aria-label="Go to Contact section" to="contact" smooth={true} duration={500} onClick={onClose} href="#contact">
            <button aria-label="contact" className="border border-white rounded-lg py-2 px-4 md:py-4 md:px-16 md:font-bold">
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
            size={48}
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
            size={48}
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
            size={48}
            className="md:text-6xl hover:text-customColor hover:scale-110 transition duration-100"
          />
        </a>
      </div>
    </div>
  );
};

export default SideNav;
