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
  githubCode,
  livesite,
  keyfeatureOne,
  keyfeatureTwo,
  keyfeatureThree,
  keyfeatureFour,
  mobileImage
}) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg bg-white overflow-hidden md:w-[300px] md:h-[300px]  lg:w-[500px] lg:h-[600px] m-4">
      <div className="h-48 w-full">
      <img
          src={image}
          srcSet={`${mobileImage} 600w, ${image} 1200w`} 
          sizes="(max-width: 600px) 100vw, 50vw" 
          alt={imageDesc}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col p-8">
        <div>
          <h2 className="text-black md:text-3xl text-md font-semibold">
            {title}
          </h2>
          <p className="text-black mt-2 text-sm md:text-md">{content}</p>
          <div>
            <h3 className="text-gray-700 mt-2 text-sm md:text-md font-bold">
              Key Features
            </h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 text-sm md:text-md">
            <li>{keyfeatureOne}</li>
            <li>{keyfeatureTwo}</li>
            <li>{keyfeatureThree}</li>
            <li>{keyfeatureFour}</li>
          </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row text-left items-center space-y-2 md:space-y-0 md:space-x-6 mt-2">
          <p className="text-gray-700 mt-2 text-sm md:text-md font-bold">{skillOne}</p>
          <p className="text-gray-700 mt-2 text-sm md:text-md font-bold">{skillTwo}</p>
          <p className="text-gray-700 mt-2 text-sm md:text-md font-bold">{skillThree}</p>
          <p className="text-gray-700 mt-2 text-sm md:text-md font-bold">{skillFour}</p>
        </div>
        <div className="flex flex-col text-sm items-center md:text-md md:flex-row space-y-2 md:space-y-0 md:space-x-4 card-links pt-4">
          {githubCode && (
            <a
              href={githubCode}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-royal-blue hover:animate-pulse"
            >
              GitHub Code
            </a>
          )}
          {livesite && (
            <a
              href={livesite}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-royal-blue hover:animate-pulse"
            >
              Live Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
