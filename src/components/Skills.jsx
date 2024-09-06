import React from "react";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <div className="flex flex-col text-jost p-10 space-y-6 md:space-y-8 lg:space-y-10 md:p-20 md:mt-10 md:space-x-2 rounded-lg">
      <div className="p-10">
        <hr />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center pb-10">
        <h1 className="text-black dark:text-white text-3xl md:text-4xl lg:text-5xl">Technical Skills</h1>
      </div>
      <div className="flex flex-col items-center w-full justify-center lg:justify-evenly md:space-y-6 lg:space-y-10 ">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full flex-wrap lg:space-x-4 space-y-6 lg:space-y-0">
          <SkillsCard
            title="React"
            content="1 year of experience with React. I have built multiple projects using React, including this website."
          />
          <SkillsCard
            title="Tailwind CSS"
            content="1 year of experience with Tailwind CSS. I have built multiple projects using Tailwind CSS, including this website."
          />
          <SkillsCard title="JavaScript" content="1 year of experience" />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center w-full mt-4 md:mt-0 lg:flex-row lg:space-x-4 space-y-6 lg:space-y-0">
          <SkillsCard title="HTML" content="1 year of experience" />
          <SkillsCard title="CSS" content="1 year of experience" />
          <SkillsCard title="Web Accessibility" content="1 year of experience" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
