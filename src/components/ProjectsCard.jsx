import React from "react";

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
  mobileImage,
}) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg bg-white overflow-hidden md:w-[300px] md:h-[300px]  lg:w-[400px] lg:h-[600px] m-4">
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
          <h2 className="text-black md:text-xl lg:text-2xl text-md font-semibold">
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
        {/* <div className="flex flex-col md:flex-row text-left items-center md:space-y-0 md:space-x-4 mt-2">
          <h3 className="text-gray-700 mt-2 text-sm md:text-md font-bold">Tech Stack</h3>
          <p className="text-gray-700 text-sm md:text-md font-bold">
            {skillOne}
          </p>
          <p className="text-gray-700 mt-2 text-sm md:text-md font-bold">
            {skillTwo}
          </p>
          <p className="text-gray-700 mt-2 text-sm md:text-md font-bold">
            {skillThree}
          </p>
          <p className="text-gray-700 mt-2 text-sm md:text-md font-bold">
            {skillFour}
          </p>
        </div> */}
        <div>
          <h3 className="text-gray-700 mt-2 text-sm md:text-md font-bold">
            Tech Stack
          </h3>
          <ul className="list-disc list-inside text-gray-700 mt-2 text-sm md:text-md">
            <li>{skillOne}</li>
            <li>{skillTwo}</li>
            <li>{skillThree}</li>
            <li>{skillFour}</li>
          </ul>
        </div>
        <div className="flex flex-col text-md items-center md:text-lg md:space-y-0 md:space-x-4 pt-4">
          <div className="flex flex-col justify-center items-center space-y-4 md:flex-row md:justify-start md:space-x-4 font-semibold">
            {githubCode && (
              <a
                href={githubCode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Go to the project's Github Code"
              >
                <button
                  aria-label="Github Code"
                  className="hover:animate-bounce bg-gradient-to-r to-redwood from-burnt-sienna rounded-full text-white cursor-pointer p-4 px-4 hover:from-redwood hover:to-burnt-sienna"
                >
                  <p className="font-bold text-md md:text-2xl">Github Code</p>
                </button>
              </a>
            )}
            {livesite && (
              <a
                href={livesite}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Go to the project's live website"
              >
                <button
                  aria-label="Live Site"
                  className="hover:animate-bounce bg-gradient-to-r to-redwood from-burnt-sienna rounded-full text-white cursor-pointer p-4 px-4 hover:from-redwood hover:to-burnt-sienna"
                >
                  <p className="font-bold text-md md:text-2xl">Live Site</p>
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
