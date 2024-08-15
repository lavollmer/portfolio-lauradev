import React from "react";
import { useState } from "react";
import Logo from "../assets/logo.png";
import SideNavBar from "./SideNav";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

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
      <div className="md:hidden flex flex-row fixed top-0 z-20 w-full justify-between items-center p-6 bg-white">
        <div>
          <img src={Logo} alt="Flower logo" />
        </div>
        {/* hamburger button click */}
        <div>
          <button onClick={handleOnClick}>
            <img
              src={isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
              alt="menu icon"
            />
          </button>
        </div>
      </div>
      <div className="flex flex-col">{isOpen && <SideNavBar />}</div>
      <div className="hidden md:flex flex-row fixed top-0 z-20 w-full justify-between items-center bg-white font-public-sans p-8">
        <div>
          <img src={Logo} alt="Easybank logo" />
        </div>
        <div className="flex flex-row space-x-6 text-grayish-blue cursor-pointer">
          <h1 className="hover:border-b-2 hover:border-lime-green">About</h1>
          <h1 className="hover:border-b-2 hover:border-lime-green">Projects</h1>
          <h1 className="hover:border-b-2 hover:border-lime-green">Contact</h1>
        </div>
        <div>
          <button className="bg-gradient-to-r to-blue-400 from-green-400 rounded-full text-white cursor-pointer p-2 px-6 hover:from-blue-400 hover:to-green-300">
            <FaLinkedin />
          </button>
          <button className="bg-gradient-to-r to-blue-400 from-green-400 rounded-full text-white cursor-pointer p-2 px-6 hover:from-blue-400 hover:to-green-300">
            <FaGithubSquare />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
