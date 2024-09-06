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
    <div className="flex flex-col rounded-lg shadow-lg bg-white dark:bg-gray-800 overflow-hidden md:w-[500px] md:h-[700px]  lg:w-[500px] lg:h-[670px] m-4">
      <div className="h-48 w-full relative">
        <picture>
          <source media="(max-width: 600px)" srcSet={mobileImage} />
          <img
            src={image}
            alt={imageDesc}
            className="h-full w-full object-cover"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </picture>
      </div>

      <div className="flex flex-col p-8">
        <div>
          <h2 className="text-black dark:text-white lg:text-3xl text-xl font-semibold">
            {title}
          </h2>
          <p className="text-black dark:text-white mt-2 text-sm md:text-md">
            {content}
          </p>
          <div>
            <h3 className="text-gray-700 dark:text-white mt-2 text-sm md:text-md font-bold">
              Key Features
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-white mt-2 text-sm lg:text-md">
              <li>{keyfeatureOne}</li>
              <li>{keyfeatureTwo}</li>
              <li>{keyfeatureThree}</li>
              <li>{keyfeatureFour}</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-gray-700 dark:text-white mt-2 text-sm md:text-md font-bold">
            Tech Stack
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-white mt-2 text-sm lg:text-md">
            <li>{skillOne}</li>
            <li>{skillTwo}</li>
            <li>{skillThree}</li>
            <li>{skillFour}</li>
          </ul>
        </div>
        <div className="flex flex-col text-md items-center md:text-lg pt-4">
          <div className="flex flex-col justify-center items-center space-y-4 md:space-y-0 md:flex-row md:justify-start md:space-x-4 font-semibold">
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
                  <p className="font-bold text-md md:text-lg">Github Code</p>
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
                  <p className="font-bold text-md md:text-lg">Live Site</p>
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
