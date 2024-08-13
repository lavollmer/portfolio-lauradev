import React from "react";
import { IoMdFlower } from "react-icons/io";

const Navigation = () => {
  return (
    <>
      <div className="flex flex-row bg-air-superiority-blue text-lg items-center text-white">
        <div>
          <IoMdFlower />
        </div>
        <div className="flex flex-row justify-evenly space-x-10">
          <p>About</p>
          <p>Projects</p>
          <p>Contact</p>
        </div>
      </div>
    </>
  );
};

export default Navigation;
