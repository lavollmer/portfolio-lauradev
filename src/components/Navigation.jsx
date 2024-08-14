import React from "react";
import { IoMdFlower } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

const Navigation = () => {
  return (
    <>
      <div className="flex flex-row bg-air-superiority-blue text-lg text-white justify-between">
        <div>
          <IoMdFlower />
        </div>
        <div className="flex flex-row justify-evenly space-x-10">
          <p>About</p>
          <p>Projects</p>
          <p>Contact</p>
        </div>
        <div className="flex flex-row items-center">
          <FaLinkedin />
          <FaSquareGithub />
        </div>
      </div>
    </>
  );
};

export default Navigation;
