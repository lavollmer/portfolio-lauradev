import React from "react";
import { FaGithubSquare } from "react-icons/fa";

const ProjectsCard = ({
  title,
  content,
  image,
  imageDesc,
  skillOne,
  skillTwo,
  skillThree,
  skillFour,
  github,
  livesite,
}) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg bg-white overflow-hidden w-[500px] h-[500px] m-4">
      <div className="h-48 w-full">
        <img
          src={image}
          alt={imageDesc}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col p-8">
        <div>
          <h2 className="text-black md:text-3xl text-lg font-semibold">
            {title}
          </h2>
          <p className="text-black mt-2 text-md">{content}</p>
        </div>
        <div className="flex flex-row text-left items-center space-x-6 font-xl">
          <p className="text-gray-700 mt-2 text-md font-bold">{skillOne}</p>
          <p className="text-gray-700 mt-2 text-md font-bold">{skillTwo}</p>
          <p className="text-gray-700 mt-2 text-md font-bold">{skillThree}</p>
          <p className="text-gray-700 mt-2 text-md font-bold">{skillFour}</p>
        </div>
        <div className="flex flex-row items-center space-x-4">
          <a
            href="https://github.com/lavollmer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-black cursor-pointer">
              <FaGithubSquare size={20} />
              Github Code
            </button>
          </a>

          <p>Live Site</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
